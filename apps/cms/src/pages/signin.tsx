import { NextPage } from 'next';
import { SignInScreen } from 'screens/SignIn';

const Page: NextPage = (props) => {
  return <SignInScreen {...props} />;
};

export default Page;
