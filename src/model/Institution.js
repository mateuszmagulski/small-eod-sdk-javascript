/**
 * Small_EOD
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: adam.dobrawy@siecobywatelska.pl
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 4.2.3-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/AddressData', 'model/InstitutionExternalIdentifier'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AddressData'), require('./InstitutionExternalIdentifier'));
  } else {
    // Browser globals (root is window)
    if (!root.SmallEod) {
      root.SmallEod = {};
    }
    root.SmallEod.Institution = factory(root.SmallEod.ApiClient, root.SmallEod.AddressData, root.SmallEod.InstitutionExternalIdentifier);
  }
}(this, function(ApiClient, AddressData, InstitutionExternalIdentifier) {
  'use strict';



  /**
   * The Institution model module.
   * @module model/Institution
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>Institution</code>.
   * @alias module:model/Institution
   * @class
   * @param id {String} 
   * @param name {String} Name of institution
   * @param createdOn {String} 
   * @param createdBy {String} User ID responsible for creating the content
   * @param modifiedOn {String} 
   * @param modifiedBy {String} 
   */
  var exports = function(id, name, createdOn, createdBy, modifiedOn, modifiedBy) {
    var _this = this;

    _this['id'] = id;
    _this['name'] = name;
    _this['createdOn'] = createdOn;
    _this['createdBy'] = createdBy;
    _this['modifiedOn'] = modifiedOn;
    _this['modifiedBy'] = modifiedBy;
  };

  /**
   * Constructs a <code>Institution</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Institution} obj Optional instance to populate.
   * @return {module:model/Institution} The populated <code>Institution</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('external_identifier')) {
        obj['external_identifier'] = InstitutionExternalIdentifier.constructFromObject(data['external_identifier']);
      }
      if (data.hasOwnProperty('address')) {
        obj['address'] = AddressData.constructFromObject(data['address']);
      }
      if (data.hasOwnProperty('administrativeUnit')) {
        obj['administrativeUnit'] = ApiClient.convertToType(data['administrativeUnit'], 'String');
      }
      if (data.hasOwnProperty('createdOn')) {
        obj['createdOn'] = ApiClient.convertToType(data['createdOn'], 'String');
      }
      if (data.hasOwnProperty('createdBy')) {
        obj['createdBy'] = ApiClient.convertToType(data['createdBy'], 'String');
      }
      if (data.hasOwnProperty('modifiedOn')) {
        obj['modifiedOn'] = ApiClient.convertToType(data['modifiedOn'], 'String');
      }
      if (data.hasOwnProperty('modifiedBy')) {
        obj['modifiedBy'] = ApiClient.convertToType(data['modifiedBy'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * Name of institution
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {module:model/InstitutionExternalIdentifier} external_identifier
   */
  exports.prototype['external_identifier'] = undefined;
  /**
   * @member {module:model/AddressData} address
   */
  exports.prototype['address'] = undefined;
  /**
   * @member {String} administrativeUnit
   */
  exports.prototype['administrativeUnit'] = undefined;
  /**
   * @member {String} createdOn
   */
  exports.prototype['createdOn'] = undefined;
  /**
   * User ID responsible for creating the content
   * @member {String} createdBy
   */
  exports.prototype['createdBy'] = undefined;
  /**
   * @member {String} modifiedOn
   */
  exports.prototype['modifiedOn'] = undefined;
  /**
   * @member {String} modifiedBy
   */
  exports.prototype['modifiedBy'] = undefined;



  return exports;
}));


