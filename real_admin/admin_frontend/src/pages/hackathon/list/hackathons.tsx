import { Col, Row, Space, Typography } from "antd";
import { PageTopWrapper } from "../../../components";
import { DefaultLayout } from "../../../layout";
import theme from "../../../theme";
import "../style.less";
import HackathonsTable from "./hackathons-table";
import React from "react";
import SearchHackathon from "./search-hackathon";

const Hackathons = () => {
  return (
    <DefaultLayout title="List Hackathon">
      <PageTopWrapper
        leftContent={<Typography.Title level={3}>List Hackathon</Typography.Title>}
        rightContent={<Col></Col>}
      />
      <div style={{ padding: 16 }}>
        <Space style={{ width: "100%" }} direction="vertical">
          <Row justify="space-between" align="middle" gutter={15}>
            <Col style={{ width: "100%" }}>
              <div className="order-header">
                <SearchHackathon />
              </div>
            </Col>
          </Row>
        </Space>
      </div>

      <Row
        style={{
          paddingLeft: theme.spacing.m,
          paddingRight: theme.spacing.m,
        }}
      >
        <Col span={24}>
          <HackathonsTable />
        </Col>
      </Row>
    </DefaultLayout>
  );
};

export default Hackathons;
