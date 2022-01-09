import * as Types from '../@types/index';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {};
export type GetAdminAuthProfileQueryVariables = Types.Exact<{
  [key: string]: never;
}>;

export type GetAdminAuthProfileQuery = {
  __typename?: 'Query';
  getAdminAuthProfile: {
    __typename?: 'Admin';
    id: string;
    createdAt: any;
    updatedAt: any;
    role: Types.AdminRoleType;
    email: string;
    phoneCode?: string | null | undefined;
    phoneNumber?: string | null | undefined;
    avatar?: string | null | undefined;
  };
};

export type AdminSignInMutationVariables = Types.Exact<{
  input: Types.AdminSignInInput;
}>;

export type AdminSignInMutation = {
  __typename?: 'Mutation';
  adminSignIn: {
    __typename?: 'AdminLoginPayload';
    accessToken: string;
    expiresIn: number;
    admin: {
      __typename?: 'Admin';
      id: string;
      createdAt: any;
      updatedAt: any;
      role: Types.AdminRoleType;
      email: string;
      phoneCode?: string | null | undefined;
      phoneNumber?: string | null | undefined;
      avatar?: string | null | undefined;
    };
  };
};

export type GetUserAuthProfileQueryVariables = Types.Exact<{
  [key: string]: never;
}>;

export type GetUserAuthProfileQuery = {
  __typename?: 'Query';
  getUserAuthProfile?:
    | {
        __typename?: 'User';
        id: string;
        createdAt: any;
        updatedAt: any;
        email?: string | null | undefined;
        firstName: string;
        lastName: string;
        status: Types.UserStatus;
        identity?: string | null | undefined;
        gender?: Types.GenderType | null | undefined;
        dateOfBirth?: any | null | undefined;
        phoneNumber?: string | null | undefined;
        phoneCode?: string | null | undefined;
        avatar?: string | null | undefined;
        hasOnboarded: Array<Types.OnboardEvent>;
      }
    | null
    | undefined;
};

export type UserSignInMutationVariables = Types.Exact<{
  input: Types.LoginCredentialInput;
}>;

export type UserSignInMutation = {
  __typename?: 'Mutation';
  userSignIn: {
    __typename?: 'AccessToken';
    accessToken: string;
    expiresIn: number;
    refreshToken: string;
    refreshExpiresIn: number;
  };
};

export type UserSignUpMutationVariables = Types.Exact<{
  auth: Types.LoginCredentialInput;
  input: Types.StrictUserSignUpInput;
}>;

export type UserSignUpMutation = {
  __typename?: 'Mutation';
  userSignUp: {
    __typename?: 'AccessToken';
    accessToken: string;
    expiresIn: number;
    refreshToken: string;
    refreshExpiresIn: number;
  };
};

export type UserForgotPasswordMutationVariables = Types.Exact<{
  input: Types.GeneralTokenRequestInput;
}>;

export type UserForgotPasswordMutation = {
  __typename?: 'Mutation';
  userForgotPassword: string;
};

export type BannerQueryVariables = Types.Exact<{
  id: Types.Scalars['ID'];
}>;

export type BannerQuery = {
  __typename?: 'Query';
  banner?:
    | {
        __typename?: 'Banner';
        id: string;
        createdAt: any;
        updatedAt: any;
        name: string;
        link?: string | null | undefined;
        image: string;
      }
    | null
    | undefined;
};

export type BannersQueryVariables = Types.Exact<{
  paging?: Types.InputMaybe<Types.CursorPaging>;
  filter?: Types.InputMaybe<Types.BannerFilter>;
  sorting?: Types.InputMaybe<Array<Types.BannerSort> | Types.BannerSort>;
}>;

export type BannersQuery = {
  __typename?: 'Query';
  banners: {
    __typename?: 'BannerConnection';
    pageInfo: {
      __typename?: 'PageInfo';
      hasNextPage?: boolean | null | undefined;
      hasPreviousPage?: boolean | null | undefined;
      startCursor?: any | null | undefined;
      endCursor?: any | null | undefined;
    };
    edges: Array<{
      __typename?: 'BannerEdge';
      cursor: any;
      node: {
        __typename?: 'Banner';
        id: string;
        createdAt: any;
        updatedAt: any;
        name: string;
        link?: string | null | undefined;
        image: string;
      };
    }>;
  };
};

