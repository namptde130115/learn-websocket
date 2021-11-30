import { FileAddOutlined } from "@ant-design/icons";
import { Button } from "antd";
import Modal from "antd/lib/modal/Modal";
import React, { FC, useState } from "react";
import FormSkill from "./form-theme";

interface Props {}

const AddTheme: FC<Props> = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const toggle = () => setVisible(!visible);

  return (
    <>
      <Button type="primary" onClick={toggle} icon={<FileAddOutlined />}>
        Add Theme
      </Button>
      <Modal
        visible={visible}
        onCancel={toggle}
        footer={null}
        centered
        title="Add Theme"
        width={600}
        destroyOnClose
      >
        <FormSkill toggle={toggle} />
      </Modal>
    </>
  );
};

export default AddTheme;
