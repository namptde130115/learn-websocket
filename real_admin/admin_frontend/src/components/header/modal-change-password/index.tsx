import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";
import { Modal, Form, Input, Divider, message } from "antd";
import { AntButton, Message } from "../../../components";
import { logout } from "../../../reducers/authState/authAction";
import "../style.less";
import authApi from "../../../api/auth-api";

interface IModalChangePassword {
  visible: boolean;
  setVisible: (value: boolean) => void;
}

const ModalChangePassword: FC<IModalChangePassword> = ({
  visible,
  setVisible,
}) => {
  const dispatch = useDispatch();

  const [formPassword] = Form.useForm();

  const handleChangeNewPassword = async () => {
    try {
      const currentPassword = formPassword.getFieldValue("currentPassword");
      const newPassword = formPassword.getFieldValue("newPassword");
      const confirm = formPassword.getFieldValue("confirm");

      if (!currentPassword ) {
        Message({type: "error", content: "Please enter old password" });
        return;
      }
      if (!newPassword) {
        Message({type: "error", content: "Please enter new password" });
        return;
      }
      if (!newPassword ) {
        Message({type: "error", content: "Please enter new password" });
        return;
      }
      if (confirm !== newPassword) {
        Message({type: "error", content: "Passwords do not match!" });
        return;
      }
      if (currentPassword === newPassword) {
        Message({type: "error", content: "New password cannot be the same as your old password!" });
        return;
      }
      const value = { oldPassword: currentPassword, newPassword: newPassword };

      const response: any = await authApi.changePassword(value);
      console.log('ressspo', response)
      if (response.status === 200) {
        Message({content: "Change password successfully. Please log in again!" });
        dispatch(logout());
        dispatch(push("/login"));
      } else {
        Message({type: "error", content: response.message });
      }
    } catch (error: any) {
      Message({type: "error", content: error.response.data.message });
    }
  };

  return (
    <>
      <Modal
        title={<span>Change password</span>}
        centered
        visible={visible}
        onOk={() => {}}
        okText="Continue"
        onCancel={() => setVisible(false)}
        cancelText="Cancel"
        width={390}
        closable={false}
        maskClosable={true}
        keyboard={false}
        footer={[
          <AntButton onClick={() => setVisible(false)}>Cancel</AntButton>,
          <AntButton type="primary" onClick={handleChangeNewPassword}>
            Save
          </AntButton>,
        ]}
        className="modal-change-password"
      >
        <Form layout="vertical" form={formPassword}>
          <Form.Item
            label="old password"
            name="currentPassword"
            rules={[
              {
                required: true,
                message: "Please input old password",
              },
            ]}
          >
            <Input.Password type="password" placeholder="*********" />
          </Form.Item>
          <Form.Item
            label="new password"
            name="newPassword"
            rules={[
              {
                required: true,
                message: "Please input new password",
              },
            ]}
          >
            <Input.Password type="password" placeholder="*********" />
          </Form.Item>

          <Form.Item
            label="confirm password"
            name="confirm"
            dependencies={["newPassword"]}
            rules={[
              {
                required: true,
                message: "Xác nhận mật khẩu mới",
              },
              
            ]}
          >
            <Input.Password type="password" placeholder="*********" />
          </Form.Item>
          <Divider />
        </Form>
      </Modal>
    </>
  );
};

export default ModalChangePassword;