export type CreateOneBannerMutationVariables = Types.Exact<{
  input: Types.CreateOneBannerInput;
}>;

export type CreateOneBannerMutation = {
  __typename?: 'Mutation';
  createOneBanner: {
    __typename?: 'Banner';
    id: string;
    createdAt: any;
    updatedAt: any;
    name: string;
    link?: string | null | undefined;
    image: string;
  };
};

export type DeleteOneBannerMutationVariables = Types.Exact<{
  input: Types.DeleteOneInput;
}>;

export type DeleteOneBannerMutation = {
  __typename?: 'Mutation';
  deleteOneBanner: {
    __typename?: 'BannerDeleteResponse';
    id?: string | null | undefined;
  };
};

export type UpdateOneBannerMutationVariables = Types.Exact<{
  input: Types.UpdateOneBannerInput;
}>;

export type UpdateOneBannerMutation = {
  __typename?: 'Mutation';
  updateOneBanner: {
    __typename?: 'Banner';
    name: string;
    image: string;
    link?: string | null | undefined;
  };
};

export type GenerateSignedUrlMutationVariables = Types.Exact<{
  input: Types.UploadRequest;
}>;

export type GenerateSignedUrlMutation = {
  __typename?: 'Mutation';
  generateSignedUrl: {
    __typename?: 'SignedUrl';
    uid?: string | null | undefined;
    signedUrl: string;
  };
};

export type AdminInfoFragment = {
  __typename?: 'Admin';
  id: string;
  createdAt: any;
  updatedAt: any;
  role: Types.AdminRoleType;
  email: string;
  phoneCode?: string | null | undefined;
  phoneNumber?: string | null | undefined;
  avatar?: string | null | undefined;
};

export type UserInfoFragment = {
  __typename?: 'User';
  id: string;
  createdAt: any;
  updatedAt: any;
  email?: string | null | undefined;
  firstName: string;
  lastName: string;
  status: Types.UserStatus;
  identity?: string | null | undefined;
  gender?: Types.GenderType | null | undefined;
  dateOfBirth?: any | null | undefined;
  phoneNumber?: string | null | undefined;
  phoneCode?: string | null | undefined;
  avatar?: string | null | undefined;
  hasOnboarded: Array<Types.OnboardEvent>;
};

export type BannerEdgeFragment = {
  __typename?: 'BannerEdge';
  cursor: any;
  node: {
    __typename?: 'Banner';
    id: string;
    createdAt: any;
    updatedAt: any;
    name: string;
    link?: string | null | undefined;
    image: string;
  };
};

export type BannerInfoFragment = {
  __typename?: 'Banner';
  id: string;
  createdAt: any;
  updatedAt: any;
  name: string;
  link?: string | null | undefined;
  image: string;
};

export type AccessTokenInfoFragment = {
  __typename?: 'AccessToken';
  accessToken: string;
  expiresIn: number;
  refreshToken: string;
  refreshExpiresIn: number;
};

export type DeleteManyResponseInfoFragment = {
  __typename?: 'DeleteManyResponse';
  deletedCount: number;
};

export type UpdateManyResponseInfoFragment = {
  __typename?: 'UpdateManyResponse';
  updatedCount: number;
};

export type PageInfoFragmentFragment = {
  __typename?: 'PageInfo';
  hasNextPage?: boolean | null | undefined;
  hasPreviousPage?: boolean | null | undefined;
  startCursor?: any | null | undefined;
  endCursor?: any | null | undefined;
};

