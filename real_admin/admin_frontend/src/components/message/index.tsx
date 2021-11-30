
import { message } from "antd";
import React, { FC } from 'react';
import './style.less';



interface Props {
  content?: string;
  type?: string;
}

const Message: FC<Props> = ({ type = "success", content }) => {
  if (type == "success") {
    message.success({
      content: content,
      duration:2,
      maxCount: 1,
      className: 'custom-class custom-class-success',
      // style: {
      //   marginTop: '3',
      // },
    });
  }

  if (type == "error") {
    message.error({
      content: content || 'error',
      duration:2,
      maxCount: 1,
      className: 'custom-class custom-class-error',
      // style: {
      //   marginTop: '30vh',
      // },
    });
  }

  if (type == "info") {
    message.info({
      content: content,
      duration:2,
      maxCount: 1,
      className: 'custom-class custom-class-info',
      // style: {
      //   marginTop: '30vh',
      // },
    });
  }

  if (type == "warning") {
    message.warning({
      content: content,
      duration:2,
      maxCount: 1,
      className: 'custom-class custom-class-warning',
      // style: {
      //   marginTop: '30vh',
      // },
    });
  }
  return <></>;
};

export default Message;


