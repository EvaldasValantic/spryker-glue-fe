/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface AbstractProductsRestAttributes {
  sku?: string;
  averageRating?: number;
  reviewCount?: number;
  name?: string;
  description?: string;
  attributes?: any[];
  superAttributesDefinition?: any[];
  superAttributes?: any[];
  attributeMap?: any[];
  metaTitle?: string;
  metaKeywords?: string;
  metaDescription?: string;
  attributeNames?: any[];
  url?: string;
}

export interface AbstractProductsRestCollectionResponse {
  data?: AbstractProductsRestCollectionResponseData[];
  included?: AbstractProductsRestIncluded;
}

export interface AbstractProductsRestCollectionResponseData {
  type?: string;
  id?: string;
  attributes?: AbstractProductsRestAttributes;
  links?: RestLinks;
  relationships?: AbstractProductsRestRelationships;
}

export type AbstractProductsRestIncluded = (
  | RestProductPricesCollectionResponseData
  | RestProductImageSetsCollectionResponseData
  | ConcreteProductsRestResponseData
  | RestAbstractProductAvailabilityCollectionResponseData
  | RestProductLabelsResponseData
  | RestProductTaxSetsCollectionResponseData
  | RestProductOptionsResponseData
  | RestProductReviewsCollectionResponseData
  | RestCategoryNodesResponseData
)[];

export interface AbstractProductsRestRelationships {
  "abstract-product-prices"?: RestRelationshipsData;
  "abstract-product-image-sets"?: RestRelationshipsData;
  "concrete-products"?: RestRelationshipsData;
  "abstract-product-availabilities"?: RestRelationshipsData;
  "product-labels"?: RestRelationshipsData;
  "product-tax-sets"?: RestRelationshipsData;
  "product-options"?: RestRelationshipsData;
  "product-reviews"?: RestRelationshipsData;
  "category-nodes"?: RestRelationshipsData;
}

export interface AbstractProductsRestResponse {
  data?: AbstractProductsRestResponseData;
  links?: RestLinks;
  included?: AbstractProductsRestIncluded;
}

export interface AbstractProductsRestResponseData {
  type?: string;
  id?: string;
  attributes?: AbstractProductsRestAttributes;
  links?: RestLinks;
  relationships?: AbstractProductsRestRelationships;
}

export interface ConcreteProductsRestAttributes {
  sku?: string;
  isDiscontinued?: boolean;
  discontinuedNote?: string;
  averageRating?: number;
  reviewCount?: number;
  productAbstractSku?: string;
  name?: string;
  description?: string;
  attributes?: any[];
  superAttributesDefinition?: any[];
  metaTitle?: string;
  metaKeywords?: string;
  metaDescription?: string;
  attributeNames?: any[];
}

export interface ConcreteProductsRestCollectionResponse {
  data?: ConcreteProductsRestCollectionResponseData[];
}

export interface ConcreteProductsRestCollectionResponseData {
  type?: string;
  id?: string;
  attributes?: ConcreteProductsRestAttributes;
  links?: RestLinks;
}

export type ConcreteProductsRestIncluded = (
  | RestProductPricesCollectionResponseData
  | RestProductImageSetsCollectionResponseData
  | RestConcreteProductAvailabilityCollectionResponseData
  | RestProductLabelsResponseData
  | RestProductOptionsResponseData
  | RestProductReviewsCollectionResponseData
  | RestProductMeasurementUnitsResponseData
  | RestSalesUnitsCollectionResponseData
  | AbstractProductsRestCollectionResponseData
  | RestBundledProductsCollectionResponseData
)[];

export interface ConcreteProductsRestRelationships {
  "concrete-product-prices"?: RestRelationshipsData;
  "concrete-product-image-sets"?: RestRelationshipsData;
  "concrete-product-availabilities"?: RestRelationshipsData;
  "product-labels"?: RestRelationshipsData;
  "product-options"?: RestRelationshipsData;
  "product-reviews"?: RestRelationshipsData;
  "product-measurement-units"?: RestRelationshipsData;
  "sales-units"?: RestRelationshipsData;
  "abstract-products"?: RestRelationshipsData;
  "bundled-products"?: RestRelationshipsData;
}

export interface ConcreteProductsRestResponse {
  data?: ConcreteProductsRestResponseData;
  links?: RestLinks;
  included?: ConcreteProductsRestIncluded;
}

export interface ConcreteProductsRestResponseData {
  type?: string;
  id?: string;
  attributes?: ConcreteProductsRestAttributes;
  links?: RestLinks;
  relationships?: ConcreteProductsRestRelationships;
}

export type ContentProductAbstractListsAttributes = any;

export type ContentProductAbstractListsIncluded = AbstractProductsRestCollectionResponseData[];

export interface ContentProductAbstractListsRelationships {
  "abstract-products"?: RestRelationshipsData;
}

export interface ContentProductAbstractListsResponse {
  data?: ContentProductAbstractListsResponseData;
  links?: RestLinks;
  included?: ContentProductAbstractListsIncluded;
}

export interface ContentProductAbstractListsResponseData {
  type?: string;
  id?: string;
  attributes?: ContentProductAbstractListsAttributes;
  links?: RestLinks;
  relationships?: ContentProductAbstractListsRelationships;
}

export interface HealthCheckServiceResponse {
  name?: string;
  status?: boolean;
  message?: string;
}

export interface RestAbstractProductAvailabilityAttributes {
  quantity?: number;
  availability?: boolean;
}

export interface RestAbstractProductAvailabilityCollectionResponse {
  data?: RestAbstractProductAvailabilityCollectionResponseData[];
}

export interface RestAbstractProductAvailabilityCollectionResponseData {
  type?: string;
  id?: string;
  attributes?: RestAbstractProductAvailabilityAttributes;
  links?: RestLinks;
}

export interface RestAccessTokensRequest {
  data?: RestAccessTokensRequestData;
}

export interface RestAccessTokensRequestAttributes {
  username: string;
  password: string;
}

export interface RestAccessTokensRequestData {
  type?: string;
  attributes?: RestAccessTokensRequestAttributes;
}

export interface RestAddress {
  id?: string;
  salutation?: string;
  firstName?: string;
  lastName?: string;
  address1?: string;
  address2?: string;
  address3?: string;
  zipCode?: string;
  city?: string;
  country?: string;
  iso2Code?: string;
  company?: string;
  phone?: string;
  isDefaultBilling?: boolean;
  isDefaultShipping?: boolean;
  idCompanyBusinessUnitAddress?: string;
}

export interface RestAddressAttributes {
  salutation?: string;
  firstName?: string;
  lastName?: string;
  address1?: string;
  address2?: string;
  address3?: string;
  zipCode?: string;
  city?: string;
  country?: string;
  iso2Code?: string;
  company?: string;
  phone?: string;
  isDefaultShipping?: boolean;
  isDefaultBilling?: boolean;
}

export interface RestAddressCollectionResponse {
  data?: RestAddressCollectionResponseData[];
}

export interface RestAddressCollectionResponseData {
  type?: string;
  id?: string;
  attributes?: RestAddressAttributes;
  links?: RestLinks;
}

export interface RestAddressRequest {
  data?: RestAddressRequestData;
}

export interface RestAddressRequestAttributes {
  salutation: string;
  firstName: string;
  lastName: string;
  address1: string;
  address2: string;
  zipCode: string;
  city: string;
  iso2Code: string;
  isDefaultShipping?: boolean;
  isDefaultBilling?: boolean;
}

export interface RestAddressRequestData {
  type?: string;
  attributes?: RestAddressRequestAttributes;
}

export interface RestAddressResponse {
  data?: RestAddressResponseData;
  links?: RestLinks;
}

export interface RestAddressResponseData {
  type?: string;
  id?: string;
  attributes?: RestAddressAttributes;
  links?: RestLinks;
}

export interface RestAddressTransfer {
  id?: string;
  salutation: string;
  firstName: string;
  lastName: string;
  address1: string;
  address2: string;
  address3: string;
  zipCode: string;
  city: string;
  iso2Code: string;
  company: string;
  phone: string;
  isDefaultBilling?: boolean;
  isDefaultShipping?: boolean;
}

export interface RestAgentAccessTokensAttributes {
  tokenType?: string;
  expiresIn?: string;
  accessToken?: string;
  refreshToken?: string;
}

export interface RestAgentAccessTokensRequestRequest {
  data?: RestAgentAccessTokensRequestRequestData;
}

export interface RestAgentAccessTokensRequestRequestAttributes {
  username: string;
  password: string;
}

export interface RestAgentAccessTokensRequestRequestData {
  type?: string;
  attributes?: RestAgentAccessTokensRequestRequestAttributes;
}

export interface RestAgentAccessTokensResponse {
  data?: RestAgentAccessTokensResponseData;
  links?: RestLinks;
}

export interface RestAgentAccessTokensResponseData {
  type?: string;
  id?: string | null;
  attributes?: RestAgentAccessTokensAttributes;
  links?: RestLinks;
}

export interface RestAgentCustomerImpersonationAccessTokensAttributes {
  tokenType?: string;
  expiresIn?: string;
  accessToken?: string;
  refreshToken?: string;
}

export interface RestAgentCustomerImpersonationAccessTokensRequestRequest {
  data?: RestAgentCustomerImpersonationAccessTokensRequestRequestData;
}

export interface RestAgentCustomerImpersonationAccessTokensRequestRequestAttributes {
  customerReference: string;
}

export interface RestAgentCustomerImpersonationAccessTokensRequestRequestData {
  type?: string;
  attributes?: RestAgentCustomerImpersonationAccessTokensRequestRequestAttributes;
}

export interface RestAgentCustomerImpersonationAccessTokensResponse {
  data?: RestAgentCustomerImpersonationAccessTokensResponseData;
  links?: RestLinks;
}

export interface RestAgentCustomerImpersonationAccessTokensResponseData {
  type?: string;
  id?: string | null;
  attributes?: RestAgentCustomerImpersonationAccessTokensAttributes;
  links?: RestLinks;
}

export interface RestAgentCustomerSearchAttributes {
  customers?: RestAgentCustomerSearchCustomersAttributes[];
}

export interface RestAgentCustomerSearchCollectionResponse {
  data?: RestAgentCustomerSearchCollectionResponseData[];
}

export interface RestAgentCustomerSearchCollectionResponseData {
  type?: string;
  id?: string | null;
  attributes?: RestAgentCustomerSearchAttributes;
  links?: RestLinks;
}

export interface RestAgentCustomerSearchCustomersAttributes {
  customerReference?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
}

export interface RestAvailabilityNotificationsAttributes {
  localeName?: string;
  email?: string;
  sku?: string;
}

export interface RestAvailabilityNotificationsCollectionResponse {
  data?: RestAvailabilityNotificationsCollectionResponseData[];
}

export interface RestAvailabilityNotificationsCollectionResponseData {
  type?: string;
  id?: string;
  attributes?: RestAvailabilityNotificationsAttributes;
  links?: RestLinks;
}

export interface RestAvailabilityNotificationsResponse {
  data?: RestAvailabilityNotificationsResponseData;
  links?: RestLinks;
}

export interface RestAvailabilityNotificationsResponseData {
  type?: string;
  id?: string;
  attributes?: RestAvailabilityNotificationsAttributes;
  links?: RestLinks;
}

export interface RestBundledProductsAttributes {
  sku?: string;
  quantity?: number;
}

export interface RestBundledProductsCollectionResponse {
  data?: RestBundledProductsCollectionResponseData[];
  included?: RestBundledProductsIncluded;
}

export interface RestBundledProductsCollectionResponseData {
  type?: string;
  id?: string;
  attributes?: RestBundledProductsAttributes;
  links?: RestLinks;
  relationships?: RestBundledProductsRelationships;
}

export type RestBundledProductsIncluded = ConcreteProductsRestResponseData[];

export interface RestBundledProductsRelationships {
  "concrete-products"?: RestRelationshipsData;
}

export interface RestCalculatedDiscount {
  unitAmount?: number;
  sumAmount?: number;
  displayName?: string;
  description?: string;
  voucherCode?: string;
  quantity?: number;
}

export interface RestCartCodeRequestAttributes {
  code?: string;
}

export interface RestCartCodeRequestResponse {
  data?: RestCartCodeRequestResponseData;
  links?: RestLinks;
}

export interface RestCartCodeRequestResponseData {
  type?: string;
  id?: string;
  attributes?: RestCartCodeRequestAttributes;
  links?: RestLinks;
}

export interface RestCartItemCalculations {
  unitPrice?: number;
  sumPrice?: number;
  taxRate?: number;
  unitNetPrice?: number;
  sumNetPrice?: number;
  unitGrossPrice?: number;
  sumGrossPrice?: number;
  unitTaxAmountFullAggregation?: number;
  sumTaxAmountFullAggregation?: number;
  sumSubtotalAggregation?: number;
  unitSubtotalAggregation?: number;
  unitProductOptionPriceAggregation?: number;
  sumProductOptionPriceAggregation?: number;
  unitDiscountAmountAggregation?: number;
  sumDiscountAmountAggregation?: number;
  unitDiscountAmountFullAggregation?: number;
  sumDiscountAmountFullAggregation?: number;
  unitPriceToPayAggregation?: number;
  sumPriceToPayAggregation?: number;
}

export type RestCartItemsProductOptionTransfer = any;

export interface RestCartItemsRequest {
  data?: RestCartItemsRequestData;
}

export interface RestCartItemsRequestAttributes {
  sku: string;
  quantity: number;
  idPromotionalItem?: string;
  salesUnit?: RestCartItemsSalesUnitRequestAttributes;
  productOptions?: RestCartItemsProductOptionTransfer[];
}

export interface RestCartItemsRequestData {
  type?: string;
  attributes?: RestCartItemsRequestAttributes;
}

export interface RestCartItemsSalesUnitAttributes {
  id?: number;
  amount?: number;
}

export interface RestCartItemsSalesUnitRequestAttributes {
  id?: number;
  amount?: number;
}

export interface RestCartPermissionGroupsAttributes {
  name?: string;
  isDefault?: boolean;
}

export interface RestCartPermissionGroupsCollectionResponse {
  data?: RestCartPermissionGroupsCollectionResponseData[];
}

export interface RestCartPermissionGroupsCollectionResponseData {
  type?: string;
  id?: string;
  attributes?: RestCartPermissionGroupsAttributes;
  links?: RestLinks;
}

export interface RestCartPermissionGroupsResponse {
  data?: RestCartPermissionGroupsResponseData;
  links?: RestLinks;
}

export interface RestCartPermissionGroupsResponseData {
  type?: string;
  id?: string;
  attributes?: RestCartPermissionGroupsAttributes;
  links?: RestLinks;
}

export interface RestCartsAttributes {
  priceMode?: string;
  currency?: string;
  store?: string;
  discounts?: RestCartsDiscounts[];
  totals?: RestCartsTotals;
  name?: string;
  isDefault?: boolean;
  thresholds?: RestCartsThresholds[];
}

export interface RestCartsCollectionResponse {
  data?: RestCartsCollectionResponseData[];
  included?: RestCartsIncluded;
}

