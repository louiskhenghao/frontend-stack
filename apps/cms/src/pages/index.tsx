import { Result } from 'antd';
import { DEFAULT_PATH_AFTER_SIGN_IN } from 'config/constant';
import { GetServerSideProps, GetServerSidePropsResult, NextPage } from 'next';

const Page: NextPage = () => {
  return <Result title="You are redirecting to main screen" />;
};

export const getServerSideProps: GetServerSideProps = async (): Promise<
  GetServerSidePropsResult<any>
> => {
  return {
    redirect: {
      permanent: true,
      destination: DEFAULT_PATH_AFTER_SIGN_IN,
    },
  };
};

export default Page;
