import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Button, Modal } from "antd";
import { ColumnsType } from "antd/lib/table";
import React, { FC, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { AntTable } from "../../../components";
import { useHostsContext } from "./state/context";

const HostsTable: FC = () => {
  const history = useHistory();
  const { 
    loading, 
    hosts, 
    page, 
    pageSize, 
    search, 
    totalItems, 
    fetchDataCallback, 
    changePagination,
    deleteHost,
   } = useHostsContext();

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
      render: (host) => (
        <span className="blue-text">
          {host.name}
        </span>
      ),
    },
    {
      title: "action",
      align: "center",
      width: 400,
      render: (host) => (
        <Button
          onClick={(e) => {
            e.preventDefault();

            Modal.confirm({
              title: "Delete host",
              icon: <ExclamationCircleOutlined />,
              content: `Do you want delete host ${host.name}`,
              okText: "Delete host",
              cancelText: "Cancel",
              onOk: async () => {
                deleteHost(host._id)
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
      dataSource={hosts}
      rowKey="_id"
      bordered
      name="List Host"
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

export default HostsTable;
