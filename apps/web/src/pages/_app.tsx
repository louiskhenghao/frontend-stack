import compose from 'lodash/flowRight';
import { AppProps } from 'next/app';
import {
  redirect,
  useAuthIdentity,
  withAuthIdentity,
  withApolloClient,
  withRouteIndicator,
} from '@lava-x/next-js';
import authOptions from 'config/auth.config';
import apolloOptions from 'config/apollo.config';
// import './styles.css';

const MyApp = (props: AppProps) => {
  const { Component, pageProps, router } = props;

  // ================= HOOKS
  const { authUser, config, signout } = useAuthIdentity();

  // ================= VARIABLES
  const { pathname, asPath } = router;

  // ================= EVENTS
  const onActionSignOut = () => {
    signout?.();
  };

  // ================= VIEWS
  return <Component {...pageProps} />;
};

export default compose(
  withApolloClient({ ssr: true, options: apolloOptions }),
  withAuthIdentity({ ssr: true, apollo: true, options: authOptions }),
  withRouteIndicator()
)(MyApp);
