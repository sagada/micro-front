import React, { useState, useEffect } from "react";
import { Form, Input, Button, Card, Col, Row } from "antd";
import Stat from "./Stat";
import LeaderBoard from "../gopsem/LeaderBoard";
import Solution from "../gopsem/Solution";
import axios from "axios";
const Game = () => {
  const [representMultiplication, setRepresentMultiplication] = useState("");
  const [answer, setAnswer] = useState("");
  const [fa, setFa] = useState();
  const [fb, setFb] = useState();
  const [isNew, convertIsNew] = useState(false);
  const [userId, setUserId] = useState("");
  const [statInfo, setStatInfo] = useState();
  const [recentResult, setRecentResult] = useState();
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

  const setMultiplicateion = (e) => {
    setFa(e.factorA);
    setFb(e.factorB);
    setRepresentMultiplication(e.factorA + " X " + e.factorB);
  };
  const handleChangeAnswer = (e) => {
    setAnswer(e.target.value);
  };

  const handleChangeUserNickName = (e) => {
    setUserId(e.target.value);
  };

  const answerSubmit = async () => {
    let responseUserId;
    await axios
      .post("http://localhost:8000/api/results", {
        user: { alias: userId },
        multiplication: { factorA: fa, factorB: fb },
        resultAttempt: answer,
      })
      .then(function (result) {
        responseUserId = result.data.user.id;
        if (result.data.correct) {
          alert("정답입니다!");
          convertIsNew(!isNew);
        } else {
          alert("정답이아닙니다.");
        }
      });

    const result = await axios.get(`http://localhost:8000/api/stats`, {
      params: { userId: responseUserId },
    });
    setStatInfo(result);
    console.log(result);

    const ret = await axios.get(`http://localhost:8000/api/results`, {
      params: { alias: userId },
    });

    let o = [];
    for (let i = 0; i < ret.data.length; i++) {
      o.push({
        key: i,
        sol_id: ret.data[i].id,
        factors:
          ret.data[i].multiplication.factorA +
          " X " +
          ret.data[i].multiplication.factorB,
        input_answer: ret.data[i].resultAttempt,
        result: ret.data[i].correct ? "YES" : "NO",
      });
    }
    setRecentResult(o);
    console.log(ret);
  };
  useEffect(() => {
    const getMultiplication = async () => {
      try {
        const result = await axios.get(
          `http://localhost:8000/api/multiplications/random`
        );
        setAnswer();
        setMultiplicateion(result.data);
      } catch (error) {
        console.error("error loadMultiplication");
      }
    };
    getMultiplication();
  }, [isNew, statInfo]);
  return (
    <div>
      <Row style={{ width: "90%", marginBottom: "30px" }}>
        <Col span={8}></Col>
        <Col span={8}>
          <Card title="오늘의 문제">
            <p style={{ fontSize: "30px" }}>{representMultiplication}</p>
          </Card>
        </Col>
        <Col span={8}></Col>
      </Row>

      <Form
        style={{ width: "90%" }}
        {...layout}
        name="basic"
        initialValues={{ remember: true }}
      >
        <Form.Item
          label="답은?"
          name="answer"
          rules={[{ required: true, message: "Please input your Answer!" }]}
        >
          <Input
            size="small"
            style={{ width: "200px" }}
            value={answer}
            onChange={handleChangeAnswer}
          />
        </Form.Item>

        <Form.Item
          label="닉네임"
          name="nickname"
          rules={[{ required: true, message: "Please input your nickname!" }]}
        >
          <Input
            size="small"
            style={{ width: "200px" }}
            onChange={handleChangeUserNickName}
          />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit" onClick={answerSubmit}>
            Submit
          </Button>
        </Form.Item>
      </Form>
      <Row style={{ width: "90%", marginBottom: "30px" }}>
        <Stat statInfo={statInfo} />
      </Row>
      <Row style={{ width: "90%", marginBottom: "30px" }}>
        <LeaderBoard />
      </Row>
      <Row style={{ width: "90%", marginBottom: "30px" }}>
        <Solution recentResult={recentResult} />
      </Row>
    </div>
  );
};

export default Game;
