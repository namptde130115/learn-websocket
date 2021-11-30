import React from "react";
import { FC, Fragment, useCallback, useEffect, useState } from "react";
import {
  Button,
  Card,
  Col,
  Form,
  Input,
  message,
  Modal,
  Row,
  Space,
  Avatar,
  InputNumber,
} from "antd";
import { useForm } from "antd/lib/form/Form";
import { useHistory, useParams } from "react-router-dom";
import { pick } from "lodash";
import { DefaultLayout } from "../../../layout";
import { disabledAutosuggestion } from "../../../helper/validate-input";

import {
  BackLink,
  Loading,
  Message,
  PageTopWrapper,
} from "../../../components";
import {
  DeleteOutlined,
  ExclamationCircleOutlined,
  SaveOutlined,
} from "@ant-design/icons";
import userApi from "../../../api/user-api";
import Title from "antd/lib/typography/Title";

const UserDetail: FC = () => {
  const history = useHistory();
  const { userId } = useParams<any>();
  const [loading, setLoading] = useState<boolean>(false);
  const [submiting, setSubmiting] = useState<boolean>(false);
  const [user, setUser] = useState<any>();
  const [form] = useForm();
  const title = user?.userName.toLowerCase() || "...";
  const loadUser = useCallback(async (id: string) => {
    try {
      await userApi
        .getUserById(id)
        .then((response: any) => {
          if (response.status === 200) {
            console.log("response xx", response);
            setUser(response.data);
          } else {
            Message({ type: "error", content: response?.message });
            history.push(`/users/list`);
          }
        })
        .catch(() => {
          Message({ type: "error", content: "Error" });
          history.push(`/users/list`);
        });
    } catch (error) {
      console.log("error", error);
    } finally {
      setLoading(false);
    }
  }, []);

  const onFinish = async (values: FormData) => {};

  const onReset = () => {
    form.resetFields();
  };

  const handleRestore = () => {};

  useEffect(() => {
    if (user) {
      setUser(user);
      form.resetFields();
    }
  }, [user]);

  useEffect(() => {
    if (userId) {
      loadUser(userId);
    } else {
      setLoading(false);
    }
  }, [userId]);

  if (loading) {
    return <Loading full />;
  }

  return (
    <Fragment>
      <Form
        layout="vertical"
        form={form}
        onFinish={onFinish}
        initialValues={{
          ...pick(user, ["email", "userName", "firstName", "lastName"]),
        }}
      >
        <DefaultLayout title={title}>
          <PageTopWrapper
            leftContent={
              <>
                <BackLink to="/users" text="Detail user" />

                <Title level={3}>{title}</Title>
              </>
            }
          />
          <div className="content">
            <Row gutter={[0, 15]}>
              <Col span={24} style={{ width: "100%" }}>
                <Card type="inner" title="Detail user">
                  <Row gutter={[10, 15]}>
                    <Col span={12}>
                      <Form.Item name="email" label="email">
                        <Input onFocus={disabledAutosuggestion} readOnly />
                      </Form.Item>
                    </Col>
                  </Row>
                </Card>
              </Col>
            </Row>
          </div>
        </DefaultLayout>
      </Form>
    </Fragment>
  );
};

export default UserDetail;
