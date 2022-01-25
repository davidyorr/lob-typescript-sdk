/* tslint:disable */
/* eslint-disable */
/**
 * Lob
 * The Lob API is organized around REST. Our API is designed to have predictable, resource-oriented URLs and uses HTTP response codes to indicate any API errors. <p> Looking for our [previous documentation](https://lob.github.io/legacy-docs/)?
 *
 * The version of the OpenAPI document: 1.3.0
 * Contact: lob-openapi@lob.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import globalAxios, {
  AxiosPromise,
  AxiosInstance,
  AxiosRequestConfig,
} from "axios";
import { Configuration } from "../configuration";
// Some imports not used depending on template conditions
// @ts-ignore
import {
  DUMMY_BASE_URL,
  assertParamExists,
  setApiKeyToObject,
  setBasicAuthToObject,
  setBearerAuthToObject,
  setOAuthToObject,
  setSearchParams,
  serializeDataIfNeeded,
  toPathString,
  createRequestFunction,
  valueToString,
} from "../common";
// @ts-ignore
import {
  BASE_PATH,
  COLLECTION_FORMATS,
  RequestArgs,
  BaseAPI,
  RequiredError,
} from "../base";
// @ts-ignore
import { BillingGroup } from "../models";
// @ts-ignore
import { BillingGroupEditable } from "../models";
// @ts-ignore
import { BillingGroupList } from "../models";
// @ts-ignore
import { LobError } from "../models";
/**
 * BillingGroupsApi - axios parameter creator
 * @export
 */
