import SignInScreen from 'screens/SignIn';

const Home = (props: any) => {
  return <SignInScreen {...props} />;
};

Home.getInitialProps = async () => ({});

export default Home;
