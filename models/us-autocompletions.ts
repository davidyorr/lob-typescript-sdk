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


import { Suggestions } from './suggestions';

/**
 * 
 * @export
 * @interface UsAutocompletions
 */
export class UsAutocompletions {
    /**
     * Unique identifier prefixed with `us_auto_`.
     * @type {string}
     * @memberof UsAutocompletions
     */
    private '_id'?: string;
    public get id() { return (this._id || undefined) as string; }
    public set id(newValue: string) {
        if(newValue && !/^us_auto_[a-zA-Z0-9]+$/.test(newValue)) {
            throw new Error("Invalid id provided");
        }
        this._id = newValue;
    }
    /**
     * An array of objects representing suggested addresses. 
     * @type {Array<Suggestions>}
     * @memberof UsAutocompletions
     */
    'suggestions'?: Array<Suggestions>;
    /**
     * Value is resource type.
     * @type {string}
     * @memberof UsAutocompletions
     */
    'object'?: UsAutocompletionsObjectEnum;
}

/**
    * @export
    * @enum {string}
    */
export enum UsAutocompletionsObjectEnum {
    UsAutocompletion = 'us_autocompletion'
}



/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
