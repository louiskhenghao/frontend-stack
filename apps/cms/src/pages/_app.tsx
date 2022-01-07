import compose from 'lodash/flowRight';
import { AppProps } from 'next/app';
import { Modal } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';
import { LayoutProvider } from '@lava-x/antd';
import {
  redirect,
  useAuthIdentity,
  withAuthIdentity,
  withApolloClient,
  withRouteIndicator,
} from '@lava-x/next-js';
import authOptions from 'config/auth.config';
import apolloOptions from 'config/apollo.config';
import { useLayoutMenus } from 'config/layout.config';
require('../styles/styles.less');
// import './styles.css';

const MyApp = (props: AppProps) => {
  const { Component, pageProps, router } = props;

  // ================= HOOKS
  const { sidebar, header } = useLayoutMenus();
  const { authUser, config, signout } = useAuthIdentity();

  // ================= VARIABLES
  const { pathname, asPath } = router;

  // ================= EVENTS
  const onActionSignOut = () => {
    Modal.confirm({
      title: 'Are you want to signout?',
      icon: <LogoutOutlined />,
      centered: true,
      okButtonProps: {
        type: 'primary',
      },
      onOk() {
        signout?.();
      },
    });
  };

  // ================= VIEWS
  return (
    <LayoutProvider
      theme="light"
      styles="satu"
      heading="CMS"
      fixedHeader
      enableSider
      // logo={LogoBrand}
      // brand={Logo}
      config={config}
      authUser={authUser}
      sideMenus={sidebar}
      headerMenus={header}
      defaultSiderExpand
      currentPath={[pathname, asPath]}
      navlink="/app/dashboard"
      onActionSignOut={onActionSignOut}
      navigate={(method, path) => redirect({}, path ?? '/', method)}
    >
      <Component {...pageProps} />
    </LayoutProvider>
  );
};

export default compose(
  withApolloClient({ ssr: true, options: apolloOptions }),
  withAuthIdentity({ ssr: true, apollo: true, options: authOptions }),
  withRouteIndicator()
)(MyApp);
