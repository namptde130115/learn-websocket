import { Col, Row, Space, Typography } from "antd";
import { PageTopWrapper } from "../../../components";
import { DefaultLayout } from "../../../layout";
import theme from "../../../theme";
import "../style.less";
import UsersTable from "./users-table";
import React from "react";
import SearchUser from "./search-user";

const Users = () => {
  return (
    <DefaultLayout title="List User">
      <PageTopWrapper
        leftContent={<Typography.Title level={3}>List Users</Typography.Title>}
        rightContent={<Col></Col>}
      />
      <div style={{ padding: 16 }}>
        <Space style={{ width: "100%" }} direction="vertical">
          <Row justify="space-between" align="middle" gutter={15}>
            <Col style={{ width: "100%" }}>
              <div className="order-header">
                <SearchUser />
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
          <UsersTable />
        </Col>
      </Row>
    </DefaultLayout>
  );
};

export default Users;
