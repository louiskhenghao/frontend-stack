import React from 'react';
import { SignInView } from '@lava-x/antd';
import { CenterWrapperView } from '@lava-x/components';
import { setAuthToken, redirect } from '@lava-x/next-js';
import useTranslation from 'next-translate/useTranslation';
import { useUserSignInMutation } from '@frontend-stack/data-access';
import { DEFAULT_PATH_AFTER_SIGN_IN } from 'config/constant';
import Logo from '@frontend-stack/shared/assets/images/logo.svg';

const SignInScreen: React.FC = () => {
  const { t } = useTranslation('common');
  return (
    <CenterWrapperView
      // logo={Logo}
      logo={Logo}
      title={t('pages.signin')}
    >
      <SignInView
        useActionHook={{
          key: 'useSignIn',
          query: useUserSignInMutation,
        }}
        constructPayload={(e) => {
          return {
            input: {
              username: e.email,
              password: e.password,
            },
          };
        }}
        setAuthToken={setAuthToken}
        enableSignUp={false}
        enableForgetPassword={false}
        redirectPath={DEFAULT_PATH_AFTER_SIGN_IN}
        navigate={(method, path) => redirect({}, path, method)}
      />
    </CenterWrapperView>
  );
};

export default SignInScreen;