export interface RestCartsCollectionResponseData {
  type?: string;
  id?: string;
  attributes?: RestCartsAttributes;
  links?: RestLinks;
  relationships?: RestCartsRelationships;
}

export interface RestCartsDiscounts {
  displayName?: string;
  amount?: number;
  code?: string;
}

export type RestCartsIncluded = (
  | RestCartPermissionGroupsCollectionResponseData
  | RestSharedCartsResponseData
  | RestDiscountsResponseData
  | RestItemsResponseData
  | RestPromotionalItemsResponseData
  | ConcreteProductsRestResponseData
  | RestSalesUnitsCollectionResponseData
)[];

export interface RestCartsRelationships {
  "cart-permission-groups"?: RestRelationshipsData;
  "shared-carts"?: RestRelationshipsData;
  vouchers?: RestRelationshipsData;
  "cart-rules"?: RestRelationshipsData;
  items?: RestRelationshipsData;
  "promotional-items"?: RestRelationshipsData;
  "bundle-items"?: RestRelationshipsData;
  "concrete-products"?: RestRelationshipsData;
  "sales-units"?: RestRelationshipsData;
  "guest-cart-items"?: RestRelationshipsData;
}

export interface RestCartsRequest {
  data?: RestCartsRequestData;
}

export interface RestCartsRequestAttributes {
  priceMode: string;
  currency: string;
  store: string;
  name: string;
}

export interface RestCartsRequestData {
  type?: string;
  attributes?: RestCartsRequestAttributes;
}

export interface RestCartsResponse {
  data?: RestCartsResponseData;
  links?: RestLinks;
  included?: RestCartsIncluded;
}

export interface RestCartsResponseData {
  type?: string;
  id?: string;
  attributes?: RestCartsAttributes;
  links?: RestLinks;
  relationships?: RestCartsRelationships;
}

export interface RestCartsThresholds {
  type?: string;
  threshold?: number;
  fee?: number;
  deltaWithSubtotal?: number;
  message?: string;
}

export interface RestCartsTotals {
  expenseTotal?: number;
  discountTotal?: number;
  taxTotal?: number;
  subtotal?: number;
  grandTotal?: number;
  priceToPay?: number;
}

export interface RestCatalogSearchAbstractProducts {
  abstractSku?: string;
  images?: RestCatalogSearchProductImage[];
  price?: number;
  abstractName?: string;
  prices?: any[];
}

export interface RestCatalogSearchAttributes {
  sort?: RestCatalogSearchSort;
  pagination?: RestCatalogSearchPagination;
  abstractProducts?: RestCatalogSearchAbstractProducts[];
  valueFacets?: RestFacetSearchResult[];
  rangeFacets?: RestRangeSearchResult[];
  categoryTreeFilter?: RestCategoryNodeSearchResultAttributes[];
  spellingSuggestion?: string;
}

export interface RestCatalogSearchCollectionResponse {
  data?: RestCatalogSearchCollectionResponseData[];
  included?: RestCatalogSearchIncluded;
}

export interface RestCatalogSearchCollectionResponseData {
  type?: string;
  id?: string | null;
  attributes?: RestCatalogSearchAttributes;
  links?: RestLinks;
  relationships?: RestCatalogSearchRelationships;
}

export type RestCatalogSearchIncluded = AbstractProductsRestCollectionResponseData[];

export interface RestCatalogSearchPagination {
  numFound?: number;
  currentPage?: number;
  maxPage?: number;
  currentItemsPerPage?: number;
  config?: RestCatalogSearchPaginationConfig;
}

export interface RestCatalogSearchPaginationConfig {
  parameterName?: string;
  itemsPerPageParameterName?: string;
  defaultItemsPerPage?: number;
  validItemsPerPageOptions?: any[];
}

export interface RestCatalogSearchProductImage {
  externalUrlSmall?: string;
  externalUrlLarge?: string;
}

export interface RestCatalogSearchRelationships {
  "abstract-products"?: RestRelationshipsData;
}

export interface RestCatalogSearchSort {
  sortParamNames?: any[];
  sortParamLocalizedNames?: any[];
  currentSortParam?: string;
  currentSortOrder?: string;
}

export interface RestCatalogSearchSuggestionAbstractProducts {
  images?: RestCatalogSearchSuggestionProductImage[];
  price?: number;
  abstractName?: string;
  abstractSku?: string;
  url?: string;
}

export interface RestCatalogSearchSuggestionCategories {
  name?: string;
  url?: string;
}

export interface RestCatalogSearchSuggestionCmsPages {
  name?: string;
  url?: string;
}

export interface RestCatalogSearchSuggestionProductImage {
  externalUrlSmall?: string;
  externalUrlLarge?: string;
}

export interface RestCatalogSearchSuggestionsAttributes {
  completion?: string[];
  abstractProducts?: RestCatalogSearchSuggestionAbstractProducts[];
  categories?: any[];
  cmsPages?: any[];
  categoryCollection?: RestCatalogSearchSuggestionCategories[];
  cmsPageCollection?: RestCatalogSearchSuggestionCmsPages[];
}

export interface RestCatalogSearchSuggestionsCollectionResponse {
  data?: RestCatalogSearchSuggestionsCollectionResponseData[];
  included?: RestCatalogSearchSuggestionsIncluded;
}

export interface RestCatalogSearchSuggestionsCollectionResponseData {
  type?: string;
  id?: string | null;
  attributes?: RestCatalogSearchSuggestionsAttributes;
  links?: RestLinks;
  relationships?: RestCatalogSearchSuggestionsRelationships;
}

export type RestCatalogSearchSuggestionsIncluded = AbstractProductsRestCollectionResponseData[];

export interface RestCatalogSearchSuggestionsRelationships {
  "abstract-products"?: RestRelationshipsData;
}

export interface RestCategoryNodeSearchResultAttributes {
  nodeId?: number;
  name?: string;
  docCount?: number;
  children?: RestCategoryNodeSearchResultAttributes[];
}

export interface RestCategoryNodesAttributes {
  nodeId?: number;
  name?: string;
  metaTitle?: string;
  metaKeywords?: string;
  metaDescription?: string;
  isActive?: boolean;
  children?: RestCategoryNodesAttributes[];
  parents?: RestCategoryNodesAttributes[];
  order?: number;
  url?: string;
}

export interface RestCategoryNodesResponse {
  data?: RestCategoryNodesResponseData;
  links?: RestLinks;
}

export interface RestCategoryNodesResponseData {
  type?: string;
  id?: string;
  attributes?: RestCategoryNodesAttributes;
  links?: RestLinks;
}

export interface RestCategoryTreesAttributes {
  nodeId?: number;
  order?: number;
  name?: string;
  children?: RestCategoryTreesAttributes[];
  url?: string;
}

export interface RestCategoryTreesCollectionResponse {
  data?: RestCategoryTreesCollectionResponseData[];
}

export interface RestCategoryTreesCollectionResponseData {
  type?: string;
  id?: string | null;
  attributes?: RestCategoryTreesAttributes;
  links?: RestLinks;
}

export interface RestCheckoutDataResponseAttributes {
  addresses?: RestAddress[];
  paymentProviders?: RestPaymentProvider[];
  shipmentMethods?: RestShipmentMethod[];
  selectedShipmentMethods?: RestShipmentMethod[];
  selectedPaymentMethods?: RestPaymentMethod[];
}

export type RestCheckoutDataResponseIncluded = (
  | RestShipmentsResponseData
  | RestPaymentMethodsResponseData
  | RestCompanyBusinessUnitAddressesCollectionResponseData
  | RestAddressCollectionResponseData
)[];

export interface RestCheckoutDataResponseRelationships {
  shipments?: RestRelationshipsData;
  "payment-methods"?: RestRelationshipsData;
  "company-business-unit-addresses"?: RestRelationshipsData;
  addresses?: RestRelationshipsData;
}

export interface RestCheckoutDataResponseResponse {
  data?: RestCheckoutDataResponseResponseData;
  links?: RestLinks;
  included?: RestCheckoutDataResponseIncluded;
}

export interface RestCheckoutDataResponseResponseData {
  type?: string;
  id?: string | null;
  attributes?: RestCheckoutDataResponseAttributes;
  links?: RestLinks;
  relationships?: RestCheckoutDataResponseRelationships;
}

export interface RestCheckoutRequestRequest {
  data?: RestCheckoutRequestRequestData;
}

export interface RestCheckoutRequestRequestAttributes {
  customer?: RestCustomerTransfer;
  idCart: string;
  billingAddress?: RestAddressTransfer;
  shippingAddress?: RestAddressTransfer;
  payments?: RestPaymentTransfer[];
  shipment?: RestShipmentTransfer;
  shipments?: RestShipmentsTransfer[];
}

export interface RestCheckoutRequestRequestData {
  type?: string;
  attributes?: RestCheckoutRequestRequestAttributes;
}

export interface RestCheckoutResponseAttributes {
  orderReference?: string;
  redirectUrl?: string;
  isExternalRedirect?: boolean;
}

export type RestCheckoutResponseIncluded = RestOrdersCollectionResponseData[];

export interface RestCheckoutResponseRelationships {
  orders?: RestRelationshipsData;
}

export interface RestCheckoutResponseResponse {
  data?: RestCheckoutResponseResponseData;
  links?: RestLinks;
  included?: RestCheckoutResponseIncluded;
}

export interface RestCheckoutResponseResponseData {
  type?: string;
  id?: string | null;
  attributes?: RestCheckoutResponseAttributes;
  links?: RestLinks;
  relationships?: RestCheckoutResponseRelationships;
}

export interface RestCmsPagesAttributes {
  pageKey?: string;
  name?: string;
  validTo?: string;
  isSearchable?: boolean;
  url?: string;
}

export interface RestCmsPagesCollectionResponse {
  data?: RestCmsPagesCollectionResponseData[];
  included?: RestCmsPagesIncluded;
}

export interface RestCmsPagesCollectionResponseData {
  type?: string;
  id?: string;
  attributes?: RestCmsPagesAttributes;
  links?: RestLinks;
  relationships?: RestCmsPagesRelationships;
}

export type RestCmsPagesIncluded = (RestContentBannerResponseData | ContentProductAbstractListsResponseData)[];

export interface RestCmsPagesRelationships {
  "content-banners"?: RestRelationshipsData;
  "content-product-abstract-lists"?: RestRelationshipsData;
}

export interface RestCmsPagesResponse {
  data?: RestCmsPagesResponseData;
  links?: RestLinks;
  included?: RestCmsPagesIncluded;
}

export interface RestCmsPagesResponseData {
  type?: string;
  id?: string;
  attributes?: RestCmsPagesAttributes;
  links?: RestLinks;
  relationships?: RestCmsPagesRelationships;
}

export interface RestCompanyAttributes {
  isActive?: boolean;
  name?: string;
  status?: string;
}

export interface RestCompanyBusinessUnitAddressesAttributes {
  address1?: string;
  address2?: string;
  address3?: string;
  zipCode?: string;
  city?: string;
  phone?: string;
  iso2Code?: string;
  comment?: string;
}

export interface RestCompanyBusinessUnitAddressesCollectionResponse {
  data?: RestCompanyBusinessUnitAddressesCollectionResponseData[];
}

export interface RestCompanyBusinessUnitAddressesCollectionResponseData {
  type?: string;
  id?: string;
  attributes?: RestCompanyBusinessUnitAddressesAttributes;
  links?: RestLinks;
}

export interface RestCompanyBusinessUnitAddressesResponse {
  data?: RestCompanyBusinessUnitAddressesResponseData;
  links?: RestLinks;
}

export interface RestCompanyBusinessUnitAddressesResponseData {
  type?: string;
  id?: string;
  attributes?: RestCompanyBusinessUnitAddressesAttributes;
  links?: RestLinks;
}

export interface RestCompanyBusinessUnitAttributes {
  defaultBillingAddress?: string;
  name?: string;
  email?: string;
  phone?: string;
  externalUrl?: string;
  bic?: string;
  iban?: string;
}

export interface RestCompanyBusinessUnitCollectionResponse {
  data?: RestCompanyBusinessUnitCollectionResponseData[];
  included?: RestCompanyBusinessUnitIncluded;
}

export interface RestCompanyBusinessUnitCollectionResponseData {
  type?: string;
  id?: string;
  attributes?: RestCompanyBusinessUnitAttributes;
  links?: RestLinks;
  relationships?: RestCompanyBusinessUnitRelationships;
}

export type RestCompanyBusinessUnitIncluded = (
  | RestCompanyCollectionResponseData
  | RestCompanyBusinessUnitAddressesCollectionResponseData
)[];

export interface RestCompanyBusinessUnitRelationships {
  companies?: RestRelationshipsData;
  "company-business-unit-addresses"?: RestRelationshipsData;
}

export interface RestCompanyBusinessUnitResponse {
  data?: RestCompanyBusinessUnitResponseData;
  links?: RestLinks;
  included?: RestCompanyBusinessUnitIncluded;
}

export interface RestCompanyBusinessUnitResponseData {
  type?: string;
  id?: string;
  attributes?: RestCompanyBusinessUnitAttributes;
  links?: RestLinks;
  relationships?: RestCompanyBusinessUnitRelationships;
}

export interface RestCompanyCollectionResponse {
  data?: RestCompanyCollectionResponseData[];
}

export interface RestCompanyCollectionResponseData {
  type?: string;
  id?: string;
  attributes?: RestCompanyAttributes;
  links?: RestLinks;
}

export interface RestCompanyResponse {
  data?: RestCompanyResponseData;
  links?: RestLinks;
}

export interface RestCompanyResponseData {
  type?: string;
  id?: string;
  attributes?: RestCompanyAttributes;
  links?: RestLinks;
}

export interface RestCompanyRoleAttributes {
  name?: string;
  isDefault?: boolean;
}

export interface RestCompanyRoleCollectionResponse {
  data?: RestCompanyRoleCollectionResponseData[];
  included?: RestCompanyRoleIncluded;
}

export interface RestCompanyRoleCollectionResponseData {
  type?: string;
  id?: string;
  attributes?: RestCompanyRoleAttributes;
  links?: RestLinks;
  relationships?: RestCompanyRoleRelationships;
}

export type RestCompanyRoleIncluded = RestCompanyCollectionResponseData[];

export interface RestCompanyRoleRelationships {
  companies?: RestRelationshipsData;
}

export interface RestCompanyRoleResponse {
  data?: RestCompanyRoleResponseData;
  links?: RestLinks;
  included?: RestCompanyRoleIncluded;
}

export interface RestCompanyRoleResponseData {
  type?: string;
  id?: string;
  attributes?: RestCompanyRoleAttributes;
  links?: RestLinks;
  relationships?: RestCompanyRoleRelationships;
}

export interface RestCompanyUserAccessTokenResponseAttributes {
  tokenType?: string;
  expiresIn?: string;
  accessToken?: string;
  refreshToken?: string;
}

export interface RestCompanyUserAccessTokenResponseResponse {
  data?: RestCompanyUserAccessTokenResponseResponseData;
  links?: RestLinks;
}

export interface RestCompanyUserAccessTokenResponseResponseData {
  type?: string;
  id?: string;
  attributes?: RestCompanyUserAccessTokenResponseAttributes;
  links?: RestLinks;
}

