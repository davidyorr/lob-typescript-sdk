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

/**
 *
 * @export
 * @class SelfMailerEditable
 */
export class SelfMailerEditable {
  constructor(input?: any) {
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
    if (typeof input?.inside !== "undefined") {
      this.inside = input.inside;
    }
    if (typeof input?.outside !== "undefined") {
      this.outside = input.outside;
    }
    if (typeof input?.billing_group_id !== "undefined") {
      this.billing_group_id = input.billing_group_id;
    }
  }

  /**
   * Must either be an address ID or an inline object with correct address parameters.
   * @type {any}
   * @memberof SelfMailerEditable
   */

  "to": string | Models.AddressEditable;

  /**
   * Must either be an address ID or an inline object with correct address parameters.
   * @type {any}
   * @memberof SelfMailerEditable
   */

  "from"?: string | Models.AddressEditable;

  /**
   *
   * @type {SelfMailerSize}
   * @memberof SelfMailerEditable
   */
  "size"?: SelfMailerSize;

  /**
   * An internal description that identifies this resource. Must be no longer than 255 characters.
   * @type {string}
   * @memberof SelfMailerEditable
   */
  "description"?: string | null;

  /**
   * Use metadata to store custom information for tagging and labeling back to your internal systems. Must be an object with up to 20 key-value pairs. Keys must be at most 40 characters and values must be at most 500 characters. Neither can contain the characters `\"` and `\\`. i.e. \'{\"customer_id\" : \"NEWYORK2015\"}\' Nested objects are not supported.  See [Metadata](#section/Metadata) for more information.
   * @type {{ [key: string]: string; }}
   * @memberof SelfMailerEditable
   */
  "metadata"?: { [key: string]: string };

  /**
   *
   * @type {MailType}
   * @memberof SelfMailerEditable
   */
  "mail_type"?: MailType;

  /**
   * You can input a merge variable payload object to your template to render dynamic content. For example, if you have a template like: `{{variable_name}}`, pass in `{\"variable_name\": \"Harry\"}` to render `Harry`. `merge_variables` must be an object. Any type of value is accepted as long as the object is valid JSON; you can use `strings`, `numbers`, `booleans`, `arrays`, `objects`, or `null`. The max length of the object is 25,000 characters. If you call `JSON.stringify` on your object, it can be no longer than 25,000 characters. Your variable names cannot contain any whitespace or any of the following special characters: `!`, `\"`, `#`, `%`, `&`, `\'`, `(`, `)`, `*`, `+`, `,`, `/`, `;`, `<`, `=`, `>`, `@`, `[`, `\\`, `]`, `^`, `` ` ``, `{`, `|`, `}`, `~`. More instructions can be found in [our guide to using html and merge variables](https://lob.com/resources/guides/general/using-html-and-merge-variables). Depending on your [Merge Variable strictness](https://dashboard.lob.com/#/settings/account) setting, if you define variables in your HTML but do not pass them here, you will either receive an error or the variable will render as an empty string.
   * @type {object}
   * @memberof SelfMailerEditable
   */
  "merge_variables"?: object | null;

  /**
   * A timestamp in ISO 8601 format which specifies a date after the current time and up to 180 days in the future to send the letter off for production. Setting a send date overrides the default [cancellation window](#section/Cancellation-Windows) applied to the mailpiece. Until the `send_date` has passed, the mailpiece can be canceled. If a date in the format `2017-11-01` is passed, it will evaluate to midnight UTC of that date (`2017-11-01T00:00:00.000Z`). If a datetime is passed, that exact time will be used. A `send_date` passed with no time zone will default to UTC, while a `send_date` passed with a time zone will be converted to UTC.
   * @type {string}
   * @memberof SelfMailerEditable
   */
  "send_date"?: string;

  /**
   * The artwork to use as the inside of your self mailer.
   * @type {string}
   * @memberof SelfMailerEditable
   */
  "inside": string;

  /**
   * The artwork to use as the outside of your self mailer.
   * @type {string}
   * @memberof SelfMailerEditable
   */
  "outside": string;

  /**
   * An optional string with the billing group ID to tag your usage with. Is used for billing purposes. Requires special activation to use. See [Billing Group API](https://lob.github.io/lob-openapi/#tag/Billing-Groups) for more information.
   * @type {string}
   * @memberof SelfMailerEditable
   */
  "billing_group_id"?: string;

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
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
