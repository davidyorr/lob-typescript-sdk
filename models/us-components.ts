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

import { ZipCodeType } from "./zip-code-type";

/**
 * A nested object containing a breakdown of each component of an address.
 * @export
 * @class UsComponents
 */
export class UsComponents {
  constructor(input?: any) {
    if (typeof input?.primary_number !== "undefined") {
      this.primary_number = input.primary_number;
    }
    if (typeof input?.street_predirection !== "undefined") {
      this.street_predirection = input.street_predirection;
    }
    if (typeof input?.street_name !== "undefined") {
      this.street_name = input.street_name;
    }
    if (typeof input?.street_suffix !== "undefined") {
      this.street_suffix = input.street_suffix;
    }
    if (typeof input?.street_postdirection !== "undefined") {
      this.street_postdirection = input.street_postdirection;
    }
    if (typeof input?.secondary_designator !== "undefined") {
      this.secondary_designator = input.secondary_designator;
    }
    if (typeof input?.secondary_number !== "undefined") {
      this.secondary_number = input.secondary_number;
    }
    if (typeof input?.pmb_designator !== "undefined") {
      this.pmb_designator = input.pmb_designator;
    }
    if (typeof input?.pmb_number !== "undefined") {
      this.pmb_number = input.pmb_number;
    }
    if (typeof input?.extra_secondary_designator !== "undefined") {
      this.extra_secondary_designator = input.extra_secondary_designator;
    }
    if (typeof input?.extra_secondary_number !== "undefined") {
      this.extra_secondary_number = input.extra_secondary_number;
    }
    if (typeof input?.city !== "undefined") {
      this.city = input.city;
    }
    if (typeof input?.state !== "undefined") {
      this.state = input.state;
    }
    if (typeof input?.zip_code !== "undefined") {
      this.zip_code = input.zip_code;
    }
    if (typeof input?.zip_code_plus_4 !== "undefined") {
      this.zip_code_plus_4 = input.zip_code_plus_4;
    }
    if (typeof input?.zip_code_type !== "undefined") {
      this.zip_code_type = input.zip_code_type;
    }
    if (typeof input?.delivery_point_barcode !== "undefined") {
      this.delivery_point_barcode = input.delivery_point_barcode;
    }
    if (typeof input?.address_type !== "undefined") {
      this.address_type = input.address_type;
    }
    if (typeof input?.record_type !== "undefined") {
      this.record_type = input.record_type;
    }
    if (typeof input?.default_building_address !== "undefined") {
      this.default_building_address = input.default_building_address;
    }
    if (typeof input?.county !== "undefined") {
      this.county = input.county;
    }
    if (typeof input?.county_fips !== "undefined") {
      this.county_fips = input.county_fips;
    }
    if (typeof input?.carrier_route !== "undefined") {
      this.carrier_route = input.carrier_route;
    }
    if (typeof input?.carrier_route_type !== "undefined") {
      this.carrier_route_type = input.carrier_route_type;
    }
    if (typeof input?.latitude !== "undefined") {
      this.latitude = input.latitude;
    }
    if (typeof input?.longitude !== "undefined") {
      this.longitude = input.longitude;
    }
  }

  /**
   * The numeric or alphanumeric part of an address preceding the street name. Often the house, building, or PO Box number.
   * @type {string}
   * @memberof UsComponents
   */
  "primary_number": string;

  /**
   * Geographic direction preceding a street name (`N`, `S`, `E`, `W`, `NE`, `SW`, `SE`, `NW`).
   * @type {string}
   * @memberof UsComponents
   */
  "street_predirection": UsComponentsStreetPredirectionEnum;

  /**
   * The name of the street.
   * @type {string}
   * @memberof UsComponents
   */
  "street_name": string;

  /**
   * The standard USPS abbreviation for the street suffix (`ST`, `AVE`, `BLVD`, etc).
   * @type {string}
   * @memberof UsComponents
   */
  "street_suffix": string;

  /**
   * Geographic direction following a street name (`N`, `S`, `E`, `W`, `NE`, `SW`, `SE`, `NW`).
   * @type {string}
   * @memberof UsComponents
   */
  "street_postdirection": UsComponentsStreetPostdirectionEnum;

  /**
   * The standard USPS abbreviation describing the `components[secondary_number]` (`STE`, `APT`, `BLDG`, etc).
   * @type {string}
   * @memberof UsComponents
   */
  "secondary_designator": string;

  /**
   * Number of the apartment/unit/etc.
   * @type {string}
   * @memberof UsComponents
   */
  "secondary_number": string;

  /**
   * Designator of a [CMRA-authorized](https://en.wikipedia.org/wiki/Commercial_mail_receiving_agency) private mailbox.
   * @type {string}
   * @memberof UsComponents
   */
  "pmb_designator": string;

  /**
   * Number of a [CMRA-authorized](https://en.wikipedia.org/wiki/Commercial_mail_receiving_agency) private mailbox.
   * @type {string}
   * @memberof UsComponents
   */
  "pmb_number": string;

  /**
   * An extra (often unnecessary) secondary designator provided with the input address.
   * @type {string}
   * @memberof UsComponents
   */
  "extra_secondary_designator": string;

  /**
   * An extra (often unnecessary) secondary number provided with the input address.
   * @type {string}
   * @memberof UsComponents
   */
  "extra_secondary_number": string;

  /**
   *
   * @type {string}
   * @memberof UsComponents
   */
  "city": string;

  /**
   * The [ISO 3166-2](https://en.wikipedia.org/wiki/ISO_3166-2) two letter code for the state.
   * @type {string}
   * @memberof UsComponents
   */
  "state": string;

  /**
   * The 5-digit ZIP code
   * @type {string}
   * @memberof UsComponents
   */
  private "_zip_code": string;
  public get zip_code() {
    return this._zip_code;
  }
  public set zip_code(newValue: string) {
    if (newValue && !/^\d{5}$/.test(newValue)) {
      throw new Error("Invalid zip_code provided");
    }
    this._zip_code = newValue;
  }

  /**
   *
   * @type {string}
   * @memberof UsComponents
   */
  private "_zip_code_plus_4": string;
  public get zip_code_plus_4() {
    return this._zip_code_plus_4;
  }
  public set zip_code_plus_4(newValue: string) {
    if (newValue && !/^\d{4}$/.test(newValue)) {
      throw new Error("Invalid zip_code_plus_4 provided");
    }
    this._zip_code_plus_4 = newValue;
  }

  /**
   *
   * @type {ZipCodeType}
   * @memberof UsComponents
   */
  "zip_code_type": ZipCodeType;

  /**
   * A 12-digit identifier that uniquely identifies a delivery point (location where mail can be sent and received). It consists of the 5-digit ZIP code (`zip_code`), 4-digit ZIP+4 add-on (`zip_code_plus_4`), 2-digit delivery point, and 1-digit delivery point check digit.
   * @type {string}
   * @memberof UsComponents
   */
  "delivery_point_barcode": string;

  /**
   * Uses USPS\'s [Residential Delivery Indicator (RDI)](https://www.usps.com/nationalpremieraccounts/rdi.htm) to identify whether an address is classified as residential or business. Possible values are: * `residential` –– The address is residential or a PO Box. * `commercial` –– The address is commercial. * `\'\'` –– Not enough information provided to be determined.
   * @type {string}
   * @memberof UsComponents
   */
  "address_type": UsComponentsAddressTypeEnum;

  /**
   * A description of the type of address. Populated if a DPV match is made (`deliverability_analysis[dpv_confirmation]` is `Y`, `S`, or `D`). For more detailed information about each record type, see [US Verification Details](#tag/US-Verification-Types).
   * @type {string}
   * @memberof UsComponents
   */
  "record_type": UsComponentsRecordTypeEnum;

  /**
   * Designates whether or not the address is the default address for a building containing multiple delivery points.
   * @type {boolean}
   * @memberof UsComponents
   */
  "default_building_address": boolean;

  /**
   * County name of the address city.
   * @type {string}
   * @memberof UsComponents
   */
  "county": string;

  /**
   * A 5-digit [FIPS county code](https://en.wikipedia.org/wiki/FIPS_county_code) which uniquely identifies `components[county]`. It consists of a 2-digit state code and a 3-digit county code.
   * @type {string}
   * @memberof UsComponents
   */
  "county_fips": string;

  /**
   * A 4-character code assigned to a mail delivery route within a ZIP code.
   * @type {string}
   * @memberof UsComponents
   */
  "carrier_route": string;

  /**
   * The type of `components[carrier_route]`. For more detailed information about each carrier route type, see [US Verification Details](#tag/US-Verification-Types).
   * @type {string}
   * @memberof UsComponents
   */
  "carrier_route_type": UsComponentsCarrierRouteTypeEnum;

  /**
   * A positive or negative decimal indicating the geographic latitude of the address, specifying the north-to-south position of a location. This should be used with `longitude` to pinpoint locations on a map. Will not be returned for undeliverable addresses or military addresses (state is `AA`, `AE`, or `AP`).
   * @type {number}
   * @memberof UsComponents
   */
  "latitude"?: number | null;

  /**
   * A positive or negative decimal indicating the geographic longitude of the address, specifying the north-to-south position of a location. This should be used with `latitude` to pinpoint locations on a map. Will not be returned for undeliverable addresses or military addresses (state is `AA`, `AE`, or `AP`).
   * @type {number}
   * @memberof UsComponents
   */
  "longitude"?: number | null;

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
export enum UsComponentsStreetPredirectionEnum {
  N = "N",
  S = "S",
  E = "E",
  W = "W",
  Ne = "NE",
  Sw = "SW",
  Se = "SE",
  Nw = "NW",
  Empty = "",
}
/**
 * @export
 * @enum {string}
 */
export enum UsComponentsStreetPostdirectionEnum {
  N = "N",
  S = "S",
  E = "E",
  W = "W",
  Ne = "NE",
  Sw = "SW",
  Se = "SE",
  Nw = "NW",
  Empty = "",
}
/**
 * @export
 * @enum {string}
 */
export enum UsComponentsAddressTypeEnum {
  Residential = "residential",
  Commercial = "commercial",
  Empty = "",
}
/**
 * @export
 * @enum {string}
 */
export enum UsComponentsRecordTypeEnum {
  Street = "street",
  Highrise = "highrise",
  Firm = "firm",
  PoBox = "po_box",
  RuralRoute = "rural_route",
  GeneralDelivery = "general_delivery",
  Empty = "",
}
/**
 * @export
 * @enum {string}
 */
export enum UsComponentsCarrierRouteTypeEnum {
  CityDelivery = "city_delivery",
  RuralRoute = "rural_route",
  HighwayContract = "highway_contract",
  PoBox = "po_box",
  GeneralDelivery = "general_delivery",
  Empty = "",
}

/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