export interface RestCompanyUserAccessTokensRequest {
  data?: RestCompanyUserAccessTokensRequestData;
}

export interface RestCompanyUserAccessTokensRequestAttributes {
  idCompanyUser: string;
}

export interface RestCompanyUserAccessTokensRequestData {
  type?: string;
  attributes?: RestCompanyUserAccessTokensRequestAttributes;
}

export interface RestCompanyUserAttributes {
  isActive?: boolean;
  isDefault?: boolean;
}

export interface RestCompanyUserCollectionResponse {
  data?: RestCompanyUserCollectionResponseData[];
  included?: RestCompanyUserIncluded;
}

export interface RestCompanyUserCollectionResponseData {
  type?: string;
  id?: string;
  attributes?: RestCompanyUserAttributes;
  links?: RestLinks;
  relationships?: RestCompanyUserRelationships;
}

export type RestCompanyUserIncluded = (
  | RestCompanyCollectionResponseData
  | RestCompanyBusinessUnitCollectionResponseData
  | RestCompanyRoleCollectionResponseData
  | RestCustomersCollectionResponseData
)[];

export interface RestCompanyUserRelationships {
  companies?: RestRelationshipsData;
  "company-business-units"?: RestRelationshipsData;
  "company-roles"?: RestRelationshipsData;
  customers?: RestRelationshipsData;
}

export interface RestCompanyUserResponse {
  data?: RestCompanyUserResponseData;
  links?: RestLinks;
  included?: RestCompanyUserIncluded;
}

export interface RestCompanyUserResponseData {
  type?: string;
  id?: string;
  attributes?: RestCompanyUserAttributes;
  links?: RestLinks;
  relationships?: RestCompanyUserRelationships;
}

export interface RestConcreteProductAvailabilityAttributes {
  isNeverOutOfStock?: boolean;
  quantity?: number;
  availability?: boolean;
}

export interface RestConcreteProductAvailabilityCollectionResponse {
  data?: RestConcreteProductAvailabilityCollectionResponseData[];
}

export interface RestConcreteProductAvailabilityCollectionResponseData {
  type?: string;
  id?: string;
  attributes?: RestConcreteProductAvailabilityAttributes;
  links?: RestLinks;
}

export interface RestConfigurableBundleImagesAttributes {
  externalUrlLarge?: string;
  externalUrlSmall?: string;
}

export interface RestConfigurableBundleTemplate {
  uuid?: string;
  name?: string;
}

export interface RestConfigurableBundleTemplateImageSetsAttributes {
  name?: string;
  images?: RestConfigurableBundleImagesAttributes[];
}

export interface RestConfigurableBundleTemplateImageSetsResponseData {
  type?: string;
  id?: string;
  attributes?: RestConfigurableBundleTemplateImageSetsAttributes;
  links?: RestLinks;
}

export interface RestConfigurableBundleTemplateSlot {
  uuid?: string;
}

export interface RestConfigurableBundleTemplateSlotsAttributes {
  name?: string;
}

export interface RestConfigurableBundleTemplateSlotsResponseData {
  type?: string;
  id?: string;
  attributes?: RestConfigurableBundleTemplateSlotsAttributes;
  links?: RestLinks;
}

export interface RestConfigurableBundleTemplatesAttributes {
  name?: string;
}

export interface RestConfigurableBundleTemplatesCollectionResponse {
  data?: RestConfigurableBundleTemplatesCollectionResponseData[];
  included?: RestConfigurableBundleTemplatesIncluded;
}

export interface RestConfigurableBundleTemplatesCollectionResponseData {
  type?: string;
  id?: string;
  attributes?: RestConfigurableBundleTemplatesAttributes;
  links?: RestLinks;
  relationships?: RestConfigurableBundleTemplatesRelationships;
}

export type RestConfigurableBundleTemplatesIncluded = (
  | RestConfigurableBundleTemplateSlotsResponseData
  | RestConfigurableBundleTemplateImageSetsResponseData
)[];

export interface RestConfigurableBundleTemplatesRelationships {
  "configurable-bundle-template-slots"?: RestRelationshipsData;
  "configurable-bundle-template-image-sets"?: RestRelationshipsData;
}

export interface RestConfigurableBundleTemplatesResponse {
  data?: RestConfigurableBundleTemplatesResponseData;
  links?: RestLinks;
  included?: RestConfigurableBundleTemplatesIncluded;
}

export interface RestConfigurableBundleTemplatesResponseData {
  type?: string;
  id?: string;
  attributes?: RestConfigurableBundleTemplatesAttributes;
  links?: RestLinks;
  relationships?: RestConfigurableBundleTemplatesRelationships;
}

export interface RestConfiguredBundle {
  template?: RestConfigurableBundleTemplate;
  quantity?: number;
  groupKey?: string;
}

export interface RestConfiguredBundleItem {
  slot?: RestConfigurableBundleTemplateSlot;
  quantityPerSlot?: number;
}

export interface RestConfiguredBundleItemsRequestAttributes {
  sku: string;
  quantity: number;
  slotUuid: string;
}

export interface RestConfiguredBundlesRequest {
  data?: RestConfiguredBundlesRequestData;
}

export interface RestConfiguredBundlesRequestAttributes {
  quantity: number;
  templateUuid: string;
  items: RestConfiguredBundleItemsRequestAttributes[];
}

export interface RestConfiguredBundlesRequestData {
  type?: string;
  attributes?: RestConfiguredBundlesRequestAttributes;
}

export interface RestContentBannerAttributes {
  title?: string;
  subtitle?: string;
  imageUrl?: string;
  clickUrl?: string;
  altText?: string;
}

export interface RestContentBannerResponse {
  data?: RestContentBannerResponseData;
  links?: RestLinks;
}

export interface RestContentBannerResponseData {
  type?: string;
  id?: string;
  attributes?: RestContentBannerAttributes;
  links?: RestLinks;
}

export interface RestCurrency {
  code?: string;
  name?: string;
  symbol?: string;
}

export interface RestCustomerAccessAttributes {
  resourceTypes?: string[];
}

export interface RestCustomerAccessCollectionResponse {
  data?: RestCustomerAccessCollectionResponseData[];
}

export interface RestCustomerAccessCollectionResponseData {
  type?: string;
  id?: string;
  attributes?: RestCustomerAccessAttributes;
  links?: RestLinks;
}

export interface RestCustomerConfirmationRequest {
  data?: RestCustomerConfirmationRequestData;
}

export interface RestCustomerConfirmationRequestAttributes {
  registrationKey: string;
}

export interface RestCustomerConfirmationRequestData {
  type?: string;
  attributes?: RestCustomerConfirmationRequestAttributes;
}

export interface RestCustomerForgottenPasswordRequest {
  data?: RestCustomerForgottenPasswordRequestData;
}

export interface RestCustomerForgottenPasswordRequestAttributes {
  email: string;
}

export interface RestCustomerForgottenPasswordRequestData {
  type?: string;
  attributes?: RestCustomerForgottenPasswordRequestAttributes;
}

export interface RestCustomerPasswordRequest {
  data?: RestCustomerPasswordRequestData;
}

export interface RestCustomerPasswordRequestAttributes {
  password: string;
  newPassword: string;
  confirmPassword: string;
}

export interface RestCustomerPasswordRequestData {
  type?: string;
  attributes?: RestCustomerPasswordRequestAttributes;
}

export interface RestCustomerRestorePasswordRequest {
  data?: RestCustomerRestorePasswordRequestData;
}

export interface RestCustomerRestorePasswordRequestAttributes {
  restorePasswordKey: string;
  password: string;
  confirmPassword: string;
}

export interface RestCustomerRestorePasswordRequestData {
  type?: string;
  attributes?: RestCustomerRestorePasswordRequestAttributes;
}

export interface RestCustomerTransfer {
  email?: string;
  salutation?: string;
  firstName?: string;
  lastName?: string;
}

export interface RestCustomersAttributes {
  firstName?: string;
  lastName?: string;
  gender?: string;
  dateOfBirth?: string;
  salutation?: string;
  createdAt?: string;
  updatedAt?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  acceptedTerms?: boolean;
}

export interface RestCustomersCollectionResponse {
  data?: RestCustomersCollectionResponseData[];
  included?: RestCustomersIncluded;
}

export interface RestCustomersCollectionResponseData {
  type?: string;
  id?: string;
  attributes?: RestCustomersAttributes;
  links?: RestLinks;
  relationships?: RestCustomersRelationships;
}

export type RestCustomersIncluded = RestAddressCollectionResponseData[];

export interface RestCustomersRelationships {
  addresses?: RestRelationshipsData;
}

export interface RestCustomersRequest {
  data?: RestCustomersRequestData;
}

export interface RestCustomersRequestAttributes {
  firstName: string;
  lastName: string;
  gender: string;
  salutation: string;
  email: string;
  password: string;
  confirmPassword: string;
  acceptedTerms: boolean;
}

export interface RestCustomersRequestData {
  type?: string;
  attributes?: RestCustomersRequestAttributes;
}

export interface RestCustomersResponse {
  data?: RestCustomersResponseData;
  links?: RestLinks;
  included?: RestCustomersIncluded;
}

export interface RestCustomersResponseData {
  type?: string;
  id?: string;
  attributes?: RestCustomersAttributes;
  links?: RestLinks;
  relationships?: RestCustomersRelationships;
}

export interface RestDiscountsAttributes {
  amount?: number;
  code?: string;
  discountType?: string;
  displayName?: string;
  isExclusive?: boolean;
  expirationDateTime?: string;
  discountPromotionAbstractSku?: string;
  discountPromotionQuantity?: number;
}

export interface RestDiscountsRequestAttributes {
  code?: string;
}

export interface RestDiscountsRequestResponse {
  data?: RestDiscountsRequestResponseData;
  links?: RestLinks;
}

export interface RestDiscountsRequestResponseData {
  type?: string;
  id?: string;
  attributes?: RestDiscountsRequestAttributes;
  links?: RestLinks;
}

export interface RestDiscountsResponseData {
  type?: string;
  id?: string;
  attributes?: RestDiscountsAttributes;
  links?: RestLinks;
}

export interface RestErrorMessage {
  code?: string;
  detail?: string;
  status?: number;
}

export interface RestFacetConfig {
  parameterName?: string;
  isMultiValued?: boolean;
}

export interface RestFacetSearchResult {
  name?: string;
  localizedName?: string;
  docCount?: number;
  values?: any[];
  activeValue?: string;
  config?: RestFacetConfig;
}

export interface RestHealthCheckResponseAttributes {
  status?: string;
  statusCode?: number;
  message?: string;
  healthCheckServiceResponses?: HealthCheckServiceResponse[];
}

export interface RestHealthCheckResponseResponse {
  data?: RestHealthCheckResponseResponseData;
  links?: RestLinks;
}

export interface RestHealthCheckResponseResponseData {
  type?: string;
  id?: string;
  attributes?: RestHealthCheckResponseAttributes;
  links?: RestLinks;
}

export interface RestImagesAttributes {
  externalUrlLarge?: string;
  externalUrlSmall?: string;
}

export interface RestItemProductOptions {
  optionGroupName?: string;
  sku?: string;
  optionName?: string;
  price?: number;
}

export interface RestItemsAttributes {
  sku?: string;
  quantity?: number;
  groupKey?: string;
  abstractSku?: string;
  amount?: number;
  calculations?: RestCartItemCalculations;
  configuredBundle?: RestConfiguredBundle;
  configuredBundleItem?: RestConfiguredBundleItem;
  salesUnit?: RestCartItemsSalesUnitAttributes;
  selectedProductOptions?: RestItemProductOptions[];
}

export interface RestItemsResponseData {
  type?: string;
  id?: string;
  attributes?: RestItemsAttributes;
  links?: RestLinks;
}

export interface RestLinks {
  self?: string;
}

export interface RestLocalizedProductManagementAttributeKeyAttributes {
  localeName?: string;
  translation?: string;
}

export interface RestNavigationAttributes {
  nodes?: RestNavigationNode[];
  name?: string;
  isActive?: boolean;
}

export type RestNavigationIncluded = RestCategoryNodesResponseData[];

export interface RestNavigationNode {
  resourceId?: number;
  nodeType?: string;
  children?: RestNavigationNode[];
  isActive?: boolean;
  title?: string;
  url?: string;
  cssClass?: string;
  validFrom?: string;
  validTo?: string;
}

export interface RestNavigationRelationships {
  "category-nodes"?: RestRelationshipsData;
}

export interface RestNavigationResponse {
  data?: RestNavigationResponseData;
  links?: RestLinks;
  included?: RestNavigationIncluded;
}

export interface RestNavigationResponseData {
  type?: string;
  id?: string;
  attributes?: RestNavigationAttributes;
  links?: RestLinks;
  relationships?: RestNavigationRelationships;
}

export interface RestOrderAddress {
  salutation?: string;
  firstName?: string;
  middleName?: string;
  lastName?: string;
  address1?: string;
  address2?: string;
  address3?: string;
  company?: string;
  city?: string;
  zipCode?: string;
  poBox?: string;
  phone?: string;
  cellPhone?: string;
  description?: string;
  comment?: string;
  email?: string;
  country?: string;
  iso2Code?: string;
}

export interface RestOrderDetailsAttributes {
  createdAt?: string;
  totals?: RestOrderTotalsAttributes;
  currencyIsoCode?: string;
  items?: RestOrderItemsAttributes[];
  expenses?: RestOrderExpensesAttributes[];
  billingAddress?: RestOrderAddress;
  shippingAddress?: RestOrderAddress;
  priceMode?: string;
  payments?: RestOrderPayment[];
  shipments?: RestOrderShipment[];
  calculatedDiscounts?: RestCalculatedDiscount[];
  bundleItems?: RestOrderItemsAttributes[];
}

export type RestOrderDetailsIncluded = RestOrderShipmentsResponseData[];

export interface RestOrderDetailsRelationships {
  "order-shipments"?: RestRelationshipsData;
}

export interface RestOrderDetailsResponse {
  data?: RestOrderDetailsResponseData;
  links?: RestLinks;
  included?: RestOrderDetailsIncluded;
}

export interface RestOrderDetailsResponseData {
  type?: string;
  id?: string;
  attributes?: RestOrderDetailsAttributes;
  links?: RestLinks;
  relationships?: RestOrderDetailsRelationships;
}

export interface RestOrderExpensesAttributes {
  type?: string;
  name?: string;
  sumPrice?: number;
  unitGrossPrice?: number;
  sumGrossPrice?: number;
  taxRate?: number;
  unitNetPrice?: number;
  sumNetPrice?: number;
  canceledAmount?: number;
  unitDiscountAmountAggregation?: number;
  sumDiscountAmountAggregation?: number;
  unitTaxAmount?: number;
  sumTaxAmount?: number;
  unitPriceToPayAggregation?: number;
  sumPriceToPayAggregation?: number;
  taxAmountAfterCancellation?: number;
  idShipment?: number;
  idSalesExpense?: number;
}

export interface RestOrderItemMetadata {
  superAttributes?: any[];
  image?: string;
}

