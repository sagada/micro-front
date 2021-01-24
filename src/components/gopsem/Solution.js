import React, { useState, useEffect } from "react";
import { Table, Tag, Space } from "antd";
const Solution = ({ recentResult }) => {
  const [data, setData] = useState();
  const columns = [
    {
      title: "답변 ID",
      dataIndex: "sol_id",
      key: "sol_id",
    },
    {
      title: "곱셈",
      dataIndex: "factors",
      key: "factors",
    },
    {
      title: "입력한 값",
      dataIndex: "input_answer",
      key: "input_answer",
    },
    {
      title: "정답?",
      dataIndex: "result",
      key: "result",
    },
  ];
  useEffect(() => {}, [data]);
  return (
    <>
      {recentResult == null ? null : (
        <div style={{ width: "60%", margin: "auto" }}>
          <p style={{ fontSize: "30px" }}>최근 답안</p>
          <Table
            columns={columns}
            dataSource={recentResult}
            pagination={false}
          />
        </div>
      )}
    </>
  );
};

export default Solution;
