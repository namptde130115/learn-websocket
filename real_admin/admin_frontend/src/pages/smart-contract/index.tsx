import { Button, Col, Form, Input, Row, Space, Typography } from "antd";
import React, {  useEffect } from "react";
import { Loading, Message, PageTopWrapper } from "../../components";
import { useEagerConnect, useInactiveListener } from "../../hook/web3Hooks";
import { DefaultLayout } from "../../layout";
import theme from "../../theme";
import "./style.less";

import { useForm } from "antd/lib/form/Form";
import useConnectSmartContract from "./hook";


const SmartContractPage = () => {
  const [form] = useForm();
  // handle logic to eagerly connect to the injected ethereum provider, if it exists and has granted access already
  const triedEager = useEagerConnect();
  // handle logic to connect in reaction to certain events on the injected ethereum provider, if it exists
  useInactiveListener(!triedEager);

  const { 
    loading, 
    fee,
    owner,
    timeForWithdrawUnclaimed, 
    adminReceiver, 
    changeFee, 
    changeTimeForWithdrawUnclaimed, 
    changeAddress,
    account,
    connectMetamask,
  } = useConnectSmartContract();

  const onChangeFee = (value: any) => {
    if (account !== owner) {
      Message({type: "error", content: "Please connect metamask with address owner!" });
      return;
    }
    changeFee(form.getFieldValue('fee'))
  }

  const onChangeTimeForWithdrawUnclaimed = () => {
    if (account !== owner) {
      Message({type: "error", content: "Please connect metamask with address owner!" });
      return;
    }
    changeTimeForWithdrawUnclaimed(form.getFieldValue('timeForWithdrawUnclaimed'))
  }

  const onChangeAddress = () => {
    if (account !== owner) {
      Message({type: "error", content: "Please connect metamask with address owner!" });
      return;
    }
    changeAddress(form.getFieldValue('adminReceiver'))
  }



  useEffect(() => {
    form.resetFields();

  }, [loading, fee, timeForWithdrawUnclaimed]);

  if (!account) {
    return (
      <div className="container">
        <div className="connect">
        <Button
           onClick={connectMetamask}
        >
          Connect Metamask
        </Button>
        </div>
        
      </div>
    )
  }

  if (loading) {
    return <Loading full />;
  }

  return (
    <DefaultLayout title="Smart Contract">
      <Form
        layout="vertical"
        form={form}
        initialValues={{
          fee: fee,
          timeForWithdrawUnclaimed: timeForWithdrawUnclaimed,
          adminReceiver: adminReceiver,
          owner: owner,
        }}
      >
        <PageTopWrapper
          leftContent={
            <Typography.Title level={3}>Smart Contract</Typography.Title>
          }
          rightContent={<Col></Col>}
        />
        <div style={{ padding: 16 }}>
          <Space style={{ width: "100%" }} direction="vertical">
            <Row justify="space-between" align="middle" gutter={15}>
              <Col style={{ width: "100%" }}>
                <div className="order-header"></div>
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
            <Row gutter={[0, 15]}>
              <Col span={24} style={{ width: "100%" }}>
              <Row gutter={[10, 15]}>
                  <Col span={12}>
                    <Form.Item name="owner" label="Address owner">
                      <Input type="string" disabled />
                    </Form.Item>
                  </Col>
                
                </Row>
                <Row gutter={[10, 15]}>
                  <Col span={12}>
                    <Form.Item name="fee" label="Fee (percent)">
                      <Input type="number"  />
                    </Form.Item>
                  </Col>
                  <Col span={12} className="button-sc">
                    <Button
                      onClick={onChangeFee}
                      // className="form-button"
                    >
                      Change Fee
                    </Button>
                  </Col>
                </Row>
                <Row gutter={[10, 15]}>
                  <Col span={12}>
                    <Form.Item
                      name="timeForWithdrawUnclaimed"
                      label="Time For Withdraw Unclaimed (minutes)"
                    >
                      <Input type="number" />
                    </Form.Item>
                  </Col>
                  <Col span={12} className="button-sc">
                    <Button
                      onClick={onChangeTimeForWithdrawUnclaimed}
                      // className="form-button"
                    >
                      Change Time
                    </Button>
                  </Col>
                </Row>
                <Row gutter={[10, 15]}>
                  <Col span={12}>
                    <Form.Item name="adminReceiver" label="Address withdraw">
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col span={12} className="button-sc">
                    <Button
                      onClick={onChangeAddress}
                      // className="form-button"
                    >
                      Change Address
                    </Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Form>
    </DefaultLayout>
  );
};

export default SmartContractPage;
