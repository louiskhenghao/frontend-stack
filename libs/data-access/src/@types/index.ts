export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** Cursor for paging through collections */
  ConnectionCursor: any;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSONObject: any;
};

export type AccessToken = {
  __typename?: 'AccessToken';
  accessToken: Scalars['String'];
  expiresIn: Scalars['Float'];
  refreshExpiresIn: Scalars['Float'];
  refreshToken: Scalars['String'];
};

export type ActiveCollection = {
  __typename?: 'ActiveCollection';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  name: Scalars['String'];
  shopType: ShopProfileType;
  updatedAt: Scalars['DateTime'];
};

export type ActiveProduct = {
  __typename?: 'ActiveProduct';
  categoryAttributes?: Maybe<Array<ProductCategoryAttribute>>;
  code?: Maybe<Scalars['String']>;
  condition?: Maybe<ProductConditionType>;
  coverImage?: Maybe<Scalars['String']>;
  coverVideo?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  deliveryEstimation?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  images?: Maybe<Array<ImageLink>>;
  name: Scalars['String'];
  priceRange: ProductPriceRange;
  productBrandId?: Maybe<Scalars['String']>;
  productCategoryId?: Maybe<Scalars['String']>;
  productVariants?: Maybe<Array<ActiveProductVariant>>;
  sellerShopId: Scalars['String'];
  shopCollectionProducts?: Maybe<Array<ShopCollectionProduct>>;
  slug?: Maybe<Scalars['String']>;
  status: ProductStatusType;
  totalInventory: Scalars['Float'];
  type: ProductType;
  updatedAt: Scalars['DateTime'];
  variantOptions?: Maybe<Array<ProductVariantOption>>;
};

export type ActiveProductVariant = {
  __typename?: 'ActiveProductVariant';
  countryCode?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  currency?: Maybe<Scalars['String']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  enabled: Scalars['Boolean'];
  id: Scalars['ID'];
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  options?: Maybe<Array<ProductVariantPairing>>;
  price?: Maybe<Scalars['Float']>;
  productId: Scalars['String'];
  sellerShopId: Scalars['String'];
  sku?: Maybe<Scalars['String']>;
  sold: Scalars['Float'];
  status?: Maybe<ProductStatusType>;
  stockOnHand?: Maybe<Scalars['Float']>;
  trackInventory: Scalars['Boolean'];
  updatedAt: Scalars['DateTime'];
  weight?: Maybe<Scalars['Float']>;
  weightUnit?: Maybe<WeightUnitType>;
};

export type ActiveShopCollection = {
  __typename?: 'ActiveShopCollection';
  collection?: Maybe<ActiveCollection>;
  collectionId?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  name: Scalars['String'];
  order?: Maybe<Scalars['Float']>;
  sellerShopId: Scalars['String'];
  shopCollectionProducts?: Maybe<Array<ActiveShopCollectionProduct>>;
  status: GeneralStatus;
  updatedAt: Scalars['DateTime'];
};

export type ActiveShopCollectionProduct = {
  __typename?: 'ActiveShopCollectionProduct';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  order?: Maybe<Scalars['Float']>;
  product?: Maybe<ActiveProduct>;
  productId: Scalars['String'];
  shopCollectionId: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type AddOrderItemInput = {
  notes?: InputMaybe<Scalars['String']>;
  productVariantId: Scalars['String'];
  quantity: Scalars['Float'];
};

export type AddShopItemOrderInput = {
  items: Array<AddOrderItemInput>;
  notes?: InputMaybe<Scalars['String']>;
  sellerShopId: Scalars['String'];
};

export type Admin = {
  __typename?: 'Admin';
  avatar?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  id: Scalars['ID'];
  phoneCode?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  role: AdminRoleType;
  updatedAt: Scalars['DateTime'];
};

export type AdminAggregateGroupBy = {
  __typename?: 'AdminAggregateGroupBy';
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  role?: Maybe<AdminRoleType>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type AdminChangePasswordInput = {
  id: Scalars['String'];
  newPassword: Scalars['String'];
  oldPassword: Scalars['String'];
};

export type AdminConnection = {
  __typename?: 'AdminConnection';
  /** Array of edges. */
  edges: Array<AdminEdge>;
  /** Paging information */
  pageInfo: PageInfo;
};

export type AdminCountAggregate = {
  __typename?: 'AdminCountAggregate';
  createdAt?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  role?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
};

export type AdminCreateInput = {
  avatar?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
  password: Scalars['String'];
  phoneCode?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  role: AdminRoleType;
};

export type AdminDeleteFilter = {
  and?: InputMaybe<Array<AdminDeleteFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  email?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<AdminDeleteFilter>>;
  role?: InputMaybe<AdminRoleTypeFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type AdminDeleteResponse = {
  __typename?: 'AdminDeleteResponse';
  avatar?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  phoneCode?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  role?: Maybe<AdminRoleType>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type AdminEdge = {
  __typename?: 'AdminEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the Admin */
  node: Admin;
};

export type AdminFilter = {
  and?: InputMaybe<Array<AdminFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  email?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<AdminFilter>>;
  role?: InputMaybe<AdminRoleTypeFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type AdminLoginPayload = {
  __typename?: 'AdminLoginPayload';
  accessToken: Scalars['String'];
  admin: Admin;
  expiresIn: Scalars['Float'];
};

export type AdminMaxAggregate = {
  __typename?: 'AdminMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  role?: Maybe<AdminRoleType>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type AdminMinAggregate = {
  __typename?: 'AdminMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  role?: Maybe<AdminRoleType>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type AdminPreference = {
  __typename?: 'AdminPreference';
  admin: Admin;
  adminId: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  key: PreferenceKey;
  updatedAt: Scalars['DateTime'];
  value: Scalars['String'];
};

export type AdminPreferenceAggregateGroupBy = {
  __typename?: 'AdminPreferenceAggregateGroupBy';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type AdminPreferenceConnection = {
  __typename?: 'AdminPreferenceConnection';
  /** Array of edges. */
  edges: Array<AdminPreferenceEdge>;
  /** Paging information */
  pageInfo: PageInfo;
};

export type AdminPreferenceCountAggregate = {
  __typename?: 'AdminPreferenceCountAggregate';
  createdAt?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
};

export type AdminPreferenceDeleteFilter = {
  and?: InputMaybe<Array<AdminPreferenceDeleteFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<AdminPreferenceDeleteFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type AdminPreferenceDeleteResponse = {
  __typename?: 'AdminPreferenceDeleteResponse';
  adminId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  key?: Maybe<PreferenceKey>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  value?: Maybe<Scalars['String']>;
};

export type AdminPreferenceEdge = {
  __typename?: 'AdminPreferenceEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the AdminPreference */
  node: AdminPreference;
};

export type AdminPreferenceFilter = {
  and?: InputMaybe<Array<AdminPreferenceFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<AdminPreferenceFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type AdminPreferenceFilterInput = {
  adminId?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<PreferenceKey>;
};

export type AdminPreferenceMaxAggregate = {
  __typename?: 'AdminPreferenceMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type AdminPreferenceMinAggregate = {
  __typename?: 'AdminPreferenceMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type AdminPreferenceSort = {
  direction: SortDirection;
  field: AdminPreferenceSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum AdminPreferenceSortFields {
  CreatedAt = 'createdAt',
  Id = 'id',
  UpdatedAt = 'updatedAt',
}

export type AdminPreferenceUpdateFilter = {
  and?: InputMaybe<Array<AdminPreferenceUpdateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<AdminPreferenceUpdateFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type AdminPreferenceUpdateInput = {
  adminId: Scalars['String'];
  key: PreferenceKey;
  value: Scalars['String'];
};

export type AdminPreferenceUpdateOwnInput = {
  adminId: Scalars['String'];
  id: Scalars['String'];
  key: PreferenceKey;
  value: Scalars['String'];
};

export enum AdminRoleType {
  Admin = 'ADMIN',
  Superadmin = 'SUPERADMIN',
}

export type AdminRoleTypeFilterComparison = {
  eq?: InputMaybe<AdminRoleType>;
  gt?: InputMaybe<AdminRoleType>;
  gte?: InputMaybe<AdminRoleType>;
  iLike?: InputMaybe<AdminRoleType>;
  in?: InputMaybe<Array<AdminRoleType>>;
  is?: InputMaybe<Scalars['Boolean']>;
  isNot?: InputMaybe<Scalars['Boolean']>;
  like?: InputMaybe<AdminRoleType>;
  lt?: InputMaybe<AdminRoleType>;
  lte?: InputMaybe<AdminRoleType>;
  neq?: InputMaybe<AdminRoleType>;
  notILike?: InputMaybe<AdminRoleType>;
  notIn?: InputMaybe<Array<AdminRoleType>>;
  notLike?: InputMaybe<AdminRoleType>;
};

export type AdminSignInInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type AdminSort = {
  direction: SortDirection;
  field: AdminSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum AdminSortFields {
  CreatedAt = 'createdAt',
  Email = 'email',
  Id = 'id',
  Role = 'role',
  UpdatedAt = 'updatedAt',
}

export type AdminUpdateFilter = {
  and?: InputMaybe<Array<AdminUpdateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  email?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<AdminUpdateFilter>>;
  role?: InputMaybe<AdminRoleTypeFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type AdminUpdateInput = {
  avatar?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  phoneCode?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<AdminRoleType>;
};

export type AdminUpdateProfileInput = {
  avatar?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  phoneCode?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
};

export type Announcement = {
  __typename?: 'Announcement';
  author: Scalars['String'];
  content: Scalars['String'];
  coverImage?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  endDateTime?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  publishDateTime?: Maybe<Scalars['DateTime']>;
  status: AnnouncementStatus;
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type AnnouncementAggregateGroupBy = {
  __typename?: 'AnnouncementAggregateGroupBy';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type AnnouncementConnection = {
  __typename?: 'AnnouncementConnection';
  /** Array of edges. */
  edges: Array<AnnouncementEdge>;
  /** Paging information */
  pageInfo: PageInfo;
};

export type AnnouncementCountAggregate = {
  __typename?: 'AnnouncementCountAggregate';
  createdAt?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
};

export type AnnouncementCreateInput = {
  author: Scalars['String'];
  content: Scalars['String'];
  coverImage?: InputMaybe<Scalars['String']>;
  endDateTime?: InputMaybe<Scalars['DateTime']>;
  publishDateTime?: InputMaybe<Scalars['DateTime']>;
  status: Scalars['String'];
  title: Scalars['String'];
};

export type AnnouncementDeleteFilter = {
  and?: InputMaybe<Array<AnnouncementDeleteFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<AnnouncementDeleteFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type AnnouncementDeleteResponse = {
  __typename?: 'AnnouncementDeleteResponse';
  author?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  coverImage?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  endDateTime?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  publishDateTime?: Maybe<Scalars['DateTime']>;
  status?: Maybe<AnnouncementStatus>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type AnnouncementEdge = {
  __typename?: 'AnnouncementEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the Announcement */
  node: Announcement;
};

export type AnnouncementFilter = {
  and?: InputMaybe<Array<AnnouncementFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<AnnouncementFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type AnnouncementMaxAggregate = {
  __typename?: 'AnnouncementMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type AnnouncementMinAggregate = {
  __typename?: 'AnnouncementMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type AnnouncementSort = {
  direction: SortDirection;
  field: AnnouncementSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum AnnouncementSortFields {
  CreatedAt = 'createdAt',
  Id = 'id',
  UpdatedAt = 'updatedAt',
}

export enum AnnouncementStatus {
  Archived = 'ARCHIVED',
  Draft = 'DRAFT',
  Published = 'PUBLISHED',
}

export type AnnouncementUpdateFilter = {
  and?: InputMaybe<Array<AnnouncementUpdateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<AnnouncementUpdateFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type AnnouncementUpdateInput = {
  author?: InputMaybe<Scalars['String']>;
  content?: InputMaybe<Scalars['String']>;
  coverImage?: InputMaybe<Scalars['String']>;
  endDateTime?: InputMaybe<Scalars['DateTime']>;
  publishDateTime?: InputMaybe<Scalars['DateTime']>;
  status?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type Area = {
  __typename?: 'Area';
  label?: Maybe<Scalars['String']>;
  meta?: Maybe<Array<AreaMeta>>;
  rule: ZoneType;
  value?: Maybe<Scalars['String']>;
  values?: Maybe<Array<Scalars['String']>>;
};

export type AreaInput = {
  label?: InputMaybe<Scalars['String']>;
  meta?: InputMaybe<Array<AreaMetaInput>>;
  rule: ZoneType;
  value?: InputMaybe<Scalars['String']>;
  values?: InputMaybe<Array<Scalars['String']>>;
};

export type AreaMeta = {
  __typename?: 'AreaMeta';
  label?: Maybe<Scalars['String']>;
  rule: ZoneType;
  value?: Maybe<Scalars['String']>;
  values?: Maybe<Array<Scalars['String']>>;
};

export type AreaMetaInput = {
  label?: InputMaybe<Scalars['String']>;
  rule: ZoneType;
  value?: InputMaybe<Scalars['String']>;
  values?: InputMaybe<Array<Scalars['String']>>;
};

export type ArrangeDropOffInput = {
  id: Scalars['String'];
  orderItemIds: Array<Scalars['String']>;
};

export type AttributeInput = {
  attributeValue: ProductAttributeValueInput;
  id: Scalars['String'];
  key?: InputMaybe<Scalars['String']>;
  label?: InputMaybe<Scalars['String']>;
};

export type Banner = {
  __typename?: 'Banner';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  image: Scalars['String'];
  link?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type BannerAggregateGroupBy = {
  __typename?: 'BannerAggregateGroupBy';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type BannerConnection = {
  __typename?: 'BannerConnection';
  /** Array of edges. */
  edges: Array<BannerEdge>;
  /** Paging information */
  pageInfo: PageInfo;
};

export type BannerCountAggregate = {
  __typename?: 'BannerCountAggregate';
  createdAt?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
};

export type BannerCreateInput = {
  image: Scalars['String'];
  link?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
};

export type BannerDeleteFilter = {
  and?: InputMaybe<Array<BannerDeleteFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<BannerDeleteFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type BannerDeleteResponse = {
  __typename?: 'BannerDeleteResponse';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  image?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type BannerEdge = {
  __typename?: 'BannerEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the Banner */
  node: Banner;
};

export type BannerFilter = {
  and?: InputMaybe<Array<BannerFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<BannerFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type BannerMaxAggregate = {
  __typename?: 'BannerMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type BannerMinAggregate = {
  __typename?: 'BannerMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type BannerSort = {
  direction: SortDirection;
  field: BannerSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum BannerSortFields {
  CreatedAt = 'createdAt',
  Id = 'id',
  Name = 'name',
  UpdatedAt = 'updatedAt',
}

export type BannerUpdateFilter = {
  and?: InputMaybe<Array<BannerUpdateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<BannerUpdateFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type BannerUpdateInput = {
  id: Scalars['String'];
  image?: InputMaybe<Scalars['String']>;
  link?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type BasicProductDto = {
  __typename?: 'BasicProductDto';
  categoryAttributes?: Maybe<Array<ProductCategoryAttribute>>;
  code: Scalars['String'];
  coverImage?: Maybe<Scalars['String']>;
  coverVideo?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  images?: Maybe<Array<ImageLink>>;
  name: Scalars['String'];
};

export type BooleanFieldComparison = {
  is?: InputMaybe<Scalars['Boolean']>;
  isNot?: InputMaybe<Scalars['Boolean']>;
};

export enum CancelRefundReviewBy {
  Admin = 'ADMIN',
  Seller = 'SELLER',
  System = 'SYSTEM',
}

export enum CancelRefundStatus {
  Approve = 'APPROVE',
  Complete = 'COMPLETE',
  Pending = 'PENDING',
  Processing = 'PROCESSING',
  Reject = 'REJECT',
}

export type CancelRefundStatusFilterComparison = {
  eq?: InputMaybe<CancelRefundStatus>;
  gt?: InputMaybe<CancelRefundStatus>;
  gte?: InputMaybe<CancelRefundStatus>;
  iLike?: InputMaybe<CancelRefundStatus>;
  in?: InputMaybe<Array<CancelRefundStatus>>;
  is?: InputMaybe<Scalars['Boolean']>;
  isNot?: InputMaybe<Scalars['Boolean']>;
  like?: InputMaybe<CancelRefundStatus>;
  lt?: InputMaybe<CancelRefundStatus>;
  lte?: InputMaybe<CancelRefundStatus>;
  neq?: InputMaybe<CancelRefundStatus>;
  notILike?: InputMaybe<CancelRefundStatus>;
  notIn?: InputMaybe<Array<CancelRefundStatus>>;
  notLike?: InputMaybe<CancelRefundStatus>;
};

export type CategoryAttribute = {
  __typename?: 'CategoryAttribute';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  key: Scalars['String'];
  label: Scalars['String'];
  options: Array<CategoryAttributeValue>;
  productAttribute: ProductAttribute;
  productCategory: ProductCategory;
  productCategoryId: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type CategoryAttributeAggregateGroupBy = {
  __typename?: 'CategoryAttributeAggregateGroupBy';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  key?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  productCategoryId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CategoryAttributeConnection = {
  __typename?: 'CategoryAttributeConnection';
  /** Array of edges. */
  edges: Array<CategoryAttributeEdge>;
  /** Paging information */
  pageInfo: PageInfo;
};

export type CategoryAttributeCountAggregate = {
  __typename?: 'CategoryAttributeCountAggregate';
  createdAt?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  key?: Maybe<Scalars['Int']>;
  label?: Maybe<Scalars['Int']>;
  productCategoryId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
};

export type CategoryAttributeCreateInput = {
  key?: InputMaybe<Scalars['String']>;
  label?: InputMaybe<Scalars['String']>;
  options: Array<ProductAttributeValueInput>;
  productAttributeId: Scalars['String'];
  productCategoryId: Scalars['String'];
};

export type CategoryAttributeEdge = {
  __typename?: 'CategoryAttributeEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the CategoryAttribute */
  node: CategoryAttribute;
};

export type CategoryAttributeFilter = {
  and?: InputMaybe<Array<CategoryAttributeFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  key?: InputMaybe<StringFieldComparison>;
  label?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<CategoryAttributeFilter>>;
  productCategoryId?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type CategoryAttributeMaxAggregate = {
  __typename?: 'CategoryAttributeMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  key?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  productCategoryId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CategoryAttributeMinAggregate = {
  __typename?: 'CategoryAttributeMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  key?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  productCategoryId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CategoryAttributeSort = {
  direction: SortDirection;
  field: CategoryAttributeSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum CategoryAttributeSortFields {
  CreatedAt = 'createdAt',
  Id = 'id',
  Key = 'key',
  Label = 'label',
  ProductCategoryId = 'productCategoryId',
  UpdatedAt = 'updatedAt',
}

export type CategoryAttributeUpdateFilter = {
  and?: InputMaybe<Array<CategoryAttributeUpdateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  key?: InputMaybe<StringFieldComparison>;
  label?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<CategoryAttributeUpdateFilter>>;
  productCategoryId?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type CategoryAttributeUpdateInput = {
  id: Scalars['String'];
  key?: InputMaybe<Scalars['String']>;
  label?: InputMaybe<Scalars['String']>;
  options?: InputMaybe<Array<ProductAttributeValueInput>>;
  productAttributeId?: InputMaybe<Scalars['String']>;
  productCategoryId?: InputMaybe<Scalars['String']>;
};

export type CategoryAttributeValue = {
  __typename?: 'CategoryAttributeValue';
  name: Scalars['String'];
  value: Scalars['String'];
};

export type ChangeImportantUserInfoInput = {
  newPassword?: InputMaybe<Scalars['String']>;
  /**
   *
   *     This is optional.
   *     It could be email / phone number / username / IC number / student ID
   *
   */
  secondaryUsername?: InputMaybe<Scalars['String']>;
  /**
   *
   *     This could be the 'email' itself, 'IC Number', 'Phone Number', 'username'.
   *
   *     The basic idea of having 'username' field is to make no assumption on the business logic.
   *     It's up to the business logic to decide what is 'username' refer to and what is 'secondaryUsername' refer to.
   *
   */
  username?: InputMaybe<Scalars['String']>;
};

export type CityPostcodes = {
  __typename?: 'CityPostcodes';
  label: Scalars['String'];
  postcode?: Maybe<Array<Scalars['String']>>;
  value: Scalars['String'];
};

export type Collection = {
  __typename?: 'Collection';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  name: Scalars['String'];
  shopType: ShopProfileType;
  updatedAt: Scalars['DateTime'];
};

export type Country = {
  __typename?: 'Country';
  avatar?: Maybe<Scalars['String']>;
  code: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  name: Scalars['String'];
  status: GeneralStatus;
  updatedAt: Scalars['DateTime'];
};

export type CountryAggregateGroupBy = {
  __typename?: 'CountryAggregateGroupBy';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CountryConnection = {
  __typename?: 'CountryConnection';
  /** Array of edges. */
  edges: Array<CountryEdge>;
  /** Paging information */
  pageInfo: PageInfo;
};

export type CountryCountAggregate = {
  __typename?: 'CountryCountAggregate';
  createdAt?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
};

export type CountryCreateInput = {
  avatar?: InputMaybe<Scalars['String']>;
  code: Scalars['String'];
  name: Scalars['String'];
  status?: InputMaybe<GeneralStatus>;
};

export type CountryDeleteFilter = {
  and?: InputMaybe<Array<CountryDeleteFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<CountryDeleteFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type CountryDeleteResponse = {
  __typename?: 'CountryDeleteResponse';
  avatar?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  status?: Maybe<GeneralStatus>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CountryEdge = {
  __typename?: 'CountryEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the Country */
  node: Country;
};

export type CountryFilter = {
  and?: InputMaybe<Array<CountryFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<CountryFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type CountryFilterInput = {
  code?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<GeneralStatus>;
};

export type CountryMaxAggregate = {
  __typename?: 'CountryMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CountryMinAggregate = {
  __typename?: 'CountryMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CountrySort = {
  direction: SortDirection;
  field: CountrySortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum CountrySortFields {
  CreatedAt = 'createdAt',
  Id = 'id',
  UpdatedAt = 'updatedAt',
}

export type CountryStates = {
  __typename?: 'CountryStates';
  countryCode: Scalars['String'];
  latitude?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  slug?: Maybe<Scalars['String']>;
};

export type CountryUpdateFilter = {
  and?: InputMaybe<Array<CountryUpdateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<CountryUpdateFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type CountryUpdateInput = {
  avatar?: InputMaybe<Scalars['String']>;
  code?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  name?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<GeneralStatus>;
};

export type CoverageInput = {
  countryCode: Scalars['String'];
};

export type CreateManyAnnouncementsInput = {
  /** Array of records to create */
  announcements: Array<AnnouncementCreateInput>;
};

export type CreateManyBannersInput = {
  /** Array of records to create */
  banners: Array<BannerCreateInput>;
};

export type CreateManyCountriesInput = {
  /** Array of records to create */
  countries: Array<CountryCreateInput>;
};

export type CreateManyCurrenciesInput = {
  /** Array of records to create */
  currencies: Array<CurrencyCreateInput>;
};

export type CreateManyFaqsInput = {
  /** Array of records to create */
  faqs: Array<FaqCreateInput>;
};

export type CreateManyProductAttributesInput = {
  /** Array of records to create */
  productAttributes: Array<ProductAttributeCreateInput>;
};

export type CreateManyProductBrandsInput = {
  /** Array of records to create */
  productBrands: Array<ProductBrandCreateInput>;
};

export type CreateManyProductCategoriesInput = {
  /** Array of records to create */
  productCategories: Array<ProductCategoryCreateInput>;
};

export type CreateManyShippingCouriersInput = {
  /** Array of records to create */
  shippingCouriers: Array<ShippingCourierCreateInput>;
};

export type CreateManyShippingMethodsInput = {
  /** Array of records to create */
  shippingMethods: Array<ShippingMethodCreateInput>;
};

export type CreateManyShippingZoneCoveragesInput = {
  /** Array of records to create */
  shippingZoneCoverages: Array<ShippingZoneCoverageCreateInput>;
};

export type CreateManyShippingZonesInput = {
  /** Array of records to create */
  shippingZones: Array<ShippingZoneCreateInput>;
};

export type CreateOneAnnouncementInput = {
  /** The record to create */
  announcement: AnnouncementCreateInput;
};

export type CreateOneBannerInput = {
  /** The record to create */
  banner: BannerCreateInput;
};

export type CreateOneCountryInput = {
  /** The record to create */
  country: CountryCreateInput;
};

export type CreateOneCurrencyInput = {
  /** The record to create */
  currency: CurrencyCreateInput;
};

export type CreateOneFaqInput = {
  /** The record to create */
  faq: FaqCreateInput;
};

export type CreateOneFeedbackInput = {
  /** The record to create */
  feedback: FeedbackCreateInput;
};

export type CreateOneMiscInput = {
  /** The record to create */
  misc: MiscCreateInput;
};

export type CreateOneProductAttributeInput = {
  /** The record to create */
  productAttribute: ProductAttributeCreateInput;
};

export type CreateOneProductBrandInput = {
  /** The record to create */
  productBrand: ProductBrandCreateInput;
};

export type CreateOneProductCategoryInput = {
  /** The record to create */
  productCategory: ProductCategoryCreateInput;
};

export type CreateOneShippingCourierInput = {
  /** The record to create */
  shippingCourier: ShippingCourierCreateInput;
};

export type CreateOneShippingMethodInput = {
  /** The record to create */
  shippingMethod: ShippingMethodCreateInput;
};

export type CreateOneShippingZoneCoverageInput = {
  /** The record to create */
  shippingZoneCoverage: ShippingZoneCoverageCreateInput;
};

export type CreateOneShippingZoneInput = {
  /** The record to create */
  shippingZone: ShippingZoneCreateInput;
};

export type CreateOneShopCollectionInput = {
  /** The record to create */
  shopCollection: ShopCollectionCreateInput;
};

export type CreateOneShopeeStoreInput = {
  /** The record to create */
  shopeeStore: CreateShopeeStoreInput;
};

export type CreateOneUserDeviceInput = {
  /** The record to create */
  userDevice: UserDeviceCreateInput;
};

export type CreateShopeeJobSubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: ShopeeJobSubscriptionFilter;
};

export type CreateShopeeReportingSubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: ShopeeReportingSubscriptionFilter;
};

export type CreateShopeeStoreInput = {
  name: Scalars['String'];
  sellerShopId?: InputMaybe<Scalars['String']>;
};

export type Currency = {
  __typename?: 'Currency';
  code: Scalars['String'];
  countryCode: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  name: Scalars['String'];
  status: GeneralStatus;
  updatedAt: Scalars['DateTime'];
};

export type CurrencyAggregateGroupBy = {
  __typename?: 'CurrencyAggregateGroupBy';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CurrencyConnection = {
  __typename?: 'CurrencyConnection';
  /** Array of edges. */
  edges: Array<CurrencyEdge>;
  /** Paging information */
  pageInfo: PageInfo;
};

export type CurrencyCountAggregate = {
  __typename?: 'CurrencyCountAggregate';
  createdAt?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
};

export type CurrencyCreateInput = {
  code: Scalars['String'];
  countryCode: Scalars['String'];
  name: Scalars['String'];
  status?: InputMaybe<GeneralStatus>;
};

export type CurrencyDeleteFilter = {
  and?: InputMaybe<Array<CurrencyDeleteFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<CurrencyDeleteFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type CurrencyDeleteResponse = {
  __typename?: 'CurrencyDeleteResponse';
  code?: Maybe<Scalars['String']>;
  countryCode?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  status?: Maybe<GeneralStatus>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CurrencyEdge = {
  __typename?: 'CurrencyEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the Currency */
  node: Currency;
};

export type CurrencyFilter = {
  and?: InputMaybe<Array<CurrencyFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<CurrencyFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type CurrencyFilterInput = {
  code?: InputMaybe<Scalars['String']>;
  countryCode?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<GeneralStatus>;
};

export type CurrencyMaxAggregate = {
  __typename?: 'CurrencyMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CurrencyMinAggregate = {
  __typename?: 'CurrencyMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type CurrencySort = {
  direction: SortDirection;
  field: CurrencySortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum CurrencySortFields {
  CreatedAt = 'createdAt',
  Id = 'id',
  UpdatedAt = 'updatedAt',
}

export type CurrencyUpdateFilter = {
  and?: InputMaybe<Array<CurrencyUpdateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<CurrencyUpdateFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type CurrencyUpdateInput = {
  code?: InputMaybe<Scalars['String']>;
  countryCode?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  name?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<GeneralStatus>;
};

export type CursorPaging = {
  /** Paginate after opaque cursor */
  after?: InputMaybe<Scalars['ConnectionCursor']>;
  /** Paginate before opaque cursor */
  before?: InputMaybe<Scalars['ConnectionCursor']>;
  /** Paginate first */
  first?: InputMaybe<Scalars['Int']>;
  /** Paginate last */
  last?: InputMaybe<Scalars['Int']>;
};

export type DateFieldComparison = {
  between?: InputMaybe<DateFieldComparisonBetween>;
  eq?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  is?: InputMaybe<Scalars['Boolean']>;
  isNot?: InputMaybe<Scalars['Boolean']>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  neq?: InputMaybe<Scalars['DateTime']>;
  notBetween?: InputMaybe<DateFieldComparisonBetween>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type DateFieldComparisonBetween = {
  lower: Scalars['DateTime'];
  upper: Scalars['DateTime'];
};

export enum DateFilterType {
  Lastmonth = 'LASTMONTH',
  Lastsevendays = 'LASTSEVENDAYS',
  Lastweek = 'LASTWEEK',
  Lastyear = 'LASTYEAR',
  Thismonth = 'THISMONTH',
  Thisweek = 'THISWEEK',
}

export type DeleteManyAdminPreferencesInput = {
  /** Filter to find records to delete */
  filter: AdminPreferenceDeleteFilter;
};

export type DeleteManyAdminsInput = {
  /** Filter to find records to delete */
  filter: AdminDeleteFilter;
};

export type DeleteManyAnnouncementsInput = {
  /** Filter to find records to delete */
  filter: AnnouncementDeleteFilter;
};

export type DeleteManyBannersInput = {
  /** Filter to find records to delete */
  filter: BannerDeleteFilter;
};

export type DeleteManyCountriesInput = {
  /** Filter to find records to delete */
  filter: CountryDeleteFilter;
};

export type DeleteManyCurrenciesInput = {
  /** Filter to find records to delete */
  filter: CurrencyDeleteFilter;
};

export type DeleteManyFaqsInput = {
  /** Filter to find records to delete */
  filter: FaqDeleteFilter;
};

export type DeleteManyFeedbacksInput = {
  /** Filter to find records to delete */
  filter: FeedbackDeleteFilter;
};

export type DeleteManyMiscsInput = {
  /** Filter to find records to delete */
  filter: MiscDeleteFilter;
};

export type DeleteManyOrderCancelsInput = {
  /** Filter to find records to delete */
  filter: OrderCancelDeleteFilter;
};

export type DeleteManyOrderFormsInput = {
  /** Filter to find records to delete */
  filter: OrderFormDeleteFilter;
};

export type DeleteManyOrderRefundsInput = {
  /** Filter to find records to delete */
  filter: OrderRefundDeleteFilter;
};

export type DeleteManyPaymentsInput = {
  /** Filter to find records to delete */
  filter: PaymentDeleteFilter;
};

export type DeleteManyProductAttributesInput = {
  /** Filter to find records to delete */
  filter: ProductAttributeDeleteFilter;
};

export type DeleteManyProductBrandsInput = {
  /** Filter to find records to delete */
  filter: ProductBrandDeleteFilter;
};

export type DeleteManyResponse = {
  __typename?: 'DeleteManyResponse';
  /** The number of records deleted. */
  deletedCount: Scalars['Int'];
};

export type DeleteManySellerShopsInput = {
  /** Filter to find records to delete */
  filter: SellerShopDeleteFilter;
};

export type DeleteManyShippingCouriersInput = {
  /** Filter to find records to delete */
  filter: ShippingCourierDeleteFilter;
};

export type DeleteManyShippingMethodsInput = {
  /** Filter to find records to delete */
  filter: ShippingMethodDeleteFilter;
};

export type DeleteManyShippingPickupsInput = {
  /** Filter to find records to delete */
  filter: ShippingPickupDeleteFilter;
};

export type DeleteManyShippingZoneCoveragesInput = {
  /** Filter to find records to delete */
  filter: ShippingZoneCoverageDeleteFilter;
};

export type DeleteManyShippingZonesInput = {
  /** Filter to find records to delete */
  filter: ShippingZoneDeleteFilter;
};

export type DeleteManyShopeeStoresInput = {
  /** Filter to find records to delete */
  filter: ShopeeStoreDeleteFilter;
};

export type DeleteManyUserPreferencesInput = {
  /** Filter to find records to delete */
  filter: UserPreferenceDeleteFilter;
};

export type DeleteManyUsersInput = {
  /** Filter to find records to delete */
  filter: UserDeleteFilter;
};

export type DeleteOneInput = {
  /** The id of the record to delete. */
  id: Scalars['ID'];
};

export enum DeliveryMethod {
  Delivery = 'DELIVERY',
  Pickup = 'PICKUP',
}

export type DownloadInvoiceInput = {
  orderNumber: Scalars['String'];
  phoneNumber: Scalars['String'];
  sellerShopId: Scalars['String'];
  username: Scalars['String'];
};

export type Faq = {
  __typename?: 'Faq';
  answer?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  question: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type FaqAggregateGroupBy = {
  __typename?: 'FaqAggregateGroupBy';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type FaqConnection = {
  __typename?: 'FaqConnection';
  /** Array of edges. */
  edges: Array<FaqEdge>;
  /** Paging information */
  pageInfo: PageInfo;
};

export type FaqCountAggregate = {
  __typename?: 'FaqCountAggregate';
  createdAt?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
};

export type FaqCreateInput = {
  answer?: InputMaybe<Scalars['String']>;
  question: Scalars['String'];
};

export type FaqDeleteFilter = {
  and?: InputMaybe<Array<FaqDeleteFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<FaqDeleteFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type FaqDeleteResponse = {
  __typename?: 'FaqDeleteResponse';
  answer?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  question?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type FaqEdge = {
  __typename?: 'FaqEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the Faq */
  node: Faq;
};

export type FaqFilter = {
  and?: InputMaybe<Array<FaqFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<FaqFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type FaqMaxAggregate = {
  __typename?: 'FaqMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type FaqMinAggregate = {
  __typename?: 'FaqMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type FaqSort = {
  direction: SortDirection;
  field: FaqSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum FaqSortFields {
  CreatedAt = 'createdAt',
  Id = 'id',
  UpdatedAt = 'updatedAt',
}

export type FaqUpdateFilter = {
  and?: InputMaybe<Array<FaqUpdateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<FaqUpdateFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type FaqUpdateInput = {
  answer?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  question?: InputMaybe<Scalars['String']>;
};

export type Feedback = {
  __typename?: 'Feedback';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  message: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  user: User;
  userId: Scalars['String'];
};

export type FeedbackAggregateGroupBy = {
  __typename?: 'FeedbackAggregateGroupBy';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type FeedbackConnection = {
  __typename?: 'FeedbackConnection';
  /** Array of edges. */
  edges: Array<FeedbackEdge>;
  /** Paging information */
  pageInfo: PageInfo;
};

export type FeedbackCountAggregate = {
  __typename?: 'FeedbackCountAggregate';
  createdAt?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
};

export type FeedbackCreateInput = {
  message: Scalars['String'];
  userId: Scalars['String'];
};

export type FeedbackDeleteFilter = {
  and?: InputMaybe<Array<FeedbackDeleteFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<FeedbackDeleteFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type FeedbackDeleteResponse = {
  __typename?: 'FeedbackDeleteResponse';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  message?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['String']>;
};

export type FeedbackEdge = {
  __typename?: 'FeedbackEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the Feedback */
  node: Feedback;
};

export type FeedbackFilter = {
  and?: InputMaybe<Array<FeedbackFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<FeedbackFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type FeedbackMaxAggregate = {
  __typename?: 'FeedbackMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type FeedbackMinAggregate = {
  __typename?: 'FeedbackMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type FeedbackSort = {
  direction: SortDirection;
  field: FeedbackSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum FeedbackSortFields {
  CreatedAt = 'createdAt',
  Id = 'id',
  UpdatedAt = 'updatedAt',
}

export type FeedbackUpdateFilter = {
  and?: InputMaybe<Array<FeedbackUpdateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<FeedbackUpdateFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type FeedbackUpdateInput = {
  message: Scalars['String'];
};

export type Fulfilment = {
  __typename?: 'Fulfilment';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  isReceived?: Maybe<Scalars['Boolean']>;
  notes?: Maybe<Scalars['String']>;
  order: Order;
  orderId: Scalars['String'];
  orderItems: Array<OrderItem>;
  referenceNumber?: Maybe<Scalars['String']>;
  sellerShop: SellerShop;
  sellerShopId: Scalars['String'];
  shippingDate?: Maybe<Scalars['DateTime']>;
  status: FulfilmentStatusType;
  trackingNumber?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

export type FulfilmentOrderItemsArgs = {
  filter?: InputMaybe<OrderItemFilter>;
  sorting?: InputMaybe<Array<OrderItemSort>>;
};

export type FulfilmentAggregateFilter = {
  and?: InputMaybe<Array<FulfilmentAggregateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  isReceived?: InputMaybe<BooleanFieldComparison>;
  or?: InputMaybe<Array<FulfilmentAggregateFilter>>;
  orderId?: InputMaybe<StringFieldComparison>;
  referenceNumber?: InputMaybe<StringFieldComparison>;
  sellerShopId?: InputMaybe<StringFieldComparison>;
  shippingDate?: InputMaybe<DateFieldComparison>;
  status?: InputMaybe<FulfilmentStatusTypeFilterComparison>;
  trackingNumber?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type FulfilmentAggregateGroupBy = {
  __typename?: 'FulfilmentAggregateGroupBy';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  isReceived?: Maybe<Scalars['Boolean']>;
  orderId?: Maybe<Scalars['String']>;
  referenceNumber?: Maybe<Scalars['String']>;
  sellerShopId?: Maybe<Scalars['String']>;
  shippingDate?: Maybe<Scalars['DateTime']>;
  status?: Maybe<FulfilmentStatusType>;
  trackingNumber?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type FulfilmentConnection = {
  __typename?: 'FulfilmentConnection';
  /** Array of edges. */
  edges: Array<FulfilmentEdge>;
  /** Paging information */
  pageInfo: PageInfo;
};

export type FulfilmentCountAggregate = {
  __typename?: 'FulfilmentCountAggregate';
  createdAt?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  isReceived?: Maybe<Scalars['Int']>;
  orderId?: Maybe<Scalars['Int']>;
  referenceNumber?: Maybe<Scalars['Int']>;
  sellerShopId?: Maybe<Scalars['Int']>;
  shippingDate?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
  trackingNumber?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
};

export type FulfilmentCreateInput = {
  id?: InputMaybe<Scalars['String']>;
  isReceived?: InputMaybe<Scalars['Boolean']>;
  orderId?: InputMaybe<Scalars['String']>;
  orderItems?: InputMaybe<Array<OrderItemCreateInput>>;
  referenceNumber?: InputMaybe<Scalars['String']>;
  sellerShopId?: InputMaybe<Scalars['String']>;
  shippingDate?: InputMaybe<Scalars['DateTime']>;
  status?: InputMaybe<FulfilmentStatusType>;
  trackingNumber?: InputMaybe<Scalars['String']>;
};

export type FulfilmentEdge = {
  __typename?: 'FulfilmentEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the Fulfilment */
  node: Fulfilment;
};

export type FulfilmentFilter = {
  and?: InputMaybe<Array<FulfilmentFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  isReceived?: InputMaybe<BooleanFieldComparison>;
  or?: InputMaybe<Array<FulfilmentFilter>>;
  orderId?: InputMaybe<StringFieldComparison>;
  referenceNumber?: InputMaybe<StringFieldComparison>;
  sellerShopId?: InputMaybe<StringFieldComparison>;
  shippingDate?: InputMaybe<DateFieldComparison>;
  status?: InputMaybe<FulfilmentStatusTypeFilterComparison>;
  trackingNumber?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type FulfilmentMaxAggregate = {
  __typename?: 'FulfilmentMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  orderId?: Maybe<Scalars['String']>;
  referenceNumber?: Maybe<Scalars['String']>;
  sellerShopId?: Maybe<Scalars['String']>;
  shippingDate?: Maybe<Scalars['DateTime']>;
  status?: Maybe<FulfilmentStatusType>;
  trackingNumber?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type FulfilmentMinAggregate = {
  __typename?: 'FulfilmentMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  orderId?: Maybe<Scalars['String']>;
  referenceNumber?: Maybe<Scalars['String']>;
  sellerShopId?: Maybe<Scalars['String']>;
  shippingDate?: Maybe<Scalars['DateTime']>;
  status?: Maybe<FulfilmentStatusType>;
  trackingNumber?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type FulfilmentSort = {
  direction: SortDirection;
  field: FulfilmentSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum FulfilmentSortFields {
  CreatedAt = 'createdAt',
  Id = 'id',
  IsReceived = 'isReceived',
  OrderId = 'orderId',
  ReferenceNumber = 'referenceNumber',
  SellerShopId = 'sellerShopId',
  ShippingDate = 'shippingDate',
  Status = 'status',
  TrackingNumber = 'trackingNumber',
  UpdatedAt = 'updatedAt',
}

export enum FulfilmentStatusType {
  Cancelled = 'CANCELLED',
  Delivered = 'DELIVERED',
  OrderToShip = 'ORDER_TO_SHIP',
  ReadyToShip = 'READY_TO_SHIP',
  Shipped = 'SHIPPED',
}

export type FulfilmentStatusTypeFilterComparison = {
  eq?: InputMaybe<FulfilmentStatusType>;
  gt?: InputMaybe<FulfilmentStatusType>;
  gte?: InputMaybe<FulfilmentStatusType>;
  iLike?: InputMaybe<FulfilmentStatusType>;
  in?: InputMaybe<Array<FulfilmentStatusType>>;
  is?: InputMaybe<Scalars['Boolean']>;
  isNot?: InputMaybe<Scalars['Boolean']>;
  like?: InputMaybe<FulfilmentStatusType>;
  lt?: InputMaybe<FulfilmentStatusType>;
  lte?: InputMaybe<FulfilmentStatusType>;
  neq?: InputMaybe<FulfilmentStatusType>;
  notILike?: InputMaybe<FulfilmentStatusType>;
  notIn?: InputMaybe<Array<FulfilmentStatusType>>;
  notLike?: InputMaybe<FulfilmentStatusType>;
};

export type FulfilmentUpdateFilter = {
  and?: InputMaybe<Array<FulfilmentUpdateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  isReceived?: InputMaybe<BooleanFieldComparison>;
  or?: InputMaybe<Array<FulfilmentUpdateFilter>>;
  orderId?: InputMaybe<StringFieldComparison>;
  referenceNumber?: InputMaybe<StringFieldComparison>;
  sellerShopId?: InputMaybe<StringFieldComparison>;
  shippingDate?: InputMaybe<DateFieldComparison>;
  status?: InputMaybe<FulfilmentStatusTypeFilterComparison>;
  trackingNumber?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type FulfilmentUpdateFilterInput = {
  and?: InputMaybe<Array<FulfilmentUpdateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  isReceived?: InputMaybe<BooleanFieldComparison>;
  or?: InputMaybe<Array<FulfilmentUpdateFilter>>;
  orderId?: InputMaybe<StringFieldComparison>;
  referenceNumber?: InputMaybe<StringFieldComparison>;
  sellerShopId?: InputMaybe<StringFieldComparison>;
  shippingDate?: InputMaybe<DateFieldComparison>;
  status?: InputMaybe<FulfilmentStatusTypeFilterComparison>;
  trackingNumber?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type FulfilmentUpdateInput = {
  id?: InputMaybe<Scalars['String']>;
  isReceived?: InputMaybe<Scalars['Boolean']>;
  orderId?: InputMaybe<Scalars['String']>;
  orderItems?: InputMaybe<Array<OrderItemCreateInput>>;
  referenceNumber?: InputMaybe<Scalars['String']>;
  sellerShopId?: InputMaybe<Scalars['String']>;
  shippingDate?: InputMaybe<Scalars['DateTime']>;
  status?: InputMaybe<FulfilmentStatusType>;
  trackingNumber?: InputMaybe<Scalars['String']>;
};

export type FulfilmentUpdateManyInput = {
  isReceived?: InputMaybe<Scalars['Boolean']>;
  shippingDate?: InputMaybe<Scalars['DateTime']>;
  status?: InputMaybe<FulfilmentStatusType>;
};

export enum GenderType {
  Female = 'FEMALE',
  Male = 'MALE',
  Others = 'OTHERS',
}

export enum GeneralStatus {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE',
}

export type GeneralStatusFilterComparison = {
  eq?: InputMaybe<GeneralStatus>;
  gt?: InputMaybe<GeneralStatus>;
  gte?: InputMaybe<GeneralStatus>;
  iLike?: InputMaybe<GeneralStatus>;
  in?: InputMaybe<Array<GeneralStatus>>;
  is?: InputMaybe<Scalars['Boolean']>;
  isNot?: InputMaybe<Scalars['Boolean']>;
  like?: InputMaybe<GeneralStatus>;
  lt?: InputMaybe<GeneralStatus>;
  lte?: InputMaybe<GeneralStatus>;
  neq?: InputMaybe<GeneralStatus>;
  notILike?: InputMaybe<GeneralStatus>;
  notIn?: InputMaybe<Array<GeneralStatus>>;
  notLike?: InputMaybe<GeneralStatus>;
};

export type GeneralTokenRequestInput = {
  /**
   *
   *     This could be the 'email', 'ID', 'IC Number', 'Phone Number', 'username'.
   *
   *     The basic idea of having 'subject' field is to make no assumption on the business logic.
   *     It's up to the business logic to decide what is 'subject' refer to.
   *
   */
  subject: Scalars['String'];
};

export type GetServiceSubscription = {
  __typename?: 'GetServiceSubscription';
  isActive: Scalars['Boolean'];
  serviceSubscription?: Maybe<ServiceSubscription>;
};

export type IdFilterComparison = {
  eq?: InputMaybe<Scalars['ID']>;
  gt?: InputMaybe<Scalars['ID']>;
  gte?: InputMaybe<Scalars['ID']>;
  iLike?: InputMaybe<Scalars['ID']>;
  in?: InputMaybe<Array<Scalars['ID']>>;
  is?: InputMaybe<Scalars['Boolean']>;
  isNot?: InputMaybe<Scalars['Boolean']>;
  like?: InputMaybe<Scalars['ID']>;
  lt?: InputMaybe<Scalars['ID']>;
  lte?: InputMaybe<Scalars['ID']>;
  neq?: InputMaybe<Scalars['ID']>;
  notILike?: InputMaybe<Scalars['ID']>;
  notIn?: InputMaybe<Array<Scalars['ID']>>;
  notLike?: InputMaybe<Scalars['ID']>;
};

export type IdentityAccess = {
  __typename?: 'IdentityAccess';
  createdAt: Scalars['DateTime'];
  current: Scalars['Boolean'];
  id: Scalars['String'];
  role: UserRoleType;
  sellerShopId: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  userIdentity: UserIdentity;
  userIdentityId: Scalars['String'];
};

export type IdentityAccessEdge = {
  __typename?: 'IdentityAccessEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the IdentityAccess */
  node: IdentityAccess;
};

export type IdentityAccessFilter = {
  and?: InputMaybe<Array<IdentityAccessFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  current?: InputMaybe<BooleanFieldComparison>;
  id?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<IdentityAccessFilter>>;
  role?: InputMaybe<UserRoleTypeFilterComparison>;
  sellerShopId?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  userIdentityId?: InputMaybe<StringFieldComparison>;
};

export type IdentityAccessSort = {
  direction: SortDirection;
  field: IdentityAccessSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum IdentityAccessSortFields {
  CreatedAt = 'createdAt',
  Current = 'current',
  Id = 'id',
  Role = 'role',
  SellerShopId = 'sellerShopId',
  UpdatedAt = 'updatedAt',
  UserIdentityId = 'userIdentityId',
}

export type ImageLink = {
  __typename?: 'ImageLink';
  alt: Scalars['String'];
  link: Scalars['String'];
};

export type ImageLinkInput = {
  alt?: InputMaybe<Scalars['String']>;
  link: Scalars['String'];
};

export type IpayPaymentInput = {
  paymentOptionId: IpayPaymentOption;
};

export enum IpayPaymentOption {
  AffinOnline = 'AFFIN_ONLINE',
  AllianceOnline = 'ALLIANCE_ONLINE',
  Amonline = 'AMONLINE',
  BankIslam = 'BANK_ISLAM',
  BankMuamalat = 'BANK_MUAMALAT',
  BankRakyatInternetBanking = 'BANK_RAKYAT_INTERNET_BANKING',
  BoostWallet = 'BOOST_WALLET',
  BsnOnline = 'BSN_ONLINE',
  CimbClicks = 'CIMB_CLICKS',
  CimbVirtualAccountDelayPayment = 'CIMB_VIRTUAL_ACCOUNT_DELAY_PAYMENT',
  CreditCardMyr = 'CREDIT_CARD_MYR',
  CreditCardMyrPreAuth = 'CREDIT_CARD_MYR_PRE_AUTH',
  GrabpayOnline = 'GRABPAY_ONLINE',
  HongLeongOnline = 'HONG_LEONG_ONLINE',
  HongLeongPexQrPayment = 'HONG_LEONG_PEX_QR_PAYMENT',
  HsbcOnlineBanking = 'HSBC_ONLINE_BANKING',
  KuwaitFinanceHouse = 'KUWAIT_FINANCE_HOUSE',
  Maybank2U = 'MAYBANK2U',
  Ocbc = 'OCBC',
  Pay4MeDelayPayment = 'PAY4ME_DELAY_PAYMENT',
  PaypalMyr = 'PAYPAL_MYR',
  PublicBankOnline = 'PUBLIC_BANK_ONLINE',
  RhbOnline = 'RHB_ONLINE',
  StandardCharteredBank = 'STANDARD_CHARTERED_BANK',
  TngWallet = 'TNG_WALLET',
  Uob = 'UOB',
  Vcash = 'VCASH',
  WebCash = 'WEB_CASH',
}

export type IpayRequestData = {
  __typename?: 'IpayRequestData';
  Amount: Scalars['String'];
  BackendURL: Scalars['String'];
  Currency: Scalars['String'];
  Lang: Scalars['String'];
  MerchantCode: Scalars['String'];
  PaymentId: Scalars['Float'];
  ProdDesc: Scalars['String'];
  RefNo: Scalars['String'];
  Remark: Scalars['String'];
  ResponseURL: Scalars['String'];
  Signature: Scalars['String'];
  SignatureType: Scalars['String'];
  UserContact: Scalars['String'];
  UserEmail: Scalars['String'];
  UserName: Scalars['String'];
};

export enum JobStatus {
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  Paused = 'PAUSED',
  Pending = 'PENDING',
  Processing = 'PROCESSING',
}

export enum LanguageType {
  Cn = 'CN',
  En = 'EN',
  My = 'MY',
}

export type LanguageTypeFilterComparison = {
  eq?: InputMaybe<LanguageType>;
  gt?: InputMaybe<LanguageType>;
  gte?: InputMaybe<LanguageType>;
  iLike?: InputMaybe<LanguageType>;
  in?: InputMaybe<Array<LanguageType>>;
  is?: InputMaybe<Scalars['Boolean']>;
  isNot?: InputMaybe<Scalars['Boolean']>;
  like?: InputMaybe<LanguageType>;
  lt?: InputMaybe<LanguageType>;
  lte?: InputMaybe<LanguageType>;
  neq?: InputMaybe<LanguageType>;
  notILike?: InputMaybe<LanguageType>;
  notIn?: InputMaybe<Array<LanguageType>>;
  notLike?: InputMaybe<LanguageType>;
};

export type LoginCredentialInput = {
  password: Scalars['String'];
  /**
   *
   *     This could be the 'email' itself, 'IC Number', 'Phone Number', 'username'.
   *
   *     The basic idea of having 'username' field is to make no assumption on the business logic.
   *     It's up to the business logic to decide what is 'username' refer to and what is 'secondaryUsername' refer to.
   *
   */
  username: Scalars['String'];
};

export type MainOrder = {
  __typename?: 'MainOrder';
  createdAt: Scalars['DateTime'];
  currency: Scalars['String'];
  id: Scalars['ID'];
  orderForm: OrderForm;
  orderFormId?: Maybe<Scalars['String']>;
  orders: Array<Order>;
  shippingCharges: Scalars['Float'];
  subTotal: Scalars['Float'];
  taxRate: Scalars['Float'];
  taxedAmount: Scalars['Float'];
  totalWithTax: Scalars['Float'];
  updatedAt: Scalars['DateTime'];
  user?: Maybe<User>;
  userId: Scalars['String'];
};

export type MainOrderOrdersArgs = {
  filter?: InputMaybe<OrderFilter>;
  sorting?: InputMaybe<Array<OrderSort>>;
};

export type MainOrderAggregateGroupBy = {
  __typename?: 'MainOrderAggregateGroupBy';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['String']>;
};

export type MainOrderCountAggregate = {
  __typename?: 'MainOrderCountAggregate';
  createdAt?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

export type MainOrderEdge = {
  __typename?: 'MainOrderEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the MainOrder */
  node: MainOrder;
};

export type MainOrderFilter = {
  and?: InputMaybe<Array<MainOrderFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<MainOrderFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  userId?: InputMaybe<StringFieldComparison>;
};

export type MainOrderMaxAggregate = {
  __typename?: 'MainOrderMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['String']>;
};

export type MainOrderMinAggregate = {
  __typename?: 'MainOrderMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['String']>;
};

export type MainOrderSort = {
  direction: SortDirection;
  field: MainOrderSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum MainOrderSortFields {
  CreatedAt = 'createdAt',
  Id = 'id',
  UpdatedAt = 'updatedAt',
  UserId = 'userId',
}

export type MassArrangeDropOffInput = {
  fulfilments: Array<ArrangeDropOffInput>;
};

export enum MeasurementUnitType {
  Kilogram = 'KILOGRAM',
  Kilometer = 'KILOMETER',
  PerOrder = 'PER_ORDER',
  Value = 'VALUE',
}

export type Misc = {
  __typename?: 'Misc';
  content: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  type: MiscType;
  updatedAt: Scalars['DateTime'];
};

export type MiscAggregateGroupBy = {
  __typename?: 'MiscAggregateGroupBy';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type MiscConnection = {
  __typename?: 'MiscConnection';
  /** Array of edges. */
  edges: Array<MiscEdge>;
  /** Paging information */
  pageInfo: PageInfo;
};

export type MiscCountAggregate = {
  __typename?: 'MiscCountAggregate';
  createdAt?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
};

export type MiscCreateInput = {
  content: Scalars['String'];
  type: MiscType;
};

export type MiscDeleteFilter = {
  and?: InputMaybe<Array<MiscDeleteFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<MiscDeleteFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type MiscDeleteResponse = {
  __typename?: 'MiscDeleteResponse';
  content?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  type?: Maybe<MiscType>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type MiscEdge = {
  __typename?: 'MiscEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the Misc */
  node: Misc;
};

export type MiscFilter = {
  and?: InputMaybe<Array<MiscFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<MiscFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type MiscMaxAggregate = {
  __typename?: 'MiscMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type MiscMinAggregate = {
  __typename?: 'MiscMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type MiscSort = {
  direction: SortDirection;
  field: MiscSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum MiscSortFields {
  CreatedAt = 'createdAt',
  Id = 'id',
  UpdatedAt = 'updatedAt',
}

export enum MiscType {
  PrivacyPolicy = 'PRIVACY_POLICY',
  TermsOfService = 'TERMS_OF_SERVICE',
}

export type MiscUpdateInput = {
  content: Scalars['String'];
  id: Scalars['String'];
  type: MiscType;
};

export type Mutation = {
  __typename?: 'Mutation';
  addCategoryAttributesToProductCategory: ProductCategory;
  addChildrensToProductCategory: ProductCategory;
  addFulfilmentsToOrder: Order;
  addFulfilmentsToOrderItem: OrderItem;
  addFulfilmentsToSellerShop: SellerShop;
  addIdentityAccessesToSellerShop: SellerShop;
  addItemsToOrderLine: OrderLine;
  addMainOrdersToOrderForm: OrderForm;
  addOrderFormItemsToOrderForm: OrderForm;
  addOrderFormsToSellerShop: SellerShop;
  addOrderItemsToFulfilment: Fulfilment;
  addOrderLinesToOrder: Order;
  addOrdersToMainOrder: MainOrder;
  addPlansToService: Service;
  addProductCategoryAttributesToProductAttribute: ProductAttribute;
  addProductVariantsToProduct: Product;
  addProductsToCollection: ShopCollection;
  addProductsToProductCategory: ProductCategory;
  addProductsToSellerShop: SellerShop;
  addShippingMethodsToSellerShop: SellerShop;
  addShippingMethodsToShippingZone: ShippingZone;
  addShippingPickupsToSellerShop: SellerShop;
  addShippingZoneCoveragesToShippingZone: ShippingZone;
  addShopAddressesToSellerShop: SellerShop;
  addShopCollectionProductsToProduct: Product;
  addShopCollectionProductsToShopCollection: ShopCollection;
  addShopCollectionsToSellerShop: SellerShop;
  addShopeeJobLinksToShopeeJob: ShopeeJob;
  addShopeeOrderLinesToShopeeOrder: ShopeeOrder;
  addShopeeOrdersToShopeeJob: ShopeeJob;
  addShopeeReportingSnapshotsToShopeeReporting: ShopeeReporting;
  addSubscribesToServicePlan: ServicePlan;
  addUserAddressesToUser: User;
  addZonesToSellerShop: SellerShop;
  adminChangePassword: Admin;
  adminCreate: Admin;
  adminDeleteProductCategories: ProductCategoriesDeleteResponse;
  adminSignIn: AdminLoginPayload;
  adminUpdateOwnPreference: AdminPreference;
  adminUpdateProfile: Admin;
  arrangeDropOff: Array<Fulfilment>;
  changeCurrentIdentityAccess: AccessToken;
  changeManyProductVariantStatuses: UpdateProductVariantStatusesResponse;
  computePickupFee: PickupRateResponse;
  computeShippingFee: ShippingRateResponse;
  createCustomerOrderCancel: OrderCancel;
  createCustomerOrderRefund: OrderRefund;
  createFulfilment: Array<Fulfilment>;
  createManyAnnouncements: Array<Announcement>;
  createManyBanners: Array<Banner>;
  createManyCategoryAttributes: Array<CategoryAttribute>;
  createManyCountries: Array<Country>;
  createManyCurrencies: Array<Currency>;
  createManyFaqs: Array<Faq>;
  createManyProductAttributes: Array<ProductAttribute>;
  createManyProductBrands: Array<ProductBrand>;
  createManyProductCategories: Array<ProductCategory>;
  createManyShippingCouriers: Array<ShippingCourier>;
  createManyShippingMethods: Array<ShippingMethod>;
  createManyShippingZoneCoverages: Array<ShippingZoneCoverage>;
  createManyShippingZones: Array<ShippingZone>;
  createOneAnnouncement: Announcement;
  createOneBanner: Banner;
  createOneCategoryAttribute: CategoryAttribute;
  createOneCountry: Country;
  createOneCurrency: Currency;
  createOneFaq: Faq;
  createOneFeedback: Feedback;
  createOneMisc: Misc;
  createOneOrderForm: OrderForm;
  createOneProductAttribute: ProductAttribute;
  createOneProductBrand: ProductBrand;
  createOneProductCategory: ProductCategory;
  createOneShippingCourier: ShippingCourier;
  createOneShippingMethod: ShippingMethod;
  createOneShippingPickup: ShippingPickup;
  createOneShippingZone: ShippingZone;
  createOneShippingZoneCoverage: ShippingZoneCoverage;
  createOneShopAddress: ShopAddress;
  createOneShopCollection: ShopCollection;
  createOneShopeeStore: ShopeeStore;
  createOneUserAddress: UserAddress;
  createOneUserDevice: UserDevice;
  createOrUpdateMisc: Misc;
  createPayment: Payment;
  createSellerOrderCancel: OrderCancel;
  createSellerOrderRefund: OrderRefund;
  createSellerShop: SellerShop;
  createShippingRate: ShippingZone;
  createShopSettings: ShopSettings;
  createShopeeImportJob: ShopeeJob;
  createShopeeInvoiceGenerationJob: ShopeeJob;
  createShopeeSingleInvoiceGenerationJob: ShopeeJob;
  deleteManyAdminPreferences: DeleteManyResponse;
  deleteManyAdmins: DeleteManyResponse;
  deleteManyAnnouncements: DeleteManyResponse;
  deleteManyBanners: DeleteManyResponse;
  deleteManyCountries: DeleteManyResponse;
  deleteManyCurrencies: DeleteManyResponse;
  deleteManyFaqs: DeleteManyResponse;
  deleteManyFeedbacks: DeleteManyResponse;
  deleteManyMiscs: DeleteManyResponse;
  deleteManyOrderCancels: DeleteManyResponse;
  deleteManyOrderForms: DeleteManyResponse;
  deleteManyOrderRefunds: DeleteManyResponse;
  deleteManyPayments: DeleteManyResponse;
  deleteManyProductAttributes: DeleteManyResponse;
  deleteManyProductBrands: DeleteManyResponse;
  deleteManySellerShops: DeleteManyResponse;
  deleteManyShippingCouriers: DeleteManyResponse;
  deleteManyShippingMethods: DeleteManyResponse;
  deleteManyShippingPickups: DeleteManyResponse;
  deleteManyShippingZoneCoverages: DeleteManyResponse;
  deleteManyShippingZones: DeleteManyResponse;
  deleteManyShopeeStores: DeleteManyResponse;
  deleteManyUserPreferences: DeleteManyResponse;
  deleteManyUsers: DeleteManyResponse;
  deleteOneAdmin: AdminDeleteResponse;
  deleteOneAdminPreference: AdminPreferenceDeleteResponse;
  deleteOneAnnouncement: AnnouncementDeleteResponse;
  deleteOneBanner: BannerDeleteResponse;
  deleteOneCountry: CountryDeleteResponse;
  deleteOneCurrency: CurrencyDeleteResponse;
  deleteOneFaq: FaqDeleteResponse;
  deleteOneFeedback: FeedbackDeleteResponse;
  deleteOneMisc: MiscDeleteResponse;
  deleteOneOrderCancel: OrderCancelDeleteResponse;
  deleteOneOrderForm: OrderFormDeleteResponse;
  deleteOneOrderRefund: OrderRefundDeleteResponse;
  deleteOnePayment: PaymentDeleteResponse;
  deleteOneProductAttribute: ProductAttributeDeleteResponse;
  deleteOneProductBrand: ProductBrandDeleteResponse;
  deleteOneSellerShop: SellerShopDeleteResponse;
  deleteOneShippingCourier: ShippingCourierDeleteResponse;
  deleteOneShippingMethod: ShippingMethodDeleteResponse;
  deleteOneShippingPickup: ShippingPickupDeleteResponse;
  deleteOneShippingZone: ShippingZoneDeleteResponse;
  deleteOneShippingZoneCoverage: ShippingZoneCoverageDeleteResponse;
  deleteOneShopCollection: Scalars['Boolean'];
  deleteOneShopeeStore: ShopeeStoreDeleteResponse;
  deleteOneUser: UserDeleteResponse;
  deleteOneUserPreference: UserPreferenceDeleteResponse;
  deleteShopAddress: Array<ShopAddress>;
  deleteUserAddress: Array<UserAddress>;
  delistManyProducts: Array<Product>;
  delistProduct: Product;
  generateShopeeReport: ShopeeReporting;
  generateSignedUrl: SignedUrl;
  makeInvoiceShareable: ShopeeOrder;
  pauseShopeeJob: ShopeeJob;
  placeOrder: MainOrder;
  placeOrderAsGuest: MainOrder;
  preThirdPartySignIn: SocialLoginStatus;
  publishManyProducts: Array<Product>;
  receiveOrder: Array<Order>;
  regenerateShopeeReport: ShopeeReporting;
  removeCategoryAttributesFromProductCategory: ProductCategory;
  removeChildrensFromProductCategory: ProductCategory;
  removeCollectionFromShopCollection: ShopCollection;
  removeIdentityAccessesFromSellerShop: SellerShop;
  removeMainOrderFromOrder: Order;
  removeMainOrderFromOrderPayment: OrderPayment;
  removeMainOrdersFromOrderForm: OrderForm;
  removeOrderCancelFromOrder: Order;
  removeOrderFormFromMainOrder: MainOrder;
  removeOrderFormFromOrderFormItem: OrderFormItem;
  removeOrderFormItemsFromOrderForm: OrderForm;
  removeOrderFormsFromSellerShop: SellerShop;
  removeOrderFromFulfilment: Fulfilment;
  removeOrderFromOrderCancel: OrderCancel;
  removeOrderFromOrderLine: OrderLine;
  removeOrderFromOrderPayment: OrderPayment;
  removeOrderFromOrderRefund: OrderRefund;
  removeOrderLineFromOrderItem: OrderItem;
  removeOrderPaymentFromOrder: Order;
  removeOrderRefundFromOrder: Order;
  removeParentFromProductCategory: ProductCategory;
  removePaymentFromOrderPayment: OrderPayment;
  removePlanFromServiceSubscription: ServiceSubscription;
  removePlansFromService: Service;
  removeProductAttributeFromCategoryAttribute: CategoryAttribute;
  removeProductBrandFromProduct: Product;
  removeProductCategoryAttributesFromProductAttribute: ProductAttribute;
  removeProductCategoryFromCategoryAttribute: CategoryAttribute;
  removeProductCategoryFromProduct: Product;
  removeProductFromOrderFormItem: OrderFormItem;
  removeProductFromProductVariant: ProductVariant;
  removeProductFromShopCollectionProduct: ShopCollectionProduct;
  removeProductVariantFromOrderFormItem: OrderFormItem;
  removeProductVariantsFromProduct: Product;
  removeProductsFromProductCategory: ProductCategory;
  removeProductsFromSellerShop: SellerShop;
  removeSellerShopFromFulfilment: Fulfilment;
  removeSellerShopFromOrder: Order;
  removeSellerShopFromOrderCancel: OrderCancel;
  removeSellerShopFromOrderForm: OrderForm;
  removeSellerShopFromOrderRefund: OrderRefund;
  removeSellerShopFromProduct: Product;
  removeSellerShopFromProductVariant: ProductVariant;
  removeSellerShopFromServiceSubscription: ServiceSubscription;
  removeSellerShopFromShippingMethod: ShippingMethod;
  removeSellerShopFromShippingPickup: ShippingPickup;
  removeSellerShopFromShippingZone: ShippingZone;
  removeSellerShopFromShopAddress: ShopAddress;
  removeSellerShopFromShopCollection: ShopCollection;
  removeSellerShopFromShopSettings: ShopSettings;
  removeSellerShopFromShopeeJob: ShopeeJob;
  removeSellerShopFromShopeeReporting: ShopeeReporting;
  removeSellerShopFromShopeeSettings: ShopeeSettings;
  removeSellerShopFromShopeeStore: ShopeeStore;
  removeServiceFromServicePlan: ServicePlan;
  removeShippingMethodsFromSellerShop: SellerShop;
  removeShippingPickupFromShopAddress: ShopAddress;
  removeShippingZoneFromShippingMethod: ShippingMethod;
  removeShippingZoneFromShippingZoneCoverage: ShippingZoneCoverage;
  removeShopAddressFromShippingPickup: ShippingPickup;
  removeShopCollectionFromShopCollectionProduct: ShopCollectionProduct;
  removeShopCollectionProductsFromProduct: Product;
  removeShopCollectionProductsFromShopCollection: ShopCollection;
  removeShopSettingsFromSellerShop: SellerShop;
  removeShopeeJobFromShopeeJobLink: ShopeeJobLink;
  removeShopeeJobFromShopeeOrder: ShopeeOrder;
  removeShopeeJobLinksFromShopeeJob: ShopeeJob;
  removeShopeeOrderFromShopeeOrderLine: ShopeeOrderLine;
  removeShopeeOrderLinesFromShopeeOrder: ShopeeOrder;
  removeShopeeOrdersFromShopeeJob: ShopeeJob;
  removeShopeeReportingSnapshotsFromShopeeReporting: ShopeeReporting;
  removeShopeeSettingsFromSellerShop: SellerShop;
  removeSubscribesFromServicePlan: ServicePlan;
  removeUserFromMainOrder: MainOrder;
  removeUserFromOrder: Order;
  removeUserFromOrderCancel: OrderCancel;
  removeUserFromOrderRefund: OrderRefund;
  removeUserFromPayment: Payment;
  removeUserFromUserAddress: UserAddress;
  removeZonesFromSellerShop: SellerShop;
  reorderShopCollections: Array<ShopCollection>;
  retriggerShopeeJob: ShopeeJob;
  reviewOrderCancel: Array<OrderCancel>;
  reviewOrderRefund: Array<OrderRefund>;
  saveProductAsDraft: Product;
  savePublishOrDelistProduct: Product;
  sendEmail: Scalars['Boolean'];
  setCategoryAttributesOnProductCategory: ProductCategory;
  setChildrensOnProductCategory: ProductCategory;
  setCollectionOnShopCollection: ShopCollection;
  setFulfilmentsOnOrder: Order;
  setFulfilmentsOnOrderItem: OrderItem;
  setFulfilmentsOnSellerShop: SellerShop;
  setIdentityAccessesOnSellerShop: SellerShop;
  setItemsOnOrderLine: OrderLine;
  setMainOrderOnOrder: Order;
  setMainOrderOnOrderPayment: OrderPayment;
  setMainOrdersOnOrderForm: OrderForm;
  setOrderCancelOnOrder: Order;
  setOrderFormItemsOnOrderForm: OrderForm;
  setOrderFormOnMainOrder: MainOrder;
  setOrderFormOnOrderFormItem: OrderFormItem;
  setOrderFormsOnSellerShop: SellerShop;
  setOrderItemsOnFulfilment: Fulfilment;
  setOrderLineOnOrderItem: OrderItem;
  setOrderLinesOnOrder: Order;
  setOrderOnFulfilment: Fulfilment;
  setOrderOnOrderCancel: OrderCancel;
  setOrderOnOrderLine: OrderLine;
  setOrderOnOrderPayment: OrderPayment;
  setOrderOnOrderRefund: OrderRefund;
  setOrderPaymentOnOrder: Order;
  setOrderRefundOnOrder: Order;
  setOrdersOnMainOrder: MainOrder;
  setParentOnProductCategory: ProductCategory;
  setPaymentOnOrderPayment: OrderPayment;
  setPlanOnServiceSubscription: ServiceSubscription;
  setPlansOnService: Service;
  setProductAttributeOnCategoryAttribute: CategoryAttribute;
  setProductBrandOnProduct: Product;
  setProductCategoryAttributesOnProductAttribute: ProductAttribute;
  setProductCategoryOnCategoryAttribute: CategoryAttribute;
  setProductCategoryOnProduct: Product;
  setProductOnOrderFormItem: OrderFormItem;
  setProductOnProductVariant: ProductVariant;
  setProductOnShopCollectionProduct: ShopCollectionProduct;
  setProductVariantOnOrderFormItem: OrderFormItem;
  setProductVariantsOnProduct: Product;
  setProductsOnProductCategory: ProductCategory;
  setProductsOnSellerShop: SellerShop;
  setSellerShopOnFulfilment: Fulfilment;
  setSellerShopOnOrder: Order;
  setSellerShopOnOrderCancel: OrderCancel;
  setSellerShopOnOrderForm: OrderForm;
  setSellerShopOnOrderRefund: OrderRefund;
  setSellerShopOnProduct: Product;
  setSellerShopOnProductVariant: ProductVariant;
  setSellerShopOnServiceSubscription: ServiceSubscription;
  setSellerShopOnShippingMethod: ShippingMethod;
  setSellerShopOnShippingPickup: ShippingPickup;
  setSellerShopOnShippingZone: ShippingZone;
  setSellerShopOnShopAddress: ShopAddress;
  setSellerShopOnShopCollection: ShopCollection;
  setSellerShopOnShopSettings: ShopSettings;
  setSellerShopOnShopeeJob: ShopeeJob;
  setSellerShopOnShopeeReporting: ShopeeReporting;
  setSellerShopOnShopeeSettings: ShopeeSettings;
  setSellerShopOnShopeeStore: ShopeeStore;
  setServiceOnServicePlan: ServicePlan;
  setShippingMethodsOnSellerShop: SellerShop;
  setShippingMethodsOnShippingZone: ShippingZone;
  setShippingPickupOnShopAddress: ShopAddress;
  setShippingPickupsOnSellerShop: SellerShop;
  setShippingZoneCoveragesOnShippingZone: ShippingZone;
  setShippingZoneOnShippingMethod: ShippingMethod;
  setShippingZoneOnShippingZoneCoverage: ShippingZoneCoverage;
  setShopAddressOnShippingPickup: ShippingPickup;
  setShopAddressesOnSellerShop: SellerShop;
  setShopCollectionOnShopCollectionProduct: ShopCollectionProduct;
  setShopCollectionProductsOnProduct: Product;
  setShopCollectionProductsOnShopCollection: ShopCollection;
  setShopCollectionsOnSellerShop: SellerShop;
  setShopSettingsOnSellerShop: SellerShop;
  setShopeeJobLinksOnShopeeJob: ShopeeJob;
  setShopeeJobOnShopeeJobLink: ShopeeJobLink;
  setShopeeJobOnShopeeOrder: ShopeeOrder;
  setShopeeOrderLinesOnShopeeOrder: ShopeeOrder;
  setShopeeOrderOnShopeeOrderLine: ShopeeOrderLine;
  setShopeeOrdersOnShopeeJob: ShopeeJob;
  setShopeeReportingSnapshotsOnShopeeReporting: ShopeeReporting;
  setShopeeSettingsOnSellerShop: SellerShop;
  setSubscribesOnServicePlan: ServicePlan;
  setUserAddressesOnUser: User;
  setUserOnMainOrder: MainOrder;
  setUserOnOrder: Order;
  setUserOnOrderCancel: OrderCancel;
  setUserOnOrderRefund: OrderRefund;
  setUserOnPayment: Payment;
  setUserOnUserAddress: UserAddress;
  setZonesOnSellerShop: SellerShop;
  softDeleteProducts: Scalars['Boolean'];
  softDeleteShippingZones: Array<ShippingZone>;
  startShopeeServiceTrial: ServiceSubscription;
  test_MarkOneOrderAsPaid: Order;
  thirdPartySignIn: AccessToken;
  unregisterDeviceToken: UserDevice;
  updateFulfilment: Fulfilment;
  updateFulfilments: UpdateManyResponse;
  updateManyAdminPreferences: UpdateManyResponse;
  updateManyAdmins: UpdateManyResponse;
  updateManyAnnouncements: UpdateManyResponse;
  updateManyBanners: UpdateManyResponse;
  updateManyCategoryAttributes: UpdateManyResponse;
  updateManyCountries: UpdateManyResponse;
  updateManyCurrencies: UpdateManyResponse;
  updateManyFaqs: UpdateManyResponse;
  updateManyFeedbacks: UpdateManyResponse;
  updateManyOrderCancels: UpdateManyResponse;
  updateManyOrderRefunds: UpdateManyResponse;
  updateManyProductAttributes: UpdateManyResponse;
  updateManyProductBrands: UpdateManyResponse;
  updateManyProductCategories: UpdateManyResponse;
  updateManyProducts: UpdateManyResponse;
  updateManyShippingCouriers: UpdateManyResponse;
  updateManyShippingMethods: UpdateManyResponse;
  updateManyShippingZoneCoverages: UpdateManyResponse;
  updateManyShippingZones: UpdateManyResponse;
  updateManyShopeeJobs: UpdateManyResponse;
  updateManyShopeeReportings: UpdateManyResponse;
  updateManyUserDevices: UpdateManyResponse;
  updateManyUserPreferences: UpdateManyResponse;
  updateManyUsers: UpdateManyResponse;
  updateOneAdmin: Admin;
  updateOneAdminPreference: AdminPreference;
  updateOneAnnouncement: Announcement;
  updateOneBanner: Banner;
  updateOneCategoryAttribute: CategoryAttribute;
  updateOneCountry: Country;
  updateOneCurrency: Currency;
  updateOneFaq: Faq;
  updateOneFeedback: Feedback;
  updateOneMisc: Misc;
  updateOneOrderCancel: OrderCancel;
  updateOneOrderForm: OrderForm;
  updateOneOrderRefund: OrderRefund;
  updateOneOrderStatus: Order;
  updateOneOrderTrackingNumber: Order;
  updateOneProduct: Product;
  updateOneProductAttribute: ProductAttribute;
  updateOneProductBrand: ProductBrand;
  updateOneProductCategory: ProductCategory;
  updateOneProductVariant: ProductVariant;
  updateOneShippingCourier: ShippingCourier;
  updateOneShippingMethod: ShippingMethod;
  updateOneShippingPickup: ShippingPickup;
  updateOneShippingZone: ShippingZone;
  updateOneShippingZoneCoverage: ShippingZoneCoverage;
  updateOneShopAddress: ShopAddress;
  updateOneShopCollection: ShopCollection;
  updateOneShopeeJob: ShopeeJob;
  updateOneShopeeOrderLine: ShopeeOrderLine;
  updateOneShopeeReporting: ShopeeReporting;
  updateOneUser: User;
  updateOneUserAddress: UserAddress;
  updateOneUserDevice: UserDevice;
  updateOneUserPreference: UserPreference;
  updateOrderBillingAddress: Order;
  updatePayment: Payment;
  updateProduct: Product;
  updateSellerShop: SellerShop;
  updateSellerShopOperatingHours: SellerShop;
  updateSellerShopStatus: SellerShop;
  updateShippingZoneStatus: ShippingZone;
  updateShopCollectionItems: ShopCollection;
  updateShopCollectionStatus: ShopCollection;
  updateShopeeOrder: ShopeeOrder;
  upgradeServiceSubscription: ServiceSubscription;
  /**
   *
   *       Pass in an OTP if user want to change their sensitive profile info,
   *       such as: email, phone, username or password.
   *
   */
  userChangeImportantInfo: Scalars['Boolean'];
  /** If user wants to change password, can verify the password first before changing. */
  userChangePassword: Scalars['Boolean'];
  /** If user forgot their password, can request for a password reset code. */
  userForgotPassword: Scalars['String'];
  userRefreshAccessToken: AccessToken;
  /**
   *
   *     Request an OTP if user want to change their sensitive profile info,
   *     such as: email, phone, username or password.
   *
   */
  userRequestChangeImportantInfo: Scalars['String'];
  /** If user forgot their password, can reset a new password. */
  userResetPasswordIfForgotten: Scalars['Boolean'];
  /** If user account is not verified, can resend the verification code. */
  userSendAccountVerificationCode: Scalars['String'];
  userSignIn: AccessToken;
  userSignUp: AccessToken;
  userUpdateOwnPreference: UserPreference;
  userUpdateProfile: User;
  /** If user account is not verified, can resend the verification code. */
  userVerifyAccount: Scalars['Boolean'];
  /** If user wants to change password, can change to new password. */
  userVerifyPassword: Scalars['Boolean'];
  validateDownloadBuyerInvoice: Scalars['String'];
  validateOtp: Scalars['Boolean'];
};

export type MutationAddCategoryAttributesToProductCategoryArgs = {
  input: RelationsInput;
};

export type MutationAddChildrensToProductCategoryArgs = {
  input: RelationsInput;
};

export type MutationAddFulfilmentsToOrderArgs = {
  input: RelationsInput;
};

export type MutationAddFulfilmentsToOrderItemArgs = {
  input: RelationsInput;
};

export type MutationAddFulfilmentsToSellerShopArgs = {
  input: RelationsInput;
};

export type MutationAddIdentityAccessesToSellerShopArgs = {
  input: RelationsInput;
};

export type MutationAddItemsToOrderLineArgs = {
  input: RelationsInput;
};

export type MutationAddMainOrdersToOrderFormArgs = {
  input: RelationsInput;
};

export type MutationAddOrderFormItemsToOrderFormArgs = {
  input: RelationsInput;
};

export type MutationAddOrderFormsToSellerShopArgs = {
  input: RelationsInput;
};

export type MutationAddOrderItemsToFulfilmentArgs = {
  input: RelationsInput;
};

export type MutationAddOrderLinesToOrderArgs = {
  input: RelationsInput;
};

export type MutationAddOrdersToMainOrderArgs = {
  input: RelationsInput;
};

export type MutationAddPlansToServiceArgs = {
  input: RelationsInput;
};

export type MutationAddProductCategoryAttributesToProductAttributeArgs = {
  input: RelationsInput;
};

export type MutationAddProductVariantsToProductArgs = {
  input: RelationsInput;
};

export type MutationAddProductsToCollectionArgs = {
  input: ReorderShopCollectionsInput;
};

export type MutationAddProductsToProductCategoryArgs = {
  input: RelationsInput;
};

export type MutationAddProductsToSellerShopArgs = {
  input: RelationsInput;
};

export type MutationAddShippingMethodsToSellerShopArgs = {
  input: RelationsInput;
};

export type MutationAddShippingMethodsToShippingZoneArgs = {
  input: RelationsInput;
};

export type MutationAddShippingPickupsToSellerShopArgs = {
  input: RelationsInput;
};

export type MutationAddShippingZoneCoveragesToShippingZoneArgs = {
  input: RelationsInput;
};

export type MutationAddShopAddressesToSellerShopArgs = {
  input: RelationsInput;
};

export type MutationAddShopCollectionProductsToProductArgs = {
  input: RelationsInput;
};

export type MutationAddShopCollectionProductsToShopCollectionArgs = {
  input: RelationsInput;
};

export type MutationAddShopCollectionsToSellerShopArgs = {
  input: RelationsInput;
};

export type MutationAddShopeeJobLinksToShopeeJobArgs = {
  input: RelationsInput;
};

export type MutationAddShopeeOrderLinesToShopeeOrderArgs = {
  input: RelationsInput;
};

export type MutationAddShopeeOrdersToShopeeJobArgs = {
  input: RelationsInput;
};

export type MutationAddShopeeReportingSnapshotsToShopeeReportingArgs = {
  input: RelationsInput;
};

export type MutationAddSubscribesToServicePlanArgs = {
  input: RelationsInput;
};

export type MutationAddUserAddressesToUserArgs = {
  input: RelationsInput;
};

export type MutationAddZonesToSellerShopArgs = {
  input: RelationsInput;
};

export type MutationAdminChangePasswordArgs = {
  input: AdminChangePasswordInput;
};

export type MutationAdminCreateArgs = {
  input: AdminCreateInput;
};

export type MutationAdminDeleteProductCategoriesArgs = {
  ids: Array<Scalars['String']>;
};

export type MutationAdminSignInArgs = {
  input: AdminSignInInput;
};

export type MutationAdminUpdateOwnPreferenceArgs = {
  input: AdminPreferenceUpdateOwnInput;
};

export type MutationAdminUpdateProfileArgs = {
  input: AdminUpdateProfileInput;
};

export type MutationArrangeDropOffArgs = {
  input: MassArrangeDropOffInput;
};

export type MutationChangeCurrentIdentityAccessArgs = {
  id: Scalars['String'];
};

export type MutationChangeManyProductVariantStatusesArgs = {
  input: Array<ProductVariantUpdateStateInput>;
};

export type MutationComputePickupFeeArgs = {
  shopAddressId: Scalars['String'];
};

export type MutationComputeShippingFeeArgs = {
  input: ShippingRateCreateInput;
};

export type MutationCreateCustomerOrderCancelArgs = {
  input: OrderCancelCreateInput;
};

export type MutationCreateCustomerOrderRefundArgs = {
  input: OrderRefundCreateInput;
};

export type MutationCreateFulfilmentArgs = {
  input: PlaceFulfilmentInput;
};

export type MutationCreateManyAnnouncementsArgs = {
  input: CreateManyAnnouncementsInput;
};

export type MutationCreateManyBannersArgs = {
  input: CreateManyBannersInput;
};

export type MutationCreateManyCategoryAttributesArgs = {
  input: Array<CategoryAttributeCreateInput>;
};

export type MutationCreateManyCountriesArgs = {
  input: CreateManyCountriesInput;
};

export type MutationCreateManyCurrenciesArgs = {
  input: CreateManyCurrenciesInput;
};

export type MutationCreateManyFaqsArgs = {
  input: CreateManyFaqsInput;
};

export type MutationCreateManyProductAttributesArgs = {
  input: CreateManyProductAttributesInput;
};

export type MutationCreateManyProductBrandsArgs = {
  input: CreateManyProductBrandsInput;
};

export type MutationCreateManyProductCategoriesArgs = {
  input: CreateManyProductCategoriesInput;
};

export type MutationCreateManyShippingCouriersArgs = {
  input: CreateManyShippingCouriersInput;
};

export type MutationCreateManyShippingMethodsArgs = {
  input: CreateManyShippingMethodsInput;
};

export type MutationCreateManyShippingZoneCoveragesArgs = {
  input: CreateManyShippingZoneCoveragesInput;
};

export type MutationCreateManyShippingZonesArgs = {
  input: CreateManyShippingZonesInput;
};

export type MutationCreateOneAnnouncementArgs = {
  input: CreateOneAnnouncementInput;
};

export type MutationCreateOneBannerArgs = {
  input: CreateOneBannerInput;
};

export type MutationCreateOneCategoryAttributeArgs = {
  input: CategoryAttributeCreateInput;
};

export type MutationCreateOneCountryArgs = {
  input: CreateOneCountryInput;
};

export type MutationCreateOneCurrencyArgs = {
  input: CreateOneCurrencyInput;
};

export type MutationCreateOneFaqArgs = {
  input: CreateOneFaqInput;
};

export type MutationCreateOneFeedbackArgs = {
  input: CreateOneFeedbackInput;
};

export type MutationCreateOneMiscArgs = {
  input: CreateOneMiscInput;
};

export type MutationCreateOneOrderFormArgs = {
  input: OrderFormCreateInput;
};

export type MutationCreateOneProductAttributeArgs = {
  input: CreateOneProductAttributeInput;
};

export type MutationCreateOneProductBrandArgs = {
  input: CreateOneProductBrandInput;
};

export type MutationCreateOneProductCategoryArgs = {
  input: CreateOneProductCategoryInput;
};

export type MutationCreateOneShippingCourierArgs = {
  input: CreateOneShippingCourierInput;
};

export type MutationCreateOneShippingMethodArgs = {
  input: CreateOneShippingMethodInput;
};

export type MutationCreateOneShippingPickupArgs = {
  input: ShippingPickupCreateInput;
};

export type MutationCreateOneShippingZoneArgs = {
  input: CreateOneShippingZoneInput;
};

export type MutationCreateOneShippingZoneCoverageArgs = {
  input: CreateOneShippingZoneCoverageInput;
};

export type MutationCreateOneShopAddressArgs = {
  input: ShopAddressCreateInput;
};

export type MutationCreateOneShopCollectionArgs = {
  input: CreateOneShopCollectionInput;
};

export type MutationCreateOneShopeeStoreArgs = {
  input: CreateOneShopeeStoreInput;
};

export type MutationCreateOneUserAddressArgs = {
  input: UserAddressCreateInput;
};

export type MutationCreateOneUserDeviceArgs = {
  input: CreateOneUserDeviceInput;
};

export type MutationCreateOrUpdateMiscArgs = {
  input: MiscCreateInput;
};

export type MutationCreatePaymentArgs = {
  input: PaymentCreateInput;
};

export type MutationCreateSellerOrderCancelArgs = {
  input: OrderCancelCreateInput;
};

export type MutationCreateSellerOrderRefundArgs = {
  input: OrderRefundCreateInput;
};

export type MutationCreateSellerShopArgs = {
  input: SellerShopCreateInput;
};

export type MutationCreateShippingRateArgs = {
  input: ShippingZoneCreateInput;
};

export type MutationCreateShopSettingsArgs = {
  input: ShopSettingsCreateInput;
};

export type MutationCreateShopeeImportJobArgs = {
  input: ShopeeJobCreateInput;
};

export type MutationCreateShopeeInvoiceGenerationJobArgs = {
  shopeeJobId: Scalars['String'];
};

export type MutationCreateShopeeSingleInvoiceGenerationJobArgs = {
  shopeeOrderId: Scalars['String'];
};

export type MutationDeleteManyAdminPreferencesArgs = {
  input: DeleteManyAdminPreferencesInput;
};

export type MutationDeleteManyAdminsArgs = {
  input: DeleteManyAdminsInput;
};

export type MutationDeleteManyAnnouncementsArgs = {
  input: DeleteManyAnnouncementsInput;
};

export type MutationDeleteManyBannersArgs = {
  input: DeleteManyBannersInput;
};

export type MutationDeleteManyCountriesArgs = {
  input: DeleteManyCountriesInput;
};

export type MutationDeleteManyCurrenciesArgs = {
  input: DeleteManyCurrenciesInput;
};

export type MutationDeleteManyFaqsArgs = {
  input: DeleteManyFaqsInput;
};

export type MutationDeleteManyFeedbacksArgs = {
  input: DeleteManyFeedbacksInput;
};

export type MutationDeleteManyMiscsArgs = {
  input: DeleteManyMiscsInput;
};

export type MutationDeleteManyOrderCancelsArgs = {
  input: DeleteManyOrderCancelsInput;
};

export type MutationDeleteManyOrderFormsArgs = {
  input: DeleteManyOrderFormsInput;
};

export type MutationDeleteManyOrderRefundsArgs = {
  input: DeleteManyOrderRefundsInput;
};

export type MutationDeleteManyPaymentsArgs = {
  input: DeleteManyPaymentsInput;
};

export type MutationDeleteManyProductAttributesArgs = {
  input: DeleteManyProductAttributesInput;
};

export type MutationDeleteManyProductBrandsArgs = {
  input: DeleteManyProductBrandsInput;
};

export type MutationDeleteManySellerShopsArgs = {
  input: DeleteManySellerShopsInput;
};

export type MutationDeleteManyShippingCouriersArgs = {
  input: DeleteManyShippingCouriersInput;
};

export type MutationDeleteManyShippingMethodsArgs = {
  input: DeleteManyShippingMethodsInput;
};

export type MutationDeleteManyShippingPickupsArgs = {
  input: DeleteManyShippingPickupsInput;
};

export type MutationDeleteManyShippingZoneCoveragesArgs = {
  input: DeleteManyShippingZoneCoveragesInput;
};

export type MutationDeleteManyShippingZonesArgs = {
  input: DeleteManyShippingZonesInput;
};

export type MutationDeleteManyShopeeStoresArgs = {
  input: DeleteManyShopeeStoresInput;
};

export type MutationDeleteManyUserPreferencesArgs = {
  input: DeleteManyUserPreferencesInput;
};

export type MutationDeleteManyUsersArgs = {
  input: DeleteManyUsersInput;
};

export type MutationDeleteOneAdminArgs = {
  input: DeleteOneInput;
};

export type MutationDeleteOneAdminPreferenceArgs = {
  input: DeleteOneInput;
};

export type MutationDeleteOneAnnouncementArgs = {
  input: DeleteOneInput;
};

export type MutationDeleteOneBannerArgs = {
  input: DeleteOneInput;
};

export type MutationDeleteOneCountryArgs = {
  input: DeleteOneInput;
};

export type MutationDeleteOneCurrencyArgs = {
  input: DeleteOneInput;
};

export type MutationDeleteOneFaqArgs = {
  input: DeleteOneInput;
};

export type MutationDeleteOneFeedbackArgs = {
  input: DeleteOneInput;
};

export type MutationDeleteOneMiscArgs = {
  input: DeleteOneInput;
};

export type MutationDeleteOneOrderCancelArgs = {
  input: DeleteOneInput;
};

export type MutationDeleteOneOrderFormArgs = {
  input: DeleteOneInput;
};

export type MutationDeleteOneOrderRefundArgs = {
  input: DeleteOneInput;
};

export type MutationDeleteOnePaymentArgs = {
  input: DeleteOneInput;
};

export type MutationDeleteOneProductAttributeArgs = {
  input: DeleteOneInput;
};

export type MutationDeleteOneProductBrandArgs = {
  input: DeleteOneInput;
};

export type MutationDeleteOneSellerShopArgs = {
  input: DeleteOneInput;
};

export type MutationDeleteOneShippingCourierArgs = {
  input: DeleteOneInput;
};

export type MutationDeleteOneShippingMethodArgs = {
  input: DeleteOneInput;
};

export type MutationDeleteOneShippingPickupArgs = {
  input: DeleteOneInput;
};

export type MutationDeleteOneShippingZoneArgs = {
  input: DeleteOneInput;
};

export type MutationDeleteOneShippingZoneCoverageArgs = {
  input: DeleteOneInput;
};

export type MutationDeleteOneShopCollectionArgs = {
  input: ReorderShopCollectionsInput;
};

export type MutationDeleteOneShopeeStoreArgs = {
  input: DeleteOneInput;
};

export type MutationDeleteOneUserArgs = {
  input: DeleteOneInput;
};

export type MutationDeleteOneUserPreferenceArgs = {
  input: DeleteOneInput;
};

export type MutationDeleteShopAddressArgs = {
  ids: Array<Scalars['String']>;
  sellerShopId: Scalars['String'];
};

export type MutationDeleteUserAddressArgs = {
  ids: Array<Scalars['String']>;
  userId: Scalars['String'];
};

export type MutationDelistManyProductsArgs = {
  ids: Array<Scalars['String']>;
};

export type MutationDelistProductArgs = {
  id: Scalars['String'];
};

export type MutationGenerateShopeeReportArgs = {
  input: ShopeeReportingCreateInput;
};

export type MutationGenerateSignedUrlArgs = {
  input: UploadRequest;
};

export type MutationMakeInvoiceShareableArgs = {
  shareable: Scalars['Boolean'];
  shopeeOrderId: Scalars['String'];
};

export type MutationPauseShopeeJobArgs = {
  shopeeJobId: Scalars['String'];
};

export type MutationPlaceOrderArgs = {
  input: PlaceOrderInput;
};

export type MutationPlaceOrderAsGuestArgs = {
  input: PlaceOrderInput;
};

export type MutationPreThirdPartySignInArgs = {
  input: PreThirdPartyIdentitySignInInput;
};

export type MutationPublishManyProductsArgs = {
  ids: Array<Scalars['String']>;
};

export type MutationReceiveOrderArgs = {
  ids: Array<Scalars['String']>;
};

export type MutationRegenerateShopeeReportArgs = {
  shopeeReportingId: Scalars['String'];
};

export type MutationRemoveCategoryAttributesFromProductCategoryArgs = {
  input: RelationsInput;
};

export type MutationRemoveChildrensFromProductCategoryArgs = {
  input: RelationsInput;
};

export type MutationRemoveCollectionFromShopCollectionArgs = {
  input: RelationInput;
};

export type MutationRemoveIdentityAccessesFromSellerShopArgs = {
  input: RelationsInput;
};

export type MutationRemoveMainOrderFromOrderArgs = {
  input: RelationInput;
};

export type MutationRemoveMainOrderFromOrderPaymentArgs = {
  input: RelationInput;
};

export type MutationRemoveMainOrdersFromOrderFormArgs = {
  input: RelationsInput;
};

export type MutationRemoveOrderCancelFromOrderArgs = {
  input: RelationInput;
};

export type MutationRemoveOrderFormFromMainOrderArgs = {
  input: RelationInput;
};

export type MutationRemoveOrderFormFromOrderFormItemArgs = {
  input: RelationInput;
};

export type MutationRemoveOrderFormItemsFromOrderFormArgs = {
  input: RelationsInput;
};

export type MutationRemoveOrderFormsFromSellerShopArgs = {
  input: RelationsInput;
};

export type MutationRemoveOrderFromFulfilmentArgs = {
  input: RelationInput;
};

export type MutationRemoveOrderFromOrderCancelArgs = {
  input: RelationInput;
};

export type MutationRemoveOrderFromOrderLineArgs = {
  input: RelationInput;
};

export type MutationRemoveOrderFromOrderPaymentArgs = {
  input: RelationInput;
};

export type MutationRemoveOrderFromOrderRefundArgs = {
  input: RelationInput;
};

export type MutationRemoveOrderLineFromOrderItemArgs = {
  input: RelationInput;
};

export type MutationRemoveOrderPaymentFromOrderArgs = {
  input: RelationInput;
};

export type MutationRemoveOrderRefundFromOrderArgs = {
  input: RelationInput;
};

export type MutationRemoveParentFromProductCategoryArgs = {
  input: RelationInput;
};

export type MutationRemovePaymentFromOrderPaymentArgs = {
  input: RelationInput;
};

export type MutationRemovePlanFromServiceSubscriptionArgs = {
  input: RelationInput;
};

export type MutationRemovePlansFromServiceArgs = {
  input: RelationsInput;
};

export type MutationRemoveProductAttributeFromCategoryAttributeArgs = {
  input: RelationInput;
};

export type MutationRemoveProductBrandFromProductArgs = {
  input: RelationInput;
};

export type MutationRemoveProductCategoryAttributesFromProductAttributeArgs = {
  input: RelationsInput;
};

export type MutationRemoveProductCategoryFromCategoryAttributeArgs = {
  input: RelationInput;
};

export type MutationRemoveProductCategoryFromProductArgs = {
  input: RelationInput;
};

export type MutationRemoveProductFromOrderFormItemArgs = {
  input: RelationInput;
};

export type MutationRemoveProductFromProductVariantArgs = {
  input: RelationInput;
};

export type MutationRemoveProductFromShopCollectionProductArgs = {
  input: RelationInput;
};

export type MutationRemoveProductVariantFromOrderFormItemArgs = {
  input: RelationInput;
};

export type MutationRemoveProductVariantsFromProductArgs = {
  input: RelationsInput;
};

export type MutationRemoveProductsFromProductCategoryArgs = {
  input: RelationsInput;
};

export type MutationRemoveProductsFromSellerShopArgs = {
  input: RelationsInput;
};

export type MutationRemoveSellerShopFromFulfilmentArgs = {
  input: RelationInput;
};

export type MutationRemoveSellerShopFromOrderArgs = {
  input: RelationInput;
};

export type MutationRemoveSellerShopFromOrderCancelArgs = {
  input: RelationInput;
};

export type MutationRemoveSellerShopFromOrderFormArgs = {
  input: RelationInput;
};

export type MutationRemoveSellerShopFromOrderRefundArgs = {
  input: RelationInput;
};

export type MutationRemoveSellerShopFromProductArgs = {
  input: RelationInput;
};

export type MutationRemoveSellerShopFromProductVariantArgs = {
  input: RelationInput;
};

export type MutationRemoveSellerShopFromServiceSubscriptionArgs = {
  input: RelationInput;
};

export type MutationRemoveSellerShopFromShippingMethodArgs = {
  input: RelationInput;
};

export type MutationRemoveSellerShopFromShippingPickupArgs = {
  input: RelationInput;
};

export type MutationRemoveSellerShopFromShippingZoneArgs = {
  input: RelationInput;
};

export type MutationRemoveSellerShopFromShopAddressArgs = {
  input: RelationInput;
};

export type MutationRemoveSellerShopFromShopCollectionArgs = {
  input: RelationInput;
};

export type MutationRemoveSellerShopFromShopSettingsArgs = {
  input: RelationInput;
};

export type MutationRemoveSellerShopFromShopeeJobArgs = {
  input: RelationInput;
};

export type MutationRemoveSellerShopFromShopeeReportingArgs = {
  input: RelationInput;
};

export type MutationRemoveSellerShopFromShopeeSettingsArgs = {
  input: RelationInput;
};

export type MutationRemoveSellerShopFromShopeeStoreArgs = {
  input: RelationInput;
};

export type MutationRemoveServiceFromServicePlanArgs = {
  input: RelationInput;
};

export type MutationRemoveShippingMethodsFromSellerShopArgs = {
  input: RelationsInput;
};

export type MutationRemoveShippingPickupFromShopAddressArgs = {
  input: RelationInput;
};

export type MutationRemoveShippingZoneFromShippingMethodArgs = {
  input: RelationInput;
};

export type MutationRemoveShippingZoneFromShippingZoneCoverageArgs = {
  input: RelationInput;
};

export type MutationRemoveShopAddressFromShippingPickupArgs = {
  input: RelationInput;
};

export type MutationRemoveShopCollectionFromShopCollectionProductArgs = {
  input: RelationInput;
};

export type MutationRemoveShopCollectionProductsFromProductArgs = {
  input: RelationsInput;
};

export type MutationRemoveShopCollectionProductsFromShopCollectionArgs = {
  input: RelationsInput;
};

export type MutationRemoveShopSettingsFromSellerShopArgs = {
  input: RelationInput;
};

export type MutationRemoveShopeeJobFromShopeeJobLinkArgs = {
  input: RelationInput;
};

export type MutationRemoveShopeeJobFromShopeeOrderArgs = {
  input: RelationInput;
};

export type MutationRemoveShopeeJobLinksFromShopeeJobArgs = {
  input: RelationsInput;
};

export type MutationRemoveShopeeOrderFromShopeeOrderLineArgs = {
  input: RelationInput;
};

export type MutationRemoveShopeeOrderLinesFromShopeeOrderArgs = {
  input: RelationsInput;
};

export type MutationRemoveShopeeOrdersFromShopeeJobArgs = {
  input: RelationsInput;
};

export type MutationRemoveShopeeReportingSnapshotsFromShopeeReportingArgs = {
  input: RelationsInput;
};

export type MutationRemoveShopeeSettingsFromSellerShopArgs = {
  input: RelationInput;
};

export type MutationRemoveSubscribesFromServicePlanArgs = {
  input: RelationsInput;
};

export type MutationRemoveUserFromMainOrderArgs = {
  input: RelationInput;
};

export type MutationRemoveUserFromOrderArgs = {
  input: RelationInput;
};

export type MutationRemoveUserFromOrderCancelArgs = {
  input: RelationInput;
};

export type MutationRemoveUserFromOrderRefundArgs = {
  input: RelationInput;
};

export type MutationRemoveUserFromPaymentArgs = {
  input: RelationInput;
};

export type MutationRemoveUserFromUserAddressArgs = {
  input: RelationInput;
};

export type MutationRemoveZonesFromSellerShopArgs = {
  input: RelationsInput;
};

export type MutationReorderShopCollectionsArgs = {
  input: Array<ReorderShopCollectionsInput>;
};

export type MutationRetriggerShopeeJobArgs = {
  shopeeJobId: Scalars['String'];
};

export type MutationReviewOrderCancelArgs = {
  input: ReviewCancelRefundOrderInput;
};

export type MutationReviewOrderRefundArgs = {
  input: ReviewCancelRefundOrderInput;
};

export type MutationSaveProductAsDraftArgs = {
  input: ProductCreateInput;
};

export type MutationSavePublishOrDelistProductArgs = {
  input: ProductPublishInput;
};

export type MutationSendEmailArgs = {
  input: SendEmailInput;
};

export type MutationSetCategoryAttributesOnProductCategoryArgs = {
  input: RelationsInput;
};

export type MutationSetChildrensOnProductCategoryArgs = {
  input: RelationsInput;
};

export type MutationSetCollectionOnShopCollectionArgs = {
  input: RelationInput;
};

export type MutationSetFulfilmentsOnOrderArgs = {
  input: RelationsInput;
};

export type MutationSetFulfilmentsOnOrderItemArgs = {
  input: RelationsInput;
};

export type MutationSetFulfilmentsOnSellerShopArgs = {
  input: RelationsInput;
};

export type MutationSetIdentityAccessesOnSellerShopArgs = {
  input: RelationsInput;
};

export type MutationSetItemsOnOrderLineArgs = {
  input: RelationsInput;
};

export type MutationSetMainOrderOnOrderArgs = {
  input: RelationInput;
};

export type MutationSetMainOrderOnOrderPaymentArgs = {
  input: RelationInput;
};

export type MutationSetMainOrdersOnOrderFormArgs = {
  input: RelationsInput;
};

export type MutationSetOrderCancelOnOrderArgs = {
  input: RelationInput;
};

export type MutationSetOrderFormItemsOnOrderFormArgs = {
  input: RelationsInput;
};

export type MutationSetOrderFormOnMainOrderArgs = {
  input: RelationInput;
};

export type MutationSetOrderFormOnOrderFormItemArgs = {
  input: RelationInput;
};

export type MutationSetOrderFormsOnSellerShopArgs = {
  input: RelationsInput;
};

export type MutationSetOrderItemsOnFulfilmentArgs = {
  input: RelationsInput;
};

export type MutationSetOrderLineOnOrderItemArgs = {
  input: RelationInput;
};

export type MutationSetOrderLinesOnOrderArgs = {
  input: RelationsInput;
};

export type MutationSetOrderOnFulfilmentArgs = {
  input: RelationInput;
};

export type MutationSetOrderOnOrderCancelArgs = {
  input: RelationInput;
};

export type MutationSetOrderOnOrderLineArgs = {
  input: RelationInput;
};

export type MutationSetOrderOnOrderPaymentArgs = {
  input: RelationInput;
};

export type MutationSetOrderOnOrderRefundArgs = {
  input: RelationInput;
};

export type MutationSetOrderPaymentOnOrderArgs = {
  input: RelationInput;
};

export type MutationSetOrderRefundOnOrderArgs = {
  input: RelationInput;
};

export type MutationSetOrdersOnMainOrderArgs = {
  input: RelationsInput;
};

export type MutationSetParentOnProductCategoryArgs = {
  input: RelationInput;
};

export type MutationSetPaymentOnOrderPaymentArgs = {
  input: RelationInput;
};

export type MutationSetPlanOnServiceSubscriptionArgs = {
  input: RelationInput;
};

export type MutationSetPlansOnServiceArgs = {
  input: RelationsInput;
};

export type MutationSetProductAttributeOnCategoryAttributeArgs = {
  input: RelationInput;
};

export type MutationSetProductBrandOnProductArgs = {
  input: RelationInput;
};

export type MutationSetProductCategoryAttributesOnProductAttributeArgs = {
  input: RelationsInput;
};

export type MutationSetProductCategoryOnCategoryAttributeArgs = {
  input: RelationInput;
};

export type MutationSetProductCategoryOnProductArgs = {
  input: RelationInput;
};

export type MutationSetProductOnOrderFormItemArgs = {
  input: RelationInput;
};

export type MutationSetProductOnProductVariantArgs = {
  input: RelationInput;
};

export type MutationSetProductOnShopCollectionProductArgs = {
  input: RelationInput;
};

export type MutationSetProductVariantOnOrderFormItemArgs = {
  input: RelationInput;
};

export type MutationSetProductVariantsOnProductArgs = {
  input: RelationsInput;
};

export type MutationSetProductsOnProductCategoryArgs = {
  input: RelationsInput;
};

export type MutationSetProductsOnSellerShopArgs = {
  input: RelationsInput;
};

export type MutationSetSellerShopOnFulfilmentArgs = {
  input: RelationInput;
};

export type MutationSetSellerShopOnOrderArgs = {
  input: RelationInput;
};

export type MutationSetSellerShopOnOrderCancelArgs = {
  input: RelationInput;
};

export type MutationSetSellerShopOnOrderFormArgs = {
  input: RelationInput;
};

export type MutationSetSellerShopOnOrderRefundArgs = {
  input: RelationInput;
};

export type MutationSetSellerShopOnProductArgs = {
  input: RelationInput;
};

export type MutationSetSellerShopOnProductVariantArgs = {
  input: RelationInput;
};

export type MutationSetSellerShopOnServiceSubscriptionArgs = {
  input: RelationInput;
};

export type MutationSetSellerShopOnShippingMethodArgs = {
  input: RelationInput;
};

export type MutationSetSellerShopOnShippingPickupArgs = {
  input: RelationInput;
};

export type MutationSetSellerShopOnShippingZoneArgs = {
  input: RelationInput;
};

export type MutationSetSellerShopOnShopAddressArgs = {
  input: RelationInput;
};

export type MutationSetSellerShopOnShopCollectionArgs = {
  input: RelationInput;
};

export type MutationSetSellerShopOnShopSettingsArgs = {
  input: RelationInput;
};

export type MutationSetSellerShopOnShopeeJobArgs = {
  input: RelationInput;
};

export type MutationSetSellerShopOnShopeeReportingArgs = {
  input: RelationInput;
};

export type MutationSetSellerShopOnShopeeSettingsArgs = {
  input: RelationInput;
};

export type MutationSetSellerShopOnShopeeStoreArgs = {
  input: RelationInput;
};

export type MutationSetServiceOnServicePlanArgs = {
  input: RelationInput;
};

export type MutationSetShippingMethodsOnSellerShopArgs = {
  input: RelationsInput;
};

export type MutationSetShippingMethodsOnShippingZoneArgs = {
  input: RelationsInput;
};

export type MutationSetShippingPickupOnShopAddressArgs = {
  input: RelationInput;
};

export type MutationSetShippingPickupsOnSellerShopArgs = {
  input: RelationsInput;
};

export type MutationSetShippingZoneCoveragesOnShippingZoneArgs = {
  input: RelationsInput;
};

export type MutationSetShippingZoneOnShippingMethodArgs = {
  input: RelationInput;
};

export type MutationSetShippingZoneOnShippingZoneCoverageArgs = {
  input: RelationInput;
};

export type MutationSetShopAddressOnShippingPickupArgs = {
  input: RelationInput;
};

export type MutationSetShopAddressesOnSellerShopArgs = {
  input: RelationsInput;
};

export type MutationSetShopCollectionOnShopCollectionProductArgs = {
  input: RelationInput;
};

export type MutationSetShopCollectionProductsOnProductArgs = {
  input: RelationsInput;
};

export type MutationSetShopCollectionProductsOnShopCollectionArgs = {
  input: RelationsInput;
};

export type MutationSetShopCollectionsOnSellerShopArgs = {
  input: RelationsInput;
};

export type MutationSetShopSettingsOnSellerShopArgs = {
  input: RelationInput;
};

export type MutationSetShopeeJobLinksOnShopeeJobArgs = {
  input: RelationsInput;
};

export type MutationSetShopeeJobOnShopeeJobLinkArgs = {
  input: RelationInput;
};

export type MutationSetShopeeJobOnShopeeOrderArgs = {
  input: RelationInput;
};

export type MutationSetShopeeOrderLinesOnShopeeOrderArgs = {
  input: RelationsInput;
};

export type MutationSetShopeeOrderOnShopeeOrderLineArgs = {
  input: RelationInput;
};

export type MutationSetShopeeOrdersOnShopeeJobArgs = {
  input: RelationsInput;
};

export type MutationSetShopeeReportingSnapshotsOnShopeeReportingArgs = {
  input: RelationsInput;
};

export type MutationSetShopeeSettingsOnSellerShopArgs = {
  input: RelationInput;
};

export type MutationSetSubscribesOnServicePlanArgs = {
  input: RelationsInput;
};

export type MutationSetUserAddressesOnUserArgs = {
  input: RelationsInput;
};

export type MutationSetUserOnMainOrderArgs = {
  input: RelationInput;
};

export type MutationSetUserOnOrderArgs = {
  input: RelationInput;
};

export type MutationSetUserOnOrderCancelArgs = {
  input: RelationInput;
};

export type MutationSetUserOnOrderRefundArgs = {
  input: RelationInput;
};

export type MutationSetUserOnPaymentArgs = {
  input: RelationInput;
};

export type MutationSetUserOnUserAddressArgs = {
  input: RelationInput;
};

export type MutationSetZonesOnSellerShopArgs = {
  input: RelationsInput;
};

export type MutationSoftDeleteProductsArgs = {
  ids: Array<Scalars['String']>;
};

export type MutationSoftDeleteShippingZonesArgs = {
  ids: Array<Scalars['String']>;
};

export type MutationTest_MarkOneOrderAsPaidArgs = {
  id: Scalars['String'];
};

export type MutationThirdPartySignInArgs = {
  input: ThirdPartyIdentitySignInInput;
};

export type MutationUnregisterDeviceTokenArgs = {
  fcmTokens: Array<Scalars['String']>;
};

export type MutationUpdateFulfilmentArgs = {
  input: FulfilmentUpdateInput;
};

export type MutationUpdateFulfilmentsArgs = {
  filter: FulfilmentUpdateFilterInput;
  input: FulfilmentUpdateManyInput;
};

export type MutationUpdateManyAdminPreferencesArgs = {
  input: UpdateManyAdminPreferencesInput;
};

export type MutationUpdateManyAdminsArgs = {
  input: UpdateManyAdminsInput;
};

export type MutationUpdateManyAnnouncementsArgs = {
  input: UpdateManyAnnouncementsInput;
};

export type MutationUpdateManyBannersArgs = {
  input: UpdateManyBannersInput;
};

export type MutationUpdateManyCategoryAttributesArgs = {
  input: UpdateManyCategoryAttributesInput;
};

export type MutationUpdateManyCountriesArgs = {
  input: UpdateManyCountriesInput;
};

export type MutationUpdateManyCurrenciesArgs = {
  input: UpdateManyCurrenciesInput;
};

export type MutationUpdateManyFaqsArgs = {
  input: UpdateManyFaqsInput;
};

export type MutationUpdateManyFeedbacksArgs = {
  input: UpdateManyFeedbacksInput;
};

export type MutationUpdateManyOrderCancelsArgs = {
  input: UpdateManyOrderCancelsInput;
};

export type MutationUpdateManyOrderRefundsArgs = {
  input: UpdateManyOrderRefundsInput;
};

export type MutationUpdateManyProductAttributesArgs = {
  input: UpdateManyProductAttributesInput;
};

export type MutationUpdateManyProductBrandsArgs = {
  input: UpdateManyProductBrandsInput;
};

export type MutationUpdateManyProductCategoriesArgs = {
  input: UpdateManyProductCategoriesInput;
};

export type MutationUpdateManyProductsArgs = {
  input: UpdateManyProductsInput;
};

export type MutationUpdateManyShippingCouriersArgs = {
  input: UpdateManyShippingCouriersInput;
};

export type MutationUpdateManyShippingMethodsArgs = {
  input: UpdateManyShippingMethodsInput;
};

export type MutationUpdateManyShippingZoneCoveragesArgs = {
  input: UpdateManyShippingZoneCoveragesInput;
};

export type MutationUpdateManyShippingZonesArgs = {
  input: UpdateManyShippingZonesInput;
};

export type MutationUpdateManyShopeeJobsArgs = {
  input: UpdateManyShopeeJobsInput;
};

export type MutationUpdateManyShopeeReportingsArgs = {
  input: UpdateManyShopeeReportingsInput;
};

export type MutationUpdateManyUserDevicesArgs = {
  input: UpdateManyUserDevicesInput;
};

export type MutationUpdateManyUserPreferencesArgs = {
  input: UpdateManyUserPreferencesInput;
};

export type MutationUpdateManyUsersArgs = {
  input: UpdateManyUsersInput;
};

export type MutationUpdateOneAdminArgs = {
  input: UpdateOneAdminInput;
};

export type MutationUpdateOneAdminPreferenceArgs = {
  input: UpdateOneAdminPreferenceInput;
};

export type MutationUpdateOneAnnouncementArgs = {
  input: UpdateOneAnnouncementInput;
};

export type MutationUpdateOneBannerArgs = {
  input: UpdateOneBannerInput;
};

export type MutationUpdateOneCategoryAttributeArgs = {
  input: UpdateOneCategoryAttributeInput;
};

export type MutationUpdateOneCountryArgs = {
  input: UpdateOneCountryInput;
};

export type MutationUpdateOneCurrencyArgs = {
  input: UpdateOneCurrencyInput;
};

export type MutationUpdateOneFaqArgs = {
  input: UpdateOneFaqInput;
};

export type MutationUpdateOneFeedbackArgs = {
  input: UpdateOneFeedbackInput;
};

export type MutationUpdateOneMiscArgs = {
  input: UpdateOneMiscInput;
};

export type MutationUpdateOneOrderCancelArgs = {
  input: UpdateOneOrderCancelInput;
};

export type MutationUpdateOneOrderFormArgs = {
  input: OrderFormUpdateInput;
};

export type MutationUpdateOneOrderRefundArgs = {
  input: UpdateOneOrderRefundInput;
};

export type MutationUpdateOneOrderStatusArgs = {
  input: UpdateOrderStatusInput;
};

export type MutationUpdateOneOrderTrackingNumberArgs = {
  input: UpdateTrackingNumberInput;
};

export type MutationUpdateOneProductArgs = {
  input: UpdateOneProductInput;
};

export type MutationUpdateOneProductAttributeArgs = {
  input: UpdateOneProductAttributeInput;
};

export type MutationUpdateOneProductBrandArgs = {
  input: UpdateOneProductBrandInput;
};

export type MutationUpdateOneProductCategoryArgs = {
  input: UpdateOneProductCategoryInput;
};

export type MutationUpdateOneProductVariantArgs = {
  input: UpdateOneProductVariantInput;
};

export type MutationUpdateOneShippingCourierArgs = {
  input: UpdateOneShippingCourierInput;
};

export type MutationUpdateOneShippingMethodArgs = {
  input: UpdateOneShippingMethodInput;
};

export type MutationUpdateOneShippingPickupArgs = {
  input: UpdateOneShippingPickupInput;
};

export type MutationUpdateOneShippingZoneArgs = {
  input: UpdateOneShippingZoneInput;
};

export type MutationUpdateOneShippingZoneCoverageArgs = {
  input: UpdateOneShippingZoneCoverageInput;
};

export type MutationUpdateOneShopAddressArgs = {
  input: ShopAddressUpdateInput;
};

export type MutationUpdateOneShopCollectionArgs = {
  input: UpdateOneShopCollectionInput;
};

export type MutationUpdateOneShopeeJobArgs = {
  input: UpdateOneShopeeJobInput;
};

export type MutationUpdateOneShopeeOrderLineArgs = {
  input: UpdateOneShopeeOrderLineInput;
};

export type MutationUpdateOneShopeeReportingArgs = {
  input: UpdateOneShopeeReportingInput;
};

export type MutationUpdateOneUserArgs = {
  input: UpdateOneUserInput;
};

export type MutationUpdateOneUserAddressArgs = {
  input: UserAddressUpdateInput;
};

export type MutationUpdateOneUserDeviceArgs = {
  input: UpdateOneUserDeviceInput;
};

export type MutationUpdateOneUserPreferenceArgs = {
  input: UpdateOneUserPreferenceInput;
};

export type MutationUpdateOrderBillingAddressArgs = {
  input: UpdateBillingAddressInput;
};

export type MutationUpdatePaymentArgs = {
  input: PaymentUpdateInput;
};

export type MutationUpdateProductArgs = {
  input: ProductPublishInput;
};

export type MutationUpdateSellerShopArgs = {
  input: SellerShopUpdateInput;
};

export type MutationUpdateSellerShopOperatingHoursArgs = {
  input: UpdateShopOperatingHoursInput;
};

export type MutationUpdateSellerShopStatusArgs = {
  id: Scalars['String'];
  status: Scalars['String'];
};

export type MutationUpdateShippingZoneStatusArgs = {
  id: Scalars['String'];
  status: Scalars['String'];
};

export type MutationUpdateShopCollectionItemsArgs = {
  input: ReorderShopCollectionsInput;
};

export type MutationUpdateShopCollectionStatusArgs = {
  input: UpdateCollectionStatusInput;
};

export type MutationUpdateShopeeOrderArgs = {
  input: ShopeeOrderUpdateInput;
};

export type MutationUpgradeServiceSubscriptionArgs = {
  planId: Scalars['String'];
  sellerShopId: Scalars['String'];
  serviceName: Scalars['String'];
};

export type MutationUserChangeImportantInfoArgs = {
  input: ChangeImportantUserInfoInput;
  otpInput: ValidateOtpInput;
};

export type MutationUserChangePasswordArgs = {
  input: UserChangePasswordInput;
};

export type MutationUserForgotPasswordArgs = {
  input: GeneralTokenRequestInput;
};

export type MutationUserRefreshAccessTokenArgs = {
  input: RefreshAccessTokenInput;
};

export type MutationUserRequestChangeImportantInfoArgs = {
  input: GeneralTokenRequestInput;
};

export type MutationUserResetPasswordIfForgottenArgs = {
  input: ResetUserIdentityPasswordInput;
  otpInput: ValidateOtpInput;
};

export type MutationUserSendAccountVerificationCodeArgs = {
  input: GeneralTokenRequestInput;
};

export type MutationUserSignInArgs = {
  input: LoginCredentialInput;
};

export type MutationUserSignUpArgs = {
  auth: LoginCredentialInput;
  input: StrictUserSignUpInput;
};

export type MutationUserUpdateOwnPreferenceArgs = {
  input: UserPreferenceUpdateOwnInput;
};

export type MutationUserUpdateProfileArgs = {
  input: UpdateUserProfileInput;
};

export type MutationUserVerifyAccountArgs = {
  otpInput: ValidateOtpInput;
};

export type MutationUserVerifyPasswordArgs = {
  input: UserVerifyPasswordInput;
};

export type MutationValidateDownloadBuyerInvoiceArgs = {
  input: DownloadInvoiceInput;
};

export type MutationValidateOtpArgs = {
  input: ValidateOtpInput;
};

export type NumberFieldComparison = {
  between?: InputMaybe<NumberFieldComparisonBetween>;
  eq?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  is?: InputMaybe<Scalars['Boolean']>;
  isNot?: InputMaybe<Scalars['Boolean']>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  neq?: InputMaybe<Scalars['Float']>;
  notBetween?: InputMaybe<NumberFieldComparisonBetween>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export type NumberFieldComparisonBetween = {
  lower: Scalars['Float'];
  upper: Scalars['Float'];
};

export enum OnboardEvent {
  SetupShop = 'SETUP_SHOP',
}

export type OpeningHours = {
  __typename?: 'OpeningHours';
  closingTime: Time;
  day: Scalars['String'];
  openingTime: Time;
};

export type OpeningHoursInput = {
  closingTime: TimeInput;
  day: Scalars['String'];
  openingTime: TimeInput;
};

export type Order = {
  __typename?: 'Order';
  billingAddress: OrderAddress;
  createdAt: Scalars['DateTime'];
  currency: Scalars['String'];
  deliveryMethod: DeliveryMethod;
  discounts: Array<Scalars['Float']>;
  fulfillmentDate?: Maybe<Scalars['DateTime']>;
  fulfilments: Array<Fulfilment>;
  fulfilmentsAggregate: Array<OrderFulfilmentsAggregateResponse>;
  id: Scalars['ID'];
  mainOrder: MainOrder;
  mainOrderId: Scalars['String'];
  notes?: Maybe<Scalars['String']>;
  orderCancel: OrderCancel;
  orderLines: Array<OrderLine>;
  orderLinesAggregate: Array<OrderOrderLinesAggregateResponse>;
  orderPayment: OrderPayment;
  orderPlacedAt: Scalars['DateTime'];
  orderRefund: OrderRefund;
  referenceNumber: Scalars['String'];
  sellerShop: SellerShop;
  sellerShopId: Scalars['String'];
  shippingAddress: OrderAddress;
  shippingCharges: Scalars['Float'];
  status: OrderStatus;
  subTotal: Scalars['Float'];
  taxRate: Scalars['Float'];
  taxedAmount: Scalars['Float'];
  totalWithTax: Scalars['Float'];
  trackingNumber?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  user?: Maybe<User>;
  userId: Scalars['String'];
};

export type OrderFulfilmentsArgs = {
  filter?: InputMaybe<FulfilmentFilter>;
  sorting?: InputMaybe<Array<FulfilmentSort>>;
};

export type OrderFulfilmentsAggregateArgs = {
  filter?: InputMaybe<FulfilmentAggregateFilter>;
};

export type OrderOrderLinesArgs = {
  filter?: InputMaybe<OrderLineFilter>;
  sorting?: InputMaybe<Array<OrderLineSort>>;
};

export type OrderOrderLinesAggregateArgs = {
  filter?: InputMaybe<OrderLineAggregateFilter>;
};

export type OrderAddress = {
  __typename?: 'OrderAddress';
  addressOne?: Maybe<Scalars['String']>;
  addressTwo?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  countryCode?: Maybe<Scalars['String']>;
  customFields?: Maybe<Scalars['JSON']>;
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName?: Maybe<Scalars['String']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  phoneCode: Scalars['String'];
  phoneNumber: Scalars['String'];
  postalCode?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
};

export type OrderAddressCreateInput = {
  addressOne?: InputMaybe<Scalars['String']>;
  addressTwo?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  countryCode?: InputMaybe<Scalars['String']>;
  customFields?: InputMaybe<Scalars['JSON']>;
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName?: InputMaybe<Scalars['String']>;
  latitude?: InputMaybe<Scalars['Float']>;
  longitude?: InputMaybe<Scalars['Float']>;
  phoneCode: Scalars['String'];
  phoneNumber: Scalars['String'];
  postalCode?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Scalars['String']>;
};

export type OrderAggregateFilter = {
  and?: InputMaybe<Array<OrderAggregateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  mainOrderId?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrderAggregateFilter>>;
  orderPlacedAt?: InputMaybe<DateFieldComparison>;
  referenceNumber?: InputMaybe<StringFieldComparison>;
  sellerShopId?: InputMaybe<StringFieldComparison>;
  status?: InputMaybe<OrderStatusFilterComparison>;
  subTotal?: InputMaybe<NumberFieldComparison>;
  trackingNumber?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  userId?: InputMaybe<StringFieldComparison>;
};

export type OrderAggregateGroupBy = {
  __typename?: 'OrderAggregateGroupBy';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  mainOrderId?: Maybe<Scalars['String']>;
  orderPlacedAt?: Maybe<Scalars['DateTime']>;
  referenceNumber?: Maybe<Scalars['String']>;
  sellerShopId?: Maybe<Scalars['String']>;
  status?: Maybe<OrderStatus>;
  subTotal?: Maybe<Scalars['Float']>;
  trackingNumber?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['String']>;
};

export type OrderAggregateResponse = {
  __typename?: 'OrderAggregateResponse';
  avg?: Maybe<OrderAvgAggregate>;
  count?: Maybe<OrderCountAggregate>;
  groupBy?: Maybe<OrderAggregateGroupBy>;
  max?: Maybe<OrderMaxAggregate>;
  min?: Maybe<OrderMinAggregate>;
  sum?: Maybe<OrderSumAggregate>;
};

export type OrderAmount = {
  __typename?: 'OrderAmount';
  amount?: Maybe<Scalars['Float']>;
  date?: Maybe<Scalars['String']>;
};

export type OrderAvgAggregate = {
  __typename?: 'OrderAvgAggregate';
  subTotal?: Maybe<Scalars['Float']>;
};

export type OrderCancel = {
  __typename?: 'OrderCancel';
  createdAt: Scalars['DateTime'];
  currency?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  images?: Maybe<Array<Scalars['String']>>;
  order: Order;
  orderId: Scalars['String'];
  reason: Scalars['String'];
  referenceNumber: Scalars['String'];
  reviewBy?: Maybe<CancelRefundReviewBy>;
  reviewDate?: Maybe<Scalars['DateTime']>;
  sellerShop: SellerShop;
  sellerShopId: Scalars['String'];
  status: CancelRefundStatus;
  total?: Maybe<Scalars['Float']>;
  updatedAt: Scalars['DateTime'];
  user: User;
  userId: Scalars['String'];
};

export type OrderCancelAggregateGroupBy = {
  __typename?: 'OrderCancelAggregateGroupBy';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  orderId?: Maybe<Scalars['String']>;
  referenceNumber?: Maybe<Scalars['String']>;
  sellerShopId?: Maybe<Scalars['String']>;
  status?: Maybe<CancelRefundStatus>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['String']>;
};

export type OrderCancelConnection = {
  __typename?: 'OrderCancelConnection';
  /** Array of edges. */
  edges: Array<OrderCancelEdge>;
  /** Paging information */
  pageInfo: PageInfo;
};

export type OrderCancelCountAggregate = {
  __typename?: 'OrderCancelCountAggregate';
  createdAt?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  orderId?: Maybe<Scalars['Int']>;
  referenceNumber?: Maybe<Scalars['Int']>;
  sellerShopId?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

export type OrderCancelCreateInput = {
  images?: InputMaybe<Array<Scalars['String']>>;
  orderId: Scalars['String'];
  reason: Scalars['String'];
  sellerShopId: Scalars['String'];
  shippingCost?: InputMaybe<Scalars['Float']>;
  status?: InputMaybe<CancelRefundStatus>;
};

export type OrderCancelDeleteFilter = {
  and?: InputMaybe<Array<OrderCancelDeleteFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderCancelDeleteFilter>>;
  orderId?: InputMaybe<StringFieldComparison>;
  referenceNumber?: InputMaybe<StringFieldComparison>;
  sellerShopId?: InputMaybe<StringFieldComparison>;
  status?: InputMaybe<CancelRefundStatusFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  userId?: InputMaybe<StringFieldComparison>;
};

export type OrderCancelDeleteResponse = {
  __typename?: 'OrderCancelDeleteResponse';
  createdAt?: Maybe<Scalars['DateTime']>;
  currency?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  images?: Maybe<Array<Scalars['String']>>;
  orderId?: Maybe<Scalars['String']>;
  reason?: Maybe<Scalars['String']>;
  referenceNumber?: Maybe<Scalars['String']>;
  reviewBy?: Maybe<CancelRefundReviewBy>;
  reviewDate?: Maybe<Scalars['DateTime']>;
  sellerShopId?: Maybe<Scalars['String']>;
  status?: Maybe<CancelRefundStatus>;
  total?: Maybe<Scalars['Float']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['String']>;
};

export type OrderCancelEdge = {
  __typename?: 'OrderCancelEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the OrderCancel */
  node: OrderCancel;
};

export type OrderCancelFilter = {
  and?: InputMaybe<Array<OrderCancelFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderCancelFilter>>;
  orderId?: InputMaybe<StringFieldComparison>;
  referenceNumber?: InputMaybe<StringFieldComparison>;
  sellerShopId?: InputMaybe<StringFieldComparison>;
  status?: InputMaybe<CancelRefundStatusFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  userId?: InputMaybe<StringFieldComparison>;
};

export type OrderCancelMaxAggregate = {
  __typename?: 'OrderCancelMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  orderId?: Maybe<Scalars['String']>;
  referenceNumber?: Maybe<Scalars['String']>;
  sellerShopId?: Maybe<Scalars['String']>;
  status?: Maybe<CancelRefundStatus>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['String']>;
};

export type OrderCancelMinAggregate = {
  __typename?: 'OrderCancelMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  orderId?: Maybe<Scalars['String']>;
  referenceNumber?: Maybe<Scalars['String']>;
  sellerShopId?: Maybe<Scalars['String']>;
  status?: Maybe<CancelRefundStatus>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['String']>;
};

export type OrderCancelSort = {
  direction: SortDirection;
  field: OrderCancelSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum OrderCancelSortFields {
  CreatedAt = 'createdAt',
  Id = 'id',
  OrderId = 'orderId',
  ReferenceNumber = 'referenceNumber',
  SellerShopId = 'sellerShopId',
  Status = 'status',
  UpdatedAt = 'updatedAt',
  UserId = 'userId',
}

export type OrderCancelUpdateFilter = {
  and?: InputMaybe<Array<OrderCancelUpdateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderCancelUpdateFilter>>;
  orderId?: InputMaybe<StringFieldComparison>;
  referenceNumber?: InputMaybe<StringFieldComparison>;
  sellerShopId?: InputMaybe<StringFieldComparison>;
  status?: InputMaybe<CancelRefundStatusFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  userId?: InputMaybe<StringFieldComparison>;
};

export type OrderCancelUpdateInput = {
  images?: InputMaybe<Array<Scalars['String']>>;
  reason?: InputMaybe<Scalars['String']>;
  shippingCost?: InputMaybe<Scalars['Float']>;
  status?: InputMaybe<CancelRefundStatus>;
};

export type OrderConnection = {
  __typename?: 'OrderConnection';
  /** Array of edges. */
  edges: Array<OrderEdge>;
  /** Paging information */
  pageInfo: PageInfo;
};

export type OrderCount = {
  __typename?: 'OrderCount';
  count: Scalars['Float'];
  status: OrderStatus;
};

export type OrderCountAggregate = {
  __typename?: 'OrderCountAggregate';
  createdAt?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  mainOrderId?: Maybe<Scalars['Int']>;
  orderPlacedAt?: Maybe<Scalars['Int']>;
  referenceNumber?: Maybe<Scalars['Int']>;
  sellerShopId?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
  subTotal?: Maybe<Scalars['Int']>;
  trackingNumber?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

export type OrderEdge = {
  __typename?: 'OrderEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the Order */
  node: Order;
};

export type OrderFilter = {
  and?: InputMaybe<Array<OrderFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  mainOrderId?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrderFilter>>;
  orderPlacedAt?: InputMaybe<DateFieldComparison>;
  referenceNumber?: InputMaybe<StringFieldComparison>;
  sellerShopId?: InputMaybe<StringFieldComparison>;
  status?: InputMaybe<OrderStatusFilterComparison>;
  subTotal?: InputMaybe<NumberFieldComparison>;
  trackingNumber?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  userId?: InputMaybe<StringFieldComparison>;
};

export type OrderForm = {
  __typename?: 'OrderForm';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  link?: Maybe<Scalars['String']>;
  mainOrders: OrderFormMainOrdersConnection;
  name: Scalars['String'];
  orderFormItems: Array<OrderFormItem>;
  sellerShop: SellerShop;
  sellerShopId: Scalars['String'];
  status: GeneralStatus;
  updatedAt: Scalars['DateTime'];
};

export type OrderFormMainOrdersArgs = {
  filter?: InputMaybe<MainOrderFilter>;
  paging?: InputMaybe<CursorPaging>;
  sorting?: InputMaybe<Array<MainOrderSort>>;
};

export type OrderFormOrderFormItemsArgs = {
  filter?: InputMaybe<OrderFormItemFilter>;
  sorting?: InputMaybe<Array<OrderFormItemSort>>;
};

export type OrderFormAggregateGroupBy = {
  __typename?: 'OrderFormAggregateGroupBy';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  sellerShopId?: Maybe<Scalars['String']>;
  status?: Maybe<GeneralStatus>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type OrderFormConnection = {
  __typename?: 'OrderFormConnection';
  /** Array of edges. */
  edges: Array<OrderFormEdge>;
  /** Paging information */
  pageInfo: PageInfo;
};

export type OrderFormCountAggregate = {
  __typename?: 'OrderFormCountAggregate';
  createdAt?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  sellerShopId?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
};

export type OrderFormCreateInput = {
  id?: InputMaybe<Scalars['String']>;
  link?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  orderFormItems: Array<OrderFormItemCreateInput>;
  sellerShopId?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<GeneralStatus>;
};

export type OrderFormDeleteFilter = {
  and?: InputMaybe<Array<OrderFormDeleteFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrderFormDeleteFilter>>;
  sellerShopId?: InputMaybe<StringFieldComparison>;
  status?: InputMaybe<GeneralStatusFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFormDeleteResponse = {
  __typename?: 'OrderFormDeleteResponse';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  link?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  orderFormItems?: Maybe<Array<OrderFormItem>>;
  sellerShopId?: Maybe<Scalars['String']>;
  status?: Maybe<GeneralStatus>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type OrderFormEdge = {
  __typename?: 'OrderFormEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the OrderForm */
  node: OrderForm;
};

export type OrderFormFilter = {
  and?: InputMaybe<Array<OrderFormFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<OrderFormFilter>>;
  orderFormItems?: InputMaybe<OrderFormFilterOrderFormItemFilter>;
  sellerShopId?: InputMaybe<StringFieldComparison>;
  status?: InputMaybe<GeneralStatusFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFormFilterOrderFormItemFilter = {
  and?: InputMaybe<Array<OrderFormFilterOrderFormItemFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderFormFilterOrderFormItemFilter>>;
  productId?: InputMaybe<StringFieldComparison>;
  productVariantId?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFormItem = {
  __typename?: 'OrderFormItem';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  orderForm: OrderForm;
  orderFormId: Scalars['String'];
  product?: Maybe<Product>;
  productId?: Maybe<Scalars['String']>;
  productVariant: ProductVariant;
  productVariantId: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type OrderFormItemAggregateGroupBy = {
  __typename?: 'OrderFormItemAggregateGroupBy';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  productId?: Maybe<Scalars['String']>;
  productVariantId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type OrderFormItemCountAggregate = {
  __typename?: 'OrderFormItemCountAggregate';
  createdAt?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  productId?: Maybe<Scalars['Int']>;
  productVariantId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
};

export type OrderFormItemCreateInput = {
  id?: InputMaybe<Scalars['String']>;
  orderFormId?: InputMaybe<Scalars['String']>;
  productId?: InputMaybe<Scalars['String']>;
  productVariantId: Scalars['String'];
};

export type OrderFormItemEdge = {
  __typename?: 'OrderFormItemEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the OrderFormItem */
  node: OrderFormItem;
};

export type OrderFormItemFilter = {
  and?: InputMaybe<Array<OrderFormItemFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderFormItemFilter>>;
  productId?: InputMaybe<StringFieldComparison>;
  productVariantId?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderFormItemMaxAggregate = {
  __typename?: 'OrderFormItemMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  productId?: Maybe<Scalars['String']>;
  productVariantId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type OrderFormItemMinAggregate = {
  __typename?: 'OrderFormItemMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  productId?: Maybe<Scalars['String']>;
  productVariantId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type OrderFormItemSort = {
  direction: SortDirection;
  field: OrderFormItemSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum OrderFormItemSortFields {
  CreatedAt = 'createdAt',
  Id = 'id',
  ProductId = 'productId',
  ProductVariantId = 'productVariantId',
  UpdatedAt = 'updatedAt',
}

export type OrderFormMainOrdersConnection = {
  __typename?: 'OrderFormMainOrdersConnection';
  /** Array of edges. */
  edges: Array<MainOrderEdge>;
  /** Paging information */
  pageInfo: PageInfo;
};

export type OrderFormMaxAggregate = {
  __typename?: 'OrderFormMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  sellerShopId?: Maybe<Scalars['String']>;
  status?: Maybe<GeneralStatus>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type OrderFormMinAggregate = {
  __typename?: 'OrderFormMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  sellerShopId?: Maybe<Scalars['String']>;
  status?: Maybe<GeneralStatus>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type OrderFormSort = {
  direction: SortDirection;
  field: OrderFormSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum OrderFormSortFields {
  CreatedAt = 'createdAt',
  Id = 'id',
  Name = 'name',
  SellerShopId = 'sellerShopId',
  Status = 'status',
  UpdatedAt = 'updatedAt',
}

export type OrderFormUpdateInput = {
  id: Scalars['String'];
  name?: InputMaybe<Scalars['String']>;
  orderFormItems?: InputMaybe<Array<OrderFormItemCreateInput>>;
  status?: InputMaybe<GeneralStatus>;
};

export type OrderFulfilmentsAggregateGroupBy = {
  __typename?: 'OrderFulfilmentsAggregateGroupBy';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  isReceived?: Maybe<Scalars['Boolean']>;
  orderId?: Maybe<Scalars['String']>;
  referenceNumber?: Maybe<Scalars['String']>;
  sellerShopId?: Maybe<Scalars['String']>;
  shippingDate?: Maybe<Scalars['DateTime']>;
  status?: Maybe<FulfilmentStatusType>;
  trackingNumber?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type OrderFulfilmentsAggregateResponse = {
  __typename?: 'OrderFulfilmentsAggregateResponse';
  count?: Maybe<OrderFulfilmentsCountAggregate>;
  groupBy?: Maybe<OrderFulfilmentsAggregateGroupBy>;
  max?: Maybe<OrderFulfilmentsMaxAggregate>;
  min?: Maybe<OrderFulfilmentsMinAggregate>;
};

export type OrderFulfilmentsCountAggregate = {
  __typename?: 'OrderFulfilmentsCountAggregate';
  createdAt?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  isReceived?: Maybe<Scalars['Int']>;
  orderId?: Maybe<Scalars['Int']>;
  referenceNumber?: Maybe<Scalars['Int']>;
  sellerShopId?: Maybe<Scalars['Int']>;
  shippingDate?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
  trackingNumber?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
};

export type OrderFulfilmentsMaxAggregate = {
  __typename?: 'OrderFulfilmentsMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  orderId?: Maybe<Scalars['String']>;
  referenceNumber?: Maybe<Scalars['String']>;
  sellerShopId?: Maybe<Scalars['String']>;
  shippingDate?: Maybe<Scalars['DateTime']>;
  status?: Maybe<FulfilmentStatusType>;
  trackingNumber?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type OrderFulfilmentsMinAggregate = {
  __typename?: 'OrderFulfilmentsMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  orderId?: Maybe<Scalars['String']>;
  referenceNumber?: Maybe<Scalars['String']>;
  sellerShopId?: Maybe<Scalars['String']>;
  shippingDate?: Maybe<Scalars['DateTime']>;
  status?: Maybe<FulfilmentStatusType>;
  trackingNumber?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type OrderItem = {
  __typename?: 'OrderItem';
  createdAt: Scalars['DateTime'];
  discountedUnitPrice: Scalars['Float'];
  fulfilments: Array<Fulfilment>;
  id: Scalars['ID'];
  isFulfilled?: Maybe<Scalars['Boolean']>;
  notes?: Maybe<Scalars['String']>;
  orderLine: OrderLine;
  orderLineId?: Maybe<Scalars['String']>;
  unitPrice: Scalars['Float'];
  updatedAt: Scalars['DateTime'];
};

export type OrderItemFulfilmentsArgs = {
  filter?: InputMaybe<FulfilmentFilter>;
  sorting?: InputMaybe<Array<FulfilmentSort>>;
};

export type OrderItemAggregateGroupBy = {
  __typename?: 'OrderItemAggregateGroupBy';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type OrderItemCountAggregate = {
  __typename?: 'OrderItemCountAggregate';
  createdAt?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
};

export type OrderItemCreateInput = {
  id?: InputMaybe<Scalars['String']>;
  notes?: InputMaybe<Scalars['String']>;
  orderLineId?: InputMaybe<Scalars['String']>;
  unitPrice?: InputMaybe<Scalars['Float']>;
};

export type OrderItemEdge = {
  __typename?: 'OrderItemEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the OrderItem */
  node: OrderItem;
};

export type OrderItemFilter = {
  and?: InputMaybe<Array<OrderItemFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderItemFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderItemMaxAggregate = {
  __typename?: 'OrderItemMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type OrderItemMinAggregate = {
  __typename?: 'OrderItemMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type OrderItemSort = {
  direction: SortDirection;
  field: OrderItemSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum OrderItemSortFields {
  CreatedAt = 'createdAt',
  Id = 'id',
  UpdatedAt = 'updatedAt',
}

export type OrderLine = {
  __typename?: 'OrderLine';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  items: Array<OrderItem>;
  linePrice: Scalars['Float'];
  order: Order;
  orderId: Scalars['String'];
  productSnapshot?: Maybe<ProductSnapshotDto>;
  productVariantId: Scalars['String'];
  quantity: Scalars['Float'];
  updatedAt: Scalars['DateTime'];
};

export type OrderLineItemsArgs = {
  filter?: InputMaybe<OrderItemFilter>;
  sorting?: InputMaybe<Array<OrderItemSort>>;
};

export type OrderLineAggregateFilter = {
  and?: InputMaybe<Array<OrderLineAggregateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderLineAggregateFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderLineAggregateGroupBy = {
  __typename?: 'OrderLineAggregateGroupBy';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type OrderLineCountAggregate = {
  __typename?: 'OrderLineCountAggregate';
  createdAt?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
};

export type OrderLineEdge = {
  __typename?: 'OrderLineEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the OrderLine */
  node: OrderLine;
};

export type OrderLineFilter = {
  and?: InputMaybe<Array<OrderLineFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderLineFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type OrderLineMaxAggregate = {
  __typename?: 'OrderLineMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type OrderLineMinAggregate = {
  __typename?: 'OrderLineMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type OrderLineSort = {
  direction: SortDirection;
  field: OrderLineSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum OrderLineSortFields {
  CreatedAt = 'createdAt',
  Id = 'id',
  UpdatedAt = 'updatedAt',
}

export type OrderMaxAggregate = {
  __typename?: 'OrderMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  mainOrderId?: Maybe<Scalars['String']>;
  orderPlacedAt?: Maybe<Scalars['DateTime']>;
  referenceNumber?: Maybe<Scalars['String']>;
  sellerShopId?: Maybe<Scalars['String']>;
  status?: Maybe<OrderStatus>;
  subTotal?: Maybe<Scalars['Float']>;
  trackingNumber?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['String']>;
};

export type OrderMinAggregate = {
  __typename?: 'OrderMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  mainOrderId?: Maybe<Scalars['String']>;
  orderPlacedAt?: Maybe<Scalars['DateTime']>;
  referenceNumber?: Maybe<Scalars['String']>;
  sellerShopId?: Maybe<Scalars['String']>;
  status?: Maybe<OrderStatus>;
  subTotal?: Maybe<Scalars['Float']>;
  trackingNumber?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['String']>;
};

export type OrderOrderLinesAggregateGroupBy = {
  __typename?: 'OrderOrderLinesAggregateGroupBy';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type OrderOrderLinesAggregateResponse = {
  __typename?: 'OrderOrderLinesAggregateResponse';
  count?: Maybe<OrderOrderLinesCountAggregate>;
  groupBy?: Maybe<OrderOrderLinesAggregateGroupBy>;
  max?: Maybe<OrderOrderLinesMaxAggregate>;
  min?: Maybe<OrderOrderLinesMinAggregate>;
};

export type OrderOrderLinesCountAggregate = {
  __typename?: 'OrderOrderLinesCountAggregate';
  createdAt?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
};

export type OrderOrderLinesMaxAggregate = {
  __typename?: 'OrderOrderLinesMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type OrderOrderLinesMinAggregate = {
  __typename?: 'OrderOrderLinesMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type OrderPayment = {
  __typename?: 'OrderPayment';
  amount: Scalars['Float'];
  createdAt: Scalars['DateTime'];
  currency: Scalars['String'];
  id: Scalars['ID'];
  mainOrder: MainOrder;
  mainOrderId: Scalars['String'];
  order: Order;
  orderId: Scalars['String'];
  payment?: Maybe<Payment>;
  paymentId?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

export type OrderPaymentAggregateGroupBy = {
  __typename?: 'OrderPaymentAggregateGroupBy';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type OrderPaymentCountAggregate = {
  __typename?: 'OrderPaymentCountAggregate';
  createdAt?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
};

export type OrderPaymentEdge = {
  __typename?: 'OrderPaymentEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the OrderPayment */
  node: OrderPayment;
};

export type OrderPaymentMaxAggregate = {
  __typename?: 'OrderPaymentMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type OrderPaymentMinAggregate = {
  __typename?: 'OrderPaymentMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type OrderQuantity = {
  __typename?: 'OrderQuantity';
  count?: Maybe<Scalars['Float']>;
  date?: Maybe<Scalars['String']>;
};

export type OrderRefund = {
  __typename?: 'OrderRefund';
  createdAt: Scalars['DateTime'];
  currency?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  images?: Maybe<Array<Scalars['String']>>;
  order: Order;
  orderId: Scalars['String'];
  reason: Scalars['String'];
  referenceNumber: Scalars['String'];
  reviewBy?: Maybe<CancelRefundReviewBy>;
  reviewDate?: Maybe<Scalars['DateTime']>;
  sellerShop: SellerShop;
  sellerShopId: Scalars['String'];
  status: CancelRefundStatus;
  total?: Maybe<Scalars['Float']>;
  updatedAt: Scalars['DateTime'];
  user: User;
  userId: Scalars['String'];
};

export type OrderRefundAggregateGroupBy = {
  __typename?: 'OrderRefundAggregateGroupBy';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  orderId?: Maybe<Scalars['String']>;
  referenceNumber?: Maybe<Scalars['String']>;
  sellerShopId?: Maybe<Scalars['String']>;
  status?: Maybe<CancelRefundStatus>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['String']>;
};

export type OrderRefundConnection = {
  __typename?: 'OrderRefundConnection';
  /** Array of edges. */
  edges: Array<OrderRefundEdge>;
  /** Paging information */
  pageInfo: PageInfo;
};

export type OrderRefundCountAggregate = {
  __typename?: 'OrderRefundCountAggregate';
  createdAt?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  orderId?: Maybe<Scalars['Int']>;
  referenceNumber?: Maybe<Scalars['Int']>;
  sellerShopId?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

export type OrderRefundCreateInput = {
  images?: InputMaybe<Array<Scalars['String']>>;
  orderId: Scalars['String'];
  reason: Scalars['String'];
  sellerShopId: Scalars['String'];
  shippingCost?: InputMaybe<Scalars['Float']>;
  status?: InputMaybe<CancelRefundStatus>;
};

export type OrderRefundDeleteFilter = {
  and?: InputMaybe<Array<OrderRefundDeleteFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderRefundDeleteFilter>>;
  orderId?: InputMaybe<StringFieldComparison>;
  referenceNumber?: InputMaybe<StringFieldComparison>;
  sellerShopId?: InputMaybe<StringFieldComparison>;
  status?: InputMaybe<CancelRefundStatusFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  userId?: InputMaybe<StringFieldComparison>;
};

export type OrderRefundDeleteResponse = {
  __typename?: 'OrderRefundDeleteResponse';
  createdAt?: Maybe<Scalars['DateTime']>;
  currency?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  images?: Maybe<Array<Scalars['String']>>;
  orderId?: Maybe<Scalars['String']>;
  reason?: Maybe<Scalars['String']>;
  referenceNumber?: Maybe<Scalars['String']>;
  reviewBy?: Maybe<CancelRefundReviewBy>;
  reviewDate?: Maybe<Scalars['DateTime']>;
  sellerShopId?: Maybe<Scalars['String']>;
  status?: Maybe<CancelRefundStatus>;
  total?: Maybe<Scalars['Float']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['String']>;
};

export type OrderRefundEdge = {
  __typename?: 'OrderRefundEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the OrderRefund */
  node: OrderRefund;
};

export type OrderRefundFilter = {
  and?: InputMaybe<Array<OrderRefundFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderRefundFilter>>;
  orderId?: InputMaybe<StringFieldComparison>;
  referenceNumber?: InputMaybe<StringFieldComparison>;
  sellerShopId?: InputMaybe<StringFieldComparison>;
  status?: InputMaybe<CancelRefundStatusFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  userId?: InputMaybe<StringFieldComparison>;
};

export type OrderRefundMaxAggregate = {
  __typename?: 'OrderRefundMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  orderId?: Maybe<Scalars['String']>;
  referenceNumber?: Maybe<Scalars['String']>;
  sellerShopId?: Maybe<Scalars['String']>;
  status?: Maybe<CancelRefundStatus>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['String']>;
};

export type OrderRefundMinAggregate = {
  __typename?: 'OrderRefundMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  orderId?: Maybe<Scalars['String']>;
  referenceNumber?: Maybe<Scalars['String']>;
  sellerShopId?: Maybe<Scalars['String']>;
  status?: Maybe<CancelRefundStatus>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['String']>;
};

export type OrderRefundSort = {
  direction: SortDirection;
  field: OrderRefundSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum OrderRefundSortFields {
  CreatedAt = 'createdAt',
  Id = 'id',
  OrderId = 'orderId',
  ReferenceNumber = 'referenceNumber',
  SellerShopId = 'sellerShopId',
  Status = 'status',
  UpdatedAt = 'updatedAt',
  UserId = 'userId',
}

export type OrderRefundUpdateFilter = {
  and?: InputMaybe<Array<OrderRefundUpdateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<OrderRefundUpdateFilter>>;
  orderId?: InputMaybe<StringFieldComparison>;
  referenceNumber?: InputMaybe<StringFieldComparison>;
  sellerShopId?: InputMaybe<StringFieldComparison>;
  status?: InputMaybe<CancelRefundStatusFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  userId?: InputMaybe<StringFieldComparison>;
};

export type OrderRefundUpdateInput = {
  images?: InputMaybe<Array<Scalars['String']>>;
  reason?: InputMaybe<Scalars['String']>;
  shippingCost?: InputMaybe<Scalars['Float']>;
  status?: InputMaybe<CancelRefundStatus>;
};

export type OrderSort = {
  direction: SortDirection;
  field: OrderSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum OrderSortFields {
  CreatedAt = 'createdAt',
  Id = 'id',
  MainOrderId = 'mainOrderId',
  OrderPlacedAt = 'orderPlacedAt',
  ReferenceNumber = 'referenceNumber',
  SellerShopId = 'sellerShopId',
  Status = 'status',
  SubTotal = 'subTotal',
  TrackingNumber = 'trackingNumber',
  UpdatedAt = 'updatedAt',
  UserId = 'userId',
}

export enum OrderStatus {
  Cancelled = 'CANCELLED',
  Completed = 'COMPLETED',
  Initial = 'INITIAL',
  Paid = 'PAID',
  Pending = 'PENDING',
  Processing = 'PROCESSING',
  Refunded = 'REFUNDED',
  Shipping = 'SHIPPING',
}

export type OrderStatusFilterComparison = {
  eq?: InputMaybe<OrderStatus>;
  gt?: InputMaybe<OrderStatus>;
  gte?: InputMaybe<OrderStatus>;
  iLike?: InputMaybe<OrderStatus>;
  in?: InputMaybe<Array<OrderStatus>>;
  is?: InputMaybe<Scalars['Boolean']>;
  isNot?: InputMaybe<Scalars['Boolean']>;
  like?: InputMaybe<OrderStatus>;
  lt?: InputMaybe<OrderStatus>;
  lte?: InputMaybe<OrderStatus>;
  neq?: InputMaybe<OrderStatus>;
  notILike?: InputMaybe<OrderStatus>;
  notIn?: InputMaybe<Array<OrderStatus>>;
  notLike?: InputMaybe<OrderStatus>;
};

export type OrderSumAggregate = {
  __typename?: 'OrderSumAggregate';
  subTotal?: Maybe<Scalars['Float']>;
};

export type OrderXy = {
  __typename?: 'OrderXY';
  average: Array<OrderAmount>;
  quantity: Array<OrderQuantity>;
  sales: Array<OrderAmount>;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  /** The cursor of the last returned record. */
  endCursor?: Maybe<Scalars['ConnectionCursor']>;
  /** true if paging forward and there are more records. */
  hasNextPage?: Maybe<Scalars['Boolean']>;
  /** true if paging backwards and there are more records. */
  hasPreviousPage?: Maybe<Scalars['Boolean']>;
  /** The cursor of the first returned record. */
  startCursor?: Maybe<Scalars['ConnectionCursor']>;
};

export type Payment = {
  __typename?: 'Payment';
  amount: Scalars['Float'];
  createdAt: Scalars['DateTime'];
  currency: Scalars['String'];
  errorMessage?: Maybe<Scalars['String']>;
  gatewayProvider: PaymentGatewayProvider;
  gatewayRequestMetadata?: Maybe<Scalars['JSONObject']>;
  gatewayResponseMetadata?: Maybe<Scalars['JSONObject']>;
  gatewayTransactionId?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  mainOrder: MainOrder;
  mainOrderId: Scalars['String'];
  origin?: Maybe<Scalars['String']>;
  processor?: Maybe<Scalars['String']>;
  processorId?: Maybe<Scalars['String']>;
  refNo: Scalars['String'];
  status: PaymentStatus;
  updatedAt: Scalars['DateTime'];
  user?: Maybe<User>;
  userId: Scalars['String'];
};

export type PaymentAggregateGroupBy = {
  __typename?: 'PaymentAggregateGroupBy';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type PaymentConnection = {
  __typename?: 'PaymentConnection';
  /** Array of edges. */
  edges: Array<PaymentEdge>;
  /** Paging information */
  pageInfo: PageInfo;
};

export type PaymentCountAggregate = {
  __typename?: 'PaymentCountAggregate';
  createdAt?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
};

export type PaymentCreateInput = {
  /** According to the iPay88 PaymentId option */
  ipay: IpayPaymentInput;
  mainOrderId: Scalars['String'];
  origin?: InputMaybe<Scalars['String']>;
};

export type PaymentDeleteFilter = {
  and?: InputMaybe<Array<PaymentDeleteFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<PaymentDeleteFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type PaymentDeleteResponse = {
  __typename?: 'PaymentDeleteResponse';
  amount?: Maybe<Scalars['Float']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  currency?: Maybe<Scalars['String']>;
  errorMessage?: Maybe<Scalars['String']>;
  gatewayProvider?: Maybe<PaymentGatewayProvider>;
  gatewayRequestMetadata?: Maybe<Scalars['JSONObject']>;
  gatewayResponseMetadata?: Maybe<Scalars['JSONObject']>;
  gatewayTransactionId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  mainOrder?: Maybe<MainOrder>;
  mainOrderId?: Maybe<Scalars['String']>;
  origin?: Maybe<Scalars['String']>;
  processor?: Maybe<Scalars['String']>;
  processorId?: Maybe<Scalars['String']>;
  refNo?: Maybe<Scalars['String']>;
  status?: Maybe<PaymentStatus>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  user?: Maybe<User>;
  userId?: Maybe<Scalars['String']>;
};

export type PaymentEdge = {
  __typename?: 'PaymentEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the Payment */
  node: Payment;
};

export type PaymentFilter = {
  and?: InputMaybe<Array<PaymentFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<PaymentFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export enum PaymentGatewayProvider {
  Ipay88 = 'IPAY88',
  Mol = 'MOL',
  None = 'NONE',
  Paypal = 'PAYPAL',
  Stripe = 'STRIPE',
}

export type PaymentMaxAggregate = {
  __typename?: 'PaymentMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type PaymentMinAggregate = {
  __typename?: 'PaymentMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type PaymentResponse = {
  __typename?: 'PaymentResponse';
  /** The date and time (ISO 8601 format) when the product was created. */
  createdAt: Scalars['DateTime'];
  errorMessage?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  refNo: Scalars['String'];
  status: PaymentStatus;
  /** The date and time (ISO 8601 format) when the product was last updated. */
  updatedAt: Scalars['DateTime'];
};

export type PaymentSort = {
  direction: SortDirection;
  field: PaymentSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum PaymentSortFields {
  CreatedAt = 'createdAt',
  Id = 'id',
  UpdatedAt = 'updatedAt',
}

export enum PaymentStatus {
  Authorized = 'AUTHORIZED',
  Created = 'CREATED',
  Declined = 'DECLINED',
  Error = 'ERROR',
  Settled = 'SETTLED',
}

export type PaymentUpdateInput = {
  id: Scalars['String'];
  /** According to the iPay88 PaymentId option */
  ipay?: InputMaybe<IpayPaymentInput>;
  mainOrderId?: InputMaybe<Scalars['String']>;
  origin?: InputMaybe<Scalars['String']>;
};

export type PickupRateResponse = {
  __typename?: 'PickupRateResponse';
  pickupRate: Scalars['Float'];
};

export type PlaceFulfilmentInput = {
  orders: Array<FulfilmentCreateInput>;
};

export type PlaceOrderInput = {
  billingAddress?: InputMaybe<OrderAddressCreateInput>;
  deliveryMethod: DeliveryMethod;
  fulfillmentDate?: InputMaybe<Scalars['DateTime']>;
  orderFormId?: InputMaybe<Scalars['String']>;
  orders: Array<AddShopItemOrderInput>;
  shippingAddress?: InputMaybe<OrderAddressCreateInput>;
};

export type PreThirdPartyIdentitySignInInput = {
  accessToken: Scalars['String'];
  provider: Scalars['String'];
};

export enum PreferenceKey {
  Language = 'LANGUAGE',
  Notification = 'NOTIFICATION',
}

export type Product = {
  __typename?: 'Product';
  categoryAttributes?: Maybe<Array<ProductCategoryAttribute>>;
  code?: Maybe<Scalars['String']>;
  condition?: Maybe<ProductConditionType>;
  coverImage?: Maybe<Scalars['String']>;
  coverVideo?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  deliveryEstimation?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  images?: Maybe<Array<ImageLink>>;
  name: Scalars['String'];
  priceRange: ProductPriceRange;
  productBrand?: Maybe<ProductBrand>;
  productBrandId?: Maybe<Scalars['String']>;
  productCategory?: Maybe<ProductCategory>;
  productCategoryId?: Maybe<Scalars['String']>;
  productVariants?: Maybe<Array<ProductVariant>>;
  sellerShop: SellerShop;
  sellerShopId: Scalars['String'];
  shopCollectionProducts?: Maybe<Array<ShopCollectionProduct>>;
  slug?: Maybe<Scalars['String']>;
  status: ProductStatusType;
  totalInventory: Scalars['Float'];
  totalSold: Scalars['Float'];
  type: ProductType;
  updatedAt: Scalars['DateTime'];
  variantOptions?: Maybe<Array<ProductVariantOption>>;
};

export type ProductProductVariantsArgs = {
  filter?: InputMaybe<ProductVariantFilter>;
  sorting?: InputMaybe<Array<ProductVariantSort>>;
};

export type ProductShopCollectionProductsArgs = {
  filter?: InputMaybe<ShopCollectionProductFilter>;
  sorting?: InputMaybe<Array<ShopCollectionProductSort>>;
};

export type ProductAggregateGroupBy = {
  __typename?: 'ProductAggregateGroupBy';
  code?: Maybe<Scalars['String']>;
  condition?: Maybe<ProductConditionType>;
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  productBrandId?: Maybe<Scalars['String']>;
  productCategoryId?: Maybe<Scalars['String']>;
  sellerShopId?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  status?: Maybe<ProductStatusType>;
  type?: Maybe<ProductType>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ProductAttribute = {
  __typename?: 'ProductAttribute';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  key: Scalars['String'];
  name: Scalars['String'];
  productCategoryAttributes: ProductAttributeProductCategoryAttributesConnection;
  status: GeneralStatus;
  updatedAt: Scalars['DateTime'];
};

export type ProductAttributeProductCategoryAttributesArgs = {
  filter?: InputMaybe<CategoryAttributeFilter>;
  paging?: InputMaybe<CursorPaging>;
  sorting?: InputMaybe<Array<CategoryAttributeSort>>;
};

export type ProductAttributeAggregateGroupBy = {
  __typename?: 'ProductAttributeAggregateGroupBy';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  key?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  status?: Maybe<GeneralStatus>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ProductAttributeConnection = {
  __typename?: 'ProductAttributeConnection';
  /** Array of edges. */
  edges: Array<ProductAttributeEdge>;
  /** Paging information */
  pageInfo: PageInfo;
};

export type ProductAttributeCountAggregate = {
  __typename?: 'ProductAttributeCountAggregate';
  createdAt?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  key?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
};

export type ProductAttributeCreateInput = {
  key: Scalars['String'];
  name: Scalars['String'];
  status: GeneralStatus;
};

export type ProductAttributeDeleteFilter = {
  and?: InputMaybe<Array<ProductAttributeDeleteFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  key?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ProductAttributeDeleteFilter>>;
  status?: InputMaybe<GeneralStatusFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ProductAttributeDeleteResponse = {
  __typename?: 'ProductAttributeDeleteResponse';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  key?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  status?: Maybe<GeneralStatus>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ProductAttributeEdge = {
  __typename?: 'ProductAttributeEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the ProductAttribute */
  node: ProductAttribute;
};

export type ProductAttributeFilter = {
  and?: InputMaybe<Array<ProductAttributeFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  key?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ProductAttributeFilter>>;
  status?: InputMaybe<GeneralStatusFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ProductAttributeMaxAggregate = {
  __typename?: 'ProductAttributeMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  key?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  status?: Maybe<GeneralStatus>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ProductAttributeMinAggregate = {
  __typename?: 'ProductAttributeMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  key?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  status?: Maybe<GeneralStatus>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ProductAttributeProductCategoryAttributesConnection = {
  __typename?: 'ProductAttributeProductCategoryAttributesConnection';
  /** Array of edges. */
  edges: Array<CategoryAttributeEdge>;
  /** Paging information */
  pageInfo: PageInfo;
};

export type ProductAttributeSort = {
  direction: SortDirection;
  field: ProductAttributeSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum ProductAttributeSortFields {
  CreatedAt = 'createdAt',
  Id = 'id',
  Key = 'key',
  Name = 'name',
  Status = 'status',
  UpdatedAt = 'updatedAt',
}

export type ProductAttributeUpdateFilter = {
  and?: InputMaybe<Array<ProductAttributeUpdateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  key?: InputMaybe<StringFieldComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ProductAttributeUpdateFilter>>;
  status?: InputMaybe<GeneralStatusFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ProductAttributeUpdateInput = {
  key?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<GeneralStatus>;
};

export type ProductAttributeValueInput = {
  name: Scalars['String'];
  value: Scalars['String'];
};

export type ProductBrand = {
  __typename?: 'ProductBrand';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  image?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  status: GeneralStatus;
  updatedAt: Scalars['DateTime'];
};

export type ProductBrandAggregateGroupBy = {
  __typename?: 'ProductBrandAggregateGroupBy';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  status?: Maybe<GeneralStatus>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ProductBrandConnection = {
  __typename?: 'ProductBrandConnection';
  /** Array of edges. */
  edges: Array<ProductBrandEdge>;
  /** Paging information */
  pageInfo: PageInfo;
};

export type ProductBrandCountAggregate = {
  __typename?: 'ProductBrandCountAggregate';
  createdAt?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
};

export type ProductBrandCreateInput = {
  image?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  status?: InputMaybe<GeneralStatus>;
};

export type ProductBrandDeleteFilter = {
  and?: InputMaybe<Array<ProductBrandDeleteFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ProductBrandDeleteFilter>>;
  status?: InputMaybe<GeneralStatusFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ProductBrandDeleteResponse = {
  __typename?: 'ProductBrandDeleteResponse';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  status?: Maybe<GeneralStatus>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ProductBrandEdge = {
  __typename?: 'ProductBrandEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the ProductBrand */
  node: ProductBrand;
};

export type ProductBrandFilter = {
  and?: InputMaybe<Array<ProductBrandFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ProductBrandFilter>>;
  status?: InputMaybe<GeneralStatusFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ProductBrandMaxAggregate = {
  __typename?: 'ProductBrandMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  status?: Maybe<GeneralStatus>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ProductBrandMinAggregate = {
  __typename?: 'ProductBrandMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  status?: Maybe<GeneralStatus>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ProductBrandSort = {
  direction: SortDirection;
  field: ProductBrandSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum ProductBrandSortFields {
  CreatedAt = 'createdAt',
  Id = 'id',
  Name = 'name',
  Status = 'status',
  UpdatedAt = 'updatedAt',
}

export type ProductBrandUpdateFilter = {
  and?: InputMaybe<Array<ProductBrandUpdateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ProductBrandUpdateFilter>>;
  status?: InputMaybe<GeneralStatusFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ProductBrandUpdateInput = {
  id: Scalars['String'];
  image?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<GeneralStatus>;
};

export type ProductCategoriesDeleteResponse = {
  __typename?: 'ProductCategoriesDeleteResponse';
  failed: Array<ProductCategory>;
  success: Array<ProductCategory>;
};

export type ProductCategory = {
  __typename?: 'ProductCategory';
  categoryAttributes: ProductCategoryCategoryAttributesConnection;
  categoryCode: Scalars['String'];
  childrens: ProductCategoryChildrensConnection;
  createdAt: Scalars['DateTime'];
  generalStatus: GeneralStatus;
  id: Scalars['ID'];
  image?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  parent?: Maybe<ProductCategory>;
  parentId?: Maybe<Scalars['ID']>;
  products: ProductCategoryProductsConnection;
  updatedAt: Scalars['DateTime'];
};

export type ProductCategoryCategoryAttributesArgs = {
  filter?: InputMaybe<CategoryAttributeFilter>;
  paging?: InputMaybe<CursorPaging>;
  sorting?: InputMaybe<Array<CategoryAttributeSort>>;
};

export type ProductCategoryChildrensArgs = {
  filter?: InputMaybe<ProductCategoryFilter>;
  paging?: InputMaybe<CursorPaging>;
  sorting?: InputMaybe<Array<ProductCategorySort>>;
};

export type ProductCategoryProductsArgs = {
  filter?: InputMaybe<ProductFilter>;
  paging?: InputMaybe<CursorPaging>;
  sorting?: InputMaybe<Array<ProductSort>>;
};

export type ProductCategoryAggregateGroupBy = {
  __typename?: 'ProductCategoryAggregateGroupBy';
  categoryCode?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  generalStatus?: Maybe<GeneralStatus>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  parentId?: Maybe<Scalars['ID']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ProductCategoryAttribute = {
  __typename?: 'ProductCategoryAttribute';
  attributeValue: CategoryAttributeValue;
  id: Scalars['String'];
  key?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
};

export type ProductCategoryCategoryAttributesConnection = {
  __typename?: 'ProductCategoryCategoryAttributesConnection';
  /** Array of edges. */
  edges: Array<CategoryAttributeEdge>;
  /** Paging information */
  pageInfo: PageInfo;
};

export type ProductCategoryChildrensConnection = {
  __typename?: 'ProductCategoryChildrensConnection';
  /** Array of edges. */
  edges: Array<ProductCategoryEdge>;
  /** Paging information */
  pageInfo: PageInfo;
};

export type ProductCategoryConnection = {
  __typename?: 'ProductCategoryConnection';
  /** Array of edges. */
  edges: Array<ProductCategoryEdge>;
  /** Paging information */
  pageInfo: PageInfo;
};

export type ProductCategoryCountAggregate = {
  __typename?: 'ProductCategoryCountAggregate';
  categoryCode?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  generalStatus?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  parentId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
};

export type ProductCategoryCreateInput = {
  categoryCode: Scalars['String'];
  image?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  parentId?: InputMaybe<Scalars['ID']>;
  productCategoryAttributes?: InputMaybe<Array<CategoryAttributeCreateInput>>;
};

export type ProductCategoryEdge = {
  __typename?: 'ProductCategoryEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the ProductCategory */
  node: ProductCategory;
};

export type ProductCategoryFilter = {
  and?: InputMaybe<Array<ProductCategoryFilter>>;
  categoryCode?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  generalStatus?: InputMaybe<GeneralStatusFilterComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ProductCategoryFilter>>;
  parentId?: InputMaybe<IdFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ProductCategoryFilterInput = {
  categoryCode?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  parentId?: InputMaybe<Scalars['String']>;
};

export type ProductCategoryMaxAggregate = {
  __typename?: 'ProductCategoryMaxAggregate';
  categoryCode?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  generalStatus?: Maybe<GeneralStatus>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  parentId?: Maybe<Scalars['ID']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ProductCategoryMinAggregate = {
  __typename?: 'ProductCategoryMinAggregate';
  categoryCode?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  generalStatus?: Maybe<GeneralStatus>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  parentId?: Maybe<Scalars['ID']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ProductCategoryProductsConnection = {
  __typename?: 'ProductCategoryProductsConnection';
  /** Array of edges. */
  edges: Array<ProductEdge>;
  /** Paging information */
  pageInfo: PageInfo;
};

export type ProductCategorySort = {
  direction: SortDirection;
  field: ProductCategorySortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum ProductCategorySortFields {
  CategoryCode = 'categoryCode',
  CreatedAt = 'createdAt',
  GeneralStatus = 'generalStatus',
  Id = 'id',
  Name = 'name',
  ParentId = 'parentId',
  UpdatedAt = 'updatedAt',
}

export type ProductCategoryTree = {
  __typename?: 'ProductCategoryTree';
  tree?: Maybe<Scalars['JSON']>;
};

export type ProductCategoryUpdateFilter = {
  and?: InputMaybe<Array<ProductCategoryUpdateFilter>>;
  categoryCode?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  generalStatus?: InputMaybe<GeneralStatusFilterComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ProductCategoryUpdateFilter>>;
  parentId?: InputMaybe<IdFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ProductCategoryUpdateInput = {
  categoryCode?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  parentId?: InputMaybe<Scalars['ID']>;
  productCategoryAttributes?: InputMaybe<Array<CategoryAttributeCreateInput>>;
};

export enum ProductConditionType {
  New = 'NEW',
  Used = 'USED',
}

export type ProductConditionTypeFilterComparison = {
  eq?: InputMaybe<ProductConditionType>;
  gt?: InputMaybe<ProductConditionType>;
  gte?: InputMaybe<ProductConditionType>;
  iLike?: InputMaybe<ProductConditionType>;
  in?: InputMaybe<Array<ProductConditionType>>;
  is?: InputMaybe<Scalars['Boolean']>;
  isNot?: InputMaybe<Scalars['Boolean']>;
  like?: InputMaybe<ProductConditionType>;
  lt?: InputMaybe<ProductConditionType>;
  lte?: InputMaybe<ProductConditionType>;
  neq?: InputMaybe<ProductConditionType>;
  notILike?: InputMaybe<ProductConditionType>;
  notIn?: InputMaybe<Array<ProductConditionType>>;
  notLike?: InputMaybe<ProductConditionType>;
};

export type ProductConnection = {
  __typename?: 'ProductConnection';
  /** Array of edges. */
  edges: Array<ProductEdge>;
  /** Paging information */
  pageInfo: PageInfo;
};

export type ProductCountAggregate = {
  __typename?: 'ProductCountAggregate';
  code?: Maybe<Scalars['Int']>;
  condition?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  deletedAt?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  productBrandId?: Maybe<Scalars['Int']>;
  productCategoryId?: Maybe<Scalars['Int']>;
  sellerShopId?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
};

export type ProductCreateInput = {
  categoryAttributes?: InputMaybe<Array<AttributeInput>>;
  code?: InputMaybe<Scalars['String']>;
  condition?: InputMaybe<ProductConditionType>;
  coverImage?: InputMaybe<Scalars['String']>;
  coverVideo?: InputMaybe<Scalars['String']>;
  deliveryEstimation?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  images?: InputMaybe<Array<ImageLinkInput>>;
  name: Scalars['String'];
  productBrandId?: InputMaybe<Scalars['String']>;
  productCategoryId?: InputMaybe<Scalars['String']>;
  sellerShopId?: InputMaybe<Scalars['String']>;
  shopCollections?: InputMaybe<Array<Scalars['String']>>;
  slug?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<ProductStatusType>;
  type?: InputMaybe<ProductType>;
  variantOptions?: InputMaybe<Array<ProductVariantOptionInput>>;
  variants?: InputMaybe<Array<ProductVariantCreateInput>>;
};

export type ProductEdge = {
  __typename?: 'ProductEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the Product */
  node: Product;
};

export type ProductFilter = {
  and?: InputMaybe<Array<ProductFilter>>;
  code?: InputMaybe<StringFieldComparison>;
  condition?: InputMaybe<ProductConditionTypeFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ProductFilter>>;
  productBrandId?: InputMaybe<StringFieldComparison>;
  productCategoryId?: InputMaybe<StringFieldComparison>;
  productVariants?: InputMaybe<ProductFilterProductVariantFilter>;
  sellerShopId?: InputMaybe<StringFieldComparison>;
  shopCollectionProducts?: InputMaybe<ProductFilterShopCollectionProductFilter>;
  slug?: InputMaybe<StringFieldComparison>;
  status?: InputMaybe<ProductStatusTypeFilterComparison>;
  type?: InputMaybe<ProductTypeFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ProductFilterProductVariantFilter = {
  and?: InputMaybe<Array<ProductFilterProductVariantFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ProductFilterProductVariantFilter>>;
  price?: InputMaybe<NumberFieldComparison>;
  productId?: InputMaybe<StringFieldComparison>;
  sellerShopId?: InputMaybe<StringFieldComparison>;
  sku?: InputMaybe<StringFieldComparison>;
  sold?: InputMaybe<NumberFieldComparison>;
  status?: InputMaybe<ProductStatusTypeFilterComparison>;
  stockOnHand?: InputMaybe<NumberFieldComparison>;
  trackInventory?: InputMaybe<BooleanFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  weight?: InputMaybe<NumberFieldComparison>;
};

export type ProductFilterShopCollectionProductFilter = {
  and?: InputMaybe<Array<ProductFilterShopCollectionProductFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<ProductFilterShopCollectionProductFilter>>;
  order?: InputMaybe<NumberFieldComparison>;
  productId?: InputMaybe<StringFieldComparison>;
  shopCollectionId?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ProductInOrderForm = {
  __typename?: 'ProductInOrderForm';
  found: Scalars['Boolean'];
  productId: Scalars['String'];
};

export type ProductMaxAggregate = {
  __typename?: 'ProductMaxAggregate';
  code?: Maybe<Scalars['String']>;
  condition?: Maybe<ProductConditionType>;
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  productBrandId?: Maybe<Scalars['String']>;
  productCategoryId?: Maybe<Scalars['String']>;
  sellerShopId?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  status?: Maybe<ProductStatusType>;
  type?: Maybe<ProductType>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ProductMinAggregate = {
  __typename?: 'ProductMinAggregate';
  code?: Maybe<Scalars['String']>;
  condition?: Maybe<ProductConditionType>;
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  productBrandId?: Maybe<Scalars['String']>;
  productCategoryId?: Maybe<Scalars['String']>;
  sellerShopId?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  status?: Maybe<ProductStatusType>;
  type?: Maybe<ProductType>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ProductPriceRange = {
  __typename?: 'ProductPriceRange';
  currency: Scalars['String'];
  label: Scalars['String'];
  range: Array<Scalars['Float']>;
};

export type ProductPublishInput = {
  categoryAttributes?: InputMaybe<Array<AttributeInput>>;
  code?: InputMaybe<Scalars['String']>;
  condition: ProductConditionType;
  coverImage?: InputMaybe<Scalars['String']>;
  coverVideo?: InputMaybe<Scalars['String']>;
  deliveryEstimation?: InputMaybe<Scalars['String']>;
  description: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  images?: InputMaybe<Array<ImageLinkInput>>;
  name: Scalars['String'];
  productBrandId?: InputMaybe<Scalars['String']>;
  productCategoryId?: InputMaybe<Scalars['String']>;
  sellerShopId?: InputMaybe<Scalars['String']>;
  shopCollections?: InputMaybe<Array<Scalars['String']>>;
  slug?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<ProductStatusType>;
  type?: InputMaybe<ProductType>;
  variantOptions?: InputMaybe<Array<ProductVariantOptionInput>>;
  variants?: InputMaybe<Array<ProductVariantCreateInput>>;
};

export type ProductSnapshotDto = {
  __typename?: 'ProductSnapshotDto';
  currency?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  options?: Maybe<Array<ProductSnapshotVariantPairing>>;
  price?: Maybe<Scalars['Float']>;
  product?: Maybe<BasicProductDto>;
  sku?: Maybe<Scalars['String']>;
};

export type ProductSnapshotVariantPairing = {
  __typename?: 'ProductSnapshotVariantPairing';
  name: Scalars['String'];
  value: Scalars['String'];
};

export type ProductSort = {
  direction: SortDirection;
  field: ProductSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum ProductSortFields {
  Code = 'code',
  Condition = 'condition',
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Description = 'description',
  Id = 'id',
  Name = 'name',
  ProductBrandId = 'productBrandId',
  ProductCategoryId = 'productCategoryId',
  SellerShopId = 'sellerShopId',
  Slug = 'slug',
  Status = 'status',
  Type = 'type',
  UpdatedAt = 'updatedAt',
}

export enum ProductStatusType {
  Delisted = 'DELISTED',
  Draft = 'DRAFT',
  Published = 'PUBLISHED',
}

export type ProductStatusTypeFilterComparison = {
  eq?: InputMaybe<ProductStatusType>;
  gt?: InputMaybe<ProductStatusType>;
  gte?: InputMaybe<ProductStatusType>;
  iLike?: InputMaybe<ProductStatusType>;
  in?: InputMaybe<Array<ProductStatusType>>;
  is?: InputMaybe<Scalars['Boolean']>;
  isNot?: InputMaybe<Scalars['Boolean']>;
  like?: InputMaybe<ProductStatusType>;
  lt?: InputMaybe<ProductStatusType>;
  lte?: InputMaybe<ProductStatusType>;
  neq?: InputMaybe<ProductStatusType>;
  notILike?: InputMaybe<ProductStatusType>;
  notIn?: InputMaybe<Array<ProductStatusType>>;
  notLike?: InputMaybe<ProductStatusType>;
};

export enum ProductType {
  Food = 'FOOD',
  General = 'GENERAL',
  Grocery = 'GROCERY',
}

export type ProductTypeFilterComparison = {
  eq?: InputMaybe<ProductType>;
  gt?: InputMaybe<ProductType>;
  gte?: InputMaybe<ProductType>;
  iLike?: InputMaybe<ProductType>;
  in?: InputMaybe<Array<ProductType>>;
  is?: InputMaybe<Scalars['Boolean']>;
  isNot?: InputMaybe<Scalars['Boolean']>;
  like?: InputMaybe<ProductType>;
  lt?: InputMaybe<ProductType>;
  lte?: InputMaybe<ProductType>;
  neq?: InputMaybe<ProductType>;
  notILike?: InputMaybe<ProductType>;
  notIn?: InputMaybe<Array<ProductType>>;
  notLike?: InputMaybe<ProductType>;
};

export type ProductUpdateFilter = {
  and?: InputMaybe<Array<ProductUpdateFilter>>;
  code?: InputMaybe<StringFieldComparison>;
  condition?: InputMaybe<ProductConditionTypeFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  description?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ProductUpdateFilter>>;
  productBrandId?: InputMaybe<StringFieldComparison>;
  productCategoryId?: InputMaybe<StringFieldComparison>;
  sellerShopId?: InputMaybe<StringFieldComparison>;
  slug?: InputMaybe<StringFieldComparison>;
  status?: InputMaybe<ProductStatusTypeFilterComparison>;
  type?: InputMaybe<ProductTypeFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ProductUpdateInput = {
  categoryAttributes?: InputMaybe<Array<AttributeInput>>;
  code?: InputMaybe<Scalars['String']>;
  condition?: InputMaybe<ProductConditionType>;
  coverImage?: InputMaybe<Scalars['String']>;
  coverVideo?: InputMaybe<Scalars['String']>;
  deliveryEstimation?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  images?: InputMaybe<Array<ImageLinkInput>>;
  name?: InputMaybe<Scalars['String']>;
  productBrandId?: InputMaybe<Scalars['String']>;
  productCategoryId?: InputMaybe<Scalars['String']>;
  shopCollections?: InputMaybe<Array<Scalars['String']>>;
  slug?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<ProductStatusType>;
  type?: InputMaybe<ProductType>;
  variantOptions?: InputMaybe<Array<ProductVariantOptionInput>>;
  variants?: InputMaybe<Array<ProductVariantCreateInput>>;
};

export type ProductVariant = {
  __typename?: 'ProductVariant';
  countryCode?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  currency?: Maybe<Scalars['String']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  enabled: Scalars['Boolean'];
  id: Scalars['ID'];
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  options?: Maybe<Array<ProductVariantPairing>>;
  price?: Maybe<Scalars['Float']>;
  product: Product;
  productId: Scalars['String'];
  sellerShop: SellerShop;
  sellerShopId: Scalars['String'];
  sku?: Maybe<Scalars['String']>;
  sold: Scalars['Float'];
  status?: Maybe<ProductStatusType>;
  stockOnHand?: Maybe<Scalars['Float']>;
  trackInventory: Scalars['Boolean'];
  updatedAt: Scalars['DateTime'];
  weight?: Maybe<Scalars['Float']>;
  weightUnit?: Maybe<WeightUnitType>;
};

export type ProductVariantAggregateGroupBy = {
  __typename?: 'ProductVariantAggregateGroupBy';
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  productId?: Maybe<Scalars['String']>;
  sellerShopId?: Maybe<Scalars['String']>;
  sku?: Maybe<Scalars['String']>;
  sold?: Maybe<Scalars['Float']>;
  status?: Maybe<ProductStatusType>;
  stockOnHand?: Maybe<Scalars['Float']>;
  trackInventory?: Maybe<Scalars['Boolean']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  weight?: Maybe<Scalars['Float']>;
};

export type ProductVariantAvgAggregate = {
  __typename?: 'ProductVariantAvgAggregate';
  price?: Maybe<Scalars['Float']>;
  sold?: Maybe<Scalars['Float']>;
  stockOnHand?: Maybe<Scalars['Float']>;
  weight?: Maybe<Scalars['Float']>;
};

export type ProductVariantConnection = {
  __typename?: 'ProductVariantConnection';
  /** Array of edges. */
  edges: Array<ProductVariantEdge>;
  /** Paging information */
  pageInfo: PageInfo;
};

export type ProductVariantCountAggregate = {
  __typename?: 'ProductVariantCountAggregate';
  createdAt?: Maybe<Scalars['Int']>;
  deletedAt?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['Int']>;
  productId?: Maybe<Scalars['Int']>;
  sellerShopId?: Maybe<Scalars['Int']>;
  sku?: Maybe<Scalars['Int']>;
  sold?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
  stockOnHand?: Maybe<Scalars['Int']>;
  trackInventory?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  weight?: Maybe<Scalars['Int']>;
};

export type ProductVariantCreateInput = {
  countryCode?: InputMaybe<Scalars['String']>;
  currency?: InputMaybe<Scalars['String']>;
  enabled?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  options?: InputMaybe<Array<ProductVariantPairingInput>>;
  price?: InputMaybe<Scalars['Float']>;
  productId?: InputMaybe<Scalars['String']>;
  sellerShopId?: InputMaybe<Scalars['String']>;
  sku?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<ProductStatusType>;
  stockOnHand?: InputMaybe<Scalars['Float']>;
  trackInventory?: InputMaybe<Scalars['Boolean']>;
  weight?: InputMaybe<Scalars['Float']>;
  weightUnit?: InputMaybe<WeightUnitType>;
};

export type ProductVariantEdge = {
  __typename?: 'ProductVariantEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the ProductVariant */
  node: ProductVariant;
};

export type ProductVariantFilter = {
  and?: InputMaybe<Array<ProductVariantFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  deletedAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ProductVariantFilter>>;
  price?: InputMaybe<NumberFieldComparison>;
  productId?: InputMaybe<StringFieldComparison>;
  sellerShopId?: InputMaybe<StringFieldComparison>;
  sku?: InputMaybe<StringFieldComparison>;
  sold?: InputMaybe<NumberFieldComparison>;
  status?: InputMaybe<ProductStatusTypeFilterComparison>;
  stockOnHand?: InputMaybe<NumberFieldComparison>;
  trackInventory?: InputMaybe<BooleanFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  weight?: InputMaybe<NumberFieldComparison>;
};

export type ProductVariantMaxAggregate = {
  __typename?: 'ProductVariantMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  productId?: Maybe<Scalars['String']>;
  sellerShopId?: Maybe<Scalars['String']>;
  sku?: Maybe<Scalars['String']>;
  sold?: Maybe<Scalars['Float']>;
  status?: Maybe<ProductStatusType>;
  stockOnHand?: Maybe<Scalars['Float']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  weight?: Maybe<Scalars['Float']>;
};

export type ProductVariantMinAggregate = {
  __typename?: 'ProductVariantMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  productId?: Maybe<Scalars['String']>;
  sellerShopId?: Maybe<Scalars['String']>;
  sku?: Maybe<Scalars['String']>;
  sold?: Maybe<Scalars['Float']>;
  status?: Maybe<ProductStatusType>;
  stockOnHand?: Maybe<Scalars['Float']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  weight?: Maybe<Scalars['Float']>;
};

export type ProductVariantOption = {
  __typename?: 'ProductVariantOption';
  name: Scalars['String'];
  options: Array<Scalars['String']>;
};

export type ProductVariantOptionInput = {
  name: Scalars['String'];
  options: Array<Scalars['String']>;
};

export type ProductVariantPairing = {
  __typename?: 'ProductVariantPairing';
  name: Scalars['String'];
  value: Scalars['String'];
};

export type ProductVariantPairingInput = {
  name: Scalars['String'];
  value: Scalars['String'];
};

export type ProductVariantSort = {
  direction: SortDirection;
  field: ProductVariantSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum ProductVariantSortFields {
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Id = 'id',
  Name = 'name',
  Price = 'price',
  ProductId = 'productId',
  SellerShopId = 'sellerShopId',
  Sku = 'sku',
  Sold = 'sold',
  Status = 'status',
  StockOnHand = 'stockOnHand',
  TrackInventory = 'trackInventory',
  UpdatedAt = 'updatedAt',
  Weight = 'weight',
}

export type ProductVariantSumAggregate = {
  __typename?: 'ProductVariantSumAggregate';
  price?: Maybe<Scalars['Float']>;
  sold?: Maybe<Scalars['Float']>;
  stockOnHand?: Maybe<Scalars['Float']>;
  weight?: Maybe<Scalars['Float']>;
};

export type ProductVariantUpdateInput = {
  countryCode?: InputMaybe<Scalars['String']>;
  currency?: InputMaybe<Scalars['String']>;
  enabled?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['String'];
  image?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  options?: InputMaybe<Array<ProductVariantPairingInput>>;
  price?: InputMaybe<Scalars['Float']>;
  sku?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<ProductStatusType>;
  stockOnHand?: InputMaybe<Scalars['Float']>;
  trackInventory?: InputMaybe<Scalars['Boolean']>;
  weight?: InputMaybe<Scalars['Float']>;
  weightUnit?: InputMaybe<WeightUnitType>;
};

export type ProductVariantUpdateStateInput = {
  enable: Scalars['Boolean'];
  id: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  admin?: Maybe<Admin>;
  adminPreference?: Maybe<AdminPreference>;
  adminPreferences: AdminPreferenceConnection;
  admins: AdminConnection;
  announcement?: Maybe<Announcement>;
  announcements: AnnouncementConnection;
  banner?: Maybe<Banner>;
  banners: BannerConnection;
  categoryAttribute?: Maybe<CategoryAttribute>;
  categoryAttributes: CategoryAttributeConnection;
  checkIfCanCreateShopeeStore: Scalars['Boolean'];
  checkIfHasReservedSubdomain: Scalars['Boolean'];
  checkProductSlugAvailability: Scalars['Boolean'];
  checkSlugAvailability: Scalars['Boolean'];
  countries: CountryConnection;
  country?: Maybe<Country>;
  currencies: CurrencyConnection;
  currency?: Maybe<Currency>;
  faq?: Maybe<Faq>;
  faqs: FaqConnection;
  feedback?: Maybe<Feedback>;
  feedbacks: FeedbackConnection;
  findProductsInOrderForm: ProductInOrderForm;
  fulfilment?: Maybe<Fulfilment>;
  fulfilments: FulfilmentConnection;
  getActiveShopCollections: Array<ActiveShopCollection>;
  getAdminAuthProfile: Admin;
  getAdminPreferenceByKey: AdminPreference;
  getAllCountries: Array<Country>;
  getAllCouriers?: Maybe<Array<ShippingCourier>>;
  getAllCurrencies: Array<Currency>;
  getAvailableCoverages: ShippingZoneStateCoverage;
  getCitiesOfState: Array<StateCities>;
  getIpayData: IpayRequestData;
  getIpayStatus: PaymentResponse;
  getManyUserOrders: OrderConnection;
  getOrderCount: Array<OrderCount>;
  getOrderForms: OrderFormConnection;
  getOrderPaymentMethod: Scalars['String'];
  getOrderXY: OrderXy;
  getPostcodesOfStates: Array<CityPostcodes>;
  getProductBrands: Array<ProductBrand>;
  getProductBySlug: Product;
  getProductCategoryTree: ProductCategoryTree;
  getProductChildrenCategories: Array<ProductCategory>;
  getProductParentCategories: ProductCategoryConnection;
  getProductsByProductIds: Array<Product>;
  getPublishedProducts: ProductConnection;
  getReservedSubdomains: Array<ReservedSubdomain>;
  getSellerShopBySlug?: Maybe<SellerShop>;
  getSellerShopProfile?: Maybe<SellerShop>;
  getServicePlansByServiceIdOrName: Array<ServicePlan>;
  getShippingRates: ShippingZoneConnection;
  getShopCollectionsByShopId: Array<ShopCollection>;
  getShopeeJobDownloadLink?: Maybe<Scalars['String']>;
  getShopeeOrderByOrderId: ShopeeOrder;
  getShopeeStores: Array<ShopeeStore>;
  getStatesOfCountry: Array<CountryStates>;
  getTopSellingProduct: Array<ProductVariant>;
  getUserAuthProfile?: Maybe<User>;
  getUserDeviceById: UserDevice;
  getUserPreferenceByKey: UserPreference;
  isSubscriptionActive: GetServiceSubscription;
  misc?: Maybe<Misc>;
  miscs: MiscConnection;
  order?: Maybe<Order>;
  orderAggregate: Array<OrderAggregateResponse>;
  orderCancel?: Maybe<OrderCancel>;
  orderCancels: OrderCancelConnection;
  orderForm?: Maybe<OrderForm>;
  orderForms: OrderFormConnection;
  orderRefund?: Maybe<OrderRefund>;
  orderRefunds: OrderRefundConnection;
  orders: OrderConnection;
  payment?: Maybe<Payment>;
  payments: PaymentConnection;
  product?: Maybe<Product>;
  productAttribute?: Maybe<ProductAttribute>;
  productAttributes: ProductAttributeConnection;
  productBrand?: Maybe<ProductBrand>;
  productBrands: ProductBrandConnection;
  productCategories: ProductCategoryConnection;
  productCategory?: Maybe<ProductCategory>;
  productVariant?: Maybe<ProductVariant>;
  productVariants: ProductVariantConnection;
  products: ProductConnection;
  sellerShop?: Maybe<SellerShop>;
  sellerShops: SellerShopConnection;
  service?: Maybe<Service>;
  servicePlan?: Maybe<ServicePlan>;
  serviceSubscription?: Maybe<ServiceSubscription>;
  serviceSubscriptions: ServiceSubscriptionConnection;
  services: ServiceConnection;
  shippingCourier?: Maybe<ShippingCourier>;
  shippingCouriers: ShippingCourierConnection;
  shippingMethod?: Maybe<ShippingMethod>;
  shippingMethods: ShippingMethodConnection;
  shippingPickup?: Maybe<ShippingPickup>;
  shippingPickups: ShippingPickupConnection;
  shippingZone?: Maybe<ShippingZone>;
  shippingZoneCoverage?: Maybe<ShippingZoneCoverage>;
  shippingZoneCoverages: ShippingZoneCoverageConnection;
  shippingZones: ShippingZoneConnection;
  shopAddress?: Maybe<ShopAddress>;
  shopAddresses: ShopAddressConnection;
  shopCollection?: Maybe<ShopCollection>;
  shopCollections: ShopCollectionConnection;
  shopeeJob?: Maybe<ShopeeJob>;
  shopeeJobLink?: Maybe<ShopeeJobLink>;
  shopeeJobLinks: ShopeeJobLinkConnection;
  shopeeJobs: ShopeeJobConnection;
  shopeeOrder?: Maybe<ShopeeOrder>;
  shopeeOrderLine?: Maybe<ShopeeOrderLine>;
  shopeeOrderLines: ShopeeOrderLineConnection;
  shopeeOrders: ShopeeOrderConnection;
  shopeeReporting?: Maybe<ShopeeReporting>;
  shopeeReportingSnapshot?: Maybe<ShopeeReportingSnapshot>;
  shopeeReportingSnapshots: ShopeeReportingSnapshotConnection;
  shopeeReportings: ShopeeReportingConnection;
  shopeeSettings: ShopeeSettingsConnection;
  shopeeStores: ShopeeStoreConnection;
  user?: Maybe<User>;
  userAddress?: Maybe<UserAddress>;
  userAddresses: UserAddressConnection;
  userDevice?: Maybe<UserDevice>;
  userDevices: UserDeviceConnection;
  userPreference?: Maybe<UserPreference>;
  userPreferences: UserPreferenceConnection;
  users: UserConnection;
};

export type QueryAdminArgs = {
  id: Scalars['ID'];
};

export type QueryAdminPreferenceArgs = {
  id: Scalars['ID'];
};

export type QueryAdminPreferencesArgs = {
  filter?: InputMaybe<AdminPreferenceFilter>;
  paging?: InputMaybe<CursorPaging>;
  sorting?: InputMaybe<Array<AdminPreferenceSort>>;
};

export type QueryAdminsArgs = {
  filter?: InputMaybe<AdminFilter>;
  paging?: InputMaybe<CursorPaging>;
  sorting?: InputMaybe<Array<AdminSort>>;
};

export type QueryAnnouncementArgs = {
  id: Scalars['ID'];
};

export type QueryAnnouncementsArgs = {
  filter?: InputMaybe<AnnouncementFilter>;
  paging?: InputMaybe<CursorPaging>;
  sorting?: InputMaybe<Array<AnnouncementSort>>;
};

export type QueryBannerArgs = {
  id: Scalars['ID'];
};

export type QueryBannersArgs = {
  filter?: InputMaybe<BannerFilter>;
  paging?: InputMaybe<CursorPaging>;
  sorting?: InputMaybe<Array<BannerSort>>;
};

export type QueryCategoryAttributeArgs = {
  id: Scalars['ID'];
};

export type QueryCategoryAttributesArgs = {
  filter?: InputMaybe<CategoryAttributeFilter>;
  paging?: InputMaybe<CursorPaging>;
  sorting?: InputMaybe<Array<CategoryAttributeSort>>;
};

export type QueryCheckIfHasReservedSubdomainArgs = {
  slug: Scalars['String'];
};

export type QueryCheckProductSlugAvailabilityArgs = {
  slug: Scalars['String'];
};

export type QueryCheckSlugAvailabilityArgs = {
  slug: Scalars['String'];
};

export type QueryCountriesArgs = {
  filter?: InputMaybe<CountryFilter>;
  paging?: InputMaybe<CursorPaging>;
  sorting?: InputMaybe<Array<CountrySort>>;
};

export type QueryCountryArgs = {
  id: Scalars['ID'];
};

export type QueryCurrenciesArgs = {
  filter?: InputMaybe<CurrencyFilter>;
  paging?: InputMaybe<CursorPaging>;
  sorting?: InputMaybe<Array<CurrencySort>>;
};

export type QueryCurrencyArgs = {
  id: Scalars['ID'];
};

export type QueryFaqArgs = {
  id: Scalars['ID'];
};

export type QueryFaqsArgs = {
  filter?: InputMaybe<FaqFilter>;
  paging?: InputMaybe<CursorPaging>;
  sorting?: InputMaybe<Array<FaqSort>>;
};

export type QueryFeedbackArgs = {
  id: Scalars['ID'];
};

export type QueryFeedbacksArgs = {
  filter?: InputMaybe<FeedbackFilter>;
  paging?: InputMaybe<CursorPaging>;
  sorting?: InputMaybe<Array<FeedbackSort>>;
};

export type QueryFindProductsInOrderFormArgs = {
  id: Scalars['String'];
};

export type QueryFulfilmentArgs = {
  id: Scalars['ID'];
};

export type QueryFulfilmentsArgs = {
  filter?: InputMaybe<FulfilmentFilter>;
  paging?: InputMaybe<CursorPaging>;
  sorting?: InputMaybe<Array<FulfilmentSort>>;
};

export type QueryGetActiveShopCollectionsArgs = {
  sellerShopRef?: InputMaybe<Scalars['String']>;
};

export type QueryGetAdminPreferenceByKeyArgs = {
  input: AdminPreferenceFilterInput;
};

export type QueryGetAllCountriesArgs = {
  input?: InputMaybe<CountryFilterInput>;
};

export type QueryGetAllCouriersArgs = {
  filter?: InputMaybe<ShippingCourierFilterInput>;
};

export type QueryGetAllCurrenciesArgs = {
  input?: InputMaybe<CurrencyFilterInput>;
};

export type QueryGetAvailableCoveragesArgs = {
  input: CoverageInput;
};

export type QueryGetCitiesOfStateArgs = {
  countryCode: Scalars['String'];
  stateCode: Scalars['String'];
};

export type QueryGetIpayDataArgs = {
  paymentId: Scalars['String'];
};

export type QueryGetIpayStatusArgs = {
  paymentId: Scalars['String'];
};

export type QueryGetManyUserOrdersArgs = {
  filter?: InputMaybe<OrderFilter>;
  paging?: InputMaybe<CursorPaging>;
  sorting?: InputMaybe<Array<OrderSort>>;
};

export type QueryGetOrderFormsArgs = {
  filter?: InputMaybe<OrderFormFilter>;
  paging?: InputMaybe<CursorPaging>;
  sorting?: InputMaybe<Array<OrderFormSort>>;
};

export type QueryGetOrderPaymentMethodArgs = {
  mainOrderId: Scalars['String'];
};

export type QueryGetOrderXyArgs = {
  timeSpan: DateFilterType;
};

export type QueryGetPostcodesOfStatesArgs = {
  countryCode: Scalars['String'];
};

export type QueryGetProductBySlugArgs = {
  sellerShopId: Scalars['String'];
  slug: Scalars['String'];
};

export type QueryGetProductChildrenCategoriesArgs = {
  filter?: InputMaybe<ProductCategoryFilterInput>;
};

export type QueryGetProductParentCategoriesArgs = {
  filter?: InputMaybe<ProductCategoryFilter>;
  paging?: InputMaybe<CursorPaging>;
  sorting?: InputMaybe<Array<ProductCategorySort>>;
};

export type QueryGetProductsByProductIdsArgs = {
  productIds: Array<Scalars['String']>;
};

export type QueryGetPublishedProductsArgs = {
  filter?: InputMaybe<ProductFilter>;
  paging?: InputMaybe<CursorPaging>;
  sorting?: InputMaybe<Array<ProductSort>>;
};

export type QueryGetSellerShopBySlugArgs = {
  slug: Scalars['String'];
};

export type QueryGetSellerShopProfileArgs = {
  ref?: InputMaybe<Scalars['String']>;
};

export type QueryGetServicePlansByServiceIdOrNameArgs = {
  serviceIdOrName: Scalars['String'];
};

export type QueryGetShippingRatesArgs = {
  filter?: InputMaybe<ShippingZoneFilter>;
  paging?: InputMaybe<CursorPaging>;
  sorting?: InputMaybe<Array<ShippingZoneSort>>;
};

export type QueryGetShopeeJobDownloadLinkArgs = {
  jobId: Scalars['ID'];
};

export type QueryGetShopeeOrderByOrderIdArgs = {
  orderNumber: Scalars['String'];
};

export type QueryGetStatesOfCountryArgs = {
  countryCode: Scalars['String'];
};

export type QueryGetUserDeviceByIdArgs = {
  id: Scalars['String'];
};

export type QueryGetUserPreferenceByKeyArgs = {
  input: UserPreferenceFilterInput;
};

export type QueryIsSubscriptionActiveArgs = {
  serviceId?: InputMaybe<Scalars['String']>;
  serviceName?: InputMaybe<Scalars['String']>;
};

export type QueryMiscArgs = {
  id: Scalars['ID'];
};

export type QueryMiscsArgs = {
  filter?: InputMaybe<MiscFilter>;
  paging?: InputMaybe<CursorPaging>;
  sorting?: InputMaybe<Array<MiscSort>>;
};

export type QueryOrderArgs = {
  id: Scalars['ID'];
};

export type QueryOrderAggregateArgs = {
  filter?: InputMaybe<OrderAggregateFilter>;
};

export type QueryOrderCancelArgs = {
  id: Scalars['ID'];
};

export type QueryOrderCancelsArgs = {
  filter?: InputMaybe<OrderCancelFilter>;
  paging?: InputMaybe<CursorPaging>;
  sorting?: InputMaybe<Array<OrderCancelSort>>;
};

export type QueryOrderFormArgs = {
  id: Scalars['ID'];
};

export type QueryOrderFormsArgs = {
  filter?: InputMaybe<OrderFormFilter>;
  paging?: InputMaybe<CursorPaging>;
  sorting?: InputMaybe<Array<OrderFormSort>>;
};

export type QueryOrderRefundArgs = {
  id: Scalars['ID'];
};

export type QueryOrderRefundsArgs = {
  filter?: InputMaybe<OrderRefundFilter>;
  paging?: InputMaybe<CursorPaging>;
  sorting?: InputMaybe<Array<OrderRefundSort>>;
};

export type QueryOrdersArgs = {
  filter?: InputMaybe<OrderFilter>;
  paging?: InputMaybe<CursorPaging>;
  sorting?: InputMaybe<Array<OrderSort>>;
};

export type QueryPaymentArgs = {
  id: Scalars['ID'];
};

export type QueryPaymentsArgs = {
  filter?: InputMaybe<PaymentFilter>;
  paging?: InputMaybe<CursorPaging>;
  sorting?: InputMaybe<Array<PaymentSort>>;
};

export type QueryProductArgs = {
  id: Scalars['ID'];
};

export type QueryProductAttributeArgs = {
  id: Scalars['ID'];
};

export type QueryProductAttributesArgs = {
  filter?: InputMaybe<ProductAttributeFilter>;
  paging?: InputMaybe<CursorPaging>;
  sorting?: InputMaybe<Array<ProductAttributeSort>>;
};

export type QueryProductBrandArgs = {
  id: Scalars['ID'];
};

export type QueryProductBrandsArgs = {
  filter?: InputMaybe<ProductBrandFilter>;
  paging?: InputMaybe<CursorPaging>;
  sorting?: InputMaybe<Array<ProductBrandSort>>;
};

export type QueryProductCategoriesArgs = {
  filter?: InputMaybe<ProductCategoryFilter>;
  paging?: InputMaybe<CursorPaging>;
  sorting?: InputMaybe<Array<ProductCategorySort>>;
};

export type QueryProductCategoryArgs = {
  id: Scalars['ID'];
};

export type QueryProductVariantArgs = {
  id: Scalars['ID'];
};

export type QueryProductVariantsArgs = {
  filter?: InputMaybe<ProductVariantFilter>;
  paging?: InputMaybe<CursorPaging>;
  sorting?: InputMaybe<Array<ProductVariantSort>>;
};

export type QueryProductsArgs = {
  filter?: InputMaybe<ProductFilter>;
  paging?: InputMaybe<CursorPaging>;
  sorting?: InputMaybe<Array<ProductSort>>;
};

export type QuerySellerShopArgs = {
  id: Scalars['ID'];
};

export type QuerySellerShopsArgs = {
  filter?: InputMaybe<SellerShopFilter>;
  paging?: InputMaybe<CursorPaging>;
  sorting?: InputMaybe<Array<SellerShopSort>>;
};

export type QueryServiceArgs = {
  id: Scalars['ID'];
};

export type QueryServicePlanArgs = {
  id: Scalars['ID'];
};

export type QueryServiceSubscriptionArgs = {
  id: Scalars['ID'];
};

export type QueryServiceSubscriptionsArgs = {
  filter?: InputMaybe<ServiceSubscriptionFilter>;
  paging?: InputMaybe<CursorPaging>;
  sorting?: InputMaybe<Array<ServiceSubscriptionSort>>;
};

export type QueryServicesArgs = {
  filter?: InputMaybe<ServiceFilter>;
  paging?: InputMaybe<CursorPaging>;
  sorting?: InputMaybe<Array<ServiceSort>>;
};

export type QueryShippingCourierArgs = {
  id: Scalars['ID'];
};

export type QueryShippingCouriersArgs = {
  filter?: InputMaybe<ShippingCourierFilter>;
  paging?: InputMaybe<CursorPaging>;
  sorting?: InputMaybe<Array<ShippingCourierSort>>;
};

export type QueryShippingMethodArgs = {
  id: Scalars['ID'];
};

export type QueryShippingMethodsArgs = {
  filter?: InputMaybe<ShippingMethodFilter>;
  paging?: InputMaybe<CursorPaging>;
  sorting?: InputMaybe<Array<ShippingMethodSort>>;
};

export type QueryShippingPickupArgs = {
  id: Scalars['ID'];
};

export type QueryShippingPickupsArgs = {
  filter?: InputMaybe<ShippingPickupFilter>;
  paging?: InputMaybe<CursorPaging>;
  sorting?: InputMaybe<Array<ShippingPickupSort>>;
};

export type QueryShippingZoneArgs = {
  id: Scalars['ID'];
};

export type QueryShippingZoneCoverageArgs = {
  id: Scalars['ID'];
};

export type QueryShippingZoneCoveragesArgs = {
  filter?: InputMaybe<ShippingZoneCoverageFilter>;
  paging?: InputMaybe<CursorPaging>;
  sorting?: InputMaybe<Array<ShippingZoneCoverageSort>>;
};

export type QueryShippingZonesArgs = {
  filter?: InputMaybe<ShippingZoneFilter>;
  paging?: InputMaybe<CursorPaging>;
  sorting?: InputMaybe<Array<ShippingZoneSort>>;
};

export type QueryShopAddressArgs = {
  id: Scalars['ID'];
};

export type QueryShopAddressesArgs = {
  filter?: InputMaybe<ShopAddressFilter>;
  paging?: InputMaybe<CursorPaging>;
  sorting?: InputMaybe<Array<ShopAddressSort>>;
};

export type QueryShopCollectionArgs = {
  id: Scalars['ID'];
};

export type QueryShopCollectionsArgs = {
  filter?: InputMaybe<ShopCollectionFilter>;
  paging?: InputMaybe<CursorPaging>;
  sorting?: InputMaybe<Array<ShopCollectionSort>>;
};

export type QueryShopeeJobArgs = {
  id: Scalars['ID'];
};

export type QueryShopeeJobLinkArgs = {
  id: Scalars['ID'];
};

export type QueryShopeeJobLinksArgs = {
  filter?: InputMaybe<ShopeeJobLinkFilter>;
  paging?: InputMaybe<CursorPaging>;
  sorting?: InputMaybe<Array<ShopeeJobLinkSort>>;
};

export type QueryShopeeJobsArgs = {
  filter?: InputMaybe<ShopeeJobFilter>;
  paging?: InputMaybe<CursorPaging>;
  sorting?: InputMaybe<Array<ShopeeJobSort>>;
};

export type QueryShopeeOrderArgs = {
  id: Scalars['ID'];
};

export type QueryShopeeOrderLineArgs = {
  id: Scalars['ID'];
};

export type QueryShopeeOrderLinesArgs = {
  filter?: InputMaybe<ShopeeOrderLineFilter>;
  paging?: InputMaybe<CursorPaging>;
  sorting?: InputMaybe<Array<ShopeeOrderLineSort>>;
};

export type QueryShopeeOrdersArgs = {
  filter?: InputMaybe<ShopeeOrderFilter>;
  paging?: InputMaybe<CursorPaging>;
  sorting?: InputMaybe<Array<ShopeeOrderSort>>;
};

export type QueryShopeeReportingArgs = {
  id: Scalars['ID'];
};

export type QueryShopeeReportingSnapshotArgs = {
  id: Scalars['ID'];
};

export type QueryShopeeReportingSnapshotsArgs = {
  filter?: InputMaybe<ShopeeReportingSnapshotFilter>;
  paging?: InputMaybe<CursorPaging>;
  sorting?: InputMaybe<Array<ShopeeReportingSnapshotSort>>;
};

export type QueryShopeeReportingsArgs = {
  filter?: InputMaybe<ShopeeReportingFilter>;
  paging?: InputMaybe<CursorPaging>;
  sorting?: InputMaybe<Array<ShopeeReportingSort>>;
};

export type QueryShopeeSettingsArgs = {
  filter?: InputMaybe<ShopeeSettingsFilter>;
  paging?: InputMaybe<CursorPaging>;
  sorting?: InputMaybe<Array<ShopeeSettingsSort>>;
};

export type QueryShopeeStoresArgs = {
  filter?: InputMaybe<ShopeeStoreFilter>;
  paging?: InputMaybe<CursorPaging>;
  sorting?: InputMaybe<Array<ShopeeStoreSort>>;
};

export type QueryUserArgs = {
  id: Scalars['ID'];
};

export type QueryUserAddressArgs = {
  id: Scalars['ID'];
};

export type QueryUserAddressesArgs = {
  filter?: InputMaybe<UserAddressFilter>;
  paging?: InputMaybe<CursorPaging>;
  sorting?: InputMaybe<Array<UserAddressSort>>;
};

export type QueryUserDeviceArgs = {
  id: Scalars['ID'];
};

export type QueryUserDevicesArgs = {
  filter?: InputMaybe<UserDeviceFilter>;
  paging?: InputMaybe<CursorPaging>;
  sorting?: InputMaybe<Array<UserDeviceSort>>;
};

export type QueryUserPreferenceArgs = {
  id: Scalars['ID'];
};

export type QueryUserPreferencesArgs = {
  filter?: InputMaybe<UserPreferenceFilter>;
  paging?: InputMaybe<CursorPaging>;
  sorting?: InputMaybe<Array<UserPreferenceSort>>;
};

export type QueryUsersArgs = {
  filter?: InputMaybe<UserFilter>;
  paging?: InputMaybe<CursorPaging>;
  sorting?: InputMaybe<Array<UserSort>>;
};

export type RefreshAccessTokenInput = {
  refreshToken: Scalars['String'];
};

export type RelationInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The id of relation. */
  relationId: Scalars['ID'];
};

export type RelationsInput = {
  /** The id of the record. */
  id: Scalars['ID'];
  /** The ids of the relations. */
  relationIds: Array<Scalars['ID']>;
};

export type ReorderShopCollectionsInput = {
  shopCollectionId: Scalars['String'];
  shopCollectionItems?: InputMaybe<Array<Scalars['String']>>;
};

export type ReportingOptions = {
  __typename?: 'ReportingOptions';
  currency?: Maybe<Scalars['String']>;
  fromDate?: Maybe<Scalars['DateTime']>;
  period?: Maybe<ReportingPeriod>;
  toDate?: Maybe<Scalars['DateTime']>;
  type?: Maybe<ReportingType>;
};

export type ReportingOptionsInput = {
  currency?: InputMaybe<Scalars['String']>;
  fromDate?: InputMaybe<Scalars['DateTime']>;
  period?: InputMaybe<ReportingPeriod>;
  toDate?: InputMaybe<Scalars['DateTime']>;
  type?: InputMaybe<ReportingType>;
};

export enum ReportingPeriod {
  Custom = 'CUSTOM',
  Daily = 'DAILY',
  Monthly = 'MONTHLY',
  Quarterly = 'QUARTERLY',
  Weekly = 'WEEKLY',
  Yearly = 'YEARLY',
}

export type ReportingPeriodFilterComparison = {
  eq?: InputMaybe<ReportingPeriod>;
  gt?: InputMaybe<ReportingPeriod>;
  gte?: InputMaybe<ReportingPeriod>;
  iLike?: InputMaybe<ReportingPeriod>;
  in?: InputMaybe<Array<ReportingPeriod>>;
  is?: InputMaybe<Scalars['Boolean']>;
  isNot?: InputMaybe<Scalars['Boolean']>;
  like?: InputMaybe<ReportingPeriod>;
  lt?: InputMaybe<ReportingPeriod>;
  lte?: InputMaybe<ReportingPeriod>;
  neq?: InputMaybe<ReportingPeriod>;
  notILike?: InputMaybe<ReportingPeriod>;
  notIn?: InputMaybe<Array<ReportingPeriod>>;
  notLike?: InputMaybe<ReportingPeriod>;
};

export enum ReportingStatus {
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  Pending = 'PENDING',
  Processing = 'PROCESSING',
}

export enum ReportingType {
  SkuOverview = 'SKU_OVERVIEW',
}

export type ReportingTypeFilterComparison = {
  eq?: InputMaybe<ReportingType>;
  gt?: InputMaybe<ReportingType>;
  gte?: InputMaybe<ReportingType>;
  iLike?: InputMaybe<ReportingType>;
  in?: InputMaybe<Array<ReportingType>>;
  is?: InputMaybe<Scalars['Boolean']>;
  isNot?: InputMaybe<Scalars['Boolean']>;
  like?: InputMaybe<ReportingType>;
  lt?: InputMaybe<ReportingType>;
  lte?: InputMaybe<ReportingType>;
  neq?: InputMaybe<ReportingType>;
  notILike?: InputMaybe<ReportingType>;
  notIn?: InputMaybe<Array<ReportingType>>;
  notLike?: InputMaybe<ReportingType>;
};

export type ReservedSubdomain = {
  __typename?: 'ReservedSubdomain';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type ReservedSubdomainAggregateGroupBy = {
  __typename?: 'ReservedSubdomainAggregateGroupBy';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ReservedSubdomainCountAggregate = {
  __typename?: 'ReservedSubdomainCountAggregate';
  createdAt?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
};

export type ReservedSubdomainEdge = {
  __typename?: 'ReservedSubdomainEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the ReservedSubdomain */
  node: ReservedSubdomain;
};

export type ReservedSubdomainMaxAggregate = {
  __typename?: 'ReservedSubdomainMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ReservedSubdomainMinAggregate = {
  __typename?: 'ReservedSubdomainMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ResetUserIdentityPasswordInput = {
  newPassword: Scalars['String'];
};

export type ReviewCancelRefundOrderInput = {
  ids: Array<Scalars['String']>;
  status: CancelRefundStatus;
};

export type SellerShop = {
  __typename?: 'SellerShop';
  averageRating?: Maybe<Scalars['Float']>;
  contact?: Maybe<Scalars['String']>;
  countryCode: Scalars['String'];
  cover?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  documents?: Maybe<Array<Scalars['String']>>;
  email?: Maybe<Scalars['String']>;
  enableDelivery: Scalars['Boolean'];
  enablePickup: Scalars['Boolean'];
  facebookPixel?: Maybe<Scalars['String']>;
  fulfilments: Array<Fulfilment>;
  id: Scalars['ID'];
  identityAccesses: SellerShopIdentityAccessesConnection;
  landlineNumber?: Maybe<Scalars['String']>;
  language?: Maybe<LanguageType>;
  logo?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  openingHours?: Maybe<Array<OpeningHours>>;
  orderForms: SellerShopOrderFormsConnection;
  products: SellerShopProductsConnection;
  shippingMethods: SellerShopShippingMethodsConnection;
  shippingPickups: Array<ShippingPickup>;
  shopAddresses: Array<ShopAddress>;
  shopCollections: Array<ShopCollection>;
  shopSettings?: Maybe<ShopSettings>;
  shopeeSettings?: Maybe<ShopeeSettings>;
  slug?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  type: ShopProfileType;
  updatedAt: Scalars['DateTime'];
  zones: SellerShopZonesConnection;
};

export type SellerShopFulfilmentsArgs = {
  filter?: InputMaybe<FulfilmentFilter>;
  sorting?: InputMaybe<Array<FulfilmentSort>>;
};

export type SellerShopIdentityAccessesArgs = {
  filter?: InputMaybe<IdentityAccessFilter>;
  paging?: InputMaybe<CursorPaging>;
  sorting?: InputMaybe<Array<IdentityAccessSort>>;
};

export type SellerShopOrderFormsArgs = {
  filter?: InputMaybe<OrderFormFilter>;
  paging?: InputMaybe<CursorPaging>;
  sorting?: InputMaybe<Array<OrderFormSort>>;
};

export type SellerShopProductsArgs = {
  filter?: InputMaybe<ProductFilter>;
  paging?: InputMaybe<CursorPaging>;
  sorting?: InputMaybe<Array<ProductSort>>;
};

export type SellerShopShippingMethodsArgs = {
  filter?: InputMaybe<ShippingMethodFilter>;
  paging?: InputMaybe<CursorPaging>;
  sorting?: InputMaybe<Array<ShippingMethodSort>>;
};

export type SellerShopShippingPickupsArgs = {
  filter?: InputMaybe<ShippingPickupFilter>;
  sorting?: InputMaybe<Array<ShippingPickupSort>>;
};

export type SellerShopShopAddressesArgs = {
  filter?: InputMaybe<ShopAddressFilter>;
  sorting?: InputMaybe<Array<ShopAddressSort>>;
};

export type SellerShopShopCollectionsArgs = {
  filter?: InputMaybe<ShopCollectionFilter>;
  sorting?: InputMaybe<Array<ShopCollectionSort>>;
};

export type SellerShopZonesArgs = {
  filter?: InputMaybe<ShippingZoneFilter>;
  paging?: InputMaybe<CursorPaging>;
  sorting?: InputMaybe<Array<ShippingZoneSort>>;
};

export type SellerShopAggregateGroupBy = {
  __typename?: 'SellerShopAggregateGroupBy';
  averageRating?: Maybe<Scalars['Float']>;
  countryCode?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  language?: Maybe<LanguageType>;
  name?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type SellerShopAvgAggregate = {
  __typename?: 'SellerShopAvgAggregate';
  averageRating?: Maybe<Scalars['Float']>;
};

export type SellerShopConnection = {
  __typename?: 'SellerShopConnection';
  /** Array of edges. */
  edges: Array<SellerShopEdge>;
  /** Paging information */
  pageInfo: PageInfo;
};

export type SellerShopCountAggregate = {
  __typename?: 'SellerShopCountAggregate';
  averageRating?: Maybe<Scalars['Int']>;
  countryCode?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  language?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
};

export type SellerShopCreateInput = {
  averageRating?: InputMaybe<Scalars['Float']>;
  contact?: InputMaybe<Scalars['String']>;
  countryCode?: InputMaybe<Scalars['String']>;
  cover?: InputMaybe<Scalars['String']>;
  documents?: InputMaybe<Array<Scalars['String']>>;
  enableDelivery: Scalars['Boolean'];
  enablePickup: Scalars['Boolean'];
  facebookPixel?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  identity?: InputMaybe<Scalars['String']>;
  landlineNumber?: InputMaybe<Scalars['String']>;
  language?: InputMaybe<LanguageType>;
  logo?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  openingHours?: InputMaybe<Array<OpeningHoursInput>>;
  shopAddress: Array<ShopAddressCreateInput>;
  shopeeSettings?: InputMaybe<ShopeeSettingsCreateInput>;
  signupChannel?: InputMaybe<SellerSignUpChannelType>;
  slug?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<SellerShopStatus>;
  type: ShopProfileType;
  userId?: InputMaybe<Scalars['String']>;
};

export type SellerShopDeleteFilter = {
  and?: InputMaybe<Array<SellerShopDeleteFilter>>;
  averageRating?: InputMaybe<NumberFieldComparison>;
  countryCode?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  language?: InputMaybe<LanguageTypeFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<SellerShopDeleteFilter>>;
  status?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type SellerShopDeleteResponse = {
  __typename?: 'SellerShopDeleteResponse';
  averageRating?: Maybe<Scalars['Float']>;
  contact?: Maybe<Scalars['String']>;
  countryCode?: Maybe<Scalars['String']>;
  cover?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  documents?: Maybe<Array<Scalars['String']>>;
  email?: Maybe<Scalars['String']>;
  enableDelivery?: Maybe<Scalars['Boolean']>;
  enablePickup?: Maybe<Scalars['Boolean']>;
  facebookPixel?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  landlineNumber?: Maybe<Scalars['String']>;
  language?: Maybe<LanguageType>;
  logo?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  openingHours?: Maybe<Array<OpeningHours>>;
  shopAddresses?: Maybe<Array<ShopAddress>>;
  slug?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  type?: Maybe<ShopProfileType>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type SellerShopEdge = {
  __typename?: 'SellerShopEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the SellerShop */
  node: SellerShop;
};

export type SellerShopFilter = {
  and?: InputMaybe<Array<SellerShopFilter>>;
  averageRating?: InputMaybe<NumberFieldComparison>;
  countryCode?: InputMaybe<StringFieldComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  language?: InputMaybe<LanguageTypeFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<SellerShopFilter>>;
  status?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type SellerShopIdentityAccessesConnection = {
  __typename?: 'SellerShopIdentityAccessesConnection';
  /** Array of edges. */
  edges: Array<IdentityAccessEdge>;
  /** Paging information */
  pageInfo: PageInfo;
};

export type SellerShopMaxAggregate = {
  __typename?: 'SellerShopMaxAggregate';
  averageRating?: Maybe<Scalars['Float']>;
  countryCode?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  language?: Maybe<LanguageType>;
  name?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type SellerShopMinAggregate = {
  __typename?: 'SellerShopMinAggregate';
  averageRating?: Maybe<Scalars['Float']>;
  countryCode?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  language?: Maybe<LanguageType>;
  name?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type SellerShopOrderFormsConnection = {
  __typename?: 'SellerShopOrderFormsConnection';
  /** Array of edges. */
  edges: Array<OrderFormEdge>;
  /** Paging information */
  pageInfo: PageInfo;
};

export type SellerShopProductsConnection = {
  __typename?: 'SellerShopProductsConnection';
  /** Array of edges. */
  edges: Array<ProductEdge>;
  /** Paging information */
  pageInfo: PageInfo;
};

export type SellerShopShippingMethodsConnection = {
  __typename?: 'SellerShopShippingMethodsConnection';
  /** Array of edges. */
  edges: Array<ShippingMethodEdge>;
  /** Paging information */
  pageInfo: PageInfo;
};

export type SellerShopSort = {
  direction: SortDirection;
  field: SellerShopSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum SellerShopSortFields {
  AverageRating = 'averageRating',
  CountryCode = 'countryCode',
  CreatedAt = 'createdAt',
  Id = 'id',
  Language = 'language',
  Name = 'name',
  Status = 'status',
  UpdatedAt = 'updatedAt',
}

export enum SellerShopStatus {
  Banned = 'BANNED',
  Pending = 'PENDING',
  Unverified = 'UNVERIFIED',
  Verified = 'VERIFIED',
}

export type SellerShopSumAggregate = {
  __typename?: 'SellerShopSumAggregate';
  averageRating?: Maybe<Scalars['Float']>;
};

export type SellerShopUpdateInput = {
  averageRating?: InputMaybe<Scalars['Float']>;
  contact?: InputMaybe<Scalars['String']>;
  countryCode?: InputMaybe<Scalars['String']>;
  cover?: InputMaybe<Scalars['String']>;
  documents?: InputMaybe<Array<Scalars['String']>>;
  enableDelivery?: InputMaybe<Scalars['Boolean']>;
  enablePickup?: InputMaybe<Scalars['Boolean']>;
  facebookPixel?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  identity?: InputMaybe<Scalars['String']>;
  landlineNumber?: InputMaybe<Scalars['String']>;
  language?: InputMaybe<LanguageType>;
  logo?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  openingHours?: InputMaybe<Array<OpeningHoursInput>>;
  shopAddress?: InputMaybe<Array<ShopAddressCreateInput>>;
  shopeeSettings?: InputMaybe<ShopeeSettingsCreateInput>;
  signupChannel?: InputMaybe<SellerSignUpChannelType>;
  slug?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<SellerShopStatus>;
  type?: InputMaybe<ShopProfileType>;
  userId?: InputMaybe<Scalars['String']>;
};

export type SellerShopZonesConnection = {
  __typename?: 'SellerShopZonesConnection';
  /** Array of edges. */
  edges: Array<ShippingZoneEdge>;
  /** Paging information */
  pageInfo: PageInfo;
};

export enum SellerSignUpChannelType {
  SellerCenter = 'SELLER_CENTER',
  ShopeeCenter = 'SHOPEE_CENTER',
}

export type SendEmailInput = {
  content: Scalars['String'];
  name: Scalars['String'];
  to: Scalars['String'];
};

export type Service = {
  __typename?: 'Service';
  createdAt: Scalars['DateTime'];
  description?: Maybe<ServiceDescription>;
  id: Scalars['ID'];
  logo?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  plans?: Maybe<Array<ServicePlan>>;
  type?: Maybe<ServiceType>;
  updatedAt: Scalars['DateTime'];
};

export type ServicePlansArgs = {
  filter?: InputMaybe<ServicePlanFilter>;
  sorting?: InputMaybe<Array<ServicePlanSort>>;
};

export type ServiceAggregateGroupBy = {
  __typename?: 'ServiceAggregateGroupBy';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ServiceConnection = {
  __typename?: 'ServiceConnection';
  /** Array of edges. */
  edges: Array<ServiceEdge>;
  /** Paging information */
  pageInfo: PageInfo;
};

export type ServiceCountAggregate = {
  __typename?: 'ServiceCountAggregate';
  createdAt?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
};

export type ServiceDescription = {
  __typename?: 'ServiceDescription';
  en?: Maybe<Scalars['String']>;
  ms?: Maybe<Scalars['String']>;
  zh?: Maybe<Scalars['String']>;
};

export type ServiceEdge = {
  __typename?: 'ServiceEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the Service */
  node: Service;
};

export type ServiceFilter = {
  and?: InputMaybe<Array<ServiceFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<ServiceFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ServiceMaxAggregate = {
  __typename?: 'ServiceMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ServiceMinAggregate = {
  __typename?: 'ServiceMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ServicePlan = {
  __typename?: 'ServicePlan';
  createdAt: Scalars['DateTime'];
  currency: Scalars['String'];
  day?: Maybe<Scalars['Float']>;
  description?: Maybe<ServicePlanDescription>;
  fromDate: Scalars['DateTime'];
  id: Scalars['ID'];
  image?: Maybe<Scalars['String']>;
  month?: Maybe<Scalars['Float']>;
  name: Scalars['String'];
  price: Scalars['Float'];
  publish: Scalars['Boolean'];
  service: Service;
  serviceId?: Maybe<Scalars['String']>;
  status: ServicePlanStatus;
  subscribes?: Maybe<Array<ServiceSubscription>>;
  tier?: Maybe<Scalars['String']>;
  toDate: Scalars['DateTime'];
  type?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  year?: Maybe<Scalars['Int']>;
};

export type ServicePlanSubscribesArgs = {
  filter?: InputMaybe<ServiceSubscriptionFilter>;
  sorting?: InputMaybe<Array<ServiceSubscriptionSort>>;
};

export type ServicePlanAggregateGroupBy = {
  __typename?: 'ServicePlanAggregateGroupBy';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ServicePlanCountAggregate = {
  __typename?: 'ServicePlanCountAggregate';
  createdAt?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
};

export type ServicePlanDescription = {
  __typename?: 'ServicePlanDescription';
  en?: Maybe<Scalars['String']>;
  ms?: Maybe<Scalars['String']>;
  zh?: Maybe<Scalars['String']>;
};

export type ServicePlanEdge = {
  __typename?: 'ServicePlanEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the ServicePlan */
  node: ServicePlan;
};

export type ServicePlanFilter = {
  and?: InputMaybe<Array<ServicePlanFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ServicePlanFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ServicePlanMaxAggregate = {
  __typename?: 'ServicePlanMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ServicePlanMinAggregate = {
  __typename?: 'ServicePlanMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ServicePlanSort = {
  direction: SortDirection;
  field: ServicePlanSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum ServicePlanSortFields {
  CreatedAt = 'createdAt',
  Id = 'id',
  Name = 'name',
  UpdatedAt = 'updatedAt',
}

export enum ServicePlanStatus {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE',
}

export type ServiceSort = {
  direction: SortDirection;
  field: ServiceSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum ServiceSortFields {
  CreatedAt = 'createdAt',
  Id = 'id',
  UpdatedAt = 'updatedAt',
}

export type ServiceSubscription = {
  __typename?: 'ServiceSubscription';
  createdAt: Scalars['DateTime'];
  fromDate?: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  plan: ServicePlan;
  planId?: Maybe<Scalars['String']>;
  sellerShop: SellerShop;
  sellerShopId?: Maybe<Scalars['String']>;
  status: ServiceSubscriptionStatus;
  toDate?: Maybe<Scalars['DateTime']>;
  updatedAt: Scalars['DateTime'];
};

export type ServiceSubscriptionAggregateGroupBy = {
  __typename?: 'ServiceSubscriptionAggregateGroupBy';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ServiceSubscriptionConnection = {
  __typename?: 'ServiceSubscriptionConnection';
  /** Array of edges. */
  edges: Array<ServiceSubscriptionEdge>;
  /** Paging information */
  pageInfo: PageInfo;
};

export type ServiceSubscriptionCountAggregate = {
  __typename?: 'ServiceSubscriptionCountAggregate';
  createdAt?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
};

export type ServiceSubscriptionEdge = {
  __typename?: 'ServiceSubscriptionEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the ServiceSubscription */
  node: ServiceSubscription;
};

export type ServiceSubscriptionFilter = {
  and?: InputMaybe<Array<ServiceSubscriptionFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<ServiceSubscriptionFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ServiceSubscriptionMaxAggregate = {
  __typename?: 'ServiceSubscriptionMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ServiceSubscriptionMinAggregate = {
  __typename?: 'ServiceSubscriptionMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ServiceSubscriptionSort = {
  direction: SortDirection;
  field: ServiceSubscriptionSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum ServiceSubscriptionSortFields {
  CreatedAt = 'createdAt',
  Id = 'id',
  UpdatedAt = 'updatedAt',
}

export enum ServiceSubscriptionStatus {
  Active = 'ACTIVE',
  Cancelled = 'CANCELLED',
  Inactive = 'INACTIVE',
}

export enum ServiceType {
  Free = 'FREE',
  Paid = 'PAID',
}

export type ShippingCourier = {
  __typename?: 'ShippingCourier';
  countryCode?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  image?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  status: GeneralStatus;
  updatedAt: Scalars['DateTime'];
};

export type ShippingCourierAggregateGroupBy = {
  __typename?: 'ShippingCourierAggregateGroupBy';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  status?: Maybe<GeneralStatus>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ShippingCourierConnection = {
  __typename?: 'ShippingCourierConnection';
  /** Array of edges. */
  edges: Array<ShippingCourierEdge>;
  /** Paging information */
  pageInfo: PageInfo;
};

export type ShippingCourierCountAggregate = {
  __typename?: 'ShippingCourierCountAggregate';
  createdAt?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
};

export type ShippingCourierCreateInput = {
  countryCode?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  status?: InputMaybe<GeneralStatus>;
};

export type ShippingCourierDeleteFilter = {
  and?: InputMaybe<Array<ShippingCourierDeleteFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<ShippingCourierDeleteFilter>>;
  status?: InputMaybe<GeneralStatusFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ShippingCourierDeleteResponse = {
  __typename?: 'ShippingCourierDeleteResponse';
  countryCode?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  status?: Maybe<GeneralStatus>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ShippingCourierEdge = {
  __typename?: 'ShippingCourierEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the ShippingCourier */
  node: ShippingCourier;
};

export type ShippingCourierFilter = {
  and?: InputMaybe<Array<ShippingCourierFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<ShippingCourierFilter>>;
  status?: InputMaybe<GeneralStatusFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ShippingCourierFilterInput = {
  countryCode?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<GeneralStatus>;
};

export type ShippingCourierMaxAggregate = {
  __typename?: 'ShippingCourierMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  status?: Maybe<GeneralStatus>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ShippingCourierMinAggregate = {
  __typename?: 'ShippingCourierMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  status?: Maybe<GeneralStatus>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ShippingCourierSort = {
  direction: SortDirection;
  field: ShippingCourierSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum ShippingCourierSortFields {
  CreatedAt = 'createdAt',
  Id = 'id',
  Status = 'status',
  UpdatedAt = 'updatedAt',
}

export type ShippingCourierUpdateFilter = {
  and?: InputMaybe<Array<ShippingCourierUpdateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<ShippingCourierUpdateFilter>>;
  status?: InputMaybe<GeneralStatusFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ShippingCourierUpdateInput = {
  countryCode?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<GeneralStatus>;
};

export type ShippingMethod = {
  __typename?: 'ShippingMethod';
  additionalFigure?: Maybe<Scalars['Float']>;
  additionalRate?: Maybe<Scalars['Float']>;
  baseFigure?: Maybe<Scalars['Float']>;
  baseRate?: Maybe<Scalars['Float']>;
  courierService?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  currency: Scalars['String'];
  eligibleForFreeShipping: Scalars['Boolean'];
  flatRate?: Maybe<Scalars['Float']>;
  freeShippingMinimumThreshold?: Maybe<Scalars['Float']>;
  handlingFee?: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
  measurementUnit?: Maybe<MeasurementUnitType>;
  name: Scalars['String'];
  sellerShop: SellerShop;
  sellerShopId: Scalars['String'];
  shippingMethod: ShippingMethodType;
  shippingZone: ShippingZone;
  shippingZoneId: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type ShippingMethodAggregateGroupBy = {
  __typename?: 'ShippingMethodAggregateGroupBy';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  sellerShopId?: Maybe<Scalars['String']>;
  shippingMethod?: Maybe<ShippingMethodType>;
  shippingZoneId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ShippingMethodConnection = {
  __typename?: 'ShippingMethodConnection';
  /** Array of edges. */
  edges: Array<ShippingMethodEdge>;
  /** Paging information */
  pageInfo: PageInfo;
};

export type ShippingMethodCountAggregate = {
  __typename?: 'ShippingMethodCountAggregate';
  createdAt?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  sellerShopId?: Maybe<Scalars['Int']>;
  shippingMethod?: Maybe<Scalars['Int']>;
  shippingZoneId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
};

export type ShippingMethodCreateInput = {
  additionalFigure?: InputMaybe<Scalars['Float']>;
  additionalRate?: InputMaybe<Scalars['Float']>;
  baseFigure?: InputMaybe<Scalars['Float']>;
  baseRate?: InputMaybe<Scalars['Float']>;
  courierService?: InputMaybe<Scalars['String']>;
  currency?: InputMaybe<Scalars['String']>;
  eligibleForFreeShipping: Scalars['Boolean'];
  flatRate?: InputMaybe<Scalars['Float']>;
  freeShippingMinimumThreshold?: InputMaybe<Scalars['Float']>;
  handlingFee?: InputMaybe<Scalars['Float']>;
  id?: InputMaybe<Scalars['String']>;
  measurementUnit: Scalars['String'];
  name: Scalars['String'];
  shippingMethod: ShippingMethodType;
  shippingZoneId?: InputMaybe<Scalars['String']>;
};

export type ShippingMethodDeleteFilter = {
  and?: InputMaybe<Array<ShippingMethodDeleteFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ShippingMethodDeleteFilter>>;
  sellerShopId?: InputMaybe<StringFieldComparison>;
  shippingMethod?: InputMaybe<ShippingMethodTypeFilterComparison>;
  shippingZoneId?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ShippingMethodDeleteResponse = {
  __typename?: 'ShippingMethodDeleteResponse';
  additionalFigure?: Maybe<Scalars['Float']>;
  additionalRate?: Maybe<Scalars['Float']>;
  baseFigure?: Maybe<Scalars['Float']>;
  baseRate?: Maybe<Scalars['Float']>;
  courierService?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  currency?: Maybe<Scalars['String']>;
  eligibleForFreeShipping?: Maybe<Scalars['Boolean']>;
  flatRate?: Maybe<Scalars['Float']>;
  freeShippingMinimumThreshold?: Maybe<Scalars['Float']>;
  handlingFee?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['ID']>;
  measurementUnit?: Maybe<MeasurementUnitType>;
  name?: Maybe<Scalars['String']>;
  sellerShopId?: Maybe<Scalars['String']>;
  shippingMethod?: Maybe<ShippingMethodType>;
  shippingZoneId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ShippingMethodEdge = {
  __typename?: 'ShippingMethodEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the ShippingMethod */
  node: ShippingMethod;
};

export type ShippingMethodFilter = {
  and?: InputMaybe<Array<ShippingMethodFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ShippingMethodFilter>>;
  sellerShopId?: InputMaybe<StringFieldComparison>;
  shippingMethod?: InputMaybe<ShippingMethodTypeFilterComparison>;
  shippingZoneId?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ShippingMethodMaxAggregate = {
  __typename?: 'ShippingMethodMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  sellerShopId?: Maybe<Scalars['String']>;
  shippingMethod?: Maybe<ShippingMethodType>;
  shippingZoneId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ShippingMethodMinAggregate = {
  __typename?: 'ShippingMethodMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  sellerShopId?: Maybe<Scalars['String']>;
  shippingMethod?: Maybe<ShippingMethodType>;
  shippingZoneId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ShippingMethodSort = {
  direction: SortDirection;
  field: ShippingMethodSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum ShippingMethodSortFields {
  CreatedAt = 'createdAt',
  Id = 'id',
  Name = 'name',
  SellerShopId = 'sellerShopId',
  ShippingMethod = 'shippingMethod',
  ShippingZoneId = 'shippingZoneId',
  UpdatedAt = 'updatedAt',
}

export enum ShippingMethodType {
  Courier = 'COURIER',
  LocalDelivery = 'LOCAL_DELIVERY',
  Simple = 'SIMPLE',
}

export type ShippingMethodTypeFilterComparison = {
  eq?: InputMaybe<ShippingMethodType>;
  gt?: InputMaybe<ShippingMethodType>;
  gte?: InputMaybe<ShippingMethodType>;
  iLike?: InputMaybe<ShippingMethodType>;
  in?: InputMaybe<Array<ShippingMethodType>>;
  is?: InputMaybe<Scalars['Boolean']>;
  isNot?: InputMaybe<Scalars['Boolean']>;
  like?: InputMaybe<ShippingMethodType>;
  lt?: InputMaybe<ShippingMethodType>;
  lte?: InputMaybe<ShippingMethodType>;
  neq?: InputMaybe<ShippingMethodType>;
  notILike?: InputMaybe<ShippingMethodType>;
  notIn?: InputMaybe<Array<ShippingMethodType>>;
  notLike?: InputMaybe<ShippingMethodType>;
};

export type ShippingMethodUpdateFilter = {
  and?: InputMaybe<Array<ShippingMethodUpdateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ShippingMethodUpdateFilter>>;
  sellerShopId?: InputMaybe<StringFieldComparison>;
  shippingMethod?: InputMaybe<ShippingMethodTypeFilterComparison>;
  shippingZoneId?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ShippingMethodUpdateInput = {
  additionalFigure?: InputMaybe<Scalars['Float']>;
  additionalRate?: InputMaybe<Scalars['Float']>;
  baseFigure?: InputMaybe<Scalars['Float']>;
  baseRate?: InputMaybe<Scalars['Float']>;
  courierService?: InputMaybe<Scalars['String']>;
  currency?: InputMaybe<Scalars['String']>;
  eligibleForFreeShipping?: InputMaybe<Scalars['Boolean']>;
  flatRate?: InputMaybe<Scalars['Float']>;
  freeShippingMinimumThreshold?: InputMaybe<Scalars['Float']>;
  handlingFee?: InputMaybe<Scalars['Float']>;
  id?: InputMaybe<Scalars['String']>;
  measurementUnit?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  shippingMethod?: InputMaybe<ShippingMethodType>;
  shippingZoneId?: InputMaybe<Scalars['String']>;
};

export type ShippingPickup = {
  __typename?: 'ShippingPickup';
  createdAt: Scalars['DateTime'];
  currency: Scalars['String'];
  handlingFee?: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  payAtShop: Scalars['Boolean'];
  pickupRate: Scalars['Float'];
  sellerShop: SellerShop;
  sellerShopId: Scalars['String'];
  shopAddress?: Maybe<ShopAddress>;
  shopAddressId?: Maybe<Scalars['String']>;
  status: GeneralStatus;
  updatedAt: Scalars['DateTime'];
};

export type ShippingPickupAggregateGroupBy = {
  __typename?: 'ShippingPickupAggregateGroupBy';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  status?: Maybe<GeneralStatus>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ShippingPickupConnection = {
  __typename?: 'ShippingPickupConnection';
  /** Array of edges. */
  edges: Array<ShippingPickupEdge>;
  /** Paging information */
  pageInfo: PageInfo;
};

export type ShippingPickupCountAggregate = {
  __typename?: 'ShippingPickupCountAggregate';
  createdAt?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
};

export type ShippingPickupCreateInput = {
  currency?: InputMaybe<Scalars['String']>;
  handlingFee?: InputMaybe<Scalars['Float']>;
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  payAtShop: Scalars['Boolean'];
  pickupRate?: InputMaybe<Scalars['Float']>;
  sellerShopId?: InputMaybe<Scalars['String']>;
  shopAddressId?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<GeneralStatus>;
};

export type ShippingPickupDeleteFilter = {
  and?: InputMaybe<Array<ShippingPickupDeleteFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ShippingPickupDeleteFilter>>;
  status?: InputMaybe<GeneralStatusFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ShippingPickupDeleteResponse = {
  __typename?: 'ShippingPickupDeleteResponse';
  createdAt?: Maybe<Scalars['DateTime']>;
  currency?: Maybe<Scalars['String']>;
  handlingFee?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  payAtShop?: Maybe<Scalars['Boolean']>;
  pickupRate?: Maybe<Scalars['Float']>;
  sellerShopId?: Maybe<Scalars['String']>;
  shopAddressId?: Maybe<Scalars['String']>;
  status?: Maybe<GeneralStatus>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ShippingPickupEdge = {
  __typename?: 'ShippingPickupEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the ShippingPickup */
  node: ShippingPickup;
};

export type ShippingPickupFilter = {
  and?: InputMaybe<Array<ShippingPickupFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ShippingPickupFilter>>;
  status?: InputMaybe<GeneralStatusFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ShippingPickupMaxAggregate = {
  __typename?: 'ShippingPickupMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  status?: Maybe<GeneralStatus>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ShippingPickupMinAggregate = {
  __typename?: 'ShippingPickupMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  status?: Maybe<GeneralStatus>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ShippingPickupSort = {
  direction: SortDirection;
  field: ShippingPickupSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum ShippingPickupSortFields {
  CreatedAt = 'createdAt',
  Id = 'id',
  Name = 'name',
  Status = 'status',
  UpdatedAt = 'updatedAt',
}

export type ShippingPickupUpdateInput = {
  currency?: InputMaybe<Scalars['String']>;
  handlingFee?: InputMaybe<Scalars['Float']>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  payAtShop?: InputMaybe<Scalars['Boolean']>;
  pickupRate?: InputMaybe<Scalars['Float']>;
  shopAddressId?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<GeneralStatus>;
};

export type ShippingRateChargesResponse = {
  __typename?: 'ShippingRateChargesResponse';
  amount?: Maybe<Scalars['Float']>;
  figure?: Maybe<Scalars['Float']>;
  type: Scalars['String'];
};

export type ShippingRateCreateInput = {
  city?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  latitude?: InputMaybe<Scalars['Float']>;
  longitude?: InputMaybe<Scalars['Float']>;
  postalCode?: InputMaybe<Scalars['String']>;
  shopItems: Array<AddShopItemOrderInput>;
  state?: InputMaybe<Scalars['String']>;
};

export type ShippingRateResponse = {
  __typename?: 'ShippingRateResponse';
  amount: Scalars['Float'];
  charges: Array<ShippingRateChargesResponse>;
  condition: ShippingRateType;
  currency: Scalars['String'];
  flatRate?: Maybe<Scalars['Float']>;
  handlingFee: Scalars['Float'];
  measurement: Scalars['Float'];
  measurementUnit: Scalars['String'];
};

export enum ShippingRateType {
  Distance = 'DISTANCE',
  FlatRate = 'FLAT_RATE',
  Order = 'ORDER',
  Radius = 'RADIUS',
  Weight = 'WEIGHT',
}

export type ShippingRateTypeFilterComparison = {
  eq?: InputMaybe<ShippingRateType>;
  gt?: InputMaybe<ShippingRateType>;
  gte?: InputMaybe<ShippingRateType>;
  iLike?: InputMaybe<ShippingRateType>;
  in?: InputMaybe<Array<ShippingRateType>>;
  is?: InputMaybe<Scalars['Boolean']>;
  isNot?: InputMaybe<Scalars['Boolean']>;
  like?: InputMaybe<ShippingRateType>;
  lt?: InputMaybe<ShippingRateType>;
  lte?: InputMaybe<ShippingRateType>;
  neq?: InputMaybe<ShippingRateType>;
  notILike?: InputMaybe<ShippingRateType>;
  notIn?: InputMaybe<Array<ShippingRateType>>;
  notLike?: InputMaybe<ShippingRateType>;
};

export type ShippingZone = {
  __typename?: 'ShippingZone';
  condition: ShippingRateType;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  name: Scalars['String'];
  sellerShop: SellerShop;
  sellerShopId?: Maybe<Scalars['String']>;
  shippingMethods: Array<ShippingMethod>;
  shippingZoneCoverages: Array<ShippingZoneCoverage>;
  status: GeneralStatus;
  updatedAt: Scalars['DateTime'];
};

export type ShippingZoneShippingMethodsArgs = {
  filter?: InputMaybe<ShippingMethodFilter>;
  sorting?: InputMaybe<Array<ShippingMethodSort>>;
};

export type ShippingZoneShippingZoneCoveragesArgs = {
  filter?: InputMaybe<ShippingZoneCoverageFilter>;
  sorting?: InputMaybe<Array<ShippingZoneCoverageSort>>;
};

export type ShippingZoneAggregateGroupBy = {
  __typename?: 'ShippingZoneAggregateGroupBy';
  condition?: Maybe<ShippingRateType>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  sellerShopId?: Maybe<Scalars['String']>;
  status?: Maybe<GeneralStatus>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ShippingZoneConnection = {
  __typename?: 'ShippingZoneConnection';
  /** Array of edges. */
  edges: Array<ShippingZoneEdge>;
  /** Paging information */
  pageInfo: PageInfo;
};

export type ShippingZoneCountAggregate = {
  __typename?: 'ShippingZoneCountAggregate';
  condition?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  sellerShopId?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
};

export type ShippingZoneCoverage = {
  __typename?: 'ShippingZoneCoverage';
  areas?: Maybe<Array<Area>>;
  countryCode: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  shippingZone: ShippingZone;
  shippingZoneId: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type ShippingZoneCoverageAggregateGroupBy = {
  __typename?: 'ShippingZoneCoverageAggregateGroupBy';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  shippingZoneId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ShippingZoneCoverageConnection = {
  __typename?: 'ShippingZoneCoverageConnection';
  /** Array of edges. */
  edges: Array<ShippingZoneCoverageEdge>;
  /** Paging information */
  pageInfo: PageInfo;
};

export type ShippingZoneCoverageCountAggregate = {
  __typename?: 'ShippingZoneCoverageCountAggregate';
  createdAt?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  shippingZoneId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
};

export type ShippingZoneCoverageCreateInput = {
  areas?: InputMaybe<Array<AreaInput>>;
  countryCode: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  shippingZoneId?: InputMaybe<Scalars['String']>;
};

export type ShippingZoneCoverageDeleteFilter = {
  and?: InputMaybe<Array<ShippingZoneCoverageDeleteFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<ShippingZoneCoverageDeleteFilter>>;
  shippingZoneId?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ShippingZoneCoverageDeleteResponse = {
  __typename?: 'ShippingZoneCoverageDeleteResponse';
  areas?: Maybe<Array<Area>>;
  countryCode?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  shippingZoneId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ShippingZoneCoverageEdge = {
  __typename?: 'ShippingZoneCoverageEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the ShippingZoneCoverage */
  node: ShippingZoneCoverage;
};

export type ShippingZoneCoverageFilter = {
  and?: InputMaybe<Array<ShippingZoneCoverageFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<ShippingZoneCoverageFilter>>;
  shippingZoneId?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ShippingZoneCoverageMaxAggregate = {
  __typename?: 'ShippingZoneCoverageMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  shippingZoneId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ShippingZoneCoverageMinAggregate = {
  __typename?: 'ShippingZoneCoverageMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  shippingZoneId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ShippingZoneCoverageSort = {
  direction: SortDirection;
  field: ShippingZoneCoverageSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum ShippingZoneCoverageSortFields {
  CreatedAt = 'createdAt',
  Id = 'id',
  ShippingZoneId = 'shippingZoneId',
  UpdatedAt = 'updatedAt',
}

export type ShippingZoneCoverageUpdateFilter = {
  and?: InputMaybe<Array<ShippingZoneCoverageUpdateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<ShippingZoneCoverageUpdateFilter>>;
  shippingZoneId?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ShippingZoneCoverageUpdateInput = {
  areas?: InputMaybe<Array<AreaInput>>;
  countryCode?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  shippingZoneId?: InputMaybe<Scalars['String']>;
};

export type ShippingZoneCreateInput = {
  condition: ShippingRateType;
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  shippingMethods: Array<ShippingMethodCreateInput>;
  shippingZoneCoverages: Array<ShippingZoneCoverageCreateInput>;
  status?: InputMaybe<GeneralStatus>;
};

export type ShippingZoneDeleteFilter = {
  and?: InputMaybe<Array<ShippingZoneDeleteFilter>>;
  condition?: InputMaybe<ShippingRateTypeFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ShippingZoneDeleteFilter>>;
  sellerShopId?: InputMaybe<StringFieldComparison>;
  status?: InputMaybe<GeneralStatusFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ShippingZoneDeleteResponse = {
  __typename?: 'ShippingZoneDeleteResponse';
  condition?: Maybe<ShippingRateType>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  sellerShopId?: Maybe<Scalars['String']>;
  status?: Maybe<GeneralStatus>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ShippingZoneEdge = {
  __typename?: 'ShippingZoneEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the ShippingZone */
  node: ShippingZone;
};

export type ShippingZoneFilter = {
  and?: InputMaybe<Array<ShippingZoneFilter>>;
  condition?: InputMaybe<ShippingRateTypeFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ShippingZoneFilter>>;
  sellerShopId?: InputMaybe<StringFieldComparison>;
  shippingMethods?: InputMaybe<ShippingZoneFilterShippingMethodFilter>;
  shippingZoneCoverages?: InputMaybe<ShippingZoneFilterShippingZoneCoverageFilter>;
  status?: InputMaybe<GeneralStatusFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ShippingZoneFilterShippingMethodFilter = {
  and?: InputMaybe<Array<ShippingZoneFilterShippingMethodFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ShippingZoneFilterShippingMethodFilter>>;
  sellerShopId?: InputMaybe<StringFieldComparison>;
  shippingMethod?: InputMaybe<ShippingMethodTypeFilterComparison>;
  shippingZoneId?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ShippingZoneFilterShippingZoneCoverageFilter = {
  and?: InputMaybe<Array<ShippingZoneFilterShippingZoneCoverageFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<ShippingZoneFilterShippingZoneCoverageFilter>>;
  shippingZoneId?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ShippingZoneMaxAggregate = {
  __typename?: 'ShippingZoneMaxAggregate';
  condition?: Maybe<ShippingRateType>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  sellerShopId?: Maybe<Scalars['String']>;
  status?: Maybe<GeneralStatus>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ShippingZoneMinAggregate = {
  __typename?: 'ShippingZoneMinAggregate';
  condition?: Maybe<ShippingRateType>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  sellerShopId?: Maybe<Scalars['String']>;
  status?: Maybe<GeneralStatus>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ShippingZoneSort = {
  direction: SortDirection;
  field: ShippingZoneSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum ShippingZoneSortFields {
  Condition = 'condition',
  CreatedAt = 'createdAt',
  Id = 'id',
  Name = 'name',
  SellerShopId = 'sellerShopId',
  Status = 'status',
  UpdatedAt = 'updatedAt',
}

export type ShippingZoneStateCoverage = {
  __typename?: 'ShippingZoneStateCoverage';
  available: Array<CityPostcodes>;
  unavailable: Array<CityPostcodes>;
};

export type ShippingZoneUpdateFilter = {
  and?: InputMaybe<Array<ShippingZoneUpdateFilter>>;
  condition?: InputMaybe<ShippingRateTypeFilterComparison>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ShippingZoneUpdateFilter>>;
  sellerShopId?: InputMaybe<StringFieldComparison>;
  status?: InputMaybe<GeneralStatusFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ShippingZoneUpdateInput = {
  condition?: InputMaybe<ShippingRateType>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  shippingMethods?: InputMaybe<Array<ShippingMethodCreateInput>>;
  shippingZoneCoverages?: InputMaybe<Array<ShippingZoneCoverageCreateInput>>;
  status?: InputMaybe<GeneralStatus>;
};

export type ShopAddress = {
  __typename?: 'ShopAddress';
  addressOne: Scalars['String'];
  addressTwo?: Maybe<Scalars['String']>;
  city: Scalars['String'];
  country: Scalars['String'];
  countryCode: Scalars['String'];
  createdAt: Scalars['DateTime'];
  customFields?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  isPrimary: Scalars['Boolean'];
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  postalCode: Scalars['String'];
  sellerShop: SellerShop;
  sellerShopId: Scalars['String'];
  shippingPickup: ShippingPickup;
  state: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type ShopAddressAggregateGroupBy = {
  __typename?: 'ShopAddressAggregateGroupBy';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  isPrimary?: Maybe<Scalars['Boolean']>;
  sellerShopId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ShopAddressConnection = {
  __typename?: 'ShopAddressConnection';
  /** Array of edges. */
  edges: Array<ShopAddressEdge>;
  /** Paging information */
  pageInfo: PageInfo;
};

export type ShopAddressCountAggregate = {
  __typename?: 'ShopAddressCountAggregate';
  createdAt?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  isPrimary?: Maybe<Scalars['Int']>;
  sellerShopId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
};

export type ShopAddressCreateInput = {
  addressOne: Scalars['String'];
  addressTwo?: InputMaybe<Scalars['String']>;
  city: Scalars['String'];
  country: Scalars['String'];
  countryCode?: InputMaybe<Scalars['String']>;
  customFields?: InputMaybe<Scalars['JSON']>;
  id?: InputMaybe<Scalars['String']>;
  isPrimary?: InputMaybe<Scalars['Boolean']>;
  latitude?: InputMaybe<Scalars['Float']>;
  longitude?: InputMaybe<Scalars['Float']>;
  postalCode: Scalars['String'];
  sellerShopId?: InputMaybe<Scalars['String']>;
  state: Scalars['String'];
};

export type ShopAddressEdge = {
  __typename?: 'ShopAddressEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the ShopAddress */
  node: ShopAddress;
};

export type ShopAddressFilter = {
  and?: InputMaybe<Array<ShopAddressFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  isPrimary?: InputMaybe<BooleanFieldComparison>;
  or?: InputMaybe<Array<ShopAddressFilter>>;
  sellerShopId?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ShopAddressMaxAggregate = {
  __typename?: 'ShopAddressMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  sellerShopId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ShopAddressMinAggregate = {
  __typename?: 'ShopAddressMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  sellerShopId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ShopAddressSort = {
  direction: SortDirection;
  field: ShopAddressSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum ShopAddressSortFields {
  CreatedAt = 'createdAt',
  Id = 'id',
  IsPrimary = 'isPrimary',
  SellerShopId = 'sellerShopId',
  UpdatedAt = 'updatedAt',
}

export type ShopAddressUpdateInput = {
  addressOne?: InputMaybe<Scalars['String']>;
  addressTwo?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  countryCode?: InputMaybe<Scalars['String']>;
  customFields?: InputMaybe<Scalars['JSON']>;
  id?: InputMaybe<Scalars['String']>;
  isPrimary?: InputMaybe<Scalars['Boolean']>;
  latitude?: InputMaybe<Scalars['Float']>;
  longitude?: InputMaybe<Scalars['Float']>;
  postalCode?: InputMaybe<Scalars['String']>;
  sellerShopId?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Scalars['String']>;
};

export type ShopCollection = {
  __typename?: 'ShopCollection';
  collection?: Maybe<Collection>;
  collectionId?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  name: Scalars['String'];
  order?: Maybe<Scalars['Float']>;
  sellerShop: SellerShop;
  sellerShopId: Scalars['String'];
  shopCollectionProducts?: Maybe<Array<ShopCollectionProduct>>;
  status: GeneralStatus;
  totalProducts: Scalars['Float'];
  updatedAt: Scalars['DateTime'];
};

export type ShopCollectionShopCollectionProductsArgs = {
  filter?: InputMaybe<ShopCollectionProductFilter>;
  sorting?: InputMaybe<Array<ShopCollectionProductSort>>;
};

export type ShopCollectionAggregateGroupBy = {
  __typename?: 'ShopCollectionAggregateGroupBy';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Float']>;
  sellerShopId?: Maybe<Scalars['String']>;
  status?: Maybe<GeneralStatus>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ShopCollectionAvgAggregate = {
  __typename?: 'ShopCollectionAvgAggregate';
  order?: Maybe<Scalars['Float']>;
};

export type ShopCollectionConnection = {
  __typename?: 'ShopCollectionConnection';
  /** Array of edges. */
  edges: Array<ShopCollectionEdge>;
  /** Paging information */
  pageInfo: PageInfo;
};

export type ShopCollectionCountAggregate = {
  __typename?: 'ShopCollectionCountAggregate';
  createdAt?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  order?: Maybe<Scalars['Int']>;
  sellerShopId?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
};

export type ShopCollectionCreateInput = {
  collectionId?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  sellerShopId?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<GeneralStatus>;
};

export type ShopCollectionEdge = {
  __typename?: 'ShopCollectionEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the ShopCollection */
  node: ShopCollection;
};

export type ShopCollectionFilter = {
  and?: InputMaybe<Array<ShopCollectionFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ShopCollectionFilter>>;
  order?: InputMaybe<NumberFieldComparison>;
  sellerShopId?: InputMaybe<StringFieldComparison>;
  status?: InputMaybe<GeneralStatusFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ShopCollectionMaxAggregate = {
  __typename?: 'ShopCollectionMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Float']>;
  sellerShopId?: Maybe<Scalars['String']>;
  status?: Maybe<GeneralStatus>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ShopCollectionMinAggregate = {
  __typename?: 'ShopCollectionMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Float']>;
  sellerShopId?: Maybe<Scalars['String']>;
  status?: Maybe<GeneralStatus>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ShopCollectionProduct = {
  __typename?: 'ShopCollectionProduct';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  order?: Maybe<Scalars['Float']>;
  product?: Maybe<Product>;
  productId: Scalars['String'];
  shopCollection?: Maybe<ShopCollection>;
  shopCollectionId: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type ShopCollectionProductAggregateGroupBy = {
  __typename?: 'ShopCollectionProductAggregateGroupBy';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  order?: Maybe<Scalars['Float']>;
  productId?: Maybe<Scalars['String']>;
  shopCollectionId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ShopCollectionProductAvgAggregate = {
  __typename?: 'ShopCollectionProductAvgAggregate';
  order?: Maybe<Scalars['Float']>;
};

export type ShopCollectionProductCountAggregate = {
  __typename?: 'ShopCollectionProductCountAggregate';
  createdAt?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  order?: Maybe<Scalars['Int']>;
  productId?: Maybe<Scalars['Int']>;
  shopCollectionId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
};

export type ShopCollectionProductEdge = {
  __typename?: 'ShopCollectionProductEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the ShopCollectionProduct */
  node: ShopCollectionProduct;
};

export type ShopCollectionProductFilter = {
  and?: InputMaybe<Array<ShopCollectionProductFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<ShopCollectionProductFilter>>;
  order?: InputMaybe<NumberFieldComparison>;
  productId?: InputMaybe<StringFieldComparison>;
  shopCollectionId?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ShopCollectionProductMaxAggregate = {
  __typename?: 'ShopCollectionProductMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  order?: Maybe<Scalars['Float']>;
  productId?: Maybe<Scalars['String']>;
  shopCollectionId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ShopCollectionProductMinAggregate = {
  __typename?: 'ShopCollectionProductMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  order?: Maybe<Scalars['Float']>;
  productId?: Maybe<Scalars['String']>;
  shopCollectionId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ShopCollectionProductSort = {
  direction: SortDirection;
  field: ShopCollectionProductSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum ShopCollectionProductSortFields {
  CreatedAt = 'createdAt',
  Id = 'id',
  Order = 'order',
  ProductId = 'productId',
  ShopCollectionId = 'shopCollectionId',
  UpdatedAt = 'updatedAt',
}

export type ShopCollectionProductSumAggregate = {
  __typename?: 'ShopCollectionProductSumAggregate';
  order?: Maybe<Scalars['Float']>;
};

export type ShopCollectionSort = {
  direction: SortDirection;
  field: ShopCollectionSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum ShopCollectionSortFields {
  CreatedAt = 'createdAt',
  Id = 'id',
  Name = 'name',
  Order = 'order',
  SellerShopId = 'sellerShopId',
  Status = 'status',
  UpdatedAt = 'updatedAt',
}

export type ShopCollectionSumAggregate = {
  __typename?: 'ShopCollectionSumAggregate';
  order?: Maybe<Scalars['Float']>;
};

export type ShopCollectionUpdateInput = {
  collectionId?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<GeneralStatus>;
};

export enum ShopProfileType {
  Food = 'FOOD',
  General = 'GENERAL',
  Grocery = 'GROCERY',
}

export type ShopSettings = {
  __typename?: 'ShopSettings';
  announcementMessage?: Maybe<Scalars['String']>;
  announcementStatus?: Maybe<GeneralStatus>;
  checkoutNotes?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  deliveryEstimation?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  notes?: Maybe<Scalars['String']>;
  sellerShop: SellerShop;
  sellerShopId: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type ShopSettingsAggregateGroupBy = {
  __typename?: 'ShopSettingsAggregateGroupBy';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  sellerShopId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ShopSettingsCountAggregate = {
  __typename?: 'ShopSettingsCountAggregate';
  createdAt?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  sellerShopId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
};

export type ShopSettingsCreateInput = {
  announcementMessage?: InputMaybe<Scalars['String']>;
  announcementStatus?: InputMaybe<GeneralStatus>;
  checkoutNotes?: InputMaybe<Scalars['String']>;
  deliveryEstimation?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  notes?: InputMaybe<Scalars['String']>;
  sellerShopId?: InputMaybe<Scalars['String']>;
};

export type ShopSettingsEdge = {
  __typename?: 'ShopSettingsEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the ShopSettings */
  node: ShopSettings;
};

export type ShopSettingsMaxAggregate = {
  __typename?: 'ShopSettingsMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  sellerShopId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ShopSettingsMinAggregate = {
  __typename?: 'ShopSettingsMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  sellerShopId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ShopeeJob = {
  __typename?: 'ShopeeJob';
  createdAt: Scalars['DateTime'];
  error?: Maybe<Scalars['String']>;
  file?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  invoiceNumber: Scalars['String'];
  language: LanguageType;
  meta?: Maybe<ShopeeJobMeta>;
  progress?: Maybe<Scalars['Float']>;
  reference?: Maybe<ShopeeJob>;
  referenceId?: Maybe<Scalars['String']>;
  sellerShop: SellerShop;
  sellerShopId: Scalars['String'];
  shopeeJobLinks?: Maybe<Array<ShopeeJobLink>>;
  shopeeOrders?: Maybe<Array<ShopeeOrder>>;
  status: JobStatus;
  storeName?: Maybe<Scalars['String']>;
  type?: Maybe<ShopeeJobType>;
  updatedAt: Scalars['DateTime'];
};

export type ShopeeJobShopeeJobLinksArgs = {
  filter?: InputMaybe<ShopeeJobLinkFilter>;
  sorting?: InputMaybe<Array<ShopeeJobLinkSort>>;
};

export type ShopeeJobShopeeOrdersArgs = {
  filter?: InputMaybe<ShopeeOrderFilter>;
  sorting?: InputMaybe<Array<ShopeeOrderSort>>;
};

export type ShopeeJobAggregateGroupBy = {
  __typename?: 'ShopeeJobAggregateGroupBy';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  sellerShopId?: Maybe<Scalars['String']>;
  storeName?: Maybe<Scalars['String']>;
  type?: Maybe<ShopeeJobType>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ShopeeJobConnection = {
  __typename?: 'ShopeeJobConnection';
  /** Array of edges. */
  edges: Array<ShopeeJobEdge>;
  /** Paging information */
  pageInfo: PageInfo;
};

export type ShopeeJobCountAggregate = {
  __typename?: 'ShopeeJobCountAggregate';
  createdAt?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  sellerShopId?: Maybe<Scalars['Int']>;
  storeName?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
};

export type ShopeeJobCreateInput = {
  file?: InputMaybe<Scalars['String']>;
  invoiceNumber?: InputMaybe<Scalars['String']>;
  language?: InputMaybe<LanguageType>;
  meta?: InputMaybe<ShopeeJobMetaInput>;
  referenceId?: InputMaybe<Scalars['String']>;
  sellerShopId?: InputMaybe<Scalars['String']>;
  storeName?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};

export type ShopeeJobEdge = {
  __typename?: 'ShopeeJobEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the ShopeeJob */
  node: ShopeeJob;
};

export type ShopeeJobFilter = {
  and?: InputMaybe<Array<ShopeeJobFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<ShopeeJobFilter>>;
  sellerShopId?: InputMaybe<StringFieldComparison>;
  shopeeOrders?: InputMaybe<ShopeeJobFilterShopeeOrderFilter>;
  storeName?: InputMaybe<StringFieldComparison>;
  type?: InputMaybe<ShopeeJobTypeFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ShopeeJobFilterShopeeOrderFilter = {
  and?: InputMaybe<Array<ShopeeJobFilterShopeeOrderFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<ShopeeJobFilterShopeeOrderFilter>>;
  orderId?: InputMaybe<StringFieldComparison>;
  shopeeJobId?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ShopeeJobLink = {
  __typename?: 'ShopeeJobLink';
  createdAt: Scalars['DateTime'];
  from?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  meta?: Maybe<ShopeeJobLinkMeta>;
  shareable: Scalars['Boolean'];
  shopeeJob: ShopeeJob;
  shopeeJobId: Scalars['String'];
  to?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  url?: Maybe<Scalars['String']>;
};

export type ShopeeJobLinkAggregateGroupBy = {
  __typename?: 'ShopeeJobLinkAggregateGroupBy';
  createdAt?: Maybe<Scalars['DateTime']>;
  from?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  shareable?: Maybe<Scalars['Boolean']>;
  shopeeJobId?: Maybe<Scalars['String']>;
  to?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ShopeeJobLinkConnection = {
  __typename?: 'ShopeeJobLinkConnection';
  /** Array of edges. */
  edges: Array<ShopeeJobLinkEdge>;
  /** Paging information */
  pageInfo: PageInfo;
};

export type ShopeeJobLinkCountAggregate = {
  __typename?: 'ShopeeJobLinkCountAggregate';
  createdAt?: Maybe<Scalars['Int']>;
  from?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  shareable?: Maybe<Scalars['Int']>;
  shopeeJobId?: Maybe<Scalars['Int']>;
  to?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
};

export type ShopeeJobLinkEdge = {
  __typename?: 'ShopeeJobLinkEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the ShopeeJobLink */
  node: ShopeeJobLink;
};

export type ShopeeJobLinkFilter = {
  and?: InputMaybe<Array<ShopeeJobLinkFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  from?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<ShopeeJobLinkFilter>>;
  shareable?: InputMaybe<BooleanFieldComparison>;
  shopeeJobId?: InputMaybe<StringFieldComparison>;
  to?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ShopeeJobLinkMaxAggregate = {
  __typename?: 'ShopeeJobLinkMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  from?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  shopeeJobId?: Maybe<Scalars['String']>;
  to?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ShopeeJobLinkMeta = {
  __typename?: 'ShopeeJobLinkMeta';
  shippingOption?: Maybe<Scalars['String']>;
  totalInvoice?: Maybe<Scalars['Float']>;
};

export type ShopeeJobLinkMinAggregate = {
  __typename?: 'ShopeeJobLinkMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  from?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  shopeeJobId?: Maybe<Scalars['String']>;
  to?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ShopeeJobLinkSort = {
  direction: SortDirection;
  field: ShopeeJobLinkSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum ShopeeJobLinkSortFields {
  CreatedAt = 'createdAt',
  From = 'from',
  Id = 'id',
  Shareable = 'shareable',
  ShopeeJobId = 'shopeeJobId',
  To = 'to',
  UpdatedAt = 'updatedAt',
}

export type ShopeeJobMaxAggregate = {
  __typename?: 'ShopeeJobMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  sellerShopId?: Maybe<Scalars['String']>;
  storeName?: Maybe<Scalars['String']>;
  type?: Maybe<ShopeeJobType>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ShopeeJobMeta = {
  __typename?: 'ShopeeJobMeta';
  cancelled?: Maybe<Scalars['Float']>;
  completed?: Maybe<Scalars['Float']>;
  duplicateIds?: Maybe<Array<Scalars['String']>>;
  processIds?: Maybe<Array<Scalars['String']>>;
  shipping?: Maybe<Scalars['Float']>;
  toShip?: Maybe<Scalars['Float']>;
  totalDuplicateOrders?: Maybe<Scalars['Float']>;
  totalOrders?: Maybe<Scalars['Float']>;
  totalProcessOrders?: Maybe<Scalars['Float']>;
};

export type ShopeeJobMetaInput = {
  cancelled?: InputMaybe<Scalars['Float']>;
  completed?: InputMaybe<Scalars['Float']>;
  duplicateIds?: InputMaybe<Array<Scalars['String']>>;
  processIds?: InputMaybe<Array<Scalars['String']>>;
  shipping?: InputMaybe<Scalars['Float']>;
  toShip?: InputMaybe<Scalars['Float']>;
  totalDuplicateOrders?: InputMaybe<Scalars['Float']>;
  totalOrders?: InputMaybe<Scalars['Float']>;
  totalProcessOrders?: InputMaybe<Scalars['Float']>;
};

export type ShopeeJobMinAggregate = {
  __typename?: 'ShopeeJobMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  sellerShopId?: Maybe<Scalars['String']>;
  storeName?: Maybe<Scalars['String']>;
  type?: Maybe<ShopeeJobType>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ShopeeJobSort = {
  direction: SortDirection;
  field: ShopeeJobSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum ShopeeJobSortFields {
  CreatedAt = 'createdAt',
  Id = 'id',
  SellerShopId = 'sellerShopId',
  StoreName = 'storeName',
  Type = 'type',
  UpdatedAt = 'updatedAt',
}

export type ShopeeJobSubscriptionFilter = {
  and?: InputMaybe<Array<ShopeeJobSubscriptionFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<ShopeeJobSubscriptionFilter>>;
  sellerShopId?: InputMaybe<StringFieldComparison>;
  storeName?: InputMaybe<StringFieldComparison>;
  type?: InputMaybe<ShopeeJobTypeFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export enum ShopeeJobType {
  GenerateInvoices = 'GENERATE_INVOICES',
  ImportOrders = 'IMPORT_ORDERS',
}

export type ShopeeJobTypeFilterComparison = {
  eq?: InputMaybe<ShopeeJobType>;
  gt?: InputMaybe<ShopeeJobType>;
  gte?: InputMaybe<ShopeeJobType>;
  iLike?: InputMaybe<ShopeeJobType>;
  in?: InputMaybe<Array<ShopeeJobType>>;
  is?: InputMaybe<Scalars['Boolean']>;
  isNot?: InputMaybe<Scalars['Boolean']>;
  like?: InputMaybe<ShopeeJobType>;
  lt?: InputMaybe<ShopeeJobType>;
  lte?: InputMaybe<ShopeeJobType>;
  neq?: InputMaybe<ShopeeJobType>;
  notILike?: InputMaybe<ShopeeJobType>;
  notIn?: InputMaybe<Array<ShopeeJobType>>;
  notLike?: InputMaybe<ShopeeJobType>;
};

export type ShopeeJobUpdateFilter = {
  and?: InputMaybe<Array<ShopeeJobUpdateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<ShopeeJobUpdateFilter>>;
  sellerShopId?: InputMaybe<StringFieldComparison>;
  storeName?: InputMaybe<StringFieldComparison>;
  type?: InputMaybe<ShopeeJobTypeFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ShopeeJobUpdateInput = {
  file?: InputMaybe<Scalars['String']>;
  language?: InputMaybe<LanguageType>;
  meta?: InputMaybe<ShopeeJobMetaInput>;
  progress?: InputMaybe<Scalars['Float']>;
  referenceId?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<JobStatus>;
  storeName?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
};

export type ShopeeOrder = {
  __typename?: 'ShopeeOrder';
  bundleDealIndicator?: Maybe<Scalars['String']>;
  buyerPaidShippingFee?: Maybe<Scalars['String']>;
  buyerUsername?: Maybe<Scalars['String']>;
  commissionFee?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  deliveryAddress?: Maybe<Scalars['String']>;
  estimatedShippingFee?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  noOfProductInOrder?: Maybe<Scalars['String']>;
  orderCompleteTime?: Maybe<Scalars['String']>;
  orderCreationDate?: Maybe<Scalars['String']>;
  orderId: Scalars['String'];
  orderPaidTime?: Maybe<Scalars['String']>;
  orderStatus: Scalars['String'];
  orderTotalWeight?: Maybe<Scalars['String']>;
  receiverContact?: Maybe<Scalars['String']>;
  receiverName?: Maybe<Scalars['String']>;
  remarkFromBuyer?: Maybe<Scalars['String']>;
  sellerBundleDiscount?: Maybe<Scalars['String']>;
  sellerVoucher?: Maybe<Scalars['String']>;
  serviceFee?: Maybe<Scalars['String']>;
  shipTime?: Maybe<Scalars['String']>;
  shipmentMethod?: Maybe<Scalars['String']>;
  shippingOption?: Maybe<Scalars['String']>;
  shopeeBundleDiscount?: Maybe<Scalars['String']>;
  shopeeJob: ShopeeJob;
  shopeeJobId: Scalars['String'];
  shopeeJobLinks?: Maybe<Array<ShopeeJobLink>>;
  shopeeOrderLines: Array<ShopeeOrderLine>;
  shopeeVoucher?: Maybe<Scalars['String']>;
  totalAmount?: Maybe<Scalars['String']>;
  trackingNumber?: Maybe<Scalars['String']>;
  transactionFee?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  voucherCode?: Maybe<Scalars['String']>;
};

export type ShopeeOrderShopeeOrderLinesArgs = {
  filter?: InputMaybe<ShopeeOrderLineFilter>;
  sorting?: InputMaybe<Array<ShopeeOrderLineSort>>;
};

export type ShopeeOrderAggregateGroupBy = {
  __typename?: 'ShopeeOrderAggregateGroupBy';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  orderId?: Maybe<Scalars['String']>;
  shopeeJobId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ShopeeOrderConnection = {
  __typename?: 'ShopeeOrderConnection';
  /** Array of edges. */
  edges: Array<ShopeeOrderEdge>;
  /** Paging information */
  pageInfo: PageInfo;
};

export type ShopeeOrderCountAggregate = {
  __typename?: 'ShopeeOrderCountAggregate';
  createdAt?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  orderId?: Maybe<Scalars['Int']>;
  shopeeJobId?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
};

export type ShopeeOrderEdge = {
  __typename?: 'ShopeeOrderEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the ShopeeOrder */
  node: ShopeeOrder;
};

export type ShopeeOrderFilter = {
  and?: InputMaybe<Array<ShopeeOrderFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<ShopeeOrderFilter>>;
  orderId?: InputMaybe<StringFieldComparison>;
  shopeeJob?: InputMaybe<ShopeeOrderFilterShopeeJobFilter>;
  shopeeJobId?: InputMaybe<StringFieldComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ShopeeOrderFilterShopeeJobFilter = {
  and?: InputMaybe<Array<ShopeeOrderFilterShopeeJobFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<ShopeeOrderFilterShopeeJobFilter>>;
  sellerShopId?: InputMaybe<StringFieldComparison>;
  storeName?: InputMaybe<StringFieldComparison>;
  type?: InputMaybe<ShopeeJobTypeFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ShopeeOrderLine = {
  __typename?: 'ShopeeOrderLine';
  bundleDealIndicator?: Maybe<Scalars['String']>;
  buyerPaidShippingFee?: Maybe<Scalars['String']>;
  buyerUsername?: Maybe<Scalars['String']>;
  commissionFee?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  dealPrice?: Maybe<Scalars['String']>;
  deliveryAddress?: Maybe<Scalars['String']>;
  estimatedShippingFee?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  noOfProductInOrder?: Maybe<Scalars['String']>;
  orderCompleteTime?: Maybe<Scalars['String']>;
  orderCreationDate?: Maybe<Scalars['String']>;
  orderId: Scalars['String'];
  orderPaidTime?: Maybe<Scalars['String']>;
  orderStatus: Scalars['String'];
  orderTotalWeight?: Maybe<Scalars['String']>;
  originalPrice?: Maybe<Scalars['String']>;
  parentSkuReferenceNo?: Maybe<Scalars['String']>;
  productName?: Maybe<Scalars['String']>;
  productSubtotal?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['String']>;
  receiverContact?: Maybe<Scalars['String']>;
  receiverName?: Maybe<Scalars['String']>;
  remarkFromBuyer?: Maybe<Scalars['String']>;
  sellerAbsorbedCoinCashback?: Maybe<Scalars['String']>;
  sellerBundleDiscount?: Maybe<Scalars['String']>;
  sellerDiscount?: Maybe<Scalars['String']>;
  sellerRebate?: Maybe<Scalars['String']>;
  sellerVoucher?: Maybe<Scalars['String']>;
  serviceFee?: Maybe<Scalars['String']>;
  shipTime?: Maybe<Scalars['String']>;
  shipmentMethod?: Maybe<Scalars['String']>;
  shippingOption?: Maybe<Scalars['String']>;
  shopeeBundleDiscount?: Maybe<Scalars['String']>;
  shopeeOrder: ShopeeOrder;
  shopeeOrderId: Scalars['String'];
  shopeeRebate?: Maybe<Scalars['String']>;
  shopeeVoucher?: Maybe<Scalars['String']>;
  skuReferenceNo?: Maybe<Scalars['String']>;
  skuTotalWeight?: Maybe<Scalars['String']>;
  totalAmount?: Maybe<Scalars['String']>;
  trackingNumber?: Maybe<Scalars['String']>;
  transactionFee?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  variationName?: Maybe<Scalars['String']>;
  voucherCode?: Maybe<Scalars['String']>;
};

export type ShopeeOrderLineAggregateGroupBy = {
  __typename?: 'ShopeeOrderLineAggregateGroupBy';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ShopeeOrderLineConnection = {
  __typename?: 'ShopeeOrderLineConnection';
  /** Array of edges. */
  edges: Array<ShopeeOrderLineEdge>;
  /** Paging information */
  pageInfo: PageInfo;
};

export type ShopeeOrderLineCountAggregate = {
  __typename?: 'ShopeeOrderLineCountAggregate';
  createdAt?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
};

export type ShopeeOrderLineEdge = {
  __typename?: 'ShopeeOrderLineEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the ShopeeOrderLine */
  node: ShopeeOrderLine;
};

export type ShopeeOrderLineFilter = {
  and?: InputMaybe<Array<ShopeeOrderLineFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<ShopeeOrderLineFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ShopeeOrderLineMaxAggregate = {
  __typename?: 'ShopeeOrderLineMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ShopeeOrderLineMinAggregate = {
  __typename?: 'ShopeeOrderLineMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ShopeeOrderLineSort = {
  direction: SortDirection;
  field: ShopeeOrderLineSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum ShopeeOrderLineSortFields {
  CreatedAt = 'createdAt',
  Id = 'id',
  UpdatedAt = 'updatedAt',
}

export type ShopeeOrderLineUpdateInput = {
  productName?: InputMaybe<Scalars['String']>;
  variationName?: InputMaybe<Scalars['String']>;
};

export type ShopeeOrderMaxAggregate = {
  __typename?: 'ShopeeOrderMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  orderId?: Maybe<Scalars['String']>;
  shopeeJobId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ShopeeOrderMinAggregate = {
  __typename?: 'ShopeeOrderMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  orderId?: Maybe<Scalars['String']>;
  shopeeJobId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ShopeeOrderSort = {
  direction: SortDirection;
  field: ShopeeOrderSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum ShopeeOrderSortFields {
  CreatedAt = 'createdAt',
  Id = 'id',
  OrderId = 'orderId',
  ShopeeJobId = 'shopeeJobId',
  UpdatedAt = 'updatedAt',
}

export type ShopeeOrderUpdateInput = {
  deliveryAddress?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  receiverContact?: InputMaybe<Scalars['String']>;
  receiverName?: InputMaybe<Scalars['String']>;
  trackingNumber?: InputMaybe<Scalars['String']>;
};

export type ShopeeReporting = {
  __typename?: 'ShopeeReporting';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  name: Scalars['String'];
  options: ReportingOptions;
  period: ReportingPeriod;
  sellerShop: SellerShop;
  sellerShopId: Scalars['String'];
  shopeeReportingSnapshots?: Maybe<Array<ShopeeReportingSnapshot>>;
  status: ReportingStatus;
  type: ReportingType;
  updatedAt: Scalars['DateTime'];
};

export type ShopeeReportingShopeeReportingSnapshotsArgs = {
  filter?: InputMaybe<ShopeeReportingSnapshotFilter>;
  sorting?: InputMaybe<Array<ShopeeReportingSnapshotSort>>;
};

export type ShopeeReportingAggregateGroupBy = {
  __typename?: 'ShopeeReportingAggregateGroupBy';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  period?: Maybe<ReportingPeriod>;
  sellerShopId?: Maybe<Scalars['String']>;
  type?: Maybe<ReportingType>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ShopeeReportingConnection = {
  __typename?: 'ShopeeReportingConnection';
  /** Array of edges. */
  edges: Array<ShopeeReportingEdge>;
  /** Paging information */
  pageInfo: PageInfo;
};

export type ShopeeReportingCountAggregate = {
  __typename?: 'ShopeeReportingCountAggregate';
  createdAt?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  period?: Maybe<Scalars['Int']>;
  sellerShopId?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
};

export type ShopeeReportingCreateInput = {
  currency?: InputMaybe<Scalars['String']>;
  fromDate?: InputMaybe<Scalars['DateTime']>;
  period: ReportingPeriod;
  sellerShopId?: InputMaybe<Scalars['String']>;
  toDate?: InputMaybe<Scalars['DateTime']>;
  type: ReportingType;
};

export type ShopeeReportingEdge = {
  __typename?: 'ShopeeReportingEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the ShopeeReporting */
  node: ShopeeReporting;
};

export type ShopeeReportingFilter = {
  and?: InputMaybe<Array<ShopeeReportingFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<ShopeeReportingFilter>>;
  period?: InputMaybe<ReportingPeriodFilterComparison>;
  sellerShopId?: InputMaybe<StringFieldComparison>;
  type?: InputMaybe<ReportingTypeFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ShopeeReportingMaxAggregate = {
  __typename?: 'ShopeeReportingMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  period?: Maybe<ReportingPeriod>;
  sellerShopId?: Maybe<Scalars['String']>;
  type?: Maybe<ReportingType>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ShopeeReportingMinAggregate = {
  __typename?: 'ShopeeReportingMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  period?: Maybe<ReportingPeriod>;
  sellerShopId?: Maybe<Scalars['String']>;
  type?: Maybe<ReportingType>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ShopeeReportingSku = {
  __typename?: 'ShopeeReportingSku';
  averageSales: Scalars['Float'];
  currency: Scalars['String'];
  quantitySold: Scalars['Float'];
  sku: Scalars['String'];
  totalSales: Scalars['Float'];
};

export type ShopeeReportingSnapshot = {
  __typename?: 'ShopeeReportingSnapshot';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  meta: ShopeeReportingSnapshotMeta;
  shopeeReportingsId: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type ShopeeReportingSnapshotAggregateGroupBy = {
  __typename?: 'ShopeeReportingSnapshotAggregateGroupBy';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ShopeeReportingSnapshotConnection = {
  __typename?: 'ShopeeReportingSnapshotConnection';
  /** Array of edges. */
  edges: Array<ShopeeReportingSnapshotEdge>;
  /** Paging information */
  pageInfo: PageInfo;
};

export type ShopeeReportingSnapshotCountAggregate = {
  __typename?: 'ShopeeReportingSnapshotCountAggregate';
  createdAt?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
};

export type ShopeeReportingSnapshotEdge = {
  __typename?: 'ShopeeReportingSnapshotEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the ShopeeReportingSnapshot */
  node: ShopeeReportingSnapshot;
};

export type ShopeeReportingSnapshotFilter = {
  and?: InputMaybe<Array<ShopeeReportingSnapshotFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<ShopeeReportingSnapshotFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ShopeeReportingSnapshotMaxAggregate = {
  __typename?: 'ShopeeReportingSnapshotMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ShopeeReportingSnapshotMeta = {
  __typename?: 'ShopeeReportingSnapshotMeta';
  currency: Scalars['String'];
  overallAverage: Scalars['Float'];
  overallTotal: Scalars['Float'];
  skus: Array<ShopeeReportingSku>;
};

export type ShopeeReportingSnapshotMinAggregate = {
  __typename?: 'ShopeeReportingSnapshotMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ShopeeReportingSnapshotSort = {
  direction: SortDirection;
  field: ShopeeReportingSnapshotSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum ShopeeReportingSnapshotSortFields {
  CreatedAt = 'createdAt',
  Id = 'id',
  UpdatedAt = 'updatedAt',
}

export type ShopeeReportingSort = {
  direction: SortDirection;
  field: ShopeeReportingSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum ShopeeReportingSortFields {
  CreatedAt = 'createdAt',
  Id = 'id',
  Period = 'period',
  SellerShopId = 'sellerShopId',
  Type = 'type',
  UpdatedAt = 'updatedAt',
}

export type ShopeeReportingSubscriptionFilter = {
  and?: InputMaybe<Array<ShopeeReportingSubscriptionFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<ShopeeReportingSubscriptionFilter>>;
  period?: InputMaybe<ReportingPeriodFilterComparison>;
  sellerShopId?: InputMaybe<StringFieldComparison>;
  type?: InputMaybe<ReportingTypeFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ShopeeReportingUpdateFilter = {
  and?: InputMaybe<Array<ShopeeReportingUpdateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<ShopeeReportingUpdateFilter>>;
  period?: InputMaybe<ReportingPeriodFilterComparison>;
  sellerShopId?: InputMaybe<StringFieldComparison>;
  type?: InputMaybe<ReportingTypeFilterComparison>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ShopeeReportingUpdateInput = {
  id?: InputMaybe<Scalars['String']>;
  options?: InputMaybe<ReportingOptionsInput>;
  period?: InputMaybe<ReportingPeriod>;
  type?: InputMaybe<ReportingType>;
};

export type ShopeeSettings = {
  __typename?: 'ShopeeSettings';
  createdAt: Scalars['DateTime'];
  enableAutoGenerationAfterImport: Scalars['Boolean'];
  enableInvoiceAutoShareable: Scalars['Boolean'];
  enablePostage: Scalars['Boolean'];
  id: Scalars['ID'];
  notes?: Maybe<Scalars['String']>;
  productNameSplitCharacters?: Maybe<Scalars['String']>;
  registrationNo: Scalars['String'];
  sellerShop: SellerShop;
  sellerShopId: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type ShopeeSettingsAggregateGroupBy = {
  __typename?: 'ShopeeSettingsAggregateGroupBy';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ShopeeSettingsConnection = {
  __typename?: 'ShopeeSettingsConnection';
  /** Array of edges. */
  edges: Array<ShopeeSettingsEdge>;
  /** Paging information */
  pageInfo: PageInfo;
};

export type ShopeeSettingsCountAggregate = {
  __typename?: 'ShopeeSettingsCountAggregate';
  createdAt?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
};

export type ShopeeSettingsCreateInput = {
  enableAutoGenerationAfterImport?: InputMaybe<Scalars['Boolean']>;
  enableInvoiceAutoShareable?: InputMaybe<Scalars['Boolean']>;
  enablePostage?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['String']>;
  notes?: InputMaybe<Scalars['String']>;
  productNameSplitCharacters?: InputMaybe<Scalars['String']>;
  registrationNo: Scalars['String'];
  sellerShopId?: InputMaybe<Scalars['String']>;
};

export type ShopeeSettingsEdge = {
  __typename?: 'ShopeeSettingsEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the ShopeeSettings */
  node: ShopeeSettings;
};

export type ShopeeSettingsFilter = {
  and?: InputMaybe<Array<ShopeeSettingsFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<ShopeeSettingsFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ShopeeSettingsMaxAggregate = {
  __typename?: 'ShopeeSettingsMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ShopeeSettingsMinAggregate = {
  __typename?: 'ShopeeSettingsMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ShopeeSettingsSort = {
  direction: SortDirection;
  field: ShopeeSettingsSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum ShopeeSettingsSortFields {
  CreatedAt = 'createdAt',
  Id = 'id',
  UpdatedAt = 'updatedAt',
}

export type ShopeeStore = {
  __typename?: 'ShopeeStore';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  name: Scalars['String'];
  sellerShop: SellerShop;
  sellerShopId: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type ShopeeStoreAggregateGroupBy = {
  __typename?: 'ShopeeStoreAggregateGroupBy';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ShopeeStoreConnection = {
  __typename?: 'ShopeeStoreConnection';
  /** Array of edges. */
  edges: Array<ShopeeStoreEdge>;
  /** Paging information */
  pageInfo: PageInfo;
};

export type ShopeeStoreCountAggregate = {
  __typename?: 'ShopeeStoreCountAggregate';
  createdAt?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
};

export type ShopeeStoreDeleteFilter = {
  and?: InputMaybe<Array<ShopeeStoreDeleteFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ShopeeStoreDeleteFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ShopeeStoreDeleteResponse = {
  __typename?: 'ShopeeStoreDeleteResponse';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  sellerShopId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ShopeeStoreEdge = {
  __typename?: 'ShopeeStoreEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the ShopeeStore */
  node: ShopeeStore;
};

export type ShopeeStoreFilter = {
  and?: InputMaybe<Array<ShopeeStoreFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<ShopeeStoreFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type ShopeeStoreMaxAggregate = {
  __typename?: 'ShopeeStoreMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ShopeeStoreMinAggregate = {
  __typename?: 'ShopeeStoreMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type ShopeeStoreSort = {
  direction: SortDirection;
  field: ShopeeStoreSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum ShopeeStoreSortFields {
  CreatedAt = 'createdAt',
  Id = 'id',
  Name = 'name',
  UpdatedAt = 'updatedAt',
}

export type SignedUrl = {
  __typename?: 'SignedUrl';
  signedUrl: Scalars['String'];
  uid?: Maybe<Scalars['String']>;
};

export enum SocialLoginStatus {
  EmailConflicts = 'EMAIL_CONFLICTS',
  ExistAndLinked = 'EXIST_AND_LINKED',
  NotExist = 'NOT_EXIST',
}

/** Sort Directions */
export enum SortDirection {
  Asc = 'ASC',
  Desc = 'DESC',
}

/** Sort Nulls Options */
export enum SortNulls {
  NullsFirst = 'NULLS_FIRST',
  NullsLast = 'NULLS_LAST',
}

export type StateCities = {
  __typename?: 'StateCities';
  countryCode: Scalars['String'];
  latitude?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  stateCode: Scalars['String'];
};

export type StrictUserSignUpInput = {
  avatar?: InputMaybe<Scalars['String']>;
  bio?: InputMaybe<Scalars['String']>;
  dateOfBirth?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  firstName: Scalars['String'];
  gender?: InputMaybe<GenderType>;
  guestUser?: InputMaybe<Scalars['Boolean']>;
  lastName: Scalars['String'];
  phoneCode?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<UserStatus>;
  userAddress?: InputMaybe<Array<UserAddressCreateInput>>;
};

export type StringFieldComparison = {
  eq?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  iLike?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  is?: InputMaybe<Scalars['Boolean']>;
  isNot?: InputMaybe<Scalars['Boolean']>;
  like?: InputMaybe<Scalars['String']>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  neq?: InputMaybe<Scalars['String']>;
  notILike?: InputMaybe<Scalars['String']>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  notLike?: InputMaybe<Scalars['String']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  createdShopeeJob: ShopeeJob;
  createdShopeeReporting: ShopeeReporting;
  updatedManyShopeeJobs: UpdateManyResponse;
  updatedManyShopeeReportings: UpdateManyResponse;
  updatedOneShopeeJob: ShopeeJob;
  updatedOneShopeeReporting: ShopeeReporting;
};

export type SubscriptionCreatedShopeeJobArgs = {
  input?: InputMaybe<CreateShopeeJobSubscriptionFilterInput>;
};

export type SubscriptionCreatedShopeeReportingArgs = {
  input?: InputMaybe<CreateShopeeReportingSubscriptionFilterInput>;
};

export type SubscriptionUpdatedOneShopeeJobArgs = {
  input?: InputMaybe<UpdateOneShopeeJobSubscriptionFilterInput>;
};

export type SubscriptionUpdatedOneShopeeReportingArgs = {
  input?: InputMaybe<UpdateOneShopeeReportingSubscriptionFilterInput>;
};

export type ThirdPartyIdentitySignInInput = {
  accessToken: Scalars['String'];
  passwordForAccountMerging?: InputMaybe<Scalars['String']>;
  provider: Scalars['String'];
};

export type Time = {
  __typename?: 'Time';
  hour: Scalars['Float'];
  minute: Scalars['Float'];
};

export type TimeInput = {
  hour: Scalars['Float'];
  minute: Scalars['Float'];
  second?: InputMaybe<Scalars['Float']>;
};

export enum TokenType {
  SecuredToken = 'SECURED_TOKEN',
  TimedOtp = 'TIMED_OTP',
}

export type UpdateBillingAddressInput = {
  addressOne?: InputMaybe<Scalars['String']>;
  addressTwo?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  countryCode?: InputMaybe<Scalars['String']>;
  customFields?: InputMaybe<Scalars['JSON']>;
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  lastName?: InputMaybe<Scalars['String']>;
  latitude?: InputMaybe<Scalars['Float']>;
  longitude?: InputMaybe<Scalars['Float']>;
  phoneCode?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  postalCode?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Scalars['String']>;
};

export type UpdateCollectionStatusInput = {
  id: Scalars['String'];
  status: GeneralStatus;
};

export type UpdateManyAdminPreferencesInput = {
  /** Filter used to find fields to update */
  filter: AdminPreferenceUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: AdminPreferenceUpdateInput;
};

export type UpdateManyAdminsInput = {
  /** Filter used to find fields to update */
  filter: AdminUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: AdminUpdateInput;
};

export type UpdateManyAnnouncementsInput = {
  /** Filter used to find fields to update */
  filter: AnnouncementUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: AnnouncementUpdateInput;
};

export type UpdateManyBannersInput = {
  /** Filter used to find fields to update */
  filter: BannerUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: BannerUpdateInput;
};

export type UpdateManyCategoryAttributesInput = {
  /** Filter used to find fields to update */
  filter: CategoryAttributeUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: CategoryAttributeUpdateInput;
};

export type UpdateManyCountriesInput = {
  /** Filter used to find fields to update */
  filter: CountryUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: CountryUpdateInput;
};

export type UpdateManyCurrenciesInput = {
  /** Filter used to find fields to update */
  filter: CurrencyUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: CurrencyUpdateInput;
};

export type UpdateManyFaqsInput = {
  /** Filter used to find fields to update */
  filter: FaqUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: FaqUpdateInput;
};

export type UpdateManyFeedbacksInput = {
  /** Filter used to find fields to update */
  filter: FeedbackUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: FeedbackUpdateInput;
};

export type UpdateManyOrderCancelsInput = {
  /** Filter used to find fields to update */
  filter: OrderCancelUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: OrderCancelUpdateInput;
};

export type UpdateManyOrderRefundsInput = {
  /** Filter used to find fields to update */
  filter: OrderRefundUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: OrderRefundUpdateInput;
};

export type UpdateManyProductAttributesInput = {
  /** Filter used to find fields to update */
  filter: ProductAttributeUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: ProductAttributeUpdateInput;
};

export type UpdateManyProductBrandsInput = {
  /** Filter used to find fields to update */
  filter: ProductBrandUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: ProductBrandUpdateInput;
};

export type UpdateManyProductCategoriesInput = {
  /** Filter used to find fields to update */
  filter: ProductCategoryUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: ProductCategoryUpdateInput;
};

export type UpdateManyProductsInput = {
  /** Filter used to find fields to update */
  filter: ProductUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: ProductUpdateInput;
};

export type UpdateManyResponse = {
  __typename?: 'UpdateManyResponse';
  /** The number of records updated. */
  updatedCount: Scalars['Int'];
};

export type UpdateManyShippingCouriersInput = {
  /** Filter used to find fields to update */
  filter: ShippingCourierUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: ShippingCourierUpdateInput;
};

export type UpdateManyShippingMethodsInput = {
  /** Filter used to find fields to update */
  filter: ShippingMethodUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: ShippingMethodUpdateInput;
};

export type UpdateManyShippingZoneCoveragesInput = {
  /** Filter used to find fields to update */
  filter: ShippingZoneCoverageUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: ShippingZoneCoverageUpdateInput;
};

export type UpdateManyShippingZonesInput = {
  /** Filter used to find fields to update */
  filter: ShippingZoneUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: ShippingZoneUpdateInput;
};

export type UpdateManyShopeeJobsInput = {
  /** Filter used to find fields to update */
  filter: ShopeeJobUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: ShopeeJobUpdateInput;
};

export type UpdateManyShopeeReportingsInput = {
  /** Filter used to find fields to update */
  filter: ShopeeReportingUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: ShopeeReportingUpdateInput;
};

export type UpdateManyUserDevicesInput = {
  /** Filter used to find fields to update */
  filter: UserDeviceUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UserDeviceUpdateInput;
};

export type UpdateManyUserPreferencesInput = {
  /** Filter used to find fields to update */
  filter: UserPreferenceUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UserPreferenceUpdateInput;
};

export type UpdateManyUsersInput = {
  /** Filter used to find fields to update */
  filter: UserUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UserUpdateInput;
};

export type UpdateOneAdminInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: AdminUpdateInput;
};

export type UpdateOneAdminPreferenceInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: AdminPreferenceUpdateInput;
};

export type UpdateOneAnnouncementInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: AnnouncementUpdateInput;
};

export type UpdateOneBannerInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: BannerUpdateInput;
};

export type UpdateOneCategoryAttributeInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: CategoryAttributeUpdateInput;
};

export type UpdateOneCountryInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: CountryUpdateInput;
};

export type UpdateOneCurrencyInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: CurrencyUpdateInput;
};

export type UpdateOneFaqInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: FaqUpdateInput;
};

export type UpdateOneFeedbackInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: FeedbackUpdateInput;
};

export type UpdateOneMiscInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: MiscUpdateInput;
};

export type UpdateOneOrderCancelInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: OrderCancelUpdateInput;
};

export type UpdateOneOrderRefundInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: OrderRefundUpdateInput;
};

export type UpdateOneProductAttributeInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: ProductAttributeUpdateInput;
};

export type UpdateOneProductBrandInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: ProductBrandUpdateInput;
};

export type UpdateOneProductCategoryInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: ProductCategoryUpdateInput;
};

export type UpdateOneProductInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: ProductUpdateInput;
};

export type UpdateOneProductVariantInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: ProductVariantUpdateInput;
};

export type UpdateOneShippingCourierInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: ShippingCourierUpdateInput;
};

export type UpdateOneShippingMethodInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: ShippingMethodUpdateInput;
};

export type UpdateOneShippingPickupInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: ShippingPickupUpdateInput;
};

export type UpdateOneShippingZoneCoverageInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: ShippingZoneCoverageUpdateInput;
};

export type UpdateOneShippingZoneInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: ShippingZoneUpdateInput;
};

export type UpdateOneShopCollectionInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: ShopCollectionUpdateInput;
};

export type UpdateOneShopeeJobInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: ShopeeJobUpdateInput;
};

export type UpdateOneShopeeJobSubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: ShopeeJobSubscriptionFilter;
};

export type UpdateOneShopeeOrderLineInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: ShopeeOrderLineUpdateInput;
};

export type UpdateOneShopeeReportingInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: ShopeeReportingUpdateInput;
};

export type UpdateOneShopeeReportingSubscriptionFilterInput = {
  /** Specify to filter the records returned. */
  filter: ShopeeReportingSubscriptionFilter;
};

export type UpdateOneUserDeviceInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: UserDeviceUpdateInput;
};

export type UpdateOneUserInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: UserUpdateInput;
};

export type UpdateOneUserPreferenceInput = {
  /** The id of the record to update */
  id: Scalars['ID'];
  /** The update to apply. */
  update: UserPreferenceUpdateInput;
};

export type UpdateOrderStatusInput = {
  id: Scalars['String'];
  status: OrderStatus;
};

export type UpdateProductVariantStatusesResponse = {
  __typename?: 'UpdateProductVariantStatusesResponse';
  delisted: Scalars['Float'];
  published: Scalars['Float'];
};

export type UpdateShopOperatingHoursInput = {
  id: Scalars['String'];
  openingHours: Array<OpeningHoursInput>;
};

export type UpdateTrackingNumberInput = {
  id: Scalars['String'];
  trackingNumber: Scalars['String'];
};

export type UpdateUserProfileInput = {
  avatar?: InputMaybe<Scalars['String']>;
  bio?: InputMaybe<Scalars['String']>;
  dateOfBirth?: InputMaybe<Scalars['DateTime']>;
  firstName?: InputMaybe<Scalars['String']>;
  gender?: InputMaybe<GenderType>;
  guestUser?: InputMaybe<Scalars['Boolean']>;
  id: Scalars['String'];
  lastName?: InputMaybe<Scalars['String']>;
  phoneCode?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  userAddress?: InputMaybe<UserAddressUpdateInput>;
};

export enum UploadPurpose {
  Document = 'DOCUMENT',
  Image = 'IMAGE',
  Picture = 'PICTURE',
  Testing = 'TESTING',
}

/** Specifies the upload request. */
export type UploadRequest = {
  mimeType: Scalars['String'];
  purpose: UploadPurpose;
  uid?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  avatar?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  dateOfBirth?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  firstName: Scalars['String'];
  gender?: Maybe<GenderType>;
  guestUser?: Maybe<Scalars['Boolean']>;
  hasOnboarded: Array<OnboardEvent>;
  id: Scalars['ID'];
  identity?: Maybe<Scalars['String']>;
  lastName: Scalars['String'];
  phoneCode?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  status: UserStatus;
  updatedAt: Scalars['DateTime'];
  user: User;
  userAddresses: Array<UserAddress>;
};

export type UserUserAddressesArgs = {
  filter?: InputMaybe<UserAddressFilter>;
  sorting?: InputMaybe<Array<UserAddressSort>>;
};

export type UserAddress = {
  __typename?: 'UserAddress';
  addressOne: Scalars['String'];
  addressTwo?: Maybe<Scalars['String']>;
  city: Scalars['String'];
  country: Scalars['String'];
  countryCode: Scalars['String'];
  createdAt: Scalars['DateTime'];
  customFields?: Maybe<Scalars['JSON']>;
  email: Scalars['String'];
  firstName: Scalars['String'];
  id: Scalars['ID'];
  isPrimary: Scalars['Boolean'];
  lastName?: Maybe<Scalars['String']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  phoneCode: Scalars['String'];
  phoneNumber: Scalars['String'];
  postalCode: Scalars['String'];
  state: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  user: User;
  userId: Scalars['String'];
};

export type UserAddressAggregateGroupBy = {
  __typename?: 'UserAddressAggregateGroupBy';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  isPrimary?: Maybe<Scalars['Boolean']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['String']>;
};

export type UserAddressConnection = {
  __typename?: 'UserAddressConnection';
  /** Array of edges. */
  edges: Array<UserAddressEdge>;
  /** Paging information */
  pageInfo: PageInfo;
};

export type UserAddressCountAggregate = {
  __typename?: 'UserAddressCountAggregate';
  createdAt?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  isPrimary?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

export type UserAddressCreateInput = {
  addressOne?: InputMaybe<Scalars['String']>;
  addressTwo?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  countryCode?: InputMaybe<Scalars['String']>;
  customFields?: InputMaybe<Scalars['JSON']>;
  email: Scalars['String'];
  firstName: Scalars['String'];
  isPrimary: Scalars['Boolean'];
  lastName?: InputMaybe<Scalars['String']>;
  latitude?: InputMaybe<Scalars['Float']>;
  longitude?: InputMaybe<Scalars['Float']>;
  phoneCode: Scalars['String'];
  phoneNumber: Scalars['String'];
  postalCode?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['String']>;
};

export type UserAddressEdge = {
  __typename?: 'UserAddressEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the UserAddress */
  node: UserAddress;
};

export type UserAddressFilter = {
  and?: InputMaybe<Array<UserAddressFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  isPrimary?: InputMaybe<BooleanFieldComparison>;
  or?: InputMaybe<Array<UserAddressFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  userId?: InputMaybe<StringFieldComparison>;
};

export type UserAddressMaxAggregate = {
  __typename?: 'UserAddressMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['String']>;
};

export type UserAddressMinAggregate = {
  __typename?: 'UserAddressMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['String']>;
};

export type UserAddressSort = {
  direction: SortDirection;
  field: UserAddressSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum UserAddressSortFields {
  CreatedAt = 'createdAt',
  Id = 'id',
  IsPrimary = 'isPrimary',
  UpdatedAt = 'updatedAt',
  UserId = 'userId',
}

export type UserAddressUpdateInput = {
  addressOne?: InputMaybe<Scalars['String']>;
  addressTwo?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  countryCode?: InputMaybe<Scalars['String']>;
  customFields?: InputMaybe<Scalars['JSON']>;
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  isPrimary?: InputMaybe<Scalars['Boolean']>;
  lastName?: InputMaybe<Scalars['String']>;
  latitude?: InputMaybe<Scalars['Float']>;
  longitude?: InputMaybe<Scalars['Float']>;
  phoneCode?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  postalCode?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['String']>;
};

export type UserAggregateGroupBy = {
  __typename?: 'UserAggregateGroupBy';
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserChangePasswordInput = {
  newPassword: Scalars['String'];
  oldPassword: Scalars['String'];
  /**
   *
   *         This could be the 'email' itself, 'IC Number', 'Phone Number', 'username'.
   *         The basic idea of having 'username' field is to make no assumption on the business logic.
   *         It's up to the business logic to decide what is 'username' refer to and what is 'secondaryUsername' refer to.
   *
   */
  username: Scalars['String'];
};

export type UserConnection = {
  __typename?: 'UserConnection';
  /** Array of edges. */
  edges: Array<UserEdge>;
  /** Paging information */
  pageInfo: PageInfo;
};

export type UserCountAggregate = {
  __typename?: 'UserCountAggregate';
  createdAt?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
};

export type UserDeleteFilter = {
  and?: InputMaybe<Array<UserDeleteFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  email?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<UserDeleteFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type UserDeleteResponse = {
  __typename?: 'UserDeleteResponse';
  avatar?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  dateOfBirth?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  gender?: Maybe<GenderType>;
  guestUser?: Maybe<Scalars['Boolean']>;
  hasOnboarded?: Maybe<Array<OnboardEvent>>;
  id?: Maybe<Scalars['ID']>;
  identity?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  phoneCode?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  status?: Maybe<UserStatus>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserDevice = {
  __typename?: 'UserDevice';
  createdAt: Scalars['DateTime'];
  fcmToken?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  updatedAt: Scalars['DateTime'];
  user: User;
  userId?: Maybe<Scalars['String']>;
};

export type UserDeviceAggregateGroupBy = {
  __typename?: 'UserDeviceAggregateGroupBy';
  createdAt?: Maybe<Scalars['DateTime']>;
  fcmToken?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['String']>;
};

export type UserDeviceConnection = {
  __typename?: 'UserDeviceConnection';
  /** Array of edges. */
  edges: Array<UserDeviceEdge>;
  /** Paging information */
  pageInfo: PageInfo;
};

export type UserDeviceCountAggregate = {
  __typename?: 'UserDeviceCountAggregate';
  createdAt?: Maybe<Scalars['Int']>;
  fcmToken?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

export type UserDeviceCreateInput = {
  businessId?: InputMaybe<Scalars['String']>;
  fcmToken: Scalars['String'];
  userId?: InputMaybe<Scalars['String']>;
};

export type UserDeviceEdge = {
  __typename?: 'UserDeviceEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the UserDevice */
  node: UserDevice;
};

export type UserDeviceFilter = {
  and?: InputMaybe<Array<UserDeviceFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  fcmToken?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<UserDeviceFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  userId?: InputMaybe<StringFieldComparison>;
};

export type UserDeviceMaxAggregate = {
  __typename?: 'UserDeviceMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  fcmToken?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['String']>;
};

export type UserDeviceMinAggregate = {
  __typename?: 'UserDeviceMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  fcmToken?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['String']>;
};

export type UserDeviceSort = {
  direction: SortDirection;
  field: UserDeviceSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum UserDeviceSortFields {
  CreatedAt = 'createdAt',
  FcmToken = 'fcmToken',
  Id = 'id',
  UpdatedAt = 'updatedAt',
  UserId = 'userId',
}

export type UserDeviceUpdateFilter = {
  and?: InputMaybe<Array<UserDeviceUpdateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  fcmToken?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<UserDeviceUpdateFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  userId?: InputMaybe<StringFieldComparison>;
};

export type UserDeviceUpdateInput = {
  businessId?: InputMaybe<Scalars['String']>;
  fcmToken?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  userId?: InputMaybe<Scalars['String']>;
};

export type UserEdge = {
  __typename?: 'UserEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the User */
  node: User;
};

export type UserFilter = {
  and?: InputMaybe<Array<UserFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  email?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<UserFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
  user?: InputMaybe<UserFilterUserFilter>;
};

export type UserFilterUserFilter = {
  and?: InputMaybe<Array<UserFilterUserFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  email?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<UserFilterUserFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type UserIdentity = {
  __typename?: 'UserIdentity';
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  secondaryUsername?: Maybe<Scalars['String']>;
  status: UserStatus;
  updatedAt: Scalars['DateTime'];
  userType: UserType;
  username: Scalars['String'];
};

export type UserMaxAggregate = {
  __typename?: 'UserMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserMinAggregate = {
  __typename?: 'UserMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserPreference = {
  __typename?: 'UserPreference';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  key: PreferenceKey;
  updatedAt: Scalars['DateTime'];
  user: User;
  userId: Scalars['String'];
  value: Scalars['String'];
};

export type UserPreferenceAggregateGroupBy = {
  __typename?: 'UserPreferenceAggregateGroupBy';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserPreferenceConnection = {
  __typename?: 'UserPreferenceConnection';
  /** Array of edges. */
  edges: Array<UserPreferenceEdge>;
  /** Paging information */
  pageInfo: PageInfo;
};

export type UserPreferenceCountAggregate = {
  __typename?: 'UserPreferenceCountAggregate';
  createdAt?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
};

export type UserPreferenceDeleteFilter = {
  and?: InputMaybe<Array<UserPreferenceDeleteFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<UserPreferenceDeleteFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type UserPreferenceDeleteResponse = {
  __typename?: 'UserPreferenceDeleteResponse';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  key?: Maybe<PreferenceKey>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type UserPreferenceEdge = {
  __typename?: 'UserPreferenceEdge';
  /** Cursor for this node. */
  cursor: Scalars['ConnectionCursor'];
  /** The node containing the UserPreference */
  node: UserPreference;
};

export type UserPreferenceFilter = {
  and?: InputMaybe<Array<UserPreferenceFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<UserPreferenceFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type UserPreferenceFilterInput = {
  id?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<PreferenceKey>;
  userId?: InputMaybe<Scalars['String']>;
};

export type UserPreferenceMaxAggregate = {
  __typename?: 'UserPreferenceMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserPreferenceMinAggregate = {
  __typename?: 'UserPreferenceMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['ID']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserPreferenceSort = {
  direction: SortDirection;
  field: UserPreferenceSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum UserPreferenceSortFields {
  CreatedAt = 'createdAt',
  Id = 'id',
  UpdatedAt = 'updatedAt',
}

export type UserPreferenceUpdateFilter = {
  and?: InputMaybe<Array<UserPreferenceUpdateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<UserPreferenceUpdateFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type UserPreferenceUpdateInput = {
  id: Scalars['String'];
  key?: InputMaybe<PreferenceKey>;
  userId?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

export type UserPreferenceUpdateOwnInput = {
  id: Scalars['String'];
  key: PreferenceKey;
  userId: Scalars['String'];
  value: Scalars['String'];
};

export enum UserRoleType {
  Customer = 'CUSTOMER',
  Finance = 'FINANCE',
  Owner = 'OWNER',
}

export type UserRoleTypeFilterComparison = {
  eq?: InputMaybe<UserRoleType>;
  gt?: InputMaybe<UserRoleType>;
  gte?: InputMaybe<UserRoleType>;
  iLike?: InputMaybe<UserRoleType>;
  in?: InputMaybe<Array<UserRoleType>>;
  is?: InputMaybe<Scalars['Boolean']>;
  isNot?: InputMaybe<Scalars['Boolean']>;
  like?: InputMaybe<UserRoleType>;
  lt?: InputMaybe<UserRoleType>;
  lte?: InputMaybe<UserRoleType>;
  neq?: InputMaybe<UserRoleType>;
  notILike?: InputMaybe<UserRoleType>;
  notIn?: InputMaybe<Array<UserRoleType>>;
  notLike?: InputMaybe<UserRoleType>;
};

export type UserSort = {
  direction: SortDirection;
  field: UserSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum UserSortFields {
  CreatedAt = 'createdAt',
  Email = 'email',
  Id = 'id',
  UpdatedAt = 'updatedAt',
}

export enum UserStatus {
  Blocked = 'BLOCKED',
  Pending = 'PENDING',
  Unverified = 'UNVERIFIED',
  Verified = 'VERIFIED',
}

export enum UserType {
  Admin = 'ADMIN',
  User = 'USER',
}

export type UserUpdateFilter = {
  and?: InputMaybe<Array<UserUpdateFilter>>;
  createdAt?: InputMaybe<DateFieldComparison>;
  email?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<UserUpdateFilter>>;
  updatedAt?: InputMaybe<DateFieldComparison>;
};

export type UserUpdateInput = {
  avatar?: InputMaybe<Scalars['String']>;
  bio?: InputMaybe<Scalars['String']>;
  dateOfBirth?: InputMaybe<Scalars['DateTime']>;
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  gender?: InputMaybe<GenderType>;
  guestUser?: InputMaybe<Scalars['Boolean']>;
  lastName?: InputMaybe<Scalars['String']>;
  phoneCode?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<UserStatus>;
  userAddress?: InputMaybe<Array<UserAddressCreateInput>>;
};

export type UserVerifyPasswordInput = {
  oldPassword: Scalars['String'];
  /**
   *
   *         This could be the 'email' itself, 'IC Number', 'Phone Number', 'username'.
   *         The basic idea of having 'username' field is to make no assumption on the business logic.
   *         It's up to the business logic to decide what is 'username' refer to and what is 'secondaryUsername' refer to.
   *
   */
  username: Scalars['String'];
};

export type ValidateOtpInput = {
  /** It's necessary if the token type is TIMED_OTP */
  id?: InputMaybe<Scalars['String']>;
  token: Scalars['String'];
  type: TokenType;
};

export enum WeightUnitType {
  Kilogram = 'KILOGRAM',
}

export enum ZoneType {
  City = 'CITY',
  Coordinates = 'COORDINATES',
  Postcode = 'POSTCODE',
  State = 'STATE',
}
