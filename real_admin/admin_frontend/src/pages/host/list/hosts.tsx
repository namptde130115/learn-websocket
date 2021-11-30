import { Col, Row, Space, Typography } from "antd";
import { PageTopWrapper } from "../../../components";
import { DefaultLayout } from "../../../layout";
import theme from "../../../theme";
import "../style.less";
import HostsTable from "./hosts-table";
import React from "react";
import SearchHost from "./search-host";
import AddHost from "../create";

const Hosts = () => {
  return (
    <DefaultLayout title="List Host">
      <PageTopWrapper
        leftContent={<Typography.Title level={3}>List Host</Typography.Title>}
        rightContent={<AddHost />}
      />
      <div style={{ padding: 16 }}>
        <Space style={{ width: "100%" }} direction="vertical">
          <Row justify="space-between" align="middle" gutter={15}>
            <Col style={{ width: "100%" }}>
              <div className="order-header">
                <SearchHost />
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
          <HostsTable />
        </Col>
      </Row>
    </DefaultLayout>
  );
};

export default Hosts;
