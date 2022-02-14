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
import useTranslation from 'next-translate/useTranslation';
import authOptions from 'config/auth.config';
import apolloOptions from 'config/apollo.config';
import { useLayoutMenus } from 'config/layout.config';
import brand from '@frontend-stack/shared/assets/images/logo.png';
// import { ReactComponent as Logo } from '@frontend-stack/shared/assets/images/logo.svg';
// require('../styles/styles.less');
import 'antd/dist/antd.css';
import 'styles/globals.scss';

const MyApp = (props: AppProps) => {
  const { Component, pageProps, router } = props;

  // useEffect(() => {
  //   ConfigProvider.config({
  //     theme: {
  //       primaryColor: '#faad14',
  //       errorColor: '#ff4d4f',
  //       warningColor: '#faad14',
  //       successColor: '#52c41a',
  //       infoColor: '#1890ff',
  //     },
  //   });
  // }, []);

  // ================= VARIABLES
  const { pathname, asPath } = router;

  // ================= HOOKS
  const { t } = useTranslation('common');
  const { sidebar, header } = useLayoutMenus();
  const { authUser, config, signout } = useAuthIdentity();

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
      heading={t('brand')}
      fixedHeader
      enableSider
      logo={brand.src}
      brand={brand.src}
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
