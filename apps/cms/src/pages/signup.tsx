import { NextPage } from 'next';
import { SignUpScreen } from 'screens/SignUp';

const Page: NextPage = (props) => {
  return <SignUpScreen {...props} />;
};

export default Page;
