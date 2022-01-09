import fetch from 'isomorphic-unfetch';
import { GetAdminAuthProfileDocument } from '@frontend-stack/data-access';
import { retrieveAuthTokenFromContext } from '@lava-x/next-js';
import { GRAPHQL_ENDPOINT } from 'config/constant';

const getAuthProfile = async (context?: any): Promise<any> => {
  const token = retrieveAuthTokenFromContext(context);
  if (!token) return Promise.resolve(null);

  const query = GetAdminAuthProfileDocument?.loc?.source?.body ?? {};
  const res = await fetch(GRAPHQL_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      query,
    }),
  });
  const result = await res.json();
  const authUser = result?.data?.getAdminAuthProfile;
  return authUser;
};

export default getAuthProfile;
