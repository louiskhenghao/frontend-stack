import Head from 'next/head';
import { DashboardScreen } from 'screens/Dashboard';

const Dashboard = (props: any) => {
  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <DashboardScreen {...props} />
    </>
  );
};

export default Dashboard;
