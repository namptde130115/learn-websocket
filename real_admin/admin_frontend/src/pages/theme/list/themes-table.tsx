import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Button, Modal } from "antd";
import { ColumnsType } from "antd/lib/table";
import React, { FC, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { AntTable, Message } from "../../../components";
import { useThemesContext } from "./state/context";

const ThemesTable: FC = () => {
  const history = useHistory();
  const { 
    loading, 
    themes, 
    page, 
    pageSize, 
    search, 
    totalItems, 
    fetchDataCallback, 
    changePagination,
    deleteTheme,
   } = useThemesContext();

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
      render: (theme) => (
        <span className="blue-text">
          {theme.name}
        </span>
      ),
    },
    {
      title: "action",
      align: "center",
      width: 400,
      render: (theme) => (
        <Button
          onClick={(e) => {
            e.preventDefault();
            Modal.confirm({
              title: "Delete theme",
              icon: <ExclamationCircleOutlined />,
              content: `Do you want delete theme ${theme.name}`,
              okText: "Delete theme",
              cancelText: "Cancel",
              onOk: async () => {
                const result = await deleteTheme(theme._id);
                if (result?.data?.statusCode == 400) {
                  Message({
                    type: 'error',
                    content: result?.data?.message
                  })
                }
                console.log('result', result);
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
      dataSource={themes}
      rowKey="_id"
      bordered
      name="List Theme"
      className="hover"
      hasDefaultColumn={false}
      pagination={{
        pageSize: pageSize,
        current: page,
        total: totalItems,
        showSizeChanger: false
      }}
      onChange={handleTableChange}

    />
  );
};

export default ThemesTable;
