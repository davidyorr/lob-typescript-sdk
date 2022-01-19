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


import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction, valueToString } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { CardOrder } from '../models';
// @ts-ignore
import { CardOrderEditable } from '../models';
// @ts-ignore
import { InlineResponse200 } from '../models';
/**
 * CardOrdersApi - axios parameter creator
 * @export
 */
export const CardOrdersApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Creates a new card order given information
         * @summary create
         * @param {string} cardId The ID of the card to which the card orders belong.
         * @param {CardOrderEditable} cardOrderEditable 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        cardOrderCreate: async (cardId: string, cardOrderEditable: CardOrderEditable, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'cardId' is not null or undefined
            assertParamExists('cardOrderCreate', 'cardId', cardId)
            // verify required parameter 'cardOrderEditable' is not null or undefined
            assertParamExists('cardOrderCreate', 'cardOrderEditable', cardOrderEditable)
            const localVarPath = `/cards/{card_id}/orders`
                .replace(`{${"card_id"}}`, encodeURIComponent(String(cardId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication basicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(cardOrderEditable, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Retrieves the card orders associated with the given card id.
         * @summary get
         * @param {string} cardId The ID of the card to which the card orders belong.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        cardOrdersRetrieve: async (cardId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'cardId' is not null or undefined
            assertParamExists('cardOrdersRetrieve', 'cardId', cardId)
            const localVarPath = `/cards/{card_id}/orders`
                .replace(`{${"card_id"}}`, encodeURIComponent(String(cardId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication basicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * CardOrdersApi - functional programming interface
 * @export
 */
export const CardOrdersApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = CardOrdersApiAxiosParamCreator(configuration)
    return {
        /**
         * Creates a new card order given information
         * @summary create
         * @param {string} cardId The ID of the card to which the card orders belong.
         * @param {CardOrderEditable} cardOrderEditable 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async cardOrderCreate(cardId: string, cardOrderEditable: CardOrderEditable, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CardOrder>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.cardOrderCreate(cardId, cardOrderEditable, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Retrieves the card orders associated with the given card id.
         * @summary get
         * @param {string} cardId The ID of the card to which the card orders belong.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async cardOrdersRetrieve(cardId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<InlineResponse200>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.cardOrdersRetrieve(cardId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * CardOrdersApi - object-oriented interface
 * @export
 * @class CardOrdersApi
 * @extends {BaseAPI}
 */
export class CardOrdersApi extends BaseAPI {
    /**
     * Creates a new card order given information
     * @summary create
     * @param {string} cardId The ID of the card to which the card orders belong.
     * @param {CardOrderEditable} cardOrderEditable 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CardOrdersApi
     */
    public create(cardId: string, cardOrderEditable: CardOrderEditable, options?: AxiosRequestConfig) {
        return CardOrdersApiFp(this.configuration).cardOrderCreate(cardId, cardOrderEditable, options).then((request) => request(this.axios, this.basePath))
            .then(function (response) {
                return new CardOrder(response.data);
            }).catch(error => {
                if (error.response?.data?.error?.message) {
                    error.message = error.response.data.error.message;
                }
                throw error;
              });
    }

    /**
     * Retrieves the card orders associated with the given card id.
     * @summary get
     * @param {string} cardId The ID of the card to which the card orders belong.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CardOrdersApi
     */
    public get(cardId: string, options?: AxiosRequestConfig) {
        return CardOrdersApiFp(this.configuration).cardOrdersRetrieve(cardId, options).then((request) => request(this.axios, this.basePath))
            .then(function (response) {
                return new InlineResponse200(response.data);
            }).catch(error => {
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

