import React from "react";
import { Table, Tag, Space } from "antd";
const Solution = () => {
  const columns = [
    {
      title: "답변 ID",
      dataIndex: "sol_id",
    },
    {
      title: "곱셈",
      dataIndex: "factors",
    },
    {
      title: "입력한 값",
      dataIndex: "input_answer",
    },
    {
      title: "정답?",
      dataIndex: "result",
    },
  ];

  const data = [
    {
      key: "1",
      sol_id: "1",
      factors: "2X3",
      input_answer: "New York No. 1 Lake Park",
      result: ["nice", "developer"],
    },
    {
      key: "2",
      sol_id: "2",
      factors: "1X3",
      input_answer: "London No. 1 Lake Park",
      result: ["loser"],
    },
    {
      key: "3",
      sol_id: "3",
      factors: "4X4",
      input_answer: "Sidney No. 1 Lake Park",
      result: ["cool", "teacher"],
    },
  ];
  return (
    <div>
      <p style={{ fontSize: "30px" }}>최근 답안</p>
      <Table columns={columns} dataSource={data} pagination={false} />
    </div>
  );
};

export default Solution;
