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
exports.TemplateVersionWritable = void 0;
/**
 *
 * @export
 * @class TemplateVersionWritable
 */
var TemplateVersionWritable = /** @class */ (function () {
  function TemplateVersionWritable(input) {
    if (
      typeof (input === null || input === void 0
        ? void 0
        : input.description) !== "undefined"
    ) {
      this.description = input.description;
    }
    if (
      typeof (input === null || input === void 0 ? void 0 : input.html) !==
      "undefined"
    ) {
      this.html = input.html;
    }
    if (
      typeof (input === null || input === void 0 ? void 0 : input.engine) !==
      "undefined"
    ) {
      this.engine = input.engine;
    }
  }
  return TemplateVersionWritable;
})();
exports.TemplateVersionWritable = TemplateVersionWritable;
/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */