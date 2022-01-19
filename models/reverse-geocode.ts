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


import { GeocodeAddresses } from './geocode-addresses';

/**
 * 
 * @export
 * @interface ReverseGeocode
 */
export class ReverseGeocode {
    constructor(input?: any) {
        if (typeof input?.id !== "undefined") {
            this.id = input.id;
        }
        if (typeof input?.addresses !== "undefined") {
            this.addresses = input.addresses;
        }
        if (typeof input?.object !== "undefined") {
            this.object = input.object;
        }
    }

    /**
     * Unique identifier prefixed with `us_reverse_geocode_`.
     * @type {string}
     * @memberof ReverseGeocode
     */
    private '_id'?: string;
    public get id() { return (this._id || undefined) as string; }
    public set id(newValue: string) {
        if(newValue && !/^us_reverse_geocode_[a-zA-Z0-9_]+$/.test(newValue)) {
            throw new Error("Invalid id provided");
        }
        this._id = newValue;
    }
    
    /**
     * list of addresses 
     * @type {Array<GeocodeAddresses>}
     * @memberof ReverseGeocode
     */
    'addresses'?: Array<GeocodeAddresses>;
    
    /**
     * Value is resource type.
     * @type {string}
     * @memberof ReverseGeocode
     */
    'object'?: ReverseGeocodeObjectEnum;
    
}

/**
    * @export
    * @enum {string}
    */
export enum ReverseGeocodeObjectEnum {
    UsReverseGeocodeLookup = 'us_reverse_geocode_lookup'
}



/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

