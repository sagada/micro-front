import React from "react";
import { Descriptions } from "antd";
const Stat = () => {
  return (
    <div style={{ width: "60%", margin: "auto" }}>
      <Descriptions title="통계" bordered={true} column={1}>
        <Descriptions.Item label="사용자ID">Cloud Database</Descriptions.Item>
        <Descriptions.Item label="점수">Prepaid</Descriptions.Item>
        <Descriptions.Item label="배지">YES</Descriptions.Item>
      </Descriptions>
    </div>
  );
};

export default Stat;
