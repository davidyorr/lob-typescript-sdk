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
exports.SortBySendDateEnum =
  exports.SortByDateCreatedEnum =
  exports.SortBy =
    void 0;
/**
 *
 * @export
 * @class SortBy
 */
var SortBy = /** @class */ (function () {
  function SortBy(input) {
    if (
      typeof (input === null || input === void 0
        ? void 0
        : input.date_created) !== "undefined"
    ) {
      this.date_created = input.date_created;
    }
    if (
      typeof (input === null || input === void 0 ? void 0 : input.send_date) !==
      "undefined"
    ) {
      this.send_date = input.send_date;
    }
  }
  return SortBy;
})();
exports.SortBy = SortBy;
/**
 * @export
 * @enum {string}
 */
var SortByDateCreatedEnum;
(function (SortByDateCreatedEnum) {
  SortByDateCreatedEnum["Asc"] = "asc";
  SortByDateCreatedEnum["Desc"] = "desc";
})(
  (SortByDateCreatedEnum =
    exports.SortByDateCreatedEnum || (exports.SortByDateCreatedEnum = {}))
);
/**
 * @export
 * @enum {string}
 */
var SortBySendDateEnum;
(function (SortBySendDateEnum) {
  SortBySendDateEnum["Asc"] = "asc";
  SortBySendDateEnum["Desc"] = "desc";
})(
  (SortBySendDateEnum =
    exports.SortBySendDateEnum || (exports.SortBySendDateEnum = {}))
);
/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */