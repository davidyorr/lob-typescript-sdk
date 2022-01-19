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


import { Thumbnail } from './thumbnail';

/**
 * 
 * @export
 * @interface Card
 */
export class Card {
    constructor(input?: any) {
        if (typeof input?.id !== "undefined") {
            this.id = input.id;
        }
        if (typeof input?.url !== "undefined") {
            this.url = input.url;
        }
        if (typeof input?.auto_reorder !== "undefined") {
            this.auto_reorder = input.auto_reorder;
        }
        if (typeof input?.reorder_quantity !== "undefined") {
            this.reorder_quantity = input.reorder_quantity;
        }
        if (typeof input?.raw_url !== "undefined") {
            this.raw_url = input.raw_url;
        }
        if (typeof input?.front_original_url !== "undefined") {
            this.front_original_url = input.front_original_url;
        }
        if (typeof input?.back_original_url !== "undefined") {
            this.back_original_url = input.back_original_url;
        }
        if (typeof input?.thumbnails !== "undefined") {
            this.thumbnails = input.thumbnails;
        }
        if (typeof input?.available_quantity !== "undefined") {
            this.available_quantity = input.available_quantity;
        }
        if (typeof input?.pending_quantity !== "undefined") {
            this.pending_quantity = input.pending_quantity;
        }
        if (typeof input?.status !== "undefined") {
            this.status = input.status;
        }
        if (typeof input?.orientation !== "undefined") {
            this.orientation = input.orientation;
        }
        if (typeof input?.threshold_amount !== "undefined") {
            this.threshold_amount = input.threshold_amount;
        }
        if (typeof input?.date_created !== "undefined") {
            this.date_created = input.date_created;
        }
        if (typeof input?.date_modified !== "undefined") {
            this.date_modified = input.date_modified;
        }
        if (typeof input?.deleted !== "undefined") {
            this.deleted = input.deleted;
        }
        if (typeof input?.object !== "undefined") {
            this.object = input.object;
        }
        if (typeof input?.description !== "undefined") {
            this.description = input.description;
        }
        if (typeof input?.size !== "undefined") {
            this.size = input.size;
        }
    }

    /**
     * Unique identifier prefixed with `card_`.
     * @type {string}
     * @memberof Card
     */
    private '_id'?: string;
    public get id() { return (this._id || undefined) as string; }
    public set id(newValue: string) {
        if(newValue && !/^card_[a-zA-Z0-9]+$/.test(newValue)) {
            throw new Error("Invalid id provided");
        }
        this._id = newValue;
    }
    
    /**
     * The signed link for the card.
     * @type {string}
     * @memberof Card
     */
    'url'?: string;
    
    /**
     * True if the cards should be auto-reordered.
     * @type {boolean}
     * @memberof Card
     */
    'auto_reorder'?: boolean;
    
    /**
     * The number of cards to be reordered.
     * @type {number}
     * @memberof Card
     */
    'reorder_quantity'?: number | null;
    
    /**
     * The raw URL of the card.
     * @type {string}
     * @memberof Card
     */
    'raw_url'?: string;
    
    /**
     * The original URL of the front template.
     * @type {string}
     * @memberof Card
     */
    'front_original_url'?: string;
    
    /**
     * The original URL of the back template.
     * @type {string}
     * @memberof Card
     */
    'back_original_url'?: string;
    
    /**
     * 
     * @type {Array<Thumbnail>}
     * @memberof Card
     */
    'thumbnails'?: Array<Thumbnail>;
    
    /**
     * The available quantity of cards.
     * @type {number}
     * @memberof Card
     */
    'available_quantity'?: number;
    
    /**
     * The pending quantity of cards.
     * @type {number}
     * @memberof Card
     */
    'pending_quantity'?: number;
    
    /**
     * 
     * @type {string}
     * @memberof Card
     */
    'status'?: CardStatusEnum;
    
    /**
     * The orientation of the card.
     * @type {string}
     * @memberof Card
     */
    'orientation'?: CardOrientationEnum;
    
    /**
     * The threshold amount of the card
     * @type {number}
     * @memberof Card
     */
    'threshold_amount'?: number;
    
    /**
     * A timestamp in ISO 8601 format of the date the resource was created.
     * @type {string}
     * @memberof Card
     */
    'date_created'?: string;
    
    /**
     * A timestamp in ISO 8601 format of the date the resource was last modified.
     * @type {string}
     * @memberof Card
     */
    'date_modified'?: string;
    
    /**
     * Only returned if the resource has been successfully deleted.
     * @type {boolean}
     * @memberof Card
     */
    'deleted'?: boolean;
    
    /**
     * object
     * @type {string}
     * @memberof Card
     */
    'object'?: CardObjectEnum;
    
    /**
     * Description of the card.
     * @type {string}
     * @memberof Card
     */
    'description'?: string | null;
    
    /**
     * The size of the card
     * @type {string}
     * @memberof Card
     */
    'size'?: CardSizeEnum;
    
}

/**
    * @export
    * @enum {string}
    */
export enum CardStatusEnum {
    Processed = 'processed',
    Rendered = 'rendered'
}
/**
    * @export
    * @enum {string}
    */
export enum CardOrientationEnum {
    Horizontal = 'horizontal',
    Vertical = 'vertical'
}
/**
    * @export
    * @enum {string}
    */
export enum CardObjectEnum {
    Card = 'card'
}
/**
    * @export
    * @enum {string}
    */
export enum CardSizeEnum {
    _3375x2125 = '3.375x2.125',
    _2125x3375 = '2.125x3.375'
}



/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

