import React from 'react';
import { SignInView } from '@lava-x/antd';
import { setAuthToken, redirect } from '@lava-x/next-js';
import { useAdminSignInMutation } from '@frontend-stack/data-access';
import useTranslation from 'next-translate/useTranslation';
import logo from '@frontend-stack/shared/assets/images/logo.svg';
import { DEFAULT_PATH_AFTER_SIGN_IN } from 'config/constant';
import { StyledCenterViewWrapper } from './styles';

export const SignInScreen: React.FC = () => {
  const { t } = useTranslation('screen');

  // ==================== VIEWS
  return (
    <StyledCenterViewWrapper logo={logo} title={t('signin.title')}>
      <SignInView
        useActionHook={{
          key: 'adminSignIn',
          query: useAdminSignInMutation,
        }}
        constructPayload={(e) => {
          return {
            input: {
              email: e.email,
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
    </StyledCenterViewWrapper>
  );
};

export default SignInScreen;