export interface RestOrderItemProductOptions {
  optionGroupName?: string;
  sku?: string;
  optionName?: string;
  price?: number;
}

export interface RestOrderItemsAttributes {
  salesOrderConfiguredBundle?: RestSalesOrderConfiguredBundle;
  salesOrderConfiguredBundleItem?: RestSalesOrderConfiguredBundleItem;
  name?: string;
  sku?: string;
  sumPrice?: number;
  quantity?: number;
  metadata?: RestOrderItemMetadata;
  calculatedDiscounts?: RestCalculatedDiscount[];
  unitGrossPrice?: number;
  sumGrossPrice?: number;
  taxRate?: number;
  unitNetPrice?: number;
  sumNetPrice?: number;
  unitPrice?: number;
  unitTaxAmountFullAggregation?: number;
  sumTaxAmountFullAggregation?: number;
  refundableAmount?: number;
  canceledAmount?: number;
  sumSubtotalAggregation?: number;
  unitSubtotalAggregation?: number;
  unitProductOptionPriceAggregation?: number;
  sumProductOptionPriceAggregation?: number;
  unitExpensePriceAggregation?: number;
  sumExpensePriceAggregation?: number;
  unitDiscountAmountAggregation?: number;
  sumDiscountAmountAggregation?: number;
  unitDiscountAmountFullAggregation?: number;
  sumDiscountAmountFullAggregation?: number;
  unitPriceToPayAggregation?: number;
  sumPriceToPayAggregation?: number;
  taxRateAverageAggregation?: number;
  taxAmountAfterCancellation?: number;
  orderReference?: string;
  uuid?: string;
  isReturnable?: boolean;
  idShipment?: number;
  bundleItemIdentifier?: string;
  relatedBundleItemIdentifier?: string;
  amount?: number;
  salesUnit?: RestOrdersSalesUnitAttributes;
  productOptions?: RestOrderItemProductOptions[];
}

export interface RestOrderPayment {
  amount?: number;
  paymentProvider?: string;
  paymentMethod?: string;
}

export interface RestOrderPaymentsAttributes {
  paymentIdentifier?: string;
  dataPayload?: any[];
}

export interface RestOrderPaymentsRequest {
  data?: RestOrderPaymentsRequestData;
}

export interface RestOrderPaymentsRequestAttributes {
  paymentIdentifier: string;
  dataPayload: any[];
}

export interface RestOrderPaymentsRequestData {
  type?: string;
  attributes?: RestOrderPaymentsRequestAttributes;
}

export interface RestOrderPaymentsResponse {
  data?: RestOrderPaymentsResponseData;
  links?: RestLinks;
}

export interface RestOrderPaymentsResponseData {
  type?: string;
  id?: string;
  attributes?: RestOrderPaymentsAttributes;
  links?: RestLinks;
}

export interface RestOrderShipment {
  shipmentMethodName?: string;
  carrierName?: string;
  deliveryTime?: number;
  defaultGrossPrice?: number;
  defaultNetPrice?: number;
  currencyIsoCode?: string;
}

export interface RestOrderShipmentsAttributes {
  itemUuids?: string[];
  shippingAddress?: RestOrderAddress;
  methodName?: string;
  carrierName?: string;
  requestedDeliveryDate?: string;
}

export interface RestOrderShipmentsResponseData {
  type?: string;
  id?: string;
  attributes?: RestOrderShipmentsAttributes;
  links?: RestLinks;
}

export interface RestOrderTotalsAttributes {
  expenseTotal?: number;
  discountTotal?: number;
  taxTotal?: number;
  subtotal?: number;
  grandTotal?: number;
  canceledTotal?: number;
  remunerationTotal?: number;
}

export interface RestOrdersAttributes {
  createdAt?: string;
  totals?: RestOrderTotalsAttributes;
  currencyIsoCode?: string;
  priceMode?: string;
}

export interface RestOrdersCollectionResponse {
  data?: RestOrdersCollectionResponseData[];
  included?: RestOrdersIncluded;
}

export interface RestOrdersCollectionResponseData {
  type?: string;
  id?: string;
  attributes?: RestOrdersAttributes;
  links?: RestLinks;
  relationships?: RestOrdersRelationships;
}

export type RestOrdersIncluded = RestOrderShipmentsResponseData[];

export interface RestOrdersProductMeasurementUnitsAttributes {
  name?: string;
  code?: string;
}

export interface RestOrdersRelationships {
  "order-shipments"?: RestRelationshipsData;
}

export interface RestOrdersSalesUnitAttributes {
  conversion?: number;
  precision?: number;
  productMeasurementUnit?: RestOrdersProductMeasurementUnitsAttributes;
}

export interface RestPaymentMethod {
  paymentMethodName?: string;
  paymentProviderName?: string;
  requiredRequestData?: any[];
}

export interface RestPaymentMethodsAttributes {
  paymentMethodName?: string;
  paymentProviderName?: string;
  priority?: number;
  requiredRequestData?: any[];
}

export interface RestPaymentMethodsResponseData {
  type?: string;
  id?: string;
  attributes?: RestPaymentMethodsAttributes;
  links?: RestLinks;
}

export interface RestPaymentProvider {
  paymentProviderName?: string;
  paymentMethods?: RestPaymentMethod[];
}

export interface RestPaymentTransfer {
  paymentProviderName: string;
  paymentMethodName: string;
}

export interface RestProductImageSet {
  name?: string;
  images?: RestImagesAttributes[];
}

export interface RestProductImageSetsAttributes {
  imageSets?: RestProductImageSet[];
}

export interface RestProductImageSetsCollectionResponse {
  data?: RestProductImageSetsCollectionResponseData[];
}

export interface RestProductImageSetsCollectionResponseData {
  type?: string;
  id?: string;
  attributes?: RestProductImageSetsAttributes;
  links?: RestLinks;
}

export interface RestProductLabelsAttributes {
  name?: string;
  isExclusive?: boolean;
  position?: number;
  frontEndReference?: string;
}

export interface RestProductLabelsResponse {
  data?: RestProductLabelsResponseData;
  links?: RestLinks;
}

export interface RestProductLabelsResponseData {
  type?: string;
  id?: string;
  attributes?: RestProductLabelsAttributes;
  links?: RestLinks;
}

export interface RestProductManagementAttributeAttributes {
  key?: string;
  inputType?: string;
  allowInput?: boolean;
  isSuper?: boolean;
  localizedKeys?: RestLocalizedProductManagementAttributeKeyAttributes[];
  values?: RestProductManagementAttributeValueAttributes[];
}

export interface RestProductManagementAttributeCollectionResponse {
  data?: RestProductManagementAttributeCollectionResponseData[];
}

export interface RestProductManagementAttributeCollectionResponseData {
  type?: string;
  id?: string;
  attributes?: RestProductManagementAttributeAttributes;
  links?: RestLinks;
}

export interface RestProductManagementAttributeResponse {
  data?: RestProductManagementAttributeResponseData;
  links?: RestLinks;
}

export interface RestProductManagementAttributeResponseData {
  type?: string;
  id?: string;
  attributes?: RestProductManagementAttributeAttributes;
  links?: RestLinks;
}

export interface RestProductManagementAttributeValueAttributes {
  value?: string;
  localizedValues?: RestProductManagementAttributeValueTranslationAttributes[];
}

export interface RestProductManagementAttributeValueTranslationAttributes {
  localeName?: string;
  translation?: string;
}

export interface RestProductMeasurementUnitsAttributes {
  name?: string;
  defaultPrecision?: number;
}

export interface RestProductMeasurementUnitsResponse {
  data?: RestProductMeasurementUnitsResponseData;
  links?: RestLinks;
}

export interface RestProductMeasurementUnitsResponseData {
  type?: string;
  id?: string;
  attributes?: RestProductMeasurementUnitsAttributes;
  links?: RestLinks;
}

export interface RestProductOptionsAttributes {
  optionGroupName?: string;
  sku?: string;
  optionName?: string;
  price?: number;
  currencyIsoCode?: string;
}

export interface RestProductOptionsResponseData {
  type?: string;
  id?: string;
  attributes?: RestProductOptionsAttributes;
  links?: RestLinks;
}

export interface RestProductPriceAttributes {
  volumePrices?: RestProductPriceVolumesAttributes[];
  priceTypeName?: string;
  netAmount?: number;
  grossAmount?: number;
  currency?: RestCurrency;
}

export interface RestProductPriceVolumesAttributes {
  netAmount?: number;
  grossAmount?: number;
  quantity?: number;
}

export interface RestProductPricesAttributes {
  price?: number;
  prices?: RestProductPriceAttributes[];
}

export interface RestProductPricesCollectionResponse {
  data?: RestProductPricesCollectionResponseData[];
}

export interface RestProductPricesCollectionResponseData {
  type?: string;
  id?: string;
  attributes?: RestProductPricesAttributes;
  links?: RestLinks;
}

export interface RestProductReviewsAttributes {
  rating?: number;
  nickname?: string;
  summary?: string;
  description?: string;
}

export interface RestProductReviewsCollectionResponse {
  data?: RestProductReviewsCollectionResponseData[];
}

export interface RestProductReviewsCollectionResponseData {
  type?: string;
  id?: string;
  attributes?: RestProductReviewsAttributes;
  links?: RestLinks;
}

export interface RestProductReviewsRequest {
  data?: RestProductReviewsRequestData;
}

export interface RestProductReviewsRequestAttributes {
  rating: number;
  nickname: string;
  summary: string;
  description: string;
}

export interface RestProductReviewsRequestData {
  type?: string;
  attributes?: RestProductReviewsRequestAttributes;
}

export interface RestProductReviewsResponse {
  data?: RestProductReviewsResponseData;
  links?: RestLinks;
}

export interface RestProductReviewsResponseData {
  type?: string;
  id?: string;
  attributes?: RestProductReviewsAttributes;
  links?: RestLinks;
}

export interface RestProductTaxRate {
  name?: string;
  rate?: string;
  country?: string;
}

export interface RestProductTaxSetsAttributes {
  name?: string;
  restTaxRates?: RestProductTaxRate[];
}

export interface RestProductTaxSetsCollectionResponse {
  data?: RestProductTaxSetsCollectionResponseData[];
}

export interface RestProductTaxSetsCollectionResponseData {
  type?: string;
  id?: string;
  attributes?: RestProductTaxSetsAttributes;
  links?: RestLinks;
}

export interface RestPromotionalItemsAttributes {
  sku?: string;
  quantity?: number;
  skus?: string[];
}

export interface RestPromotionalItemsResponseData {
  type?: string;
  id?: string;
  attributes?: RestPromotionalItemsAttributes;
  links?: RestLinks;
}

export interface RestRangeSearchResult {
  name?: string;
  localizedName?: string;
  min?: number;
  max?: number;
  activeMin?: number;
  activeMax?: number;
  docCount?: number;
  config?: RestFacetConfig;
}

export interface RestRefreshTokensRequest {
  data?: RestRefreshTokensRequestData;
}

export interface RestRefreshTokensRequestAttributes {
  refreshToken: string;
}

export interface RestRefreshTokensRequestData {
  type?: string;
  attributes?: RestRefreshTokensRequestAttributes;
}

export interface RestRelationships {
  id?: string;
  type?: string;
}

export interface RestRelationshipsData {
  data?: RestRelationships[];
}

export interface RestReturnItemRequestAttributes {
  salesOrderItemUuid?: string;
  reason?: string;
}

export interface RestReturnItemRequestRequestAttributes {
  salesOrderItemUuid?: string;
  reason?: string;
}

export interface RestReturnReasonsAttributes {
  reason?: string;
}

export interface RestReturnReasonsCollectionResponse {
  data?: RestReturnReasonsCollectionResponseData[];
}

export interface RestReturnReasonsCollectionResponseData {
  type?: string;
  id?: string;
  attributes?: RestReturnReasonsAttributes;
  links?: RestLinks;
}

export interface RestReturnRequestAttributes {
  store?: string;
  returnItems?: RestReturnItemRequestAttributes[];
}

export interface RestReturnRequestCollectionResponse {
  data?: RestReturnRequestCollectionResponseData[];
  included?: RestReturnRequestIncluded;
}

export interface RestReturnRequestCollectionResponseData {
  type?: string;
  id?: string;
  attributes?: RestReturnRequestAttributes;
  links?: RestLinks;
  relationships?: RestReturnRequestRelationships;
}

export type RestReturnRequestIncluded = RestReturnsResponseData[];

export interface RestReturnRequestRelationships {
  "return-items"?: RestRelationshipsData;
}

export interface RestReturnRequestRequest {
  data?: RestReturnRequestRequestData;
}

export interface RestReturnRequestRequestAttributes {
  store?: string;
  returnItems?: RestReturnItemRequestRequestAttributes[];
}

export interface RestReturnRequestRequestData {
  type?: string;
  attributes?: RestReturnRequestRequestAttributes;
}

export interface RestReturnRequestResponse {
  data?: RestReturnRequestResponseData;
  links?: RestLinks;
  included?: RestReturnRequestIncluded;
}

export interface RestReturnRequestResponseData {
  type?: string;
  id?: string;
  attributes?: RestReturnRequestAttributes;
  links?: RestLinks;
  relationships?: RestReturnRequestRelationships;
}

export interface RestReturnTotalsAttributes {
  refundTotal?: number;
  remunerationTotal?: number;
}

export interface RestReturnsAttributes {
  returnReference?: string;
  store?: string;
  customerReference?: string;
  returnTotals?: RestReturnTotalsAttributes;
}

export type RestReturnsIncluded = RestReturnsResponseData[];

export interface RestReturnsRelationships {
  "return-items"?: RestRelationshipsData;
}

export interface RestReturnsResponse {
  data?: RestReturnsResponseData;
  links?: RestLinks;
  included?: RestReturnsIncluded;
}

export interface RestReturnsResponseData {
  type?: string;
  id?: string;
  attributes?: RestReturnsAttributes;
  links?: RestLinks;
  relationships?: RestReturnsRelationships;
}

export interface RestSalesOrderConfiguredBundle {
  idSalesOrderConfiguredBundle?: number;
  configurableBundleTemplateUuid?: string;
  name?: string;
  quantity?: number;
}

export interface RestSalesOrderConfiguredBundleItem {
  idSalesOrderConfiguredBundle?: number;
  configurableBundleTemplateSlotUuid?: string;
}

export interface RestSalesUnitsAttributes {
  conversion?: number;
  precision?: number;
  isDisplayed?: boolean;
  isDefault?: boolean;
  productMeasurementUnitCode?: string;
}

export interface RestSalesUnitsCollectionResponse {
  data?: RestSalesUnitsCollectionResponseData[];
  included?: RestSalesUnitsIncluded;
}

export interface RestSalesUnitsCollectionResponseData {
  type?: string;
  id?: string;
  attributes?: RestSalesUnitsAttributes;
  links?: RestLinks;
  relationships?: RestSalesUnitsRelationships;
}

export type RestSalesUnitsIncluded = RestProductMeasurementUnitsResponseData[];

export interface RestSalesUnitsRelationships {
  "product-measurement-units"?: RestRelationshipsData;
}

export interface RestSharedCartsAttributes {
  idCompanyUser?: string;
  idCartPermissionGroup?: number;
}

export type RestSharedCartsIncluded = (
  | RestCartPermissionGroupsCollectionResponseData
  | RestCompanyUserCollectionResponseData
)[];

export interface RestSharedCartsRelationships {
  "cart-permission-groups"?: RestRelationshipsData;
  "company-users"?: RestRelationshipsData;
}

export interface RestSharedCartsResponse {
  data?: RestSharedCartsResponseData;
  links?: RestLinks;
  included?: RestSharedCartsIncluded;
}

export interface RestSharedCartsResponseData {
  type?: string;
  id?: string;
  attributes?: RestSharedCartsAttributes;
  links?: RestLinks;
  relationships?: RestSharedCartsRelationships;
}

export interface RestShipmentMethod {
  id?: number;
  name?: string;
  carrierName?: string;
  price?: number;
  taxRate?: number;
  deliveryTime?: number;
  currencyIsoCode?: string;
}

export interface RestShipmentTransfer {
  idShipmentMethod?: number;
}

export interface RestShipmentsAttributes {
  items?: string[];
  shippingAddress?: RestAddress;
  selectedShipmentMethod?: RestShipmentMethod;
  requestedDeliveryDate?: string;
}

export interface RestShipmentsResponseData {
  type?: string;
  id?: string;
  attributes?: RestShipmentsAttributes;
  links?: RestLinks;
}

export interface RestShipmentsTransfer {
  shippingAddress?: RestAddressTransfer;
  items?: string[];
  idShipmentMethod?: number;
  requestedDeliveryDate?: string;
}

export interface RestShoppingListItemsAttributes {
  quantity?: number;
  sku?: string;
}

export type RestShoppingListItemsIncluded = ConcreteProductsRestResponseData[];

export interface RestShoppingListItemsRelationships {
  "concrete-products"?: RestRelationshipsData;
}

export interface RestShoppingListItemsRequest {
  data?: RestShoppingListItemsRequestData;
}

export interface RestShoppingListItemsRequestAttributes {
  quantity: number;
  sku: string;
}

export interface RestShoppingListItemsRequestData {
  type?: string;
  attributes?: RestShoppingListItemsRequestAttributes;
}

export interface RestShoppingListItemsResponse {
  data?: RestShoppingListItemsResponseData;
  links?: RestLinks;
  included?: RestShoppingListItemsIncluded;
}

export interface RestShoppingListItemsResponseData {
  type?: string;
  id?: string;
  attributes?: RestShoppingListItemsAttributes;
  links?: RestLinks;
  relationships?: RestShoppingListItemsRelationships;
}

export interface RestShoppingListRequestRequest {
  data?: RestShoppingListRequestRequestData;
}

export interface RestShoppingListRequestRequestAttributes {
  name: string;
}

export interface RestShoppingListRequestRequestData {
  type?: string;
  attributes?: RestShoppingListRequestRequestAttributes;
}

export interface RestShoppingListsAttributes {
  owner?: string;
  name?: string;
  numberOfItems?: number;
  updatedAt?: string;
  createdAt?: string;
}

export interface RestShoppingListsCollectionResponse {
  data?: RestShoppingListsCollectionResponseData[];
  included?: RestShoppingListsIncluded;
}

export interface RestShoppingListsCollectionResponseData {
  type?: string;
  id?: string;
  attributes?: RestShoppingListsAttributes;
  links?: RestLinks;
  relationships?: RestShoppingListsRelationships;
}

export type RestShoppingListsIncluded = RestShoppingListsResponseData[];

export interface RestShoppingListsRelationships {
  "shopping-list-items"?: RestRelationshipsData;
}

export interface RestShoppingListsResponse {
  data?: RestShoppingListsResponseData;
  links?: RestLinks;
  included?: RestShoppingListsIncluded;
}

export interface RestShoppingListsResponseData {
  type?: string;
  id?: string;
  attributes?: RestShoppingListsAttributes;
  links?: RestLinks;
  relationships?: RestShoppingListsRelationships;
}

export interface RestTokenAttributes {
  grantType?: string;
  username?: string;
  password?: string;
}

export interface RestTokenResponse {
  data?: RestTokenResponseData;
  links?: RestLinks;
}

export interface RestTokenResponseAttributes {
  tokenType?: string;
  expiresIn?: string;
  accessToken?: string;
  refreshToken?: string;
  idCompanyUser?: string;
}

export interface RestTokenResponseData {
  type?: string;
  id?: string;
  attributes?: RestTokenAttributes;
  links?: RestLinks;
}

export interface RestTokenResponseResponse {
  data?: RestTokenResponseResponseData;
  links?: RestLinks;
}

export interface RestTokenResponseResponseData {
  type?: string;
  id?: string | null;
  attributes?: RestTokenResponseAttributes;
  links?: RestLinks;
}

export interface RestUrlResolverAttributes {
  entityType?: string;
  entityId?: string;
}

export interface RestUrlResolverCollectionResponse {
  data?: RestUrlResolverCollectionResponseData[];
}

export interface RestUrlResolverCollectionResponseData {
  type?: string;
  id?: string;
  attributes?: RestUrlResolverAttributes;
  links?: RestLinks;
}

export interface StoreCountryRestAttributes {
  iso2Code?: string;
  iso3Code?: string;
  name?: string;
  postalCodeMandatory?: boolean;
  postalCodeRegex?: string;
  regions?: StoreRegionRestAttributes[];
}

export interface StoreCurrencyRestAttributes {
  code?: string;
  name?: string;
}

export interface StoreLocaleRestAttributes {
  code?: string;
  name?: string;
}

export interface StoreRegionRestAttributes {
  iso2Code?: string;
  name?: string;
}

export interface StoresRestAttributes {
  timeZone?: string;
  defaultCurrency?: string;
  currencies?: StoreCurrencyRestAttributes[];
  locales?: StoreLocaleRestAttributes[];
  countries?: StoreCountryRestAttributes[];
}

export interface StoresRestCollectionResponse {
  data?: StoresRestCollectionResponseData[];
}

export interface StoresRestCollectionResponseData {
  type?: string;
  id?: string;
  attributes?: StoresRestAttributes;
  links?: RestLinks;
}

export interface StoresRestResponse {
  data?: StoresRestResponseData;
  links?: RestLinks;
}

