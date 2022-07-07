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

import { MailType } from "./mail-type";
import { SelfMailerSize } from "./self-mailer-size";
import { TrackingEventCertified } from "./tracking-event-certified";

/**
 *
 * @export
 * @class SelfMailer
 */
export class SelfMailer {
  constructor(input?: any) {
    if (typeof input?.id !== "undefined") {
      this.id = input.id;
    }
    if (typeof input?.to !== "undefined") {
      this.to = input.to;
    }
    if (typeof input?.from !== "undefined") {
      this.from = input.from;
    }
    if (typeof input?.size !== "undefined") {
      this.size = input.size;
    }
    if (typeof input?.description !== "undefined") {
      this.description = input.description;
    }
    if (typeof input?.metadata !== "undefined") {
      this.metadata = input.metadata;
    }
    if (typeof input?.mail_type !== "undefined") {
      this.mail_type = input.mail_type;
    }
    if (typeof input?.merge_variables !== "undefined") {
      this.merge_variables = input.merge_variables;
    }
    if (typeof input?.send_date !== "undefined") {
      this.send_date = input.send_date;
    }
    if (typeof input?.outside_template_id !== "undefined") {
      this.outside_template_id = input.outside_template_id;
    }
    if (typeof input?.inside_template_id !== "undefined") {
      this.inside_template_id = input.inside_template_id;
    }
    if (typeof input?.outside_template_version_id !== "undefined") {
      this.outside_template_version_id = input.outside_template_version_id;
    }
    if (typeof input?.inside_template_version_id !== "undefined") {
      this.inside_template_version_id = input.inside_template_version_id;
    }
    if (typeof input?.object !== "undefined") {
      this.object = input.object;
    }
    if (typeof input?.tracking_events !== "undefined") {
      this.tracking_events = input.tracking_events;
    }
    if (typeof input?.url !== "undefined") {
      this.url = input.url;
    }
  }

  /**
   * Unique identifier prefixed with `sfm_`.
   * @type {string}
   * @memberof SelfMailer
   */
  private "_id": string;
  public get id() {
    return this._id;
  }
  public set id(newValue: string) {
    if (newValue && !/^sfm_[a-zA-Z0-9]+$/.test(newValue)) {
      throw new Error("Invalid id provided");
    }
    this._id = newValue;
  }

  /**
   * Must either be an address ID or an inline object with correct address parameters.
   * @type {string}
   * @memberof SelfMailer
   */

  "to"?: string | Models.AddressEditable;

  /**
   * Must either be an address ID or an inline object with correct address parameters.
   * @type {string}
   * @memberof SelfMailer
   */

  "from"?: string | Models.AddressEditable;

  /**
   *
   * @type {SelfMailerSize}
   * @memberof SelfMailer
   */
  "size"?: SelfMailerSize;

  /**
   * An internal description that identifies this resource. Must be no longer than 255 characters.
   * @type {string}
   * @memberof SelfMailer
   */
  "description"?: string | null;

  /**
   * Use metadata to store custom information for tagging and labeling back to your internal systems. Must be an object with up to 20 key-value pairs. Keys must be at most 40 characters and values must be at most 500 characters. Neither can contain the characters `\"` and `\\`. i.e. \'{\"customer_id\" : \"NEWYORK2015\"}\' Nested objects are not supported.  See [Metadata](#section/Metadata) for more information.
   * @type {{ [key: string]: string; }}
   * @memberof SelfMailer
   */
  "metadata"?: { [key: string]: string };

  /**
   *
   * @type {MailType}
   * @memberof SelfMailer
   */
  "mail_type"?: MailType;

  /**
   * You can input a merge variable payload object to your template to render dynamic content. For example, if you have a template like: `{{variable_name}}`, pass in `{\"variable_name\": \"Harry\"}` to render `Harry`. `merge_variables` must be an object. Any type of value is accepted as long as the object is valid JSON; you can use `strings`, `numbers`, `booleans`, `arrays`, `objects`, or `null`. The max length of the object is 25,000 characters. If you call `JSON.stringify` on your object, it can be no longer than 25,000 characters. Your variable names cannot contain any whitespace or any of the following special characters: `!`, `\"`, `#`, `%`, `&`, `\'`, `(`, `)`, `*`, `+`, `,`, `/`, `;`, `<`, `=`, `>`, `@`, `[`, `\\`, `]`, `^`, `` ` ``, `{`, `|`, `}`, `~`. More instructions can be found in [our guide to using html and merge variables](https://lob.com/resources/guides/general/using-html-and-merge-variables). Depending on your [Merge Variable strictness](https://dashboard.lob.com/#/settings/account) setting, if you define variables in your HTML but do not pass them here, you will either receive an error or the variable will render as an empty string.
   * @type {object}
   * @memberof SelfMailer
   */
  "merge_variables"?: object | null;

