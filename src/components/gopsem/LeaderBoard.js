import { Table, Tag, Space } from "antd";
import React, { useState, useEffect } from "react";
import axios from "axios";
const LeaderBoard = () => {
  const [boardData, setBoardData] = useState();
  useEffect(() => {
    console.log("LeaderBoard useEffect");
    const getBoardData = async () => {
      try {
        const result = await axios.get(`http://localhost:8000/api/leaders`);
        console.log("leaderbadge", result);
        let o = [];
        for (let i = 0; i < result.data.length; i++) {
          o.push({
            key: i,
            totalScore: result.data[i].totalScore,
            userId: result.data[i].userId,
          });
        }
        setBoardData(o);
      } catch (error) {
        console.error("error loadMultiplication");
      }
    };

    getBoardData();
  }, []);
  const columns = [
    {
      title: "사용자 ID",
      dataIndex: "userId",
      key: "userId",
    },
    {
      title: "점수",
      dataIndex: "totalScore",
      key: "totalScore",
    },
  ];

  return (
    <>
      <div style={{ width: "60%", margin: "auto" }}>
        <p style={{ fontSize: "30px" }}>리더보드</p>
        <Table columns={columns} dataSource={boardData} pagination={false} />
      </div>
    </>
  );
};

export default LeaderBoard;
