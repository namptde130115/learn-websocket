import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Button, Modal } from "antd";
import { ColumnsType } from "antd/lib/table";
import React, { FC, useEffect } from "react";
import { AntTable } from "../../../components";
import useConnectSmartContract from "../../smart-contract/hook";
import { useHackathonsContext } from "./state/context";

const domain = process.env.REACT_APP_DOMAIN;

const status_const: any[] = [
  {
    value: "draft",
    title: "draft",
  },
  {
    value: "pending",
    title: "pending",
  },
  {
    value: "publish",
    title: "publish",
  },
];

const HackathonsTable: FC = () => {
  const {
    loading,
    hackathons,
    status,
    page,
    pageSize,
    search,
    totalItems,
    fetchDataCallback,
    changePagination,
    changeFilter,
  } = useHackathonsContext();

  const {
    closeHackathon,
  } = useConnectSmartContract();


  const handleTableChange = async (
    pagination: any,
    filters: any,
    sorter: any
  ) => {
    console.log('sort', sorter);
    console.log('filter', filters);
    if (pagination?.current !== page) {
      changePagination({
        page: pagination?.current,
        pageSize: pagination?.pageSize || 20,
      });
    }
    if (JSON.stringify(filters.status) !== JSON.stringify(status)) {
      changeFilter({
        status: filters.status,
      })
    }
  };

  useEffect(() => {
    if (loading) {
      const params = {
        page,
        pageSize,
        search,
        status
      } as any;
      fetchDataCallback(params);
    }
  }, [loading]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [loading]);

  const columns: ColumnsType<any> = [
    {
      title: "id",
      align: "center",
      width: 200,
      render: (hack) => {
        return (
          <span className="blue-text" >
            {hack._id}
          </span>
        )
      },
    },
    {
      title: "name",
      align: "center",
      width: 200,
      render: (hack) => {
        if (hack.status === 'publish') {
          return (
            <span className="blue-text" >
              <a  href={`http://${hack.essentials.url}.${domain}`} target="_blank">
                {hack.essentials.name}
              </a>
            </span>
          )
        }
        return (
          <span className="blue-text" >
            {hack.essentials.name}
          </span>
        )

      },
    },
    {
      title: "status",
      align: "center",
      width: 200,
      key: "status",
      defaultFilteredValue: undefined,
      filters: status_const.map((item: any) => {
        return { text: item.title, value: item.value };
      }),
      render: (hack) => {
        return (
          <span className="blue-text" >
            {hack.status}
          </span>
        )
      },
    },
    {
      title: "transaction",
      align: "center",
      width: 200,
      render: (hack) => {
        return (
          <span className="blue-text" >
            {hack.transactionId}
          </span>
        )
      },
    },
    {
      title: "action",
      align: "center",
      width: 200,
      render: (hack) => {
        if (hack.transactionId) {
          return (
            <Button
            onClick={(e) => {
              e.preventDefault();
              Modal.confirm({
                title: "Close hackathon",
                icon: <ExclamationCircleOutlined />,
                content: `Do you want close hackathon ${hack.essentials.name}`,
                okText: "Close hackathon",
                cancelText: "Cancel",
                onOk: async () => {
                  closeHackathon(hack._id);
                }
              });
            }}
          >
            Close
          </Button>
          )
        }
        return null
      },
    },
  ];



  return (
    <AntTable
      loading={loading}
      columns={columns}
      isShowTotal
      dataSource={hackathons}
      rowKey="_id"
      bordered
      name="List Hackathon"
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

export default HackathonsTable;
