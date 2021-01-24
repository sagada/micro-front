import React, { useState, useEffect } from "react";
import Game from "./components/game/Game";
import "antd/dist/antd.css";
import { Row, Col } from "antd";
function App() {
  return (
    <>
      {/* 제목 */}
      <Row>
        <Col span={24}>
          <div
            style={{ width: "90%", marginTop: "30px", marginBottom: "30px" }}
          >
            <p style={{ textAlign: "center", fontSize: "30px" }}>
              마이크로 서비스 곱셈, 게임화 예제{" "}
            </p>
          </div>
        </Col>
      </Row>
      <Game style={{ margin: "auto" }} />
    </>
  );
}

export default App;
