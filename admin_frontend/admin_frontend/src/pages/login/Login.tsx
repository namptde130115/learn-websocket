import { Button, Form, Input } from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { BaseLayout } from "../../layout";
import { loginActionWithEmail } from "../../reducers/authState/authAction";
import InnerAuth from "../auth-page/components/inner-auth/InnerAuth";
import "./style.less";
import authApi from "../../api/auth-api";
import { Message } from "../../components";
import { ConsoleSqlOutlined } from "@ant-design/icons";

const title = "Sign In";

const leftTitle = "Hello!";
const leftDescription =
  "Sign in to experience the ultimate management for yourself";

interface FormData {
  email?: string;
  password?: string;
}

function Login(): JSX.Element {
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useDispatch();

  const onFinish = async (values: FormData): Promise<void> => {
    setLoading(true);
    try {
      const response: any = await authApi.loginWithEmail(values);
      if (response.status == 200) {
        dispatch(loginActionWithEmail(response.data));
      } else {
        Message({type: "error", content: "Please check email and password" });
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      Message({type: "error", content: "Please check email and password" });
    }
  };

  return (
    <BaseLayout title={title}>
      <InnerAuth
        reverse
        authContent={
          <div>
            <p className="auth-content-title">{leftTitle}</p>
            <p className="auth-content-des">{leftDescription}</p>
          </div>
        }
      >
        <div>
          <Form onFinish={onFinish} layout="vertical" className="form">
            <div className="form-content">
              <Form.Item
                name="email"
                required
                rules={[
                  {
                    required: true,
                    message: "Email is required!",
                  },
                ]}
              >
                <Input placeholder="Email" className="input-auth" />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Password is required!",
                  },
                ]}
              >
                <Input.Password
                  type="password"
                  placeholder="Password"
                  className="input-auth"
                />
              </Form.Item>

              <div className="login-form-button">
                <Button
                  type="primary"
                  htmlType="submit"
                  className="form-button"
                  loading={loading}
                >
                  {title}
                </Button>
              </div>

            </div>
          </Form>
        </div>
      </InnerAuth>
    </BaseLayout>
  );
}

export default Login;
