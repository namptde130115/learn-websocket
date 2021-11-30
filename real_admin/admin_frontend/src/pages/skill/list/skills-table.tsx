import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Button, Modal } from "antd";
import { ColumnsType } from "antd/lib/table";
import React, { FC, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { AntTable } from "../../../components";
import { useSkillsContext } from "./state/context";

const SkillsTable: FC = () => {
  const { 
    loading, 
    skills, 
    page, 
    pageSize, 
    search, 
    totalItems, 
    fetchDataCallback, 
    changePagination, 
    deleteSkill,
  } = useSkillsContext();
 
  const handleTableChange = async (
    pagination: any,
    filters: any,
    sorter: any
  ) => {
    if (pagination?.current !== page) {
      changePagination({
        page: pagination?.current,
        pageSize: pagination?.pageSize || 20,
      });
    }
  };

  useEffect(() => {
    if (loading) {
      const params = {
        page,
        pageSize,
        search,
      } as any;
      fetchDataCallback(params);
    }
  }, [loading]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [loading]);

  const columns: ColumnsType<any> = [

    {
      title: "name",
      align: "center",
      width: 400,
      render: (skill) => (
        <span className="blue-text">
          {skill.name}
        </span>
      ),
    },
    {
      title: "action",
      align: "center",
      width: 400,
      render: (skill) => (
        <Button 
        onClick={(e) => {
          e.preventDefault();

          Modal.confirm({
            title: "Delete skill",
            icon: <ExclamationCircleOutlined />,
            content: `Do you want delete skill ${skill.name}`,
            okText: "Delete skill",
            cancelText: "Cancel",
            onOk: async () => {
              deleteSkill(skill._id);
            }
          });
        }}
      >
        Delete
      </Button>
      ),
    },
  ];

  return (
    <AntTable
      loading={loading}
      columns={columns}
      isShowTotal
      dataSource={skills}
      rowKey="_id"
      bordered
      name="List Skill"
      className="hover"
      hasDefaultColumn={false}
      pagination={{
        pageSize: pageSize,
        current: page,
        total: totalItems,
      }}
      onChange={handleTableChange}
     
    />
  );
};

export default SkillsTable;