export const BillingGroupsApiAxiosParamCreator = function (
  configuration?: Configuration
) {
  return {
    /**
     * Creates a new billing_group with the provided properties.
     * @summary create
     * @param {BillingGroupEditable} billingGroupEditable
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    billingGroupCreate: async (
      billingGroupEditable: BillingGroupEditable,
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'billingGroupEditable' is not null or undefined
      assertParamExists(
        "billingGroupCreate",
        "billingGroupEditable",
        billingGroupEditable
      );
      const localVarPath = `/billing_groups`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "POST",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication basicAuth required
      // http basic authentication required
      setBasicAuthToObject(localVarRequestOptions, configuration);

      localVarHeaderParameter["Content-Type"] = "application/json";

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };
      localVarRequestOptions.data = serializeDataIfNeeded(
        billingGroupEditable,
        localVarRequestOptions,
        configuration
      );

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * Retrieves the details of an existing billing_group. You need only supply the unique billing_group identifier that was returned upon billing_group creation.
     * @summary get
     * @param {string} bgId id of the billing_group
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    billingGroupRetrieve: async (
      bgId: string,
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'bgId' is not null or undefined
      assertParamExists("billingGroupRetrieve", "bgId", bgId);
      const localVarPath = `/billing_groups/{bg_id}`.replace(
        `{${"bg_id"}}`,
        encodeURIComponent(String(bgId))
      );
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "GET",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication basicAuth required
      // http basic authentication required
      setBasicAuthToObject(localVarRequestOptions, configuration);

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * Updates all editable attributes of the billing_group with the given id.
     * @summary update
     * @param {string} bgId id of the billing_group
     * @param {BillingGroupEditable} billingGroupEditable
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    billingGroupUpdate: async (
      bgId: string,
      billingGroupEditable: BillingGroupEditable,
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'bgId' is not null or undefined
      assertParamExists("billingGroupUpdate", "bgId", bgId);
      // verify required parameter 'billingGroupEditable' is not null or undefined
      assertParamExists(
        "billingGroupUpdate",
        "billingGroupEditable",
        billingGroupEditable
      );
      const localVarPath = `/billing_groups/{bg_id}`.replace(
        `{${"bg_id"}}`,
        encodeURIComponent(String(bgId))
      );
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "POST",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication basicAuth required
      // http basic authentication required
      setBasicAuthToObject(localVarRequestOptions, configuration);

      localVarHeaderParameter["Content-Type"] = "application/json";

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };
      localVarRequestOptions.data = serializeDataIfNeeded(
        billingGroupEditable,
        localVarRequestOptions,
        configuration
      );

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * Returns a list of your billing_groups. The billing_groups are returned sorted by creation date, with the most recently created billing_groups appearing first.
     * @summary list
     * @param {number} [limit] How many results to return.
     * @param {number} [offset] An integer that designates the offset at which to begin returning results. Defaults to 0.
     * @param {Array<string>} [include] Request that the response include the total count by specifying &#x60;include[]&#x3D;total_count&#x60;.
     * @param {{ [key: string]: string; }} [dateCreated] Filter by date created.
     * @param {{ [key: string]: string; }} [dateModified] Filter by date modified.
     * @param {object} [sortBy] Sorts items by ascending or descending dates. Use either &#x60;date_created&#x60; or &#x60;send_date&#x60;, not both.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    billingGroupsList: async (
      limit?: number,
      offset?: number,
      include?: Array<string>,
      dateCreated?: { [key: string]: string },
      dateModified?: { [key: string]: string },
      sortBy?: object,
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/billing_groups`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "GET",
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication basicAuth required
      // http basic authentication required
      setBasicAuthToObject(localVarRequestOptions, configuration);

      if (limit !== undefined) {
        localVarQueryParameter["limit"] = limit;
      }

      if (offset !== undefined) {
        localVarQueryParameter["offset"] = offset;
      }

      if (include) {
        localVarQueryParameter["include"] = valueToString(include);
      }

      if (dateCreated !== undefined) {
        localVarQueryParameter["date_created"] = valueToString(dateCreated);
      }

      if (dateModified !== undefined) {
        localVarQueryParameter["date_modified"] = valueToString(dateModified);
      }

      if (sortBy !== undefined) {
        localVarQueryParameter["sort_by"] = valueToString(sortBy);
      }

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
  };
};

/**
 * BillingGroupsApi - functional programming interface
 * @export
 */
export const BillingGroupsApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator =
    BillingGroupsApiAxiosParamCreator(configuration);
  return {
    /**
     * Creates a new billing_group with the provided properties.
     * @summary create
     * @param {BillingGroupEditable} billingGroupEditable
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async billingGroupCreate(
      billingGroupEditable: BillingGroupEditable,
      options?: AxiosRequestConfig
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<BillingGroup>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.billingGroupCreate(
          billingGroupEditable,
          options
        );
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     * Retrieves the details of an existing billing_group. You need only supply the unique billing_group identifier that was returned upon billing_group creation.
     * @summary get
     * @param {string} bgId id of the billing_group
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async billingGroupRetrieve(
      bgId: string,
      options?: AxiosRequestConfig
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<BillingGroup>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.billingGroupRetrieve(bgId, options);
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     * Updates all editable attributes of the billing_group with the given id.
     * @summary update
     * @param {string} bgId id of the billing_group
     * @param {BillingGroupEditable} billingGroupEditable
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async billingGroupUpdate(
      bgId: string,
      billingGroupEditable: BillingGroupEditable,
      options?: AxiosRequestConfig
    ): Promise<
      (axios?: AxiosInstance, basePath?: string) => AxiosPromise<BillingGroup>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.billingGroupUpdate(
          bgId,
          billingGroupEditable,
          options
        );
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     * Returns a list of your billing_groups. The billing_groups are returned sorted by creation date, with the most recently created billing_groups appearing first.
     * @summary list
     * @param {number} [limit] How many results to return.
     * @param {number} [offset] An integer that designates the offset at which to begin returning results. Defaults to 0.
     * @param {Array<string>} [include] Request that the response include the total count by specifying &#x60;include[]&#x3D;total_count&#x60;.
     * @param {{ [key: string]: string; }} [dateCreated] Filter by date created.
     * @param {{ [key: string]: string; }} [dateModified] Filter by date modified.
     * @param {object} [sortBy] Sorts items by ascending or descending dates. Use either &#x60;date_created&#x60; or &#x60;send_date&#x60;, not both.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async billingGroupsList(
      limit?: number,
      offset?: number,
      include?: Array<string>,
      dateCreated?: { [key: string]: string },
      dateModified?: { [key: string]: string },
      sortBy?: object,
      options?: AxiosRequestConfig
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<BillingGroupList>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.billingGroupsList(
          limit,
          offset,
          include,
          dateCreated,
          dateModified,
          sortBy,
          options
        );
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
  };
};

/**
 * BillingGroupsApi - object-oriented interface
 * @export
 * @class BillingGroupsApi
 * @extends {BaseAPI}
 */
export class BillingGroupsApi extends BaseAPI {
  /**
   * Creates a new billing_group with the provided properties.
   * @summary create
   * @param {BillingGroupEditable} billingGroupEditable
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof BillingGroupsApi
   */
  public create(
    billingGroupEditable: BillingGroupEditable,
    options?: AxiosRequestConfig
  ) {
    return BillingGroupsApiFp(this.configuration)
      .billingGroupCreate(billingGroupEditable, options)
      .then((request) => request(this.axios, this.basePath))
      .then(function (response) {
        return new BillingGroup(response.data);
      })
      .catch((error) => {
        if (error.response?.data?.error?.message) {
          error.message = error.response.data.error.message;
        }
        throw error;
      });
  }

  /**
   * Retrieves the details of an existing billing_group. You need only supply the unique billing_group identifier that was returned upon billing_group creation.
   * @summary get
   * @param {string} bgId id of the billing_group
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof BillingGroupsApi
   */
  public get(bgId: string, options?: AxiosRequestConfig) {
    return BillingGroupsApiFp(this.configuration)
      .billingGroupRetrieve(bgId, options)
      .then((request) => request(this.axios, this.basePath))
      .then(function (response) {
        return new BillingGroup(response.data);
      })
      .catch((error) => {
        if (error.response?.data?.error?.message) {
          error.message = error.response.data.error.message;
        }
        throw error;
      });
  }

  /**
   * Updates all editable attributes of the billing_group with the given id.
   * @summary update
   * @param {string} bgId id of the billing_group
   * @param {BillingGroupEditable} billingGroupEditable
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof BillingGroupsApi
   */
  public update(
    bgId: string,
    billingGroupEditable: BillingGroupEditable,
    options?: AxiosRequestConfig
  ) {
    return BillingGroupsApiFp(this.configuration)
      .billingGroupUpdate(bgId, billingGroupEditable, options)
      .then((request) => request(this.axios, this.basePath))
      .then(function (response) {
        return new BillingGroup(response.data);
      })
      .catch((error) => {
        if (error.response?.data?.error?.message) {
          error.message = error.response.data.error.message;
        }
        throw error;
      });
  }

  /**
   * Returns a list of your billing_groups. The billing_groups are returned sorted by creation date, with the most recently created billing_groups appearing first.
   * @summary list
   * @param {number} [limit] How many results to return.
   * @param {number} [offset] An integer that designates the offset at which to begin returning results. Defaults to 0.
   * @param {Array<string>} [include] Request that the response include the total count by specifying &#x60;include[]&#x3D;total_count&#x60;.
   * @param {{ [key: string]: string; }} [dateCreated] Filter by date created.
   * @param {{ [key: string]: string; }} [dateModified] Filter by date modified.
   * @param {object} [sortBy] Sorts items by ascending or descending dates. Use either &#x60;date_created&#x60; or &#x60;send_date&#x60;, not both.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof BillingGroupsApi
   */
  public list(
    limit?: number,
    offset?: number,
    include?: Array<string>,
    dateCreated?: { [key: string]: string },
    dateModified?: { [key: string]: string },
    sortBy?: object,
    options?: AxiosRequestConfig
  ) {
    return BillingGroupsApiFp(this.configuration)
      .billingGroupsList(
        limit,
        offset,
        include,
        dateCreated,
        dateModified,
        sortBy,
        options
      )
      .then((request) => request(this.axios, this.basePath))
      .then(function (response) {
        return new BillingGroupList(response.data);
      })
      .catch((error) => {
        if (error.response?.data?.error?.message) {
          error.message = error.response.data.error.message;
        }
        throw error;
      });
  }
}

/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
