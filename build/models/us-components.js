"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsComponentsCarrierRouteTypeEnum =
  exports.UsComponentsRecordTypeEnum =
  exports.UsComponentsAddressTypeEnum =
  exports.UsComponentsStreetPostdirectionEnum =
  exports.UsComponentsStreetPredirectionEnum =
  exports.UsComponents =
    void 0;
/**
 * A nested object containing a breakdown of each component of an address.
 * @export
 * @class UsComponents
 */
var UsComponents = /** @class */ (function () {
  function UsComponents(input) {
    if (
      typeof (input === null || input === void 0
        ? void 0
        : input.primary_number) !== "undefined"
    ) {
      this.primary_number = input.primary_number;
    }
    if (
      typeof (input === null || input === void 0
        ? void 0
        : input.street_predirection) !== "undefined"
    ) {
      this.street_predirection = input.street_predirection;
    }
    if (
      typeof (input === null || input === void 0
        ? void 0
        : input.street_name) !== "undefined"
    ) {
      this.street_name = input.street_name;
    }
    if (
      typeof (input === null || input === void 0
        ? void 0
        : input.street_suffix) !== "undefined"
    ) {
      this.street_suffix = input.street_suffix;
    }
    if (
      typeof (input === null || input === void 0
        ? void 0
        : input.street_postdirection) !== "undefined"
    ) {
      this.street_postdirection = input.street_postdirection;
    }
    if (
      typeof (input === null || input === void 0
        ? void 0
        : input.secondary_designator) !== "undefined"
    ) {
      this.secondary_designator = input.secondary_designator;
    }
    if (
      typeof (input === null || input === void 0
        ? void 0
        : input.secondary_number) !== "undefined"
    ) {
      this.secondary_number = input.secondary_number;
    }
    if (
      typeof (input === null || input === void 0
        ? void 0
        : input.pmb_designator) !== "undefined"
    ) {
      this.pmb_designator = input.pmb_designator;
    }
    if (
      typeof (input === null || input === void 0
        ? void 0
        : input.pmb_number) !== "undefined"
    ) {
      this.pmb_number = input.pmb_number;
    }
    if (
      typeof (input === null || input === void 0
        ? void 0
        : input.extra_secondary_designator) !== "undefined"
    ) {
      this.extra_secondary_designator = input.extra_secondary_designator;
    }
    if (
      typeof (input === null || input === void 0
        ? void 0
        : input.extra_secondary_number) !== "undefined"
    ) {
      this.extra_secondary_number = input.extra_secondary_number;
    }
    if (
      typeof (input === null || input === void 0 ? void 0 : input.city) !==
      "undefined"
    ) {
      this.city = input.city;
    }
    if (
      typeof (input === null || input === void 0 ? void 0 : input.state) !==
      "undefined"
    ) {
      this.state = input.state;
    }
    if (
      typeof (input === null || input === void 0 ? void 0 : input.zip_code) !==
      "undefined"
    ) {
      this.zip_code = input.zip_code;
    }
    if (
      typeof (input === null || input === void 0
        ? void 0
        : input.zip_code_plus_4) !== "undefined"
    ) {
      this.zip_code_plus_4 = input.zip_code_plus_4;
    }
    if (
      typeof (input === null || input === void 0
        ? void 0
        : input.zip_code_type) !== "undefined"
    ) {
      this.zip_code_type = input.zip_code_type;
    }
    if (
      typeof (input === null || input === void 0
        ? void 0
        : input.delivery_point_barcode) !== "undefined"
    ) {
      this.delivery_point_barcode = input.delivery_point_barcode;
    }
    if (
      typeof (input === null || input === void 0
        ? void 0
        : input.address_type) !== "undefined"
    ) {
      this.address_type = input.address_type;
    }
    if (
      typeof (input === null || input === void 0
        ? void 0
        : input.record_type) !== "undefined"
    ) {
      this.record_type = input.record_type;
    }
    if (
      typeof (input === null || input === void 0
        ? void 0
        : input.default_building_address) !== "undefined"
    ) {
      this.default_building_address = input.default_building_address;
    }
    if (
      typeof (input === null || input === void 0 ? void 0 : input.county) !==
      "undefined"
    ) {
      this.county = input.county;
    }
    if (
      typeof (input === null || input === void 0
        ? void 0
        : input.county_fips) !== "undefined"
    ) {
      this.county_fips = input.county_fips;
    }
    if (
      typeof (input === null || input === void 0
        ? void 0
        : input.carrier_route) !== "undefined"
    ) {
      this.carrier_route = input.carrier_route;
    }
    if (
      typeof (input === null || input === void 0
        ? void 0
        : input.carrier_route_type) !== "undefined"
    ) {
      this.carrier_route_type = input.carrier_route_type;
    }
    if (
      typeof (input === null || input === void 0 ? void 0 : input.latitude) !==
      "undefined"
    ) {
      this.latitude = input.latitude;
    }
    if (
      typeof (input === null || input === void 0 ? void 0 : input.longitude) !==
      "undefined"
    ) {
      this.longitude = input.longitude;
    }
  }
  Object.defineProperty(UsComponents.prototype, "zip_code", {
    get: function () {
      return this._zip_code || undefined;
    },
    set: function (newValue) {
      if (newValue && !/^\d{5}$/.test(newValue)) {
        throw new Error("Invalid zip_code provided");
      }
      this._zip_code = newValue;
    },
    enumerable: false,
    configurable: true,
  });
  Object.defineProperty(UsComponents.prototype, "zip_code_plus_4", {
    get: function () {
      return this._zip_code_plus_4 || undefined;
    },
    set: function (newValue) {
      if (newValue && !/^\d{4}$/.test(newValue)) {
        throw new Error("Invalid zip_code_plus_4 provided");
      }
      this._zip_code_plus_4 = newValue;
    },
    enumerable: false,
    configurable: true,
  });
  Object.defineProperty(UsComponents.prototype, "county_fips", {
    get: function () {
      return this._county_fips || undefined;
    },
    set: function (newValue) {
      if (newValue && !/\d{5}/.test(newValue)) {
        throw new Error("Invalid county_fips provided");
      }
      this._county_fips = newValue;
    },
    enumerable: false,
    configurable: true,
  });
  return UsComponents;
})();
exports.UsComponents = UsComponents;
/**
 * @export
 * @enum {string}
 */
