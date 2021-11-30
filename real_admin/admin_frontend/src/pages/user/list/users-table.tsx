import { Button } from "antd";
import { ColumnsType } from "antd/lib/table";
import React, { FC, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { AntTable } from "../../../components";
import { useUsersContext } from "./state/context";

const UsersTable: FC = () => {
  const history = useHistory();
  const { loading, users, page, pageSize, search, totalItems, fetchDataCallback, changePagination, enableUser, disableUser } = useUsersContext();
  const domain = process.env.REACT_APP_DOMAIN;

  const _enableUser = (userId: string) => {
    enableUser(userId);
  }

  const _disableUser = (userId: string) => {
    disableUser(userId);
  }

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
      title: "email",
      align: "center",
      width: 400,
      render: (user) => (
        <span className="blue-text">
          {user.email}
        </span>
      ),
    },
    {
      title: "username",
      render: (user: any) => (
        <span className="blue-text">
          <a href={`http://${domain}/portfolio/${user.userName}`} target="_blank">
            {user.userName}
          </a>
        </span>
      ),
    },
    {
      title: "first name",
      align: "center",
      dataIndex: "",
      width: 400,
      render: (user: any) => {
        return (
          <span >
            {user.firstName}
          </span>
        );
      },
    },
    {
      title: "last name",
      align: "center",
      dataIndex: "",
      width: 400,
      render: (user: any) => {
        return (
          <span >
            {user.lastName}
          </span>
        );
      },
    },
    {
      title: "action",
      align: "center",
      dataIndex: "",
      width: 400,
      render: (user: any) => {
        if (!user.isDisable) {
          return (
            <Button
              onClick={(e) => {
                e.preventDefault();
                _disableUser(user._id)
              }}
            >
              Disable
            </Button>
          )
        }
        return (
          <Button
            onClick={(e) => {
              e.preventDefault();
              _enableUser(user._id)
            }}
          >
            Enable
          </Button>
        )
      },
    },
  ];

  return (
    <AntTable
      loading={loading}
      columns={columns}
      isShowTotal
      dataSource={users}
      rowKey="_id"
      bordered
      name="List User"
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

export default UsersTable;