export const AdminInfoFragmentDoc = gql`
  fragment AdminInfo on Admin {
    id
    createdAt
    updatedAt
    role
    email
    phoneCode
    phoneNumber
    avatar
  }
`;
export const UserInfoFragmentDoc = gql`
  fragment UserInfo on User {
    id
    createdAt
    updatedAt
    email
    firstName
    lastName
    status
    identity
    gender
    dateOfBirth
    phoneNumber
    phoneCode
    avatar
    hasOnboarded
  }
`;
export const BannerInfoFragmentDoc = gql`
  fragment BannerInfo on Banner {
    id
    createdAt
    updatedAt
    name
    link
    image
  }
`;
export const BannerEdgeFragmentDoc = gql`
  fragment BannerEdge on BannerEdge {
    node {
      ...BannerInfo
    }
    cursor
  }
  ${BannerInfoFragmentDoc}
`;
export const AccessTokenInfoFragmentDoc = gql`
  fragment AccessTokenInfo on AccessToken {
    accessToken
    expiresIn
    refreshToken
    refreshExpiresIn
  }
`;
export const DeleteManyResponseInfoFragmentDoc = gql`
  fragment DeleteManyResponseInfo on DeleteManyResponse {
    deletedCount
  }
`;
export const UpdateManyResponseInfoFragmentDoc = gql`
  fragment UpdateManyResponseInfo on UpdateManyResponse {
    updatedCount
  }
`;
export const PageInfoFragmentFragmentDoc = gql`
  fragment PageInfoFragment on PageInfo {
    hasNextPage
    hasPreviousPage
    startCursor
    endCursor
  }
`;
export const GetAdminAuthProfileDocument = gql`
  query getAdminAuthProfile {
    getAdminAuthProfile {
      ...AdminInfo
    }
  }
  ${AdminInfoFragmentDoc}
`;