var UsComponentsStreetPredirectionEnum;
(function (UsComponentsStreetPredirectionEnum) {
  UsComponentsStreetPredirectionEnum["N"] = "N";
  UsComponentsStreetPredirectionEnum["S"] = "S";
  UsComponentsStreetPredirectionEnum["E"] = "E";
  UsComponentsStreetPredirectionEnum["W"] = "W";
  UsComponentsStreetPredirectionEnum["Ne"] = "NE";
  UsComponentsStreetPredirectionEnum["Sw"] = "SW";
  UsComponentsStreetPredirectionEnum["Se"] = "SE";
  UsComponentsStreetPredirectionEnum["Nw"] = "NW";
  UsComponentsStreetPredirectionEnum["Empty"] = "";
})(
  (UsComponentsStreetPredirectionEnum =
    exports.UsComponentsStreetPredirectionEnum ||
    (exports.UsComponentsStreetPredirectionEnum = {}))
);
/**
 * @export
 * @enum {string}
 */
var UsComponentsStreetPostdirectionEnum;
(function (UsComponentsStreetPostdirectionEnum) {
  UsComponentsStreetPostdirectionEnum["N"] = "N";
  UsComponentsStreetPostdirectionEnum["S"] = "S";
  UsComponentsStreetPostdirectionEnum["E"] = "E";
  UsComponentsStreetPostdirectionEnum["W"] = "W";
  UsComponentsStreetPostdirectionEnum["Ne"] = "NE";
  UsComponentsStreetPostdirectionEnum["Sw"] = "SW";
  UsComponentsStreetPostdirectionEnum["Se"] = "SE";
  UsComponentsStreetPostdirectionEnum["Nw"] = "NW";
  UsComponentsStreetPostdirectionEnum["Empty"] = "";
})(
  (UsComponentsStreetPostdirectionEnum =
    exports.UsComponentsStreetPostdirectionEnum ||
    (exports.UsComponentsStreetPostdirectionEnum = {}))
);
/**
 * @export
 * @enum {string}
 */
var UsComponentsAddressTypeEnum;
(function (UsComponentsAddressTypeEnum) {
  UsComponentsAddressTypeEnum["Residential"] = "residential";
  UsComponentsAddressTypeEnum["Commercial"] = "commercial";
  UsComponentsAddressTypeEnum["Empty"] = "";
})(
  (UsComponentsAddressTypeEnum =
    exports.UsComponentsAddressTypeEnum ||
    (exports.UsComponentsAddressTypeEnum = {}))
);
/**
 * @export
 * @enum {string}
 */
var UsComponentsRecordTypeEnum;
(function (UsComponentsRecordTypeEnum) {
  UsComponentsRecordTypeEnum["Street"] = "street";
  UsComponentsRecordTypeEnum["Highrise"] = "highrise";
  UsComponentsRecordTypeEnum["Firm"] = "firm";
  UsComponentsRecordTypeEnum["PoBox"] = "po_box";
  UsComponentsRecordTypeEnum["RuralRoute"] = "rural_route";
  UsComponentsRecordTypeEnum["GeneralDelivery"] = "general_delivery";
  UsComponentsRecordTypeEnum["Empty"] = "";
})(
  (UsComponentsRecordTypeEnum =
    exports.UsComponentsRecordTypeEnum ||
    (exports.UsComponentsRecordTypeEnum = {}))
);
/**
 * @export
 * @enum {string}
 */
var UsComponentsCarrierRouteTypeEnum;
(function (UsComponentsCarrierRouteTypeEnum) {
  UsComponentsCarrierRouteTypeEnum["CityDelivery"] = "city_delivery";
  UsComponentsCarrierRouteTypeEnum["RuralRoute"] = "rural_route";
  UsComponentsCarrierRouteTypeEnum["HighwayContract"] = "highway_contract";
  UsComponentsCarrierRouteTypeEnum["PoBox"] = "po_box";
  UsComponentsCarrierRouteTypeEnum["GeneralDelivery"] = "general_delivery";
})(
  (UsComponentsCarrierRouteTypeEnum =
    exports.UsComponentsCarrierRouteTypeEnum ||
    (exports.UsComponentsCarrierRouteTypeEnum = {}))
);
/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */