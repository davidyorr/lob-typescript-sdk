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

import { IntlComponents } from "./intl-components";

/**
 *
 * @export
 * @class IntlVerification
 */
export class IntlVerification {
  constructor(input?: any) {
    if (typeof input?.id !== "undefined") {
      this.id = input.id;
    }
    if (typeof input?.recipient !== "undefined") {
      this.recipient = input.recipient;
    }
    if (typeof input?.primary_line !== "undefined") {
      this.primary_line = input.primary_line;
    }
    if (typeof input?.secondary_line !== "undefined") {
      this.secondary_line = input.secondary_line;
    }
    if (typeof input?.last_line !== "undefined") {
      this.last_line = input.last_line;
    }
    if (typeof input?.country !== "undefined") {
      this.country = input.country;
    }
    if (typeof input?.coverage !== "undefined") {
      this.coverage = input.coverage;
    }
    if (typeof input?.deliverability !== "undefined") {
      this.deliverability = input.deliverability;
    }
    if (typeof input?.status !== "undefined") {
      this.status = input.status;
    }
    if (typeof input?.components !== "undefined") {
      this.components = input.components;
    }
    if (typeof input?.object !== "undefined") {
      this.object = input.object;
    }
  }

  /**
   * Unique identifier prefixed with `intl_ver_`.
   * @type {string}
   * @memberof IntlVerification
   */
  private "_id"?: string;
  public get id() {
    return (this._id || undefined) as string;
  }
  public set id(newValue: string) {
    if (newValue && !/^intl_ver_[a-zA-Z0-9]+$/.test(newValue)) {
      throw new Error("Invalid id provided");
    }
    this._id = newValue;
  }

  /**
   * The intended recipient, typically a person\'s or firm\'s name.
   * @type {string}
   * @memberof IntlVerification
   */
  "recipient"?: string | null;

  /**
   * The primary delivery line (usually the street address) of the address.
   * @type {string}
   * @memberof IntlVerification
   */
  "primary_line"?: string;

  /**
   * The secondary delivery line of the address. This field is typically empty but may contain information if `primary_line` is too long.
   * @type {string}
   * @memberof IntlVerification
   */
  "secondary_line"?: string;

  /**
   * Combination of the following applicable `components`: * `city` * `state` * `zip_code` * `zip_code_plus_4`
   * @type {string}
   * @memberof IntlVerification
   */
  "last_line"?: string;

  /**
   * The country of the address. Will be returned as a 2 letter country short-name code (ISO 3166).
   * @type {string}
   * @memberof IntlVerification
   */
  "country"?: string;

  /**
   * The coverage level for the country. This represents the maximum level of accuracy an input address can be verified to.  * `SUBBUILDING` - Coverage down to unit numbers. For example, in an apartment or a large building * `HOUSENUMBER/BUILDING` - Coverage down to house number. For example, the address where a house or building may be located * `STREET` - Coverage down to street. This means that we can verify that an street exists in a city, state, country * `LOCALITY` - Coverage down to city, state, or village or province. This means that we can verify that a city, village, province, or state exists in a country. Countries differ in how they define what is a province, state, city, village, etc. This attempts to group eveyrthing together. * `SPARSE` - Some addresses for this country exist in our databases
   * @type {string}
   * @memberof IntlVerification
   */
  "coverage"?: IntlVerificationCoverageEnum;

  /**
   * Summarizes the deliverability of the `intl_verification` object. Possible values are: * `deliverable` — The address is deliverable. * `deliverable_missing_info` — The address is missing some information, but is most likely deliverable. * `undeliverable` — The address is most likely not deliverable. Some components of the address (such as city or postal code) may have been found. * `no_match` — This address is not deliverable. No matching street could be found within the city or postal code.
   * @type {string}
   * @memberof IntlVerification
   */
  "deliverability"?: IntlVerificationDeliverabilityEnum;

  /**
   * The status level for the country. This represents the maximum level of accuracy an input address can be verified to.  * `LV4` - Verified. The input data is correct. All input data was able to match in databases. * `LV3` - Verified. The input data is correct. All input data was able to match in databases <em>after</em> some or all elements were standarized. The input data may also be using outdated city, state, or country names. * `LV2` - Verified. The input data is correct although some input data is unverifiable due to incomplete data. * `LV1` - Verified. The input data is acceptable but in an attempt to standarize user input, errors were introduced. * `LF4` - Fixed. The input data is matched and fixed. (Example: Brighon, UK -> Brighton, UK) * `LF3` - Fixed. The input data is matched and fixed but some elements such as Subbuilding number and house number cannot be checked. * `LF2` - Fixed. The input data is matched but some elements such as Street cannot be checked. * `LF1` - Fixed. The input data is acceptable but in an attempt to standarize user input, errors were introduced. * `LM4` - Missing Info. The input data cannot be corrected completely. * `LM3` - Missing Info. The input data cannot be corrected completely and there were multiple matches found in databases. * `LM2` - Missing Info. The input data cannot be corrected completely and only some elements were found. * `LU1` - Unverified. The input data cannot be corrected or matched.
   * @type {string}
   * @memberof IntlVerification
   */
  "status"?: IntlVerificationStatusEnum;

  /**
   *
   * @type {IntlComponents}
   * @memberof IntlVerification
   */
  "components"?: IntlComponents;

  /**
   * Value is resource type.
   * @type {string}
   * @memberof IntlVerification
   */
  "object"?: IntlVerificationObjectEnum;
}

/**
 * @export
 * @enum {string}
 */
export enum IntlVerificationCoverageEnum {
  Subbuilding = "SUBBUILDING",
  HousenumberBuilding = "HOUSENUMBER/BUILDING",
  Street = "STREET",
  Locality = "LOCALITY",
  Sparse = "SPARSE",
}
/**
 * @export
 * @enum {string}
 */
export enum IntlVerificationDeliverabilityEnum {
  Deliverable = "deliverable",
  DeliverableMissingInfo = "deliverable_missing_info",
  Undeliverable = "undeliverable",
  NoMatch = "no_match",
}
/**
 * @export
 * @enum {string}
 */
export enum IntlVerificationStatusEnum {
  Lv4 = "LV4",
  Lv3 = "LV3",
  Lv2 = "LV2",
  Lv1 = "LV1",
  Lf4 = "LF4",
  Lf3 = "LF3",
  Lf2 = "LF2",
  Lf1 = "LF1",
  Lm4 = "LM4",
  Lm3 = "LM3",
  Lm2 = "LM2",
  Lu1 = "LU1",
}
/**
 * @export
 * @enum {string}
 */
export enum IntlVerificationObjectEnum {
  IntlVerification = "intl_verification",
}

/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