/**
 * __useGetAdminAuthProfileQuery__
 *
 * To run a query within a React component, call `useGetAdminAuthProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAdminAuthProfileQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAdminAuthProfileQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAdminAuthProfileQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetAdminAuthProfileQuery,
    GetAdminAuthProfileQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetAdminAuthProfileQuery,
    GetAdminAuthProfileQueryVariables
  >(GetAdminAuthProfileDocument, options);
}
export function useGetAdminAuthProfileLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetAdminAuthProfileQuery,
    GetAdminAuthProfileQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetAdminAuthProfileQuery,
    GetAdminAuthProfileQueryVariables
  >(GetAdminAuthProfileDocument, options);
}
export type GetAdminAuthProfileQueryHookResult = ReturnType<
  typeof useGetAdminAuthProfileQuery
>;
export type GetAdminAuthProfileLazyQueryHookResult = ReturnType<
  typeof useGetAdminAuthProfileLazyQuery
>;
export type GetAdminAuthProfileQueryResult = Apollo.QueryResult<
  GetAdminAuthProfileQuery,
  GetAdminAuthProfileQueryVariables
>;
export const AdminSignInDocument = gql`
  mutation adminSignIn($input: AdminSignInInput!) {
    adminSignIn(input: $input) {
      admin {
        ...AdminInfo
      }
      accessToken
      expiresIn
    }
  }
  ${AdminInfoFragmentDoc}
`;
export type AdminSignInMutationFn = Apollo.MutationFunction<
  AdminSignInMutation,
  AdminSignInMutationVariables
>;

/**
 * __useAdminSignInMutation__
 *
 * To run a mutation, you first call `useAdminSignInMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAdminSignInMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [adminSignInMutation, { data, loading, error }] = useAdminSignInMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAdminSignInMutation(
  baseOptions?: Apollo.MutationHookOptions<
    AdminSignInMutation,
    AdminSignInMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<AdminSignInMutation, AdminSignInMutationVariables>(
    AdminSignInDocument,
    options
  );
}
export type AdminSignInMutationHookResult = ReturnType<
  typeof useAdminSignInMutation
>;
export type AdminSignInMutationResult =
  Apollo.MutationResult<AdminSignInMutation>;
export type AdminSignInMutationOptions = Apollo.BaseMutationOptions<
  AdminSignInMutation,
  AdminSignInMutationVariables
>;
export const GetUserAuthProfileDocument = gql`
  query getUserAuthProfile {
    getUserAuthProfile {
      ...UserInfo
    }
  }
  ${UserInfoFragmentDoc}
`;

/**
 * __useGetUserAuthProfileQuery__
 *
 * To run a query within a React component, call `useGetUserAuthProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserAuthProfileQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserAuthProfileQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUserAuthProfileQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetUserAuthProfileQuery,
    GetUserAuthProfileQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetUserAuthProfileQuery,
    GetUserAuthProfileQueryVariables
  >(GetUserAuthProfileDocument, options);
}
export function useGetUserAuthProfileLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetUserAuthProfileQuery,
    GetUserAuthProfileQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetUserAuthProfileQuery,
    GetUserAuthProfileQueryVariables
  >(GetUserAuthProfileDocument, options);
}
export type GetUserAuthProfileQueryHookResult = ReturnType<
  typeof useGetUserAuthProfileQuery
>;
export type GetUserAuthProfileLazyQueryHookResult = ReturnType<
  typeof useGetUserAuthProfileLazyQuery
>;
export type GetUserAuthProfileQueryResult = Apollo.QueryResult<
  GetUserAuthProfileQuery,
  GetUserAuthProfileQueryVariables
>;
export const UserSignInDocument = gql`
  mutation userSignIn($input: LoginCredentialInput!) {
    userSignIn(input: $input) {
      ...AccessTokenInfo
    }
  }
  ${AccessTokenInfoFragmentDoc}
`;
export type UserSignInMutationFn = Apollo.MutationFunction<
  UserSignInMutation,
  UserSignInMutationVariables
>;

/**
 * __useUserSignInMutation__
 *
 * To run a mutation, you first call `useUserSignInMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUserSignInMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [userSignInMutation, { data, loading, error }] = useUserSignInMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUserSignInMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UserSignInMutation,
    UserSignInMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<UserSignInMutation, UserSignInMutationVariables>(
    UserSignInDocument,
    options
  );
}
export type UserSignInMutationHookResult = ReturnType<
  typeof useUserSignInMutation
>;
export type UserSignInMutationResult =
  Apollo.MutationResult<UserSignInMutation>;
export type UserSignInMutationOptions = Apollo.BaseMutationOptions<
  UserSignInMutation,
  UserSignInMutationVariables
>;
export const UserSignUpDocument = gql`
  mutation userSignUp(
    $auth: LoginCredentialInput!
    $input: StrictUserSignUpInput!
  ) {
    userSignUp(auth: $auth, input: $input) {
      ...AccessTokenInfo
    }
  }
  ${AccessTokenInfoFragmentDoc}
`;
export type UserSignUpMutationFn = Apollo.MutationFunction<
  UserSignUpMutation,
  UserSignUpMutationVariables
>;

/**
 * __useUserSignUpMutation__
 *
 * To run a mutation, you first call `useUserSignUpMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUserSignUpMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [userSignUpMutation, { data, loading, error }] = useUserSignUpMutation({
 *   variables: {
 *      auth: // value for 'auth'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUserSignUpMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UserSignUpMutation,
    UserSignUpMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<UserSignUpMutation, UserSignUpMutationVariables>(
    UserSignUpDocument,
    options
  );
}
export type UserSignUpMutationHookResult = ReturnType<
  typeof useUserSignUpMutation
>;
export type UserSignUpMutationResult =
  Apollo.MutationResult<UserSignUpMutation>;
export type UserSignUpMutationOptions = Apollo.BaseMutationOptions<
  UserSignUpMutation,
  UserSignUpMutationVariables
>;
export const UserForgotPasswordDocument = gql`
  mutation userForgotPassword($input: GeneralTokenRequestInput!) {
    userForgotPassword(input: $input)
  }
`;
export type UserForgotPasswordMutationFn = Apollo.MutationFunction<
  UserForgotPasswordMutation,
  UserForgotPasswordMutationVariables
>;

/**
 * __useUserForgotPasswordMutation__
 *
 * To run a mutation, you first call `useUserForgotPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUserForgotPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [userForgotPasswordMutation, { data, loading, error }] = useUserForgotPasswordMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUserForgotPasswordMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UserForgotPasswordMutation,
    UserForgotPasswordMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UserForgotPasswordMutation,
    UserForgotPasswordMutationVariables
  >(UserForgotPasswordDocument, options);
}
export type UserForgotPasswordMutationHookResult = ReturnType<
  typeof useUserForgotPasswordMutation
>;
export type UserForgotPasswordMutationResult =
  Apollo.MutationResult<UserForgotPasswordMutation>;
export type UserForgotPasswordMutationOptions = Apollo.BaseMutationOptions<
  UserForgotPasswordMutation,
  UserForgotPasswordMutationVariables
>;
export const BannerDocument = gql`
  query banner($id: ID!) {
    banner(id: $id) {
      ...BannerInfo
    }
  }
  ${BannerInfoFragmentDoc}
`;

/**
 * __useBannerQuery__
 *
 * To run a query within a React component, call `useBannerQuery` and pass it any options that fit your needs.
 * When your component renders, `useBannerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBannerQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useBannerQuery(
  baseOptions: Apollo.QueryHookOptions<BannerQuery, BannerQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<BannerQuery, BannerQueryVariables>(
    BannerDocument,
    options
  );
}
export function useBannerLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<BannerQuery, BannerQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<BannerQuery, BannerQueryVariables>(
    BannerDocument,
    options
  );
}
export type BannerQueryHookResult = ReturnType<typeof useBannerQuery>;
export type BannerLazyQueryHookResult = ReturnType<typeof useBannerLazyQuery>;
export type BannerQueryResult = Apollo.QueryResult<
  BannerQuery,
  BannerQueryVariables
>;
export const BannersDocument = gql`
  query banners(
    $paging: CursorPaging = { first: 10 }
    $filter: BannerFilter = {}
    $sorting: [BannerSort!] = []
  ) {
    banners(paging: $paging, filter: $filter, sorting: $sorting) {
      pageInfo {
        ...PageInfoFragment
      }
      edges {
        ...BannerEdge
      }
    }
  }
  ${PageInfoFragmentFragmentDoc}
  ${BannerEdgeFragmentDoc}
`;

/**
 * __useBannersQuery__
 *
 * To run a query within a React component, call `useBannersQuery` and pass it any options that fit your needs.
 * When your component renders, `useBannersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBannersQuery({
 *   variables: {
 *      paging: // value for 'paging'
 *      filter: // value for 'filter'
 *      sorting: // value for 'sorting'
 *   },
 * });
 */
export function useBannersQuery(
  baseOptions?: Apollo.QueryHookOptions<BannersQuery, BannersQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<BannersQuery, BannersQueryVariables>(
    BannersDocument,
    options
  );
}
export function useBannersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<BannersQuery, BannersQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<BannersQuery, BannersQueryVariables>(
    BannersDocument,
    options
  );
}
export type BannersQueryHookResult = ReturnType<typeof useBannersQuery>;
export type BannersLazyQueryHookResult = ReturnType<typeof useBannersLazyQuery>;
export type BannersQueryResult = Apollo.QueryResult<
  BannersQuery,
  BannersQueryVariables
>;
export const CreateOneBannerDocument = gql`
  mutation createOneBanner($input: CreateOneBannerInput!) {
    createOneBanner(input: $input) {
      ...BannerInfo
    }
  }
  ${BannerInfoFragmentDoc}
`;
export type CreateOneBannerMutationFn = Apollo.MutationFunction<
  CreateOneBannerMutation,
  CreateOneBannerMutationVariables
>;

/**
 * __useCreateOneBannerMutation__
 *
 * To run a mutation, you first call `useCreateOneBannerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOneBannerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOneBannerMutation, { data, loading, error }] = useCreateOneBannerMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateOneBannerMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateOneBannerMutation,
    CreateOneBannerMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateOneBannerMutation,
    CreateOneBannerMutationVariables
  >(CreateOneBannerDocument, options);
}
export type CreateOneBannerMutationHookResult = ReturnType<
  typeof useCreateOneBannerMutation
>;
export type CreateOneBannerMutationResult =
  Apollo.MutationResult<CreateOneBannerMutation>;
export type CreateOneBannerMutationOptions = Apollo.BaseMutationOptions<
  CreateOneBannerMutation,
  CreateOneBannerMutationVariables
>;
export const DeleteOneBannerDocument = gql`
  mutation deleteOneBanner($input: DeleteOneInput!) {
    deleteOneBanner(input: $input) {
      id
    }
  }
`;
export type DeleteOneBannerMutationFn = Apollo.MutationFunction<
  DeleteOneBannerMutation,
  DeleteOneBannerMutationVariables
>;

/**
 * __useDeleteOneBannerMutation__
 *
 * To run a mutation, you first call `useDeleteOneBannerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteOneBannerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteOneBannerMutation, { data, loading, error }] = useDeleteOneBannerMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteOneBannerMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteOneBannerMutation,
    DeleteOneBannerMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    DeleteOneBannerMutation,
    DeleteOneBannerMutationVariables
  >(DeleteOneBannerDocument, options);
}
export type DeleteOneBannerMutationHookResult = ReturnType<
  typeof useDeleteOneBannerMutation
>;
export type DeleteOneBannerMutationResult =
  Apollo.MutationResult<DeleteOneBannerMutation>;
export type DeleteOneBannerMutationOptions = Apollo.BaseMutationOptions<
  DeleteOneBannerMutation,
  DeleteOneBannerMutationVariables
>;
export const UpdateOneBannerDocument = gql`
  mutation updateOneBanner($input: UpdateOneBannerInput!) {
    updateOneBanner(input: $input) {
      name
      image
      link
    }
  }
`;
export type UpdateOneBannerMutationFn = Apollo.MutationFunction<
  UpdateOneBannerMutation,
  UpdateOneBannerMutationVariables
>;

/**
 * __useUpdateOneBannerMutation__
 *
 * To run a mutation, you first call `useUpdateOneBannerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOneBannerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOneBannerMutation, { data, loading, error }] = useUpdateOneBannerMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateOneBannerMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateOneBannerMutation,
    UpdateOneBannerMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdateOneBannerMutation,
    UpdateOneBannerMutationVariables
  >(UpdateOneBannerDocument, options);
}
export type UpdateOneBannerMutationHookResult = ReturnType<
  typeof useUpdateOneBannerMutation
>;
export type UpdateOneBannerMutationResult =
  Apollo.MutationResult<UpdateOneBannerMutation>;
export type UpdateOneBannerMutationOptions = Apollo.BaseMutationOptions<
  UpdateOneBannerMutation,
  UpdateOneBannerMutationVariables
>;
export const GenerateSignedUrlDocument = gql`
  mutation generateSignedUrl($input: UploadRequest!) {
    generateSignedUrl(input: $input) {
      uid
      signedUrl
    }
  }
`;
export type GenerateSignedUrlMutationFn = Apollo.MutationFunction<
  GenerateSignedUrlMutation,
  GenerateSignedUrlMutationVariables
>;

/**
 * __useGenerateSignedUrlMutation__
 *
 * To run a mutation, you first call `useGenerateSignedUrlMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useGenerateSignedUrlMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [generateSignedUrlMutation, { data, loading, error }] = useGenerateSignedUrlMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGenerateSignedUrlMutation(
  baseOptions?: Apollo.MutationHookOptions<
    GenerateSignedUrlMutation,
    GenerateSignedUrlMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    GenerateSignedUrlMutation,
    GenerateSignedUrlMutationVariables
  >(GenerateSignedUrlDocument, options);
}
export type GenerateSignedUrlMutationHookResult = ReturnType<
  typeof useGenerateSignedUrlMutation
>;
export type GenerateSignedUrlMutationResult =
  Apollo.MutationResult<GenerateSignedUrlMutation>;
export type GenerateSignedUrlMutationOptions = Apollo.BaseMutationOptions<
  GenerateSignedUrlMutation,
  GenerateSignedUrlMutationVariables
>;
