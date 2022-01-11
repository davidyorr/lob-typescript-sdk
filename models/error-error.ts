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


import { FailureStatusCode } from './failure-status-code';

/**
 * 
 * @export
 * @interface ErrorError
 */
export class ErrorError {
    /**
     * A human-readable message with more details about the error
     * @type {string}
     * @memberof ErrorError
     */
    'message': string;
    /**
     * 
     * @type {FailureStatusCode}
     * @memberof ErrorError
     */
    'status_code': FailureStatusCode;
    /**
     * A pre-defined string identifying an error. Error codes fall into three categories:  **GENERIC** * `bad_request` - 422: an invalid request was made. See error message for details. * `conflict` - 409/422: this operation would leave data in a conflicted state. * `feature_limit_reached` - 403: the account has reached its resource limit and requires upgrading to add more. * `internal_server_error` - 500: an error has occured on Lob\'s servers. Please try request again. * `invalid` - 422: an invalid request was made. See error message for details. * `not_deletable` - 422: an attempt was made to delete a resource, but the resource cannot be deleted. * `not_found` - 404: the requested resource was not found. * `request_timeout` - 408: the request took too long. Please try again. * `service_unavailable` - 503: the Lob servers are temporarily unavailable. Please try agian. * `unrecognized_endpoint` - 404: the requested endpoint doesn\'t exist. * `unsupported_lob_version` - 422: an unsupported Lob API version was requested.  **ADVANCED** * `address_length_exceeds_limit` - 422: the sum of to.address_line1 and to.address_line2 cannot surpass 50 characters. * `bank_account_already_verified` - 422: the bank account has already been verified. * `bank_error` - 422: there\'s an issue with the bank account. * `custom_envelope_inventory_depleted` - 422: custom envelope inventory is depleted, and more will need to be ordered. * `deleted_bank_account` - 404: checks cannot be created with a deleted bank account. * `failed_deliverability_strictness` - 422: the `to` address doesn\'t meet strictness requirements. See [Account Settings](https://dashboard.lob.com/#/settings/account) to configure strictness. * `file_pages_below_min` - 422: not enough pages. * `file_pages_exceed_max` - 422: too many pages. * `file_size_exceeds_limit` - 422: the file size is too large. See description for details. * `foreign_return_address` - 422: the `from` address must be a US address. * `inconsistent_page_dimensions` - 422: all pages of the input file must have the same dimensions. * `invalid_bank_account` - 422: the provided bank routing number is invalid. * `invalid_bank_account_verification` - 422: verification amounts do not match. * `invalid_check_international` - 422: checks cannot be sent internationally. * `invalid_country_covid` - 422: the postal service in the specified country is currently unable to process the request due to COVID-19 restrictions. * `invalid_file` - 422: the file is invalid. * `invalid_file_dimensions` - 422: file dimensions are incorrect for the selected mail type. * `invalid_file_download_time` - 422: file download from remote server took too long. * `invalid_file_url` - 422: the file URL when creating a resource is invalid. * `invalid_image_dpi` - 422: DPI must be at least 300. * `invalid_international_feature` - 422: the specified product cannot be sent to the destination. * `invalid_perforation_return_envelope` - 422: both `return_envelope` and `perforation` must be used together. * `invalid_template_html` - 422: the provided HTML is invalid. * `merge_variable_required` - 422: a required merge variable is missing. * `merge_variable_whitespace` - 422: merge variable names cannot contain whitespace. * `payment_method_unverified` - 401: you must have a verified bank account or credit card to submit live requests. * `pdf_encrypted` - 422: an encrypted PDF was provided. * `special_characters_restricted` - 422: cannot use special characters for merge variable names. * `unembedded_fonts` - 422: the provided PDF contains non-standard unembedded fonts. See description for details.  **AUTHENTICATION** * `email_required` - 401: account must have a verified email address before creating live resources. * `invalid_api_key` - 401/403: the API key is invalid. * `publishable_key_not_allowed` - 403: the requested operation needs a secret key, not a publishable key. See [API Keys](#section/API-Keys) for more information. * `rate_limit_exceeded` - 429: requests were sent too quickly and must be slowed down. * `unauthorized` - 401: the request isn\'t authorized. * `unauthorized_token` - 401: token isn\'t authorized. 
     * @type {string}
     * @memberof ErrorError
     */
    'code': ErrorErrorCodeEnum;
}

/**
    * @export
    * @enum {string}
    */
export enum ErrorErrorCodeEnum {
    BadRequest = 'bad_request',
    Conflict = 'conflict',
    FeatureLimitReached = 'feature_limit_reached',
    InternalServerError = 'internal_server_error',
    Invalid = 'invalid',
    NotDeletable = 'not_deletable',
    NotFound = 'not_found',
    RequestTimeout = 'request_timeout',
    ServiceUnavailable = 'service_unavailable',
    UnrecognizedEndpoint = 'unrecognized_endpoint',
    UnsupportedLobVersion = 'unsupported_lob_version',
    AddressLengthExceedsLimit = 'address_length_exceeds_limit',
    BankAccountAlreadyVerified = 'bank_account_already_verified',
    BankError = 'bank_error',
    CustomEnvelopeInventoryDepleted = 'custom_envelope_inventory_depleted',
    DeletedBankAccount = 'deleted_bank_account',
    FailedDeliverabilityStrictness = 'failed_deliverability_strictness',
    FilePagesBelowMin = 'file_pages_below_min',
    FilePagesExceedMax = 'file_pages_exceed_max',
    FileSizeExceedsLimit = 'file_size_exceeds_limit',
    ForeignReturnAddress = 'foreign_return_address',
    InconsistentPageDimensions = 'inconsistent_page_dimensions',
    InvalidBankAccount = 'invalid_bank_account',
    InvalidBankAccountVerification = 'invalid_bank_account_verification',
    InvalidCheckInternational = 'invalid_check_international',
    InvalidCountryCovid = 'invalid_country_covid',
    InvalidFile = 'invalid_file',
    InvalidFileDimensions = 'invalid_file_dimensions',
    InvalidFileDownloadTime = 'invalid_file_download_time',
    InvalidFileUrl = 'invalid_file_url',
    InvalidImageDpi = 'invalid_image_dpi',
    InvalidInternationalFeature = 'invalid_international_feature',
    InvalidPerforationReturnEnvelope = 'invalid_perforation_return_envelope',
    InvalidTemplateHtml = 'invalid_template_html',
    MergeVariableRequired = 'merge_variable_required',
    MergeVariableWhitespace = 'merge_variable_whitespace',
    PaymentMethodUnverified = 'payment_method_unverified',
    PdfEncrypted = 'pdf_encrypted',
    SpecialCharactersRestricted = 'special_characters_restricted',
    UnembeddedFonts = 'unembedded_fonts',
    EmailRequired = 'email_required',
    InvalidApiKey = 'invalid_api_key',
    PublishableKeyNotAllowed = 'publishable_key_not_allowed',
    RateLimitExceeded = 'rate_limit_exceeded',
    Unauthorized = 'unauthorized',
    UnauthorizedToken = 'unauthorized_token'
}



/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
