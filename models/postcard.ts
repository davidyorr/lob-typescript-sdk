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


import { Address } from './address';
import { AddressDomesticExpanded } from './address-domestic-expanded';
import { MailType } from './mail-type';
import { PostcardSize } from './postcard-size';
import { SendDate } from './send-date';
import { Thumbnail } from './thumbnail';
import { TrackingEventNormal } from './tracking-event-normal';

/**
 * 
 * @export
 * @interface Postcard
 */
export interface Postcard {
    /**
     * Unique identifier prefixed with `psc_`.
     * @type {string}
     * @memberof Postcard
     */
    'id': string;
    /**
     * 
     * @type {Address}
     * @memberof Postcard
     */
    'to'?: Address;
    /**
     * 
     * @type {AddressDomesticExpanded}
     * @memberof Postcard
     */
    'from'?: AddressDomesticExpanded;
    /**
     * 
     * @type {string}
     * @memberof Postcard
     */
    'carrier'?: PostcardCarrierEnum;
    /**
     * 
     * @type {Array<Thumbnail>}
     * @memberof Postcard
     */
    'thumbnails'?: Array<Thumbnail>;
    /**
     * 
     * @type {PostcardSize}
     * @memberof Postcard
     */
    'size'?: PostcardSize;
    /**
     * A date in YYYY-MM-DD format of the mailpiece\'s expected delivery date based on its `send_date`.
     * @type {string}
     * @memberof Postcard
     */
    'expected_delivery_date'?: string;
    /**
     * A timestamp in ISO 8601 format of the date the resource was created.
     * @type {string}
     * @memberof Postcard
     */
    'date_created'?: string;
    /**
     * A timestamp in ISO 8601 format of the date the resource was last modified.
     * @type {string}
     * @memberof Postcard
     */
    'date_modified'?: string;
    /**
     * Only returned if the resource has been successfully deleted.
     * @type {boolean}
     * @memberof Postcard
     */
    'deleted'?: boolean;
    /**
     * The unique ID of the HTML template used for the front of the postcard.
     * @type {string}
     * @memberof Postcard
     */
    'front_template_id': string | null;
    /**
     * The unique ID of the HTML template used for the back of the postcard.
     * @type {string}
     * @memberof Postcard
     */
    'back_template_id': string | null;
    /**
     * The unique ID of the specific version of the HTML template used for the front of the postcard.
     * @type {string}
     * @memberof Postcard
     */
    'front_template_version_id': string | null;
    /**
     * The unique ID of the specific version of the HTML template used for the back of the postcard.
     * @type {string}
     * @memberof Postcard
     */
    'back_template_version_id': string | null;
    /**
     * An array of tracking_event objects ordered by ascending `time`. Will not be populated for postcards created in test mode.
     * @type {Array<TrackingEventNormal>}
     * @memberof Postcard
     */
    'tracking_events'?: Array<TrackingEventNormal> | null;
    /**
     * 
     * @type {string}
     * @memberof Postcard
     */
    'object'?: PostcardObjectEnum;
    /**
     * A [signed link](#section/Asset-URLs) served over HTTPS. The link returned will expire in 30 days to prevent mis-sharing. Each time a GET request is initiated, a new signed URL will be generated.
     * @type {string}
     * @memberof Postcard
     */
    'url': string;
    /**
     * An internal description that identifies this resource. Must be no longer than 255 characters. 
     * @type {string}
     * @memberof Postcard
     */
    'description'?: string | null;
    /**
     * Use metadata to store custom information for tagging and labeling back to your internal systems. Must be an object with up to 20 key-value pairs. Keys must be at most 40 characters and values must be at most 500 characters. Neither can contain the characters `\"` and `\\`. i.e. \'{\"customer_id\" : \"NEWYORK2015\"}\' Nested objects are not supported.  See [Metadata](#section/Metadata) for more information.
     * @type {{ [key: string]: string; }}
     * @memberof Postcard
     */
    'metadata'?: { [key: string]: string; };
    /**
     * 
     * @type {MailType}
     * @memberof Postcard
     */
    'mail_type'?: MailType;
    /**
     * You can input a merge variable payload object to your template to render dynamic content. For example, if you have a template like: `{{variable_name}}`, pass in `{\"variable_name\": \"Harry\"}` to render `Harry`. `merge_variables` must be an object. Any type of value is accepted as long as the object is valid JSON; you can use `strings`, `numbers`, `booleans`, `arrays`, `objects`, or `null`. The max length of the object is 25,000 characters. If you call `JSON.stringify` on your object, it can be no longer than 25,000 characters. Your variable names cannot contain any whitespace or any of the following special characters: `!`, `\"`, `#`, `%`, `&`, `\'`, `(`, `)`, `*`, `+`, `,`, `/`, `;`, `<`, `=`, `>`, `@`, `[`, `\\`, `]`, `^`, `` ` ``, `{`, `|`, `}`, `~`. More instructions can be found in [our guide to using html and merge variables](https://lob.com/resources/guides/general/using-html-and-merge-variables). Depending on your [Merge Variable strictness](https://dashboard.lob.com/#/settings/account) setting, if you define variables in your HTML but do not pass them here, you will either receive an error or the variable will render as an empty string.
     * @type {object}
     * @memberof Postcard
     */
    'merge_variables'?: object | null;
    /**
     * 
     * @type {SendDate}
     * @memberof Postcard
     */
    'send_date'?: SendDate;
}

/**
    * @export
    * @enum {string}
    */
export enum PostcardCarrierEnum {
    Usps = 'USPS'
}
/**
    * @export
    * @enum {string}
    */
export enum PostcardObjectEnum {
    Postcard = 'postcard'
}


