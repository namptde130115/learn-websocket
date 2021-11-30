import { Menu } from "antd";
import _ from "lodash";
import React, { FC, memo, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import {
  ActionUserIcon,
  BoxIcon,
  EmultipleIcon,
  NavOrderSvgIcon,
  ReportIcon,
  SettingIcon,
} from "../../assets/icon";
import { IState } from "../../store/rootReducer";
import { Scrollbar } from "../index";
import "./style.less";

export interface MenuChildType {
  href: string;
  title: string;
  icon?: JSX.Element | string;
  children?: MenuChildType[];
  render?: JSX.Element;
  otherHref?: string[];
}

export const menus: MenuChildType[] = [
  {
    title: 'User',
    href: '/users',
    icon: <ActionUserIcon />,
  },
  {
    title: 'Skill',
    href: '/skills',
    icon: <SettingIcon />,
  },
  {
    title: 'Host',
    href: '/hosts',
    icon: <NavOrderSvgIcon />,
  },
  {
    title: 'Theme',
    href: '/themes',
    icon: <EmultipleIcon />,
  },
  {
    title: 'Hackathon',
    href: '/hackathons',
    icon: <ReportIcon />,
  },
  {
    title: 'Smart Contract',
    href: '/smart-contract',
    icon: <BoxIcon />,
  },
];

interface IProps {}

const Navigation: FC<IProps> = () => {
  // const user = useSelector(({ auth }: { auth: IStorageState }) => auth.user);

  const isCollapsed = useSelector((state: IState) => state.global.isCollapsed);

  const [selectedKey, setSelectedKey] = useState<string>(
    window.location.pathname
  );
  const location = useLocation();
  const [openKeys, setOpenKeys] = useState<string[]>([]);

  const rootSubmenuKeys = menus
    .map((c: MenuChildType) => {
      if (Boolean(c.children)) {
        return c.href;
      }
      return "";
    })
    .filter((c) => !!c);

  useEffect(() => {
    if (window.location.pathname === "/") {
      setSelectedKey("/");
      setOpenKeys([]);
      return;
    }
    let parentMenu;
    let childrenMenu;
    for (const menu of menus) {
      parentMenu = menu;

      // const role =  _.get(user, 'name');
      if (!!menu.href && menu.href !== "/") {
        if (menu.children) {
          childrenMenu = menu.children.find(
            (subMenu: MenuChildType) =>
              location.pathname.includes(subMenu.href) ||
              _.some(subMenu.otherHref, (href: string) =>
                location.pathname.includes(href)
              )
          );
          if (childrenMenu) {
            break;
          }
        } else if (location.pathname.includes(menu.href)) {
          break;
        }
      }
    }

    if (parentMenu && childrenMenu) {
      setSelectedKey(childrenMenu?.href || location.pathname);
      !isCollapsed && setOpenKeys([parentMenu.href]);
    } else {
      setSelectedKey(parentMenu?.href || window.location.pathname);
      setOpenKeys([]);
    }
  }, [location, isCollapsed]);

  const onOpenChange = (keys: any) => {
    const latestOpenKey = keys.find((key: any) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  const height = "calc(100vh - 111px)";

  return (
    <Scrollbar
      style={{ height, marginTop: 64 }}
      className="scrollbar-vertical"
      renderThumbVertical={(props: any) => (
        <div {...props} className="thumb-vertical" />
      )}
    >
      <Menu
        mode="inline"
        theme="dark"
        className="nav__menu"
        defaultSelectedKeys={[selectedKey]}
        selectedKeys={[selectedKey]}
        onOpenChange={onOpenChange}
        openKeys={openKeys}
      >
        {menus
          .map((c: MenuChildType) =>
            Boolean(c.children) ? (
              <Menu.SubMenu
                icon={
                  <span>
                    {c.icon}
                    <span>{c.title}</span>
                  </span>
                }
                key={c.href}
              >
                {c.children?.map((sub) => (
                  <Menu.Item key={sub.href}>
                    <Link to={sub.href}>{sub.title}</Link>
                  </Menu.Item>
                ))}
              </Menu.SubMenu>
            ) : (
              <Menu.Item key={c.href} onClick={() => setOpenKeys([])}>
                {c.render ? (
                  c.render
                ) : (
                  <Link to={c.href}>
                    {c.icon}
                    <span>{c.title}</span>
                  </Link>
                )}
              </Menu.Item>
            )
          )}
      </Menu>
    </Scrollbar>
  );
};

export default memo(Navigation);