export interface StoresRestResponseData {
  type?: string;
  id?: string;
  attributes?: StoresRestAttributes;
  links?: RestLinks;
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (securityData: SecurityDataType | null) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "http://glue.de.spryker.local";
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) => fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(typeof value === "number" ? value : `${value}`)}`;
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join("&");
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key]);
    return keys
      .map((key) => (Array.isArray(query[key]) ? this.addArrayQueryParam(query, key) : this.addQueryParam(query, key)))
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string") ? JSON.stringify(input) : input,
    [ContentType.Text]: (input: any) => (input !== null && typeof input !== "string" ? JSON.stringify(input) : input),
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === "object" && property !== null
            ? JSON.stringify(property)
            : `${property}`,
        );
        return formData;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  protected mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(`${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`, {
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
      },
      signal: cancelToken ? this.createAbortSignal(cancelToken) : requestParams.signal,
      body: typeof body === "undefined" || body === null ? null : payloadFormatter(body),
    }).then(async (response) => {
      const r = response as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data;
              } else {
                r.error = data;
              }
              return r;
            })
            .catch((e) => {
              r.error = e;
              return r;
            });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title Spryker API
 * @version 1.0.0
 * @license MIT
 * @baseUrl http://glue.de.spryker.local
 * @contact Spryker <support@spryker.com> (https://support.spryker.com/)
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  accessTokens = {
    /**
     * No description
     *
     * @tags access-tokens
     * @name CreateAccessTokens
     * @summary Creates access token for user.
     * @request POST:/access-tokens
     */
    createAccessTokens: (data: RestAccessTokensRequest, params: RequestParams = {}) =>
      this.request<RestTokenResponseResponse, RestErrorMessage>({
        path: `/access-tokens`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  refreshTokens = {
    /**
     * No description
     *
     * @tags refresh-tokens
     * @name CreateRefreshTokens
     * @summary Refreshes customer's auth token.
     * @request POST:/refresh-tokens
     */
    createRefreshTokens: (data: RestRefreshTokensRequest, params: RequestParams = {}) =>
      this.request<RestTokenResponseResponse, RestErrorMessage>({
        path: `/refresh-tokens`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags refresh-tokens
     * @name DeleteRefreshTokens
     * @summary Revokes customer's refresh token.
     * @request DELETE:/refresh-tokens/{refreshTokenId}
     * @secure
     */
    deleteRefreshTokens: (refreshTokenId: string, params: RequestParams = {}) =>
      this.request<void, RestErrorMessage>({
        path: `/refresh-tokens/${refreshTokenId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  companyUsers = {
    /**
     * No description
     *
     * @tags company-users
     * @name GetCompanyUsers
     * @summary Retrieves a company user by id.
     * @request GET:/company-users/{companyUserId}
     * @secure
     */
    getCompanyUsers: (companyUserId: string, params: RequestParams = {}) =>
      this.request<RestCompanyUserResponse, RestErrorMessage>({
        path: `/company-users/${companyUserId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags company-users
     * @name GetCollectionOfCompanyUsers
     * @summary Retrieves list of company users.
     * @request GET:/company-users
     * @secure
     */
    getCollectionOfCompanyUsers: (params: RequestParams = {}) =>
      this.request<RestCompanyUserCollectionResponse, RestErrorMessage>({
        path: `/company-users`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  companyUserAccessTokens = {
    /**
     * No description
     *
     * @tags company-user-access-tokens
     * @name CreateCompanyUserAccessTokens
     * @summary Creates access token for company user.
     * @request POST:/company-user-access-tokens
     * @secure
     */
    createCompanyUserAccessTokens: (data: RestCompanyUserAccessTokensRequest, params: RequestParams = {}) =>
      this.request<RestCompanyUserAccessTokenResponseResponse, RestErrorMessage>({
        path: `/company-user-access-tokens`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  customers = {
    /**
     * No description
     *
     * @tags customers
     * @name GetCustomers
     * @summary Retrieves customer data.
     * @request GET:/customers/{customerId}
     * @secure
     */
    getCustomers: (customerId: string, params: RequestParams = {}) =>
      this.request<RestCustomersResponse, RestErrorMessage>({
        path: `/customers/${customerId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags customers
     * @name UpdateCustomers
     * @summary Updates customer data.
     * @request PATCH:/customers/{customerId}
     * @secure
     */
    updateCustomers: (customerId: string, data: RestCustomersRequest, params: RequestParams = {}) =>
      this.request<RestCustomersResponse, RestErrorMessage>({
        path: `/customers/${customerId}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags customers
     * @name DeleteCustomers
     * @summary Anonymizes customers.
     * @request DELETE:/customers/{customerId}
     * @secure
     */
    deleteCustomers: (customerId: string, params: RequestParams = {}) =>
      this.request<void, RestErrorMessage>({
        path: `/customers/${customerId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags customers
     * @name GetCollectionOfCustomers
     * @summary Retrieves customers collection.
     * @request GET:/customers
     * @secure
     */
    getCollectionOfCustomers: (params: RequestParams = {}) =>
      this.request<RestCustomersCollectionResponse, RestErrorMessage>({
        path: `/customers`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags customers
     * @name CreateCustomers
     * @summary Creates customer.
     * @request POST:/customers
     */
    createCustomers: (data: RestCustomersRequest, params: RequestParams = {}) =>
      this.request<RestCustomersResponse, RestErrorMessage>({
        path: `/customers`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags addresses
     * @name GetCustomersAddresses
     * @summary Retrieves customer address by id.
     * @request GET:/customers/{customerId}/addresses/{addressId}
     * @secure
     */
    getCustomersAddresses: (customerId: string, addressId: string, params: RequestParams = {}) =>
      this.request<RestAddressResponse, RestErrorMessage>({
        path: `/customers/${customerId}/addresses/${addressId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags addresses
     * @name UpdateCustomersAddresses
     * @summary Updates customer address.
     * @request PATCH:/customers/{customerId}/addresses/{addressId}
     * @secure
     */
    updateCustomersAddresses: (
      customerId: string,
      addressId: string,
      data: RestAddressRequest,
      params: RequestParams = {},
    ) =>
      this.request<RestAddressResponse, RestErrorMessage>({
        path: `/customers/${customerId}/addresses/${addressId}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags addresses
     * @name DeleteCustomersAddresses
     * @summary Deletes customer address.
     * @request DELETE:/customers/{customerId}/addresses/{addressId}
     * @secure
     */
    deleteCustomersAddresses: (customerId: string, addressId: string, params: RequestParams = {}) =>
      this.request<void, RestErrorMessage>({
        path: `/customers/${customerId}/addresses/${addressId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags addresses
     * @name GetCollectionOfCustomersAddresses
     * @summary Retrieves list of all customer addresses.
     * @request GET:/customers/{customerId}/addresses
     * @secure
     */
    getCollectionOfCustomersAddresses: (customerId: string, params: RequestParams = {}) =>
      this.request<RestAddressCollectionResponse, RestErrorMessage>({
        path: `/customers/${customerId}/addresses`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags addresses
     * @name CreateCustomersAddresses
     * @summary Creates customer address.
     * @request POST:/customers/{customerId}/addresses
     * @secure
     */
    createCustomersAddresses: (customerId: string, data: RestAddressRequest, params: RequestParams = {}) =>
      this.request<RestAddressResponse, RestErrorMessage>({
        path: `/customers/${customerId}/addresses`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags carts
     * @name GetCollectionOfCustomersCarts
     * @summary Retrieves list of carts.
     * @request GET:/customers/{customerId}/carts
     * @secure
     */
    getCollectionOfCustomersCarts: (customerId: string, params: RequestParams = {}) =>
      this.request<RestCartsCollectionResponse, RestErrorMessage>({
        path: `/customers/${customerId}/carts`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags orders
     * @name GetCollectionOfCustomersOrders
     * @summary Retrieves list of orders.
     * @request GET:/customers/{customerId}/orders
     * @secure
     */
    getCollectionOfCustomersOrders: (customerId: string, params: RequestParams = {}) =>
      this.request<RestOrdersCollectionResponse, RestErrorMessage>({
        path: `/customers/${customerId}/orders`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags availability-notifications
     * @name GetCollectionOfCustomersAvailabilityNotifications
     * @summary Retrieves a collection of notification subscriptions about products availability filtered by the customer in the parent resource.
     * @request GET:/customers/{customerId}/availability-notifications
     * @secure
     */
    getCollectionOfCustomersAvailabilityNotifications: (customerId: string, params: RequestParams = {}) =>
      this.request<RestAvailabilityNotificationsCollectionResponse, RestErrorMessage>({
        path: `/customers/${customerId}/availability-notifications`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  customerForgottenPassword = {
    /**
     * No description
     *
     * @tags customer-forgotten-password
     * @name CreateCustomerForgottenPassword
     * @summary Sends password restoration email.
     * @request POST:/customer-forgotten-password
     */
    createCustomerForgottenPassword: (data: RestCustomerForgottenPasswordRequest, params: RequestParams = {}) =>
      this.request<void, RestErrorMessage>({
        path: `/customer-forgotten-password`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),
  };
  customerRestorePassword = {
    /**
     * No description
     *
     * @tags customer-restore-password
     * @name UpdateCustomerRestorePassword
     * @summary Restores customer password.
     * @request PATCH:/customer-restore-password/{customerRestorePasswordId}
     */
    updateCustomerRestorePassword: (
      customerRestorePasswordId: string,
      data: RestCustomerRestorePasswordRequest,
      params: RequestParams = {},
    ) =>
      this.request<void, RestErrorMessage>({
        path: `/customer-restore-password/${customerRestorePasswordId}`,
        method: "PATCH",
        body: data,
        type: ContentType.Json,
        ...params,
      }),
  };
  customerPassword = {
    /**
     * No description
     *
     * @tags customer-password
     * @name UpdateCustomerPassword
     * @summary Updates customer password.
     * @request PATCH:/customer-password/{customerPasswordId}
     * @secure
     */
    updateCustomerPassword: (
      customerPasswordId: string,
      data: RestCustomerPasswordRequest,
      params: RequestParams = {},
    ) =>
      this.request<void, RestErrorMessage>({
        path: `/customer-password/${customerPasswordId}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),
  };
  companies = {
    /**
     * No description
     *
     * @tags companies
     * @name GetCompanies
     * @summary Retrieves a company by id.
     * @request GET:/companies/{companyId}
     * @secure
     */
    getCompanies: (companyId: string, params: RequestParams = {}) =>
      this.request<RestCompanyResponse, RestErrorMessage>({
        path: `/companies/${companyId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags companies
     * @name GetCollectionOfCompanies
     * @summary Retrieves company collection.
     * @request GET:/companies
     * @secure
     */
    getCollectionOfCompanies: (params: RequestParams = {}) =>
      this.request<RestCompanyCollectionResponse, RestErrorMessage>({
        path: `/companies`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  abstractProducts = {
    /**
     * No description
     *
     * @tags abstract-product-prices
     * @name GetCollectionOfAbstractProductsAbstractProductPrices
     * @summary Retrieves abstract product prices.
     * @request GET:/abstract-products/{abstractProductId}/abstract-product-prices
     */
    getCollectionOfAbstractProductsAbstractProductPrices: (abstractProductId: string, params: RequestParams = {}) =>
      this.request<RestProductPricesCollectionResponse, RestErrorMessage>({
        path: `/abstract-products/${abstractProductId}/abstract-product-prices`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags abstract-products
     * @name GetAbstractProducts
     * @summary Retrieves product abstract by id.
     * @request GET:/abstract-products/{abstractProductId}
     */
    getAbstractProducts: (abstractProductId: string, params: RequestParams = {}) =>
      this.request<AbstractProductsRestResponse, RestErrorMessage>({
        path: `/abstract-products/${abstractProductId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags abstract-product-availabilities
     * @name GetCollectionOfAbstractProductsAbstractProductAvailabilities
     * @summary Retrieves abstract product availabilities.
     * @request GET:/abstract-products/{abstractProductId}/abstract-product-availabilities
     */
    getCollectionOfAbstractProductsAbstractProductAvailabilities: (
      abstractProductId: string,
      params: RequestParams = {},
    ) =>
      this.request<RestAbstractProductAvailabilityCollectionResponse, RestErrorMessage>({
        path: `/abstract-products/${abstractProductId}/abstract-product-availabilities`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags related-products
     * @name GetCollectionOfAbstractProductsRelatedProducts
     * @summary Retrieves list of all related products of abstract product.
     * @request GET:/abstract-products/{abstractProductId}/related-products
     */
    getCollectionOfAbstractProductsRelatedProducts: (abstractProductId: string, params: RequestParams = {}) =>
      this.request<AbstractProductsRestCollectionResponse, RestErrorMessage>({
        path: `/abstract-products/${abstractProductId}/related-products`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags abstract-product-image-sets
     * @name GetCollectionOfAbstractProductsAbstractProductImageSets
     * @summary Retrieves abstract product image sets.
     * @request GET:/abstract-products/{abstractProductId}/abstract-product-image-sets
     */
    getCollectionOfAbstractProductsAbstractProductImageSets: (abstractProductId: string, params: RequestParams = {}) =>
      this.request<RestProductImageSetsCollectionResponse, RestErrorMessage>({
        path: `/abstract-products/${abstractProductId}/abstract-product-image-sets`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags product-tax-sets
     * @name GetCollectionOfAbstractProductsProductTaxSets
     * @summary Retrieves abstract product tax sets.
     * @request GET:/abstract-products/{abstractProductId}/product-tax-sets
     */
    getCollectionOfAbstractProductsProductTaxSets: (abstractProductId: string, params: RequestParams = {}) =>
      this.request<RestProductTaxSetsCollectionResponse, RestErrorMessage>({
        path: `/abstract-products/${abstractProductId}/product-tax-sets`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags product-reviews
     * @name GetAbstractProductsProductReviews
     * @summary Retrieves abstract product review by sku.
     * @request GET:/abstract-products/{abstractProductId}/product-reviews/{productReviewId}
     */
    getAbstractProductsProductReviews: (
      abstractProductId: string,
      productReviewId: string,
      params: RequestParams = {},
    ) =>
      this.request<RestProductReviewsResponse, RestErrorMessage>({
        path: `/abstract-products/${abstractProductId}/product-reviews/${productReviewId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags product-reviews
     * @name GetCollectionOfAbstractProductsProductReviews
     * @summary Retrieves a collection of abstract product reviews by sku.
     * @request GET:/abstract-products/{abstractProductId}/product-reviews
     */
    getCollectionOfAbstractProductsProductReviews: (abstractProductId: string, params: RequestParams = {}) =>
      this.request<RestProductReviewsCollectionResponse, RestErrorMessage>({
        path: `/abstract-products/${abstractProductId}/product-reviews`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags product-reviews
     * @name CreateAbstractProductsProductReviews
     * @summary Creates a product review.
     * @request POST:/abstract-products/{abstractProductId}/product-reviews
     * @secure
     */
    createAbstractProductsProductReviews: (
      abstractProductId: string,
      data: RestProductReviewsRequest,
      params: RequestParams = {},
    ) =>
      this.request<RestProductReviewsResponse, RestErrorMessage>({
        path: `/abstract-products/${abstractProductId}/product-reviews`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  concreteProducts = {
    /**
     * No description
     *
     * @tags concrete-product-prices
     * @name GetCollectionOfConcreteProductsConcreteProductPrices
     * @summary Retrieves concrete product prices.
     * @request GET:/concrete-products/{concreteProductId}/concrete-product-prices
     */
    getCollectionOfConcreteProductsConcreteProductPrices: (concreteProductId: string, params: RequestParams = {}) =>
      this.request<RestProductPricesCollectionResponse, RestErrorMessage>({
        path: `/concrete-products/${concreteProductId}/concrete-product-prices`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags concrete-products
     * @name GetConcreteProducts
     * @summary Retrieves product concrete by id.
     * @request GET:/concrete-products/{concreteProductId}
     */
    getConcreteProducts: (concreteProductId: string, params: RequestParams = {}) =>
      this.request<ConcreteProductsRestResponse, RestErrorMessage>({
        path: `/concrete-products/${concreteProductId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags concrete-product-availabilities
     * @name GetCollectionOfConcreteProductsConcreteProductAvailabilities
     * @summary Retrieves concrete product availabilities.
     * @request GET:/concrete-products/{concreteProductId}/concrete-product-availabilities
     */
    getCollectionOfConcreteProductsConcreteProductAvailabilities: (
      concreteProductId: string,
      params: RequestParams = {},
    ) =>
      this.request<RestConcreteProductAvailabilityCollectionResponse, RestErrorMessage>({
        path: `/concrete-products/${concreteProductId}/concrete-product-availabilities`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags concrete-product-image-sets
     * @name GetCollectionOfConcreteProductsConcreteProductImageSets
     * @summary Retrieves concrete product image sets.
     * @request GET:/concrete-products/{concreteProductId}/concrete-product-image-sets
     */
    getCollectionOfConcreteProductsConcreteProductImageSets: (concreteProductId: string, params: RequestParams = {}) =>
      this.request<RestProductImageSetsCollectionResponse, RestErrorMessage>({
        path: `/concrete-products/${concreteProductId}/concrete-product-image-sets`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags abstract-alternative-products
     * @name GetCollectionOfConcreteProductsAbstractAlternativeProducts
     * @summary Retrieves abstract alternative products of concrete product.
     * @request GET:/concrete-products/{concreteProductId}/abstract-alternative-products
     */
    getCollectionOfConcreteProductsAbstractAlternativeProducts: (
      concreteProductId: string,
      params: RequestParams = {},
    ) =>
      this.request<AbstractProductsRestCollectionResponse, RestErrorMessage>({
        path: `/concrete-products/${concreteProductId}/abstract-alternative-products`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags concrete-alternative-products
     * @name GetCollectionOfConcreteProductsConcreteAlternativeProducts
     * @summary Retrieves concrete alternative products of concrete product.
     * @request GET:/concrete-products/{concreteProductId}/concrete-alternative-products
     */
    getCollectionOfConcreteProductsConcreteAlternativeProducts: (
      concreteProductId: string,
      params: RequestParams = {},
    ) =>
      this.request<ConcreteProductsRestCollectionResponse, RestErrorMessage>({
        path: `/concrete-products/${concreteProductId}/concrete-alternative-products`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags sales-units
     * @name GetCollectionOfConcreteProductsSalesUnits
     * @summary Retrieves a collection of sales units.
     * @request GET:/concrete-products/{concreteProductId}/sales-units
     */
    getCollectionOfConcreteProductsSalesUnits: (concreteProductId: string, params: RequestParams = {}) =>
      this.request<RestSalesUnitsCollectionResponse, RestErrorMessage>({
        path: `/concrete-products/${concreteProductId}/sales-units`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags bundled-products
     * @name GetCollectionOfConcreteProductsBundledProducts
     * @summary Retrieves a collection of bundled products for product concrete.
     * @request GET:/concrete-products/{concreteProductId}/bundled-products
     */
    getCollectionOfConcreteProductsBundledProducts: (concreteProductId: string, params: RequestParams = {}) =>
      this.request<RestBundledProductsCollectionResponse, RestErrorMessage>({
        path: `/concrete-products/${concreteProductId}/bundled-products`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  carts = {
    /**
     * No description
     *
     * @tags up-selling-products
     * @name GetCollectionOfCartsUpSellingProducts
     * @summary Retrieves list of all up-selling products for the cart.
     * @request GET:/carts/{cartId}/up-selling-products
     * @secure
     */
    getCollectionOfCartsUpSellingProducts: (cartId: string, params: RequestParams = {}) =>
      this.request<AbstractProductsRestCollectionResponse, RestErrorMessage>({
        path: `/carts/${cartId}/up-selling-products`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags carts
     * @name GetCarts
     * @summary Retrieves a cart by id.
     * @request GET:/carts/{cartId}
     * @secure
     */
    getCarts: (cartId: string, params: RequestParams = {}) =>
      this.request<RestCartsResponse, RestErrorMessage>({
        path: `/carts/${cartId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags carts
     * @name UpdateCarts
     * @summary Updates a cart.
     * @request PATCH:/carts/{cartId}
     * @secure
     */
    updateCarts: (cartId: string, data: RestCartsRequest, params: RequestParams = {}) =>
      this.request<RestCartsResponse, RestErrorMessage>({
        path: `/carts/${cartId}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags carts
     * @name DeleteCarts
     * @summary Deletes cart by id.
     * @request DELETE:/carts/{cartId}
     * @secure
     */
    deleteCarts: (cartId: string, params: RequestParams = {}) =>
      this.request<void, RestErrorMessage>({
        path: `/carts/${cartId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags carts
     * @name GetCollectionOfCarts
     * @summary Retrieves list of all customer's carts.
     * @request GET:/carts
     * @deprecated
     * @secure
     */
    getCollectionOfCarts: (params: RequestParams = {}) =>
      this.request<RestCartsCollectionResponse, RestErrorMessage>({
        path: `/carts`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags carts
     * @name CreateCarts
     * @summary Creates a cart.
     * @request POST:/carts
     * @secure
     */
    createCarts: (data: RestCartsRequest, params: RequestParams = {}) =>
      this.request<RestCartsResponse, RestErrorMessage>({
        path: `/carts`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags items
     * @name CreateCartsItems
     * @summary Adds an item to the cart.
     * @request POST:/carts/{cartId}/items
     * @secure
     */
    createCartsItems: (cartId: string, data: RestCartItemsRequest, params: RequestParams = {}) =>
      this.request<RestCartsResponse, RestErrorMessage>({
        path: `/carts/${cartId}/items`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags items
     * @name UpdateCartsItems
     * @summary Updates cart item quantity.
     * @request PATCH:/carts/{cartId}/items/{itemId}
     * @secure
     */
    updateCartsItems: (cartId: string, itemId: string, data: RestCartItemsRequest, params: RequestParams = {}) =>
      this.request<RestCartsResponse, RestErrorMessage>({
        path: `/carts/${cartId}/items/${itemId}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags items
     * @name DeleteCartsItems
     * @summary Removes item from the cart.
     * @request DELETE:/carts/{cartId}/items/{itemId}
     * @secure
     */
    deleteCartsItems: (cartId: string, itemId: string, params: RequestParams = {}) =>
      this.request<void, RestErrorMessage>({
        path: `/carts/${cartId}/items/${itemId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags shared-carts
     * @name CreateCartsSharedCarts
     * @summary Shares a cart.
     * @request POST:/carts/{cartId}/shared-carts
     * @secure
     */
    createCartsSharedCarts: (cartId: string, params: RequestParams = {}) =>
      this.request<RestSharedCartsResponse, RestErrorMessage>({
        path: `/carts/${cartId}/shared-carts`,
        method: "POST",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags vouchers
     * @name CreateCartsVouchers
     * @summary Adds a code to cart.
     * @request POST:/carts/{cartId}/vouchers
     * @secure
     */
    createCartsVouchers: (cartId: string, params: RequestParams = {}) =>
      this.request<RestDiscountsRequestResponse, RestErrorMessage>({
        path: `/carts/${cartId}/vouchers`,
        method: "POST",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags vouchers
     * @name DeleteCartsVouchers
     * @summary Deletes a code from cart.
     * @request DELETE:/carts/{cartId}/vouchers/{voucherCode}
     * @secure
     */
    deleteCartsVouchers: (cartId: string, voucherCode: string, params: RequestParams = {}) =>
      this.request<void, RestErrorMessage>({
        path: `/carts/${cartId}/vouchers/${voucherCode}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags configured-bundles
     * @name CreateCartsConfiguredBundles
     * @summary Adds a configured bundle to the cart.
     * @request POST:/carts/{cartId}/configured-bundles
     * @secure
     */
    createCartsConfiguredBundles: (cartId: string, data: RestConfiguredBundlesRequest, params: RequestParams = {}) =>
      this.request<RestCartsResponse, RestErrorMessage>({
        path: `/carts/${cartId}/configured-bundles`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags configured-bundles
     * @name UpdateCartsConfiguredBundles
     * @summary Updates configured bundle quantity.
     * @request PATCH:/carts/{cartId}/configured-bundles/{configuredBundleId}
     * @secure
     */
    updateCartsConfiguredBundles: (
      cartId: string,
      configuredBundleId: string,
      data: RestConfiguredBundlesRequest,
      params: RequestParams = {},
    ) =>
      this.request<RestCartsResponse, RestErrorMessage>({
        path: `/carts/${cartId}/configured-bundles/${configuredBundleId}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags configured-bundles
     * @name DeleteCartsConfiguredBundles
     * @summary Removes configured bundle from the cart.
     * @request DELETE:/carts/{cartId}/configured-bundles/{configuredBundleId}
     * @secure
     */
    deleteCartsConfiguredBundles: (cartId: string, configuredBundleId: string, params: RequestParams = {}) =>
      this.request<void, RestErrorMessage>({
        path: `/carts/${cartId}/configured-bundles/${configuredBundleId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags cart-codes
     * @name CreateCartsCartCodes
     * @summary Adds a code to cart.
     * @request POST:/carts/{cartId}/cart-codes
     * @secure
     */
    createCartsCartCodes: (cartId: string, params: RequestParams = {}) =>
      this.request<RestCartCodeRequestResponse, RestErrorMessage>({
        path: `/carts/${cartId}/cart-codes`,
        method: "POST",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags cart-codes
     * @name DeleteCartsCartCodes
     * @summary Deletes a code from cart.
     * @request DELETE:/carts/{cartId}/cart-codes/{code}
     * @secure
     */
    deleteCartsCartCodes: (cartId: string, code: string, params: RequestParams = {}) =>
      this.request<void, RestErrorMessage>({
        path: `/carts/${cartId}/cart-codes/${code}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  guestCarts = {
    /**
     * No description
     *
     * @tags up-selling-products
     * @name GetCollectionOfGuestCartsUpSellingProducts
     * @summary Retrieves list of all up-selling products for the guest cart.
     * @request GET:/guest-carts/{guestCartId}/up-selling-products
     */
    getCollectionOfGuestCartsUpSellingProducts: (guestCartId: string, params: RequestParams = {}) =>
      this.request<AbstractProductsRestCollectionResponse, RestErrorMessage>({
        path: `/guest-carts/${guestCartId}/up-selling-products`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags guest-carts
     * @name GetGuestCarts
     * @summary Retrieves a guest cart by id.
     * @request GET:/guest-carts/{guestCartId}
     */
    getGuestCarts: (guestCartId: string, params: RequestParams = {}) =>
      this.request<RestCartsResponse, RestErrorMessage>({
        path: `/guest-carts/${guestCartId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags guest-carts
     * @name UpdateGuestCarts
     * @summary Updates a guest cart.
     * @request PATCH:/guest-carts/{guestCartId}
     */
    updateGuestCarts: (guestCartId: string, data: RestCartsRequest, params: RequestParams = {}) =>
      this.request<RestCartsResponse, RestErrorMessage>({
        path: `/guest-carts/${guestCartId}`,
        method: "PATCH",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags guest-carts
     * @name GetCollectionOfGuestCarts
     * @summary Retrieves list of customer's guest carts.
     * @request GET:/guest-carts
     */
    getCollectionOfGuestCarts: (params: RequestParams = {}) =>
      this.request<RestCartsCollectionResponse, RestErrorMessage>({
        path: `/guest-carts`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags guest-cart-items
     * @name CreateGuestCartsGuestCartItems
     * @summary Adds an item to the guest cart.
     * @request POST:/guest-carts/{guestCartId}/guest-cart-items
     */
    createGuestCartsGuestCartItems: (guestCartId: string, data: RestCartItemsRequest, params: RequestParams = {}) =>
      this.request<RestCartsResponse, RestErrorMessage>({
        path: `/guest-carts/${guestCartId}/guest-cart-items`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags guest-cart-items
     * @name UpdateGuestCartsGuestCartItems
     * @summary Updates guest cart item quantity.
     * @request PATCH:/guest-carts/{guestCartId}/guest-cart-items/{guestCartItemId}
     */
    updateGuestCartsGuestCartItems: (
      guestCartId: string,
      guestCartItemId: string,
      data: RestCartItemsRequest,
      params: RequestParams = {},
    ) =>
      this.request<RestCartsResponse, RestErrorMessage>({
        path: `/guest-carts/${guestCartId}/guest-cart-items/${guestCartItemId}`,
        method: "PATCH",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags guest-cart-items
     * @name DeleteGuestCartsGuestCartItems
     * @summary Removes item from guest cart.
     * @request DELETE:/guest-carts/{guestCartId}/guest-cart-items/{guestCartItemId}
     */
    deleteGuestCartsGuestCartItems: (guestCartId: string, guestCartItemId: string, params: RequestParams = {}) =>
      this.request<void, RestErrorMessage>({
        path: `/guest-carts/${guestCartId}/guest-cart-items/${guestCartItemId}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @tags vouchers
     * @name CreateGuestCartsVouchers
     * @summary Adds a code to guest cart.
     * @request POST:/guest-carts/{guestCartId}/vouchers
     */
    createGuestCartsVouchers: (guestCartId: string, params: RequestParams = {}) =>
      this.request<RestDiscountsRequestResponse, RestErrorMessage>({
        path: `/guest-carts/${guestCartId}/vouchers`,
        method: "POST",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags vouchers
     * @name DeleteGuestCartsVouchers
     * @summary Deletes a code from guest cart.
     * @request DELETE:/guest-carts/{guestCartId}/vouchers/{voucherCode}
     */
    deleteGuestCartsVouchers: (guestCartId: string, voucherCode: string, params: RequestParams = {}) =>
      this.request<void, RestErrorMessage>({
        path: `/guest-carts/${guestCartId}/vouchers/${voucherCode}`,
        method: "DELETE",
        ...params,
      }),
  };
  catalogSearch = {
    /**
     * No description
     *
     * @tags catalog-search
     * @name GetCollectionOfCatalogSearch
     * @summary Catalog search.
     * @request GET:/catalog-search
     */
    getCollectionOfCatalogSearch: (
      query: {
        /** Search query string. */
        q: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RestCatalogSearchCollectionResponse, RestErrorMessage>({
        path: `/catalog-search`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),
  };
  catalogSearchSuggestions = {
    /**
     * No description
     *
     * @tags catalog-search-suggestions
     * @name GetCollectionOfCatalogSearchSuggestions
     * @summary Catalog search suggestions.
     * @request GET:/catalog-search-suggestions
     */
    getCollectionOfCatalogSearchSuggestions: (
      query: {
        /** Search query string. */
        q: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RestCatalogSearchSuggestionsCollectionResponse, RestErrorMessage>({
        path: `/catalog-search-suggestions`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),
  };
  stores = {
    /**
     * No description
     *
     * @tags stores
     * @name GetStores
     * @summary Retrieves current store data.
     * @request GET:/stores/{storeId}
     */
    getStores: (storeId: string, params: RequestParams = {}) =>
      this.request<StoresRestResponse, RestErrorMessage>({
        path: `/stores/${storeId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags stores
     * @name GetCollectionOfStores
     * @summary Retrieves current store data.
     * @request GET:/stores
     */
    getCollectionOfStores: (params: RequestParams = {}) =>
      this.request<StoresRestCollectionResponse, RestErrorMessage>({
        path: `/stores`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  categoryTrees = {
    /**
     * No description
     *
     * @tags category-trees
     * @name GetCollectionOfCategoryTrees
     * @summary Retrieves category tree for specified locale.
     * @request GET:/category-trees
     */
    getCollectionOfCategoryTrees: (params: RequestParams = {}) =>
      this.request<RestCategoryTreesCollectionResponse, RestErrorMessage>({
        path: `/category-trees`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  categoryNodes = {
    /**
     * No description
     *
     * @tags category-nodes
     * @name GetCategoryNodes
     * @summary Retrieves a category node by id.
     * @request GET:/category-nodes/{categoryNodeId}
     */
    getCategoryNodes: (categoryNodeId: string, params: RequestParams = {}) =>
      this.request<RestCategoryNodesResponse, RestErrorMessage>({
        path: `/category-nodes/${categoryNodeId}`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  productLabels = {
    /**
     * No description
     *
     * @tags product-labels
     * @name GetProductLabels
     * @summary Retrieves abstract product labels by id.
     * @request GET:/product-labels/{productLabelId}
     */
    getProductLabels: (productLabelId: string, params: RequestParams = {}) =>
      this.request<RestProductLabelsResponse, RestErrorMessage>({
        path: `/product-labels/${productLabelId}`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  orders = {
    /**
     * No description
     *
     * @tags orders
     * @name GetOrders
     * @summary Retrieves order by id.
     * @request GET:/orders/{orderId}
     * @secure
     */
    getOrders: (orderId: string, params: RequestParams = {}) =>
      this.request<RestOrderDetailsResponse, RestErrorMessage>({
        path: `/orders/${orderId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags orders
     * @name GetCollectionOfOrders
     * @summary Retrieves list of orders.
     * @request GET:/orders
     * @deprecated
     * @secure
     */
    getCollectionOfOrders: (params: RequestParams = {}) =>
      this.request<RestOrdersCollectionResponse, RestErrorMessage>({
        path: `/orders`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  checkoutData = {
    /**
 * No description
 *
 * @tags checkout-data
 * @name CreateCheckoutData
 * @summary Provides checkout data
 - available addresses
 - shipment methods
 - payment methods
 * @request POST:/checkout-data
 */
    createCheckoutData: (data: RestCheckoutRequestRequest, params: RequestParams = {}) =>
      this.request<RestCheckoutDataResponseResponse, RestErrorMessage>({
        path: `/checkout-data`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  checkout = {
    /**
     * No description
     *
     * @tags checkout
     * @name CreateCheckout
     * @summary Places order.
     * @request POST:/checkout
     */
    createCheckout: (data: RestCheckoutRequestRequest, params: RequestParams = {}) =>
      this.request<RestCheckoutResponseResponse, RestErrorMessage>({
        path: `/checkout`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  navigations = {
    /**
     * No description
     *
     * @tags navigations
     * @name GetNavigations
     * @summary Retrieves a navigation by id.
     * @request GET:/navigations/{navigationId}
     */
    getNavigations: (navigationId: string, params: RequestParams = {}) =>
      this.request<RestNavigationResponse, RestErrorMessage>({
        path: `/navigations/${navigationId}`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  companyBusinessUnits = {
    /**
     * No description
     *
     * @tags company-business-units
     * @name GetCompanyBusinessUnits
     * @summary Retrieves a company business unit by id.
     * @request GET:/company-business-units/{companyBusinessUnitId}
     * @secure
     */
    getCompanyBusinessUnits: (companyBusinessUnitId: string, params: RequestParams = {}) =>
      this.request<RestCompanyBusinessUnitResponse, RestErrorMessage>({
        path: `/company-business-units/${companyBusinessUnitId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags company-business-units
     * @name GetCollectionOfCompanyBusinessUnits
     * @summary Retrieves company business units collection.
     * @request GET:/company-business-units
     * @secure
     */
    getCollectionOfCompanyBusinessUnits: (params: RequestParams = {}) =>
      this.request<RestCompanyBusinessUnitCollectionResponse, RestErrorMessage>({
        path: `/company-business-units`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  companyBusinessUnitAddresses = {
    /**
     * No description
     *
     * @tags company-business-unit-addresses
     * @name GetCompanyBusinessUnitAddresses
     * @summary Retrieves a company business unit address by id.
     * @request GET:/company-business-unit-addresses/{companyBusinessUnitAddressId}
     * @secure
     */
    getCompanyBusinessUnitAddresses: (companyBusinessUnitAddressId: string, params: RequestParams = {}) =>
      this.request<RestCompanyBusinessUnitAddressesResponse, RestErrorMessage>({
        path: `/company-business-unit-addresses/${companyBusinessUnitAddressId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags company-business-unit-addresses
     * @name GetCollectionOfCompanyBusinessUnitAddresses
     * @summary Retrieves company business unit addresses collection.
     * @request GET:/company-business-unit-addresses
     * @secure
     */
    getCollectionOfCompanyBusinessUnitAddresses: (params: RequestParams = {}) =>
      this.request<RestCompanyBusinessUnitAddressesCollectionResponse, RestErrorMessage>({
        path: `/company-business-unit-addresses`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  companyRoles = {
    /**
     * No description
     *
     * @tags company-roles
     * @name GetCompanyRoles
     * @summary Retrieves a company role by id.
     * @request GET:/company-roles/{companyRoleId}
     * @secure
     */
    getCompanyRoles: (companyRoleId: string, params: RequestParams = {}) =>
      this.request<RestCompanyRoleResponse, RestErrorMessage>({
        path: `/company-roles/${companyRoleId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags company-roles
     * @name GetCollectionOfCompanyRoles
     * @summary Retrieves company role collection.
     * @request GET:/company-roles
     * @secure
     */
    getCollectionOfCompanyRoles: (params: RequestParams = {}) =>
      this.request<RestCompanyRoleCollectionResponse, RestErrorMessage>({
        path: `/company-roles`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  cartPermissionGroups = {
    /**
     * No description
     *
     * @tags cart-permission-groups
     * @name GetCartPermissionGroups
     * @summary Retrieves cart permission group by id.
     * @request GET:/cart-permission-groups/{cartPermissionGroupId}
     * @secure
     */
    getCartPermissionGroups: (cartPermissionGroupId: string, params: RequestParams = {}) =>
      this.request<RestCartPermissionGroupsResponse, RestErrorMessage>({
        path: `/cart-permission-groups/${cartPermissionGroupId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags cart-permission-groups
     * @name GetCollectionOfCartPermissionGroups
     * @summary Retrieves collection of cart permission groups.
     * @request GET:/cart-permission-groups
     * @secure
     */
    getCollectionOfCartPermissionGroups: (params: RequestParams = {}) =>
      this.request<RestCartPermissionGroupsCollectionResponse, RestErrorMessage>({
        path: `/cart-permission-groups`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  contentProductAbstractLists = {
    /**
     * No description
     *
     * @tags abstract-products
     * @name GetCollectionOfContentProductAbstractListsAbstractProducts
     * @summary Retrieves product abstract list by the content abstract product list content item.
     * @request GET:/content-product-abstract-lists/{contentProductAbstractListId}/abstract-products
     */
    getCollectionOfContentProductAbstractListsAbstractProducts: (
      contentProductAbstractListId: string,
      params: RequestParams = {},
    ) =>
      this.request<AbstractProductsRestCollectionResponse, RestErrorMessage>({
        path: `/content-product-abstract-lists/${contentProductAbstractListId}/abstract-products`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags content-product-abstract-lists
     * @name GetContentProductAbstractLists
     * @summary Retrieves content item abstract list.
     * @request GET:/content-product-abstract-lists/{contentProductAbstractListId}
     */
    getContentProductAbstractLists: (contentProductAbstractListId: string, params: RequestParams = {}) =>
      this.request<ContentProductAbstractListsResponse, RestErrorMessage>({
        path: `/content-product-abstract-lists/${contentProductAbstractListId}`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  orderPayments = {
    /**
     * No description
     *
     * @tags order-payments
     * @name CreateOrderPayments
     * @summary Updates order payment.
     * @request POST:/order-payments
     */
    createOrderPayments: (data: RestOrderPaymentsRequest, params: RequestParams = {}) =>
      this.request<RestOrderPaymentsResponse, RestErrorMessage>({
        path: `/order-payments`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  sharedCarts = {
    /**
     * No description
     *
     * @tags shared-carts
     * @name UpdateCartsSharedCarts
     * @summary Updates permission group for shared cart.
     * @request PATCH:/shared-carts/{sharedCartId}
     * @secure
     */
    updateCartsSharedCarts: (sharedCartId: string, params: RequestParams = {}) =>
      this.request<RestSharedCartsResponse, RestErrorMessage>({
        path: `/shared-carts/${sharedCartId}`,
        method: "PATCH",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags shared-carts
     * @name DeleteCartsSharedCarts
     * @summary Deletes cart sharing.
     * @request DELETE:/shared-carts/{sharedCartId}
     * @secure
     */
    deleteCartsSharedCarts: (sharedCartId: string, params: RequestParams = {}) =>
      this.request<void, RestErrorMessage>({
        path: `/shared-carts/${sharedCartId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  contentBanners = {
    /**
     * No description
     *
     * @tags content-banners
     * @name GetContentBanners
     * @summary Retrieve content banner item data.
     * @request GET:/content-banners/{contentBannerId}
     */
    getContentBanners: (contentBannerId: string, params: RequestParams = {}) =>
      this.request<RestContentBannerResponse, RestErrorMessage>({
        path: `/content-banners/${contentBannerId}`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  urlResolver = {
    /**
     * No description
     *
     * @tags url-resolver
     * @name GetCollectionOfUrlResolver
     * @summary Retrieves collection of urls by the `url` parameter provided in GET request.
     * @request GET:/url-resolver
     */
    getCollectionOfUrlResolver: (
      query: {
        /** URL to resolve. */
        url: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RestUrlResolverCollectionResponse, RestErrorMessage>({
        path: `/url-resolver`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),
  };
  customerAccess = {
    /**
     * No description
     *
     * @tags customer-access
     * @name GetCollectionOfCustomerAccess
     * @summary Retrieves collection of restricted resources.
     * @request GET:/customer-access
     */
    getCollectionOfCustomerAccess: (params: RequestParams = {}) =>
      this.request<RestCustomerAccessCollectionResponse, RestErrorMessage>({
        path: `/customer-access`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  healthCheck = {
    /**
     * No description
     *
     * @tags health-check
     * @name GetHealthCheck
     * @summary Retrieve services status.
     * @request GET:/health-check/{healthCheckId}
     */
    getHealthCheck: (healthCheckId: string, params: RequestParams = {}) =>
      this.request<RestHealthCheckResponseResponse, RestErrorMessage>({
        path: `/health-check/${healthCheckId}`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  shoppingLists = {
    /**
     * No description
     *
     * @tags shopping-lists
     * @name GetShoppingLists
     * @summary Retrieves a shopping list by id.
     * @request GET:/shopping-lists/{shoppingListId}
     * @secure
     */
    getShoppingLists: (shoppingListId: string, params: RequestParams = {}) =>
      this.request<RestShoppingListsResponse, RestErrorMessage>({
        path: `/shopping-lists/${shoppingListId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags shopping-lists
     * @name UpdateShoppingLists
     * @summary Updates a shopping list by id.
     * @request PATCH:/shopping-lists/{shoppingListId}
     * @secure
     */
    updateShoppingLists: (shoppingListId: string, data: RestShoppingListRequestRequest, params: RequestParams = {}) =>
      this.request<RestShoppingListsResponse, RestErrorMessage>({
        path: `/shopping-lists/${shoppingListId}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags shopping-lists
     * @name DeleteShoppingLists
     * @summary Deletes a shopping list by id.
     * @request DELETE:/shopping-lists/{shoppingListId}
     * @secure
     */
    deleteShoppingLists: (shoppingListId: string, params: RequestParams = {}) =>
      this.request<void, RestErrorMessage>({
        path: `/shopping-lists/${shoppingListId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags shopping-lists
     * @name GetCollectionOfShoppingLists
     * @summary Retrieves list of all customer's shopping lists.
     * @request GET:/shopping-lists
     * @secure
     */
    getCollectionOfShoppingLists: (params: RequestParams = {}) =>
      this.request<RestShoppingListsCollectionResponse, RestErrorMessage>({
        path: `/shopping-lists`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags shopping-lists
     * @name CreateShoppingLists
     * @summary Creates a shopping list.
     * @request POST:/shopping-lists
     * @secure
     */
    createShoppingLists: (data: RestShoppingListRequestRequest, params: RequestParams = {}) =>
      this.request<RestShoppingListsResponse, RestErrorMessage>({
        path: `/shopping-lists`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags shopping-list-items
     * @name CreateShoppingListsShoppingListItems
     * @summary Adds a shopping list item.
     * @request POST:/shopping-lists/{shoppingListId}/shopping-list-items
     * @secure
     */
    createShoppingListsShoppingListItems: (
      shoppingListId: string,
      data: RestShoppingListItemsRequest,
      params: RequestParams = {},
    ) =>
      this.request<RestShoppingListItemsResponse, RestErrorMessage>({
        path: `/shopping-lists/${shoppingListId}/shopping-list-items`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags shopping-list-items
     * @name UpdateShoppingListsShoppingListItems
     * @summary Updates the shopping list item.
     * @request PATCH:/shopping-lists/{shoppingListId}/shopping-list-items/{shoppingListItemId}
     * @secure
     */
    updateShoppingListsShoppingListItems: (
      shoppingListId: string,
      shoppingListItemId: string,
      data: RestShoppingListItemsRequest,
      params: RequestParams = {},
    ) =>
      this.request<RestShoppingListItemsResponse, RestErrorMessage>({
        path: `/shopping-lists/${shoppingListId}/shopping-list-items/${shoppingListItemId}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags shopping-list-items
     * @name DeleteShoppingListsShoppingListItems
     * @summary Deletes the shopping list item.
     * @request DELETE:/shopping-lists/{shoppingListId}/shopping-list-items/{shoppingListItemId}
     * @secure
     */
    deleteShoppingListsShoppingListItems: (
      shoppingListId: string,
      shoppingListItemId: string,
      params: RequestParams = {},
    ) =>
      this.request<void, RestErrorMessage>({
        path: `/shopping-lists/${shoppingListId}/shopping-list-items/${shoppingListItemId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
  productMeasurementUnits = {
    /**
     * No description
     *
     * @tags product-measurement-units
     * @name GetProductMeasurementUnits
     * @summary Retrieves product measurement unit by code.
     * @request GET:/product-measurement-units/{productMeasurementUnitId}
     */
    getProductMeasurementUnits: (productMeasurementUnitId: string, params: RequestParams = {}) =>
      this.request<RestProductMeasurementUnitsResponse, RestErrorMessage>({
        path: `/product-measurement-units/${productMeasurementUnitId}`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  returnReasons = {
    /**
     * No description
     *
     * @tags return-reasons
     * @name GetCollectionOfReturnReasons
     * @summary Retrieves list of return reasons.
     * @request GET:/return-reasons
     */
    getCollectionOfReturnReasons: (params: RequestParams = {}) =>
      this.request<RestReturnReasonsCollectionResponse, RestErrorMessage>({
        path: `/return-reasons`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  returns = {
    /**
     * No description
     *
     * @tags returns
     * @name GetReturns
     * @summary Retrieves return by id.
     * @request GET:/returns/{returnId}
     * @secure
     */
    getReturns: (returnId: string, params: RequestParams = {}) =>
      this.request<RestReturnsResponse, RestErrorMessage>({
        path: `/returns/${returnId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags returns
     * @name GetCollectionOfReturns
     * @summary Retrieves list of returns.
     * @request GET:/returns
     * @secure
     */
    getCollectionOfReturns: (params: RequestParams = {}) =>
      this.request<RestReturnRequestCollectionResponse, RestErrorMessage>({
        path: `/returns`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags returns
     * @name CreateReturns
     * @summary Creates a return.
     * @request POST:/returns
     * @secure
     */
    createReturns: (data: RestReturnRequestRequest, params: RequestParams = {}) =>
      this.request<RestReturnRequestResponse, RestErrorMessage>({
        path: `/returns`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  cmsPages = {
    /**
     * No description
     *
     * @tags cms-pages
     * @name GetCmsPages
     * @summary Retrieves a cms page by uuid.
     * @request GET:/cms-pages/{cmPageId}
     */
    getCmsPages: (cmPageId: string, params: RequestParams = {}) =>
      this.request<RestCmsPagesResponse, RestErrorMessage>({
        path: `/cms-pages/${cmPageId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags cms-pages
     * @name GetCollectionOfCmsPages
     * @summary Retrieves list of cms pages.
     * @request GET:/cms-pages
     */
    getCollectionOfCmsPages: (
      query?: {
        /** Search query string. */
        q?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RestCmsPagesCollectionResponse, RestErrorMessage>({
        path: `/cms-pages`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),
  };
  agentAccessTokens = {
    /**
     * No description
     *
     * @tags agent-access-tokens
     * @name CreateAgentAccessTokens
     * @summary Creates agent's access token.
     * @request POST:/agent-access-tokens
     */
    createAgentAccessTokens: (data: RestAgentAccessTokensRequestRequest, params: RequestParams = {}) =>
      this.request<RestAgentAccessTokensResponse, RestErrorMessage>({
        path: `/agent-access-tokens`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  agentCustomerImpersonationAccessTokens = {
    /**
     * No description
     *
     * @tags agent-customer-impersonation-access-tokens
     * @name CreateAgentCustomerImpersonationAccessTokens
     * @summary Creates customer imprsonation access token.
     * @request POST:/agent-customer-impersonation-access-tokens
     */
    createAgentCustomerImpersonationAccessTokens: (
      data: RestAgentCustomerImpersonationAccessTokensRequestRequest,
      params: RequestParams = {},
    ) =>
      this.request<RestAgentCustomerImpersonationAccessTokensResponse, RestErrorMessage>({
        path: `/agent-customer-impersonation-access-tokens`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  agentCustomerSearch = {
    /**
     * No description
     *
     * @tags agent-customer-search
     * @name GetCollectionOfAgentCustomerSearch
     * @summary Retrieves customer list by query provided in GET parameteres.
     * @request GET:/agent-customer-search
     */
    getCollectionOfAgentCustomerSearch: (
      query?: {
        /** Search query string. */
        q?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<RestAgentCustomerSearchCollectionResponse, RestErrorMessage>({
        path: `/agent-customer-search`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),
  };
  productManagementAttributes = {
    /**
     * No description
     *
     * @tags product-management-attributes
     * @name GetProductManagementAttributes
     * @summary Retrieves attribute by id.
     * @request GET:/product-management-attributes/{productManagementAttributeId}
     */
    getProductManagementAttributes: (productManagementAttributeId: string, params: RequestParams = {}) =>
      this.request<RestProductManagementAttributeResponse, RestErrorMessage>({
        path: `/product-management-attributes/${productManagementAttributeId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags product-management-attributes
     * @name GetCollectionOfProductManagementAttributes
     * @summary Retrieves list of attributes.
     * @request GET:/product-management-attributes
     */
    getCollectionOfProductManagementAttributes: (params: RequestParams = {}) =>
      this.request<RestProductManagementAttributeCollectionResponse, RestErrorMessage>({
        path: `/product-management-attributes`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  customerConfirmation = {
    /**
     * No description
     *
     * @tags customer-confirmation
     * @name CreateCustomerConfirmation
     * @summary Confirms customer registration.
     * @request POST:/customer-confirmation
     */
    createCustomerConfirmation: (data: RestCustomerConfirmationRequest, params: RequestParams = {}) =>
      this.request<void, RestErrorMessage>({
        path: `/customer-confirmation`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),
  };
  token = {
    /**
     * No description
     *
     * @tags token
     * @name CreateToken
     * @summary Create token.
     * @request POST:/token
     */
    createToken: (params: RequestParams = {}) =>
      this.request<RestTokenResponse, RestErrorMessage>({
        path: `/token`,
        method: "POST",
        format: "json",
        ...params,
      }),
  };
  availabilityNotifications = {
    /**
     * No description
     *
     * @tags availability-notifications
     * @name CreateAvailabilityNotifications
     * @summary Subscribe to receive a notification by email when product is back in stock.
     * @request POST:/availability-notifications
     */
    createAvailabilityNotifications: (params: RequestParams = {}) =>
      this.request<RestAvailabilityNotificationsResponse, RestErrorMessage>({
        path: `/availability-notifications`,
        method: "POST",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags availability-notifications
     * @name DeleteAvailabilityNotifications
     * @summary Unsubscribe from receiving notifications.
     * @request DELETE:/availability-notifications/{availabilityNotificationId}
     */
    deleteAvailabilityNotifications: (availabilityNotificationId: string, params: RequestParams = {}) =>
      this.request<void, RestErrorMessage>({
        path: `/availability-notifications/${availabilityNotificationId}`,
        method: "DELETE",
        ...params,
      }),
  };
  myAvailabilityNotifications = {
    /**
     * No description
     *
     * @tags my-availability-notifications
     * @name GetCollectionOfMyAvailabilityNotifications
     * @summary Retrieves a collection of notification subscriptions about products availability filtered by the current logged in customer.
     * @request GET:/my-availability-notifications
     * @secure
     */
    getCollectionOfMyAvailabilityNotifications: (params: RequestParams = {}) =>
      this.request<RestAvailabilityNotificationsCollectionResponse, RestErrorMessage>({
        path: `/my-availability-notifications`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  configurableBundleTemplates = {
    /**
     * No description
     *
     * @tags configurable-bundle-templates
     * @name GetConfigurableBundleTemplates
     * @summary Retrieves configurable bundle template by id.
     * @request GET:/configurable-bundle-templates/{configurableBundleTemplateId}
     */
    getConfigurableBundleTemplates: (configurableBundleTemplateId: string, params: RequestParams = {}) =>
      this.request<RestConfigurableBundleTemplatesResponse, RestErrorMessage>({
        path: `/configurable-bundle-templates/${configurableBundleTemplateId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags configurable-bundle-templates
     * @name GetCollectionOfConfigurableBundleTemplates
     * @summary Retrieves collection of ConfigurableBundleTemplates.
     * @request GET:/configurable-bundle-templates
     */
    getCollectionOfConfigurableBundleTemplates: (params: RequestParams = {}) =>
      this.request<RestConfigurableBundleTemplatesCollectionResponse, RestErrorMessage>({
        path: `/configurable-bundle-templates`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
}
