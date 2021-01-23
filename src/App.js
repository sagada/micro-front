import Game from "./components/game/Game";
import "antd/dist/antd.css";
import { Row, Col } from "antd";
import Gop from "./components/gopsem/Gop";
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
      {/* 곱셈 및 보드 */}
      <Row style={{ marginTop: "100px" }}>
        <Col span={12}>
          <Game style={{ margin: "auto" }} />
        </Col>
        <Gop />

        <Col span={12}>데헷</Col>
      </Row>
    </>
  );
}

export default App;
