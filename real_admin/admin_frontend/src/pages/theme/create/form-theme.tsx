import { Button, Col, Form, Input, Row } from "antd";
import { useForm } from "antd/es/form/Form";
import React, { FC, useState } from "react";
import { disabledAutosuggestion } from "../../../helper/validate-input"
import Message from "../../../components/message";
import themeApi from "../../../api/theme-api";
import { useThemesContext } from "../list/state/context";

export enum EFormProduct {
  edit = 1,
  new,
}

interface Props {
  toggle?: Function;
  type?: EFormProduct;
}

interface FormData {
  id: string;
  name: string;
}

const FormTheme: FC<Props> = ({ toggle, type = EFormProduct.new }) => {
  const [form] = useForm();
  const [loading, setLoading] = useState<boolean>(false);


  const { pageSize, page, search, fetchDataCallback } = useThemesContext();


  const createHost = async (values: FormData) => {
    try {
      setLoading(true);
      const response: any = await themeApi.add(values);
      if (response.status == 201) {
        Message({content: "Success!" });
        if (toggle) {
          toggle();
        }
        fetchDataCallback({ pageSize, page, search } as any);
      } else {
        Message({type: "error", content: response.message });
      }
    } catch (error) {
      Message({type: "error", content: "Error!" });
    } finally {
      setLoading(false);
    }
  };

  const onFinish = async (values: FormData) => {
    createHost(values);
  };

  const resetForm = () => {
    form.resetFields();
  };

  return (
    <Form onFinish={onFinish} layout="vertical" form={form}>
      <Row gutter={[12, 0]}>
        <Col span={24}>
          <Form.Item
            name="name"
            label="name"
            validateTrigger={["onBlur", "onChange"]}
            rules={[
              {
                message: "name is required!",
              },
            ]}
          >
            <Input
              placeholder="input name"
              onFocus={disabledAutosuggestion}
            />
          </Form.Item>
        </Col>
      </Row>

      <Form.Item>
        <Row justify="end" gutter={15}>
          <Col>
            <Button onClick={resetForm}>Reset</Button>
          </Col>
          <Col>
            <Button type="primary" htmlType="submit" loading={loading}>
              Save
            </Button>
          </Col>
        </Row>
      </Form.Item>
    </Form>
  );
};

export default FormTheme;
