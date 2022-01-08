import {
  SIGN_IN_PATH,
  NOT_FOUND_PATH,
  DEFAULT_PATH_AFTER_SIGN_IN,
  DEFAULT_PATH_BEFORE_SIGN_IN,
  ONBOARDING_PATH,
  PATHS_ONLY_ALLOWED_BEFORE_AUTH,
  PATHS_NOT_ALLOWED_AFTER_AUTH,
  PATHS_FOR_ADMIN_ONLY,
  NO_LAYOUT_PATH,
} from 'config/constant';
import checkAuthProfile from 'config/getAuthProfile';
import { AuthOptions } from '@lava-x/next-js';

const authOptions: AuthOptions = {
  checkAuthProfile,
  syncAuthEventKeyName: 'signout',
  logging: true,
  enableAdmin: false,
  enableNotFoundRedirection: true,
  enableOnboarding: true, // enable onboarding check
  // valueKeyOnboard: "business", // key, or key path to check for onboard,
  checkRequiredOnboard: async (authUser) => {
    // Custom function to indicate whether user required for onboarding after signin
    // You may Access to authUser & its property
    return false;
  },
  onChangePath: async (paths, authUser) => {
    // if (paths.includes("/setup")) {
    //   if (includes(authUser.hasOnboarded, "onboarded")) {
    //     return DEFAULT_PATH_AFTER_SIGN_IN;
    //   }
    // }
    return false;
  },
  paths: {
    signInPath: SIGN_IN_PATH,
    notFoundPath: NOT_FOUND_PATH,
    afterAuthPath: DEFAULT_PATH_AFTER_SIGN_IN,
    beforeAuthPath: DEFAULT_PATH_BEFORE_SIGN_IN,
    onboardingPath: ONBOARDING_PATH,
    allowedBeforeAuthPaths: PATHS_ONLY_ALLOWED_BEFORE_AUTH,
    restrictAfterAuthPaths: PATHS_NOT_ALLOWED_AFTER_AUTH,
    allowedAdminPaths: PATHS_FOR_ADMIN_ONLY,
    noLayoutPaths: NO_LAYOUT_PATH,
  },
};

export default authOptions;
