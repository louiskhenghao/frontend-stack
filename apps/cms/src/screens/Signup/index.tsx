import React from "react";
import { SignUpView } from "@lava-x/antd";
import { redirect, setAuthToken } from "@lava-x/next-js";
import { CenterWrapperView } from "@lava-x/components";
import useTranslation from "next-translate/useTranslation";
import {
  useUserSignInMutation,
  useUserSignInWithSocialMutation
} from "@common/graphql";
import { DEFAULT_PATH_AFTER_SIGN_IN } from "config/constant";
import Logo from "@common/assets/static/logo.svg";

const SignUpScreen: React.FC = () => {
  const { t } = useTranslation("common");
  return (
    <CenterWrapperView logo={Logo} title={t("pages.signup")}>
      <SignUpView
        fields={["username", "email", "name"]}
        useActionHook={{
          key: "userSignUp",
          query: useUserSignInMutation
        }}
        useSocialHook={{
          key: "userSignInWithSocial",
          query: useUserSignInWithSocialMutation
        }}
        facebookAppId="facebook_app_id"
        enableFacebookSignIn
        redirectPath={DEFAULT_PATH_AFTER_SIGN_IN}
        setAuthToken={setAuthToken}
        navigate={(method, path) => redirect({}, path, method)}
        onCallback={(status, context) => {
          if (status !== "success") return;
          redirect({}, `/account/verification/${context}`);
        }}
      />
    </CenterWrapperView>
  );
};

export default SignUpScreen;
