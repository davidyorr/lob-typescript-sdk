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


import { TemplateVersion } from './template-version';

/**
 * 
 * @export
 * @interface TemplateVersionList
 */
export class TemplateVersionList {
    constructor(input?: any) {
        if (typeof input?.data !== "undefined") {
            this.data = input.data;
        }
        if (typeof input?.object !== "undefined") {
            this.object = input.object;
        }
        if (typeof input?.next_url !== "undefined") {
            this.next_url = input.next_url;
        }
        if (typeof input?.previous_url !== "undefined") {
            this.previous_url = input.previous_url;
        }
        if (typeof input?.count !== "undefined") {
            this.count = input.count;
        }
        if (typeof input?.total_count !== "undefined") {
            this.total_count = input.total_count;
        }
    }

    /**
     * list of template versions
     * @type {Array<TemplateVersion>}
     * @memberof TemplateVersionList
     */
    'data'?: Array<TemplateVersion>;
    
    /**
     * Value is type of resource.
     * @type {string}
     * @memberof TemplateVersionList
     */
    'object'?: string;
    
    /**
     * url of next page of items in list.
     * @type {string}
     * @memberof TemplateVersionList
     */
    'next_url'?: string | null;
    
    /**
     * url of previous page of items in list.
     * @type {string}
     * @memberof TemplateVersionList
     */
    'previous_url'?: string | null;
    
    /**
     * number of resources in a set
     * @type {number}
     * @memberof TemplateVersionList
     */
    'count'?: number;
    
    /**
     * indicates the total number of records. Provided when the request specifies an \"include\" query parameter
     * @type {number}
     * @memberof TemplateVersionList
     */
    'total_count'?: number;
    
}


/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

