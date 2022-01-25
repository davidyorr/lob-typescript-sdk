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

import { EventType } from "./event-type";

/**
 *
 * @export
 * @class Events
 */
export class Events {
  constructor(input?: any) {
    if (typeof input?.id !== "undefined") {
      this.id = input.id;
    }
    if (typeof input?.body !== "undefined") {
      this.body = input.body;
    }
    if (typeof input?.reference_id !== "undefined") {
      this.reference_id = input.reference_id;
    }
    if (typeof input?.event_type !== "undefined") {
      this.event_type = input.event_type;
    }
    if (typeof input?.date_created !== "undefined") {
      this.date_created = input.date_created;
    }
    if (typeof input?.object !== "undefined") {
      this.object = input.object;
    }
  }

  /**
   * Unique identifier prefixed with `evt_`.
   * @type {string}
   * @memberof Events
   */
  private "_id"?: string;
  public get id() {
    return (this._id || undefined) as string;
  }
  public set id(newValue: string) {
    if (newValue && !/^evt_[a-zA-Z0-9_]+$/.test(newValue)) {
      throw new Error("Invalid id provided");
    }
    this._id = newValue;
  }

  /**
   * The body of the associated resource as they were at the time of the event, i.e. the [postcard object](#operation/postcard_retrieve), [the letter object](#operation/letter_retrieve), [the check object](#operation/check_retrieve), [the address object](#operation/address_retrieve), or [the bank account object](#operation/bank_account_retrieve). For `.deleted` events, the body matches the response for the corresponding delete endpoint for that resource (e.g. the [postcard delete response](#operation/postcard_delete)).
   * @type {object}
   * @memberof Events
   */
  "body"?: object;

  /**
   * Unique identifier of the related resource for the event.
   * @type {string}
   * @memberof Events
   */
  "reference_id"?: string;

  /**
   *
   * @type {EventType}
   * @memberof Events
   */
  "event_type"?: EventType;

  /**
   * A timestamp in ISO 8601 format of the date the resource was created.
   * @type {string}
   * @memberof Events
   */
  "date_created"?: string;

  /**
   * Value is resource type.
   * @type {string}
   * @memberof Events
   */
  "object"?: EventsObjectEnum;
}

/**
 * @export
 * @enum {string}
 */
export enum EventsObjectEnum {
  Event = "event",
}

/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
