import { Col, Row } from "antd";
import classnames from "classnames";
import _ from "lodash";
import React from "react";
import { useSelector } from "react-redux";
import { IStorageState } from "../../reducers/authState/authReducer";
import { IState } from "../../store/rootReducer";
import HeaderRight from "./header-right";
import "./style.less";

const Header = () => {
  const isCollapsed = useSelector((state: IState) => state.global.isCollapsed);
  const user = useSelector(({ auth }: { auth: IStorageState }) => auth.user);

  return (
    <div className={classnames("header-wrap", { collapsed: isCollapsed })}>
      <Col span={24} className="header-right">
        <Row justify="end">
          <HeaderRight />
        </Row>
      </Col>
    </div>
  );
};

export default Header;
