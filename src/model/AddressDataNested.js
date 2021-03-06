/**
 * Small_EOD
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 * Contact: adam.dobrawy@siecobywatelska.pl
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 5.0.0-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.SmallEodClient) {
      root.SmallEodClient = {};
    }
    root.SmallEodClient.AddressDataNested = factory(root.SmallEodClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The AddressDataNested model module.
   * @module model/AddressDataNested
   * @version 1.0.4
   */

  /**
   * Constructs a new <code>AddressDataNested</code>.
   * @alias module:model/AddressDataNested
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>AddressDataNested</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AddressDataNested} obj Optional instance to populate.
   * @return {module:model/AddressDataNested} The populated <code>AddressDataNested</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('city')) {
        obj['city'] = ApiClient.convertToType(data['city'], 'String');
      }
      if (data.hasOwnProperty('epuap')) {
        obj['epuap'] = ApiClient.convertToType(data['epuap'], 'String');
      }
      if (data.hasOwnProperty('street')) {
        obj['street'] = ApiClient.convertToType(data['street'], 'String');
      }
      if (data.hasOwnProperty('houseNo')) {
        obj['houseNo'] = ApiClient.convertToType(data['houseNo'], 'String');
      }
      if (data.hasOwnProperty('postalCode')) {
        obj['postalCode'] = ApiClient.convertToType(data['postalCode'], 'String');
      }
      if (data.hasOwnProperty('flatNo')) {
        obj['flatNo'] = ApiClient.convertToType(data['flatNo'], 'String');
      }
    }
    return obj;
  }

  /**
   * E-mail address.
   * @member {String} email
   */
  exports.prototype['email'] = undefined;
  /**
   * Name of city.
   * @member {String} city
   */
  exports.prototype['city'] = undefined;
  /**
   * ePUAP address.
   * @member {String} epuap
   */
  exports.prototype['epuap'] = undefined;
  /**
   * Name of street.
   * @member {String} street
   */
  exports.prototype['street'] = undefined;
  /**
   * House number.
   * @member {String} houseNo
   */
  exports.prototype['houseNo'] = undefined;
  /**
   * Postal code.
   * @member {String} postalCode
   */
  exports.prototype['postalCode'] = undefined;
  /**
   * Flat number.
   * @member {String} flatNo
   */
  exports.prototype['flatNo'] = undefined;



  return exports;
}));


