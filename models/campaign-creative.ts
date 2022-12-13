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

import * as Models from "./index";

import { Campaign } from "./campaign";

/**
 *
 * @export
 * @class CampaignCreative
 */
export class CampaignCreative {
  constructor(input?: any) {
    if (typeof input?.id !== "undefined") {
      this.id = input.id;
    }
    if (typeof input?.description !== "undefined") {
      this.description = input.description;
    }
    if (typeof input?.from !== "undefined") {
      this.from = input.from;
    }
    if (typeof input?.resource_type !== "undefined") {
      this.resource_type = input.resource_type;
    }
    if (typeof input?.details !== "undefined") {
      this.details = input.details;
    }
    if (typeof input?.metadata !== "undefined") {
      this.metadata = input.metadata;
    }
    if (typeof input?.template_preview_urls !== "undefined") {
      this.template_preview_urls = input.template_preview_urls;
    }
    if (typeof input?.template_previews !== "undefined") {
      this.template_previews = input.template_previews;
    }
    if (typeof input?.deleted !== "undefined") {
      this.deleted = input.deleted;
    }
    if (typeof input?.campaigns !== "undefined") {
      this.campaigns = input.campaigns;
    }
    if (typeof input?.date_created !== "undefined") {
      this.date_created = input.date_created;
    }
    if (typeof input?.date_modified !== "undefined") {
      this.date_modified = input.date_modified;
    }
    if (typeof input?.object !== "undefined") {
      this.object = input.object;
    }
  }

  /**
   * Unique identifier prefixed with `crv_`.
   * @type {string}
   * @memberof CampaignCreative
   */
  private "_id"?: string;
  public get id() {
    return (this._id || undefined) as string;
  }
  public set id(newValue: string) {
    if (newValue && !/^crv_[a-zA-Z0-9]+$/.test(newValue)) {
      throw new Error("Invalid id provided");
    }
    this._id = newValue;
  }

  /**
   * An internal description that identifies this resource. Must be no longer than 255 characters.
   * @type {string}
   * @memberof CampaignCreative
   */
  "description"?: string | null;

  /**
   * Must either be an address ID or an inline object with correct address parameters.
   * @type {any}
   * @memberof CampaignCreative
   */

  "from"?: string | Models.AddressEditable;

  /**
   * Mailpiece type for the creative
   * @type {string}
   * @memberof CampaignCreative
   */
  "resource_type"?: CampaignCreativeResourceTypeEnum;

  /**
   * Either PostcardDetailsReturned or LetterDetailsReturned
   * @type {any}
   * @memberof CampaignCreative
   */

  "details"?: Models.PostcardDetailsWritable;

  /**
   * Use metadata to store custom information for tagging and labeling back to your internal systems. Must be an object with up to 20 key-value pairs. Keys must be at most 40 characters and values must be at most 500 characters. Neither can contain the characters `\"` and `\\`. i.e. \'{\"customer_id\" : \"NEWYORK2015\"}\' Nested objects are not supported.  See [Metadata](#section/Metadata) for more information.
   * @type {{ [key: string]: string; }}
   * @memberof CampaignCreative
   */
  "metadata"?: { [key: string]: string };

  /**
   * Preview URLs associated with a creative\'s artwork asset(s) if the creative uses HTML templates as assets.
   * @type {object}
   * @memberof CampaignCreative
   */
  "template_preview_urls"?: object;

  /**
   * A list of template preview objects if the creative uses HTML template(s) as artwork asset(s).
   * @type {Array<object>}
   * @memberof CampaignCreative
   */
  "template_previews"?: Array<object>;

  /**
   * Only returned if the resource has been successfully deleted.
   * @type {boolean}
   * @memberof CampaignCreative
   */
  "deleted"?: boolean;

  /**
   *
   * @type {Array<Campaign>}
   * @memberof CampaignCreative
   */
  "campaigns"?: Array<Campaign>;

  /**
   * A timestamp in ISO 8601 format of the date the resource was created.
   * @type {string}
   * @memberof CampaignCreative
   */
  "date_created"?: string;

  /**
   * A timestamp in ISO 8601 format of the date the resource was last modified.
   * @type {string}
   * @memberof CampaignCreative
   */
  "date_modified"?: string;

  /**
   * Value is resource type.
   * @type {string}
   * @memberof CampaignCreative
   */
  "object"?: CampaignCreativeObjectEnum;

  public toJSON() {
    let out = {};
    for (const [key, value] of Object.entries(this)) {
      out = Object.assign({}, out, {
        [key[0] === "_" ? key.substr(1, key.length) : key]: value,
      });
    }
    return out;
  }
}

/**
 * @export
 * @enum {string}
 */
export enum CampaignCreativeResourceTypeEnum {
  Letter = "letter",
  Postcard = "postcard",
}
/**
 * @export
 * @enum {string}
 */
export enum CampaignCreativeObjectEnum {
  Creative = "creative",
}

/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
