import { Descriptions } from "antd";
import React, { useState, useEffect } from "react";
const Stat = ({ statInfo }) => {
  useEffect(() => {}, [statInfo]);
  return (
    <>
      {statInfo == null ? null : (
        <div style={{ width: "60%", margin: "auto" }}>
          <Descriptions title="통계" bordered={true} column={1}>
            <Descriptions.Item label="사용자ID">
              {statInfo == null ? null : statInfo.data.userId}
            </Descriptions.Item>
            <Descriptions.Item label="점수">
              {statInfo == null ? null : statInfo.data.score}
            </Descriptions.Item>
            <Descriptions.Item label="배지">
              {statInfo == null ? null : statInfo.data.badgeList.join(" ,")}
            </Descriptions.Item>
          </Descriptions>
        </div>
      )}
    </>
  );
};

export default Stat;
