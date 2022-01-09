import React from 'react';
import { Avatar, Typography } from 'antd';
import {
  FormOutlined,
  GlobalOutlined,
  CarOutlined,
  LogoutOutlined,
  SettingOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
  SkinOutlined,
  UserOutlined,
  LineChartOutlined,
  ShoppingOutlined,
  NotificationOutlined,
} from '@ant-design/icons';
import { MenuItemOption } from '@lava-x/antd';
// import useTranslation from "next-translate/useTranslation";
// import setLanguage from "next-translate/setLanguage";

export const useLayoutMenus = (): {
  header: MenuItemOption[];
  sidebar: MenuItemOption[];
} => {
  // const { t } = useTranslation("screen");

  // ======================== HEADERS
  const header: MenuItemOption[] = [
    {
      key: 'languages',
      icon: <GlobalOutlined />,
      authentication: false,
      submenu: [
        {
          key: 'lang-en',
          title: 'English',
          onActionClick: (): void => {
            // setLanguage("en");
          },
        },
        {
          key: 'lang-cn',
          title: '简体中文',
          onActionClick: (): void => {
            // setLanguage("cn");
          },
        },
      ],
    },
    {
      key: 'account',
      icon: <Avatar icon={<UserOutlined />} />,
      title: (context: any) => {
        const { authUser } = context;
        if (!authUser) return '';
        return (
          <Typography.Text className="profile-name">
            Hi {authUser.firstName}
          </Typography.Text>
        );
      },
      authentication: true,
      submenu: [
        {
          key: 'account-profile',
          icon: <UserOutlined />,
          title: 'Account',
          path: '/account',
        },
        {
          key: 'account-settings',
          icon: <SettingOutlined />,
          title: 'Settings',
          path: '/settings',
        },
        { key: 'some-divider', type: 'divider' },
        {
          key: 'account-signout',
          icon: <LogoutOutlined />,
          title: 'Signout',
          onActionClick: (e: any, context: any): void => {
            if (context.onActionSignOut) {
              context.onActionSignOut();
            }
          },
        },
      ],
    },
  ];

  // ======================== SIDEBARS
  const sidebar: MenuItemOption[] = [
    {
      key: 'dashboard',
      type: 'menu',
      icon: <LineChartOutlined />,
      title: 'Dashboard',
      path: '/app/dashboard',
      includes: ['/app/dashboard'],
      // authentication: true,
    },
    // {
    //   key: 'catalog',
    //   type: 'menu',
    //   icon: <SkinOutlined />,
    //   title: 'Catalog',
    //   // authentication: true,
    //   includes: [
    //     '/app/catalog/all',
    //     '/app/catalog/add',
    //     '/app/catalog/update/[id]',
    //   ],
    //   submenu: [
    //     {
    //       key: 'my-catalog',
    //       type: 'menu',
    //       title: 'My Catalog',
    //       path: '/app/catalog/all',
    //       includes: ['/app/catalog/all'],
    //     },
    //   ],
    // },
  ];

  return { header, sidebar };
};

export default useLayoutMenus;
