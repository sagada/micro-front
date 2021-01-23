import React from "react";
import { Table, Tag, Space } from "antd";
const LeaderBoard = () => {
  const columns = [
    {
      title: "사용자 ID",
      dataIndex: "user_id",
    },
    {
      title: "점수",
      dataIndex: "score",
    },
  ];

  const data = [
    {
      key: "1",
      user_id: "John Brown",
      score: 32,
    },
    {
      key: "2",
      user_id: "Jim Green",
      score: 42,
    },
    {
      key: "3",
      user_id: "Joe Black",
      score: 32,
    },
  ];
  return (
    <div style={{ marginBottom: "100px" }}>
      <p style={{ fontSize: "30px" }}>리더보드</p>
      <Table columns={columns} dataSource={data} pagination={false} />
    </div>
  );
};

export default LeaderBoard;
