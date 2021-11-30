import { FileAddOutlined } from "@ant-design/icons";
import { Button } from "antd";
import Modal from "antd/lib/modal/Modal";
import React, { FC, useState } from "react";
import FormSkill from "./form-host";

interface Props {}

const AddHost: FC<Props> = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const toggle = () => setVisible(!visible);

  return (
    <>
      <Button type="primary" onClick={toggle} icon={<FileAddOutlined />}>
        Add Host
      </Button>
      <Modal
        visible={visible}
        onCancel={toggle}
        footer={null}
        centered
        title="Add host"
        width={600}
        destroyOnClose
      >
        <FormSkill toggle={toggle} />
      </Modal>
    </>
  );
};

export default AddHost;
