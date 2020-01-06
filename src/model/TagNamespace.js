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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.SmallEod) {
      root.SmallEod = {};
    }
    root.SmallEod.TagNamespace = factory(root.SmallEod.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The TagNamespace model module.
   * @module model/TagNamespace
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>TagNamespace</code>.
   * @alias module:model/TagNamespace
   * @class
   * @param id {String} 
   * @param description {String} 
   * @param createdOn {String} 
   * @param createdBy {String} User ID responsible for creating the content
   * @param modifiedOn {String} 
   * @param modifiedBy {String} 
   */
  var exports = function(id, description, createdOn, createdBy, modifiedOn, modifiedBy) {
    var _this = this;

    _this['id'] = id;
    _this['description'] = description;
    _this['createdOn'] = createdOn;
    _this['createdBy'] = createdBy;
    _this['modifiedOn'] = modifiedOn;
    _this['modifiedBy'] = modifiedBy;
  };

  /**
   * Constructs a <code>TagNamespace</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TagNamespace} obj Optional instance to populate.
   * @return {module:model/TagNamespace} The populated <code>TagNamespace</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('color')) {
        obj['color'] = ApiClient.convertToType(data['color'], 'String');
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
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * @member {String} color
   */
  exports.prototype['color'] = undefined;
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