  /**
   * A timestamp in ISO 8601 format which specifies a date after the current time and up to 180 days in the future to send the letter off for production. Setting a send date overrides the default [cancellation window](#section/Cancellation-Windows) applied to the mailpiece. Until the `send_date` has passed, the mailpiece can be canceled. If a date in the format `2017-11-01` is passed, it will evaluate to midnight UTC of that date (`2017-11-01T00:00:00.000Z`). If a datetime is passed, that exact time will be used. A `send_date` passed with no time zone will default to UTC, while a `send_date` passed with a time zone will be converted to UTC.
   * @type {string}
   * @memberof SelfMailer
   */
  "send_date"?: string;

  /**
   * The unique ID of the HTML template used for the outside of the self mailer.
   * @type {string}
   * @memberof SelfMailer
   */
  private "_outside_template_id"?: string | null;
  public get outside_template_id() {
    return (this._outside_template_id || null || undefined) as string;
  }
  public set outside_template_id(newValue: string | null) {
    if (newValue && !/^tmpl_[a-zA-Z0-9]+$/.test(newValue)) {
      throw new Error("Invalid outside_template_id provided");
    }
    this._outside_template_id = newValue;
  }

  /**
   * The unique ID of the HTML template used for the inside of the self mailer.
   * @type {string}
   * @memberof SelfMailer
   */
  private "_inside_template_id"?: string | null;
  public get inside_template_id() {
    return (this._inside_template_id || null || undefined) as string;
  }
  public set inside_template_id(newValue: string | null) {
    if (newValue && !/^tmpl_[a-zA-Z0-9]+$/.test(newValue)) {
      throw new Error("Invalid inside_template_id provided");
    }
    this._inside_template_id = newValue;
  }

  /**
   * The unique ID of the specific version of the HTML template used for the outside of the self mailer.
   * @type {string}
   * @memberof SelfMailer
   */
  private "_outside_template_version_id"?: string | null;
  public get outside_template_version_id() {
    return (this._outside_template_version_id || null || undefined) as string;
  }
  public set outside_template_version_id(newValue: string | null) {
    if (newValue && !/^vrsn_[a-zA-Z0-9]+$/.test(newValue)) {
      throw new Error("Invalid outside_template_version_id provided");
    }
    this._outside_template_version_id = newValue;
  }

  /**
   * The unique ID of the specific version of the HTML template used for the inside of the self mailer.
   * @type {string}
   * @memberof SelfMailer
   */
  private "_inside_template_version_id"?: string | null;
  public get inside_template_version_id() {
    return (this._inside_template_version_id || null || undefined) as string;
  }
  public set inside_template_version_id(newValue: string | null) {
    if (newValue && !/^vrsn_[a-zA-Z0-9]+$/.test(newValue)) {
      throw new Error("Invalid inside_template_version_id provided");
    }
    this._inside_template_version_id = newValue;
  }

  /**
   * Value is resource type.
   * @type {string}
   * @memberof SelfMailer
   */
  "object"?: SelfMailerObjectEnum;

  /**
   * An array of certified tracking events ordered by ascending `time`. Not populated in test mode.
   * @type {Array<TrackingEventCertified>}
   * @memberof SelfMailer
   */
  "tracking_events"?: Array<TrackingEventCertified>;

  /**
   * A [signed link](#section/Asset-URLs) served over HTTPS. The link returned will expire in 30 days to prevent mis-sharing. Each time a GET request is initiated, a new signed URL will be generated.
   * @type {string}
   * @memberof SelfMailer
   */
  private "_url": string;
  public get url() {
    return this._url;
  }
  public set url(newValue: string) {
    if (
      newValue &&
      !/^https:\/\/(lob-assets|lob-assets-staging)\.com\/(letters|postcards|bank-accounts|checks|self-mailers|cards)\/[a-z]{3,4}_[a-z0-9]{15,16}(\.pdf|_thumb_[a-z]+_[0-9]+\.png)\?(version=[a-z0-9-]*&)?expires=[0-9]{10}&signature=[a-zA-Z0-9-_]+$/.test(
        newValue
      )
    ) {
      throw new Error("Invalid url provided");
    }
    this._url = newValue;
  }

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
export enum SelfMailerObjectEnum {
  SelfMailer = "self_mailer",
}

/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
