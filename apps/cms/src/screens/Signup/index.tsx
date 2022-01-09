import React from 'react';
import { SignUpView } from '@lava-x/antd';
import { redirect, setAuthToken } from '@lava-x/next-js';
import { useUserSignInMutation } from '@frontend-stack/data-access';
import useTranslation from 'next-translate/useTranslation';
import { DEFAULT_PATH_AFTER_SIGN_IN } from 'config/constant';
import logo from '@frontend-stack/shared/assets/images/logo.svg';
import { StyledCenterViewWrapper } from './styles';

export const SignUpScreen: React.FC = () => {
  const { t } = useTranslation('screen');

  // ==================== VIEWS
  return (
    <StyledCenterViewWrapper logo={logo} title={t('signup.title')}>
      <SignUpView
        fields={['username', 'email', 'name']}
        useActionHook={{
          key: 'userSignUp',
          query: useUserSignInMutation,
        }}
        // useSocialHook={{
        //   key: "userSignInWithSocial",
        //   query: useUserSignInWithSocialMutation
        // }}
        facebookAppId="facebook_app_id"
        enableFacebookSignIn
        redirectPath={DEFAULT_PATH_AFTER_SIGN_IN}
        setAuthToken={setAuthToken}
        navigate={(method, path) => redirect({}, path, method)}
        onCallback={(status, context) => {
          if (status !== 'success') return;
          redirect({}, `/account/verification/${context}`);
        }}
      />
    </StyledCenterViewWrapper>
  );
};

export default SignUpScreen;
