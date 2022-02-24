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
exports.CheckTypes = void 0;
/**
 * Unique identifier referring to status of check
 * @export
 * @enum {string}
 */
var CheckTypes;
(function (CheckTypes) {
  CheckTypes["Created"] = "check.created";
  CheckTypes["RenderedPdf"] = "check.rendered_pdf";
  CheckTypes["RenderedThumbnails"] = "check.rendered_thumbnails";
  CheckTypes["Deleted"] = "check.deleted";
  CheckTypes["Mailed"] = "check.mailed";
  CheckTypes["InTransit"] = "check.in_transit";
  CheckTypes["InLocalArea"] = "check.in_local_area";
  CheckTypes["ProcessedForDelivery"] = "check.processed_for_delivery";
  CheckTypes["ReRouted"] = "check.re-routed";
  CheckTypes["ReturnedToSender"] = "check.returned_to_sender";
})((CheckTypes = exports.CheckTypes || (exports.CheckTypes = {})));
/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */