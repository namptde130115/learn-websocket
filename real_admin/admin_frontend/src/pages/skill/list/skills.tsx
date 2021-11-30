import { Col, Row, Space, Typography } from "antd";
import { PageTopWrapper } from "../../../components";
import { DefaultLayout } from "../../../layout";
import theme from "../../../theme";
import "../style.less";
import SkillsTable from "./skills-table";
import React from "react";
import SearchSkill from "./search-skill";
import AddSkill from "../create";

const Skills = () => {
  return (
    <DefaultLayout title="List Skill">
      <PageTopWrapper
        leftContent={<Typography.Title level={3}>List Skill</Typography.Title>}
        rightContent={<AddSkill />}
      />
      <div style={{ padding: 16 }}>
        <Space style={{ width: "100%" }} direction="vertical">
          <Row justify="space-between" align="middle" gutter={15}>
            <Col style={{ width: "100%" }}>
              <div className="order-header">
                <SearchSkill />
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
          <SkillsTable />
        </Col>
      </Row>
    </DefaultLayout>
  );
};

export default Skills;
