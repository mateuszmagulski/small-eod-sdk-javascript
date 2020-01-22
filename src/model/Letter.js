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
    if (!root.SmallEodClient) {
      root.SmallEodClient = {};
    }
    root.SmallEodClient.Letter = factory(root.SmallEodClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The Letter model module.
   * @module model/Letter
   * @version 1.0.3
   */

  /**
   * Constructs a new <code>Letter</code>.
   * @alias module:model/Letter
   * @class
   * @param _case {Number} 
   * @param name {String} 
   * @param channel {Number} 
   * @param _final {Boolean} 
   * @param _date {Date} 
   * @param identifier {String} 
   * @param institution {Number} 
   * @param address {Number} 
   * @param comment {String} 
   * @param excerpt {String} 
   */
  var exports = function(_case, name, channel, _final, _date, identifier, institution, address, comment, excerpt) {
    var _this = this;

    _this['case'] = _case;
    _this['name'] = name;
    _this['channel'] = channel;
    _this['final'] = _final;
    _this['date'] = _date;
    _this['identifier'] = identifier;
    _this['institution'] = institution;
    _this['address'] = address;
    _this['comment'] = comment;
    _this['excerpt'] = excerpt;
  };

  /**
   * Constructs a <code>Letter</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Letter} obj Optional instance to populate.
   * @return {module:model/Letter} The populated <code>Letter</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('case')) {
        obj['case'] = ApiClient.convertToType(data['case'], 'Number');
      }
      if (data.hasOwnProperty('direction')) {
        obj['direction'] = ApiClient.convertToType(data['direction'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('channel')) {
        obj['channel'] = ApiClient.convertToType(data['channel'], 'Number');
      }
      if (data.hasOwnProperty('final')) {
        obj['final'] = ApiClient.convertToType(data['final'], 'Boolean');
      }
      if (data.hasOwnProperty('date')) {
        obj['date'] = ApiClient.convertToType(data['date'], 'Date');
      }
      if (data.hasOwnProperty('identifier')) {
        obj['identifier'] = ApiClient.convertToType(data['identifier'], 'String');
      }
      if (data.hasOwnProperty('institution')) {
        obj['institution'] = ApiClient.convertToType(data['institution'], 'Number');
      }
      if (data.hasOwnProperty('address')) {
        obj['address'] = ApiClient.convertToType(data['address'], 'Number');
      }
      if (data.hasOwnProperty('ordering')) {
        obj['ordering'] = ApiClient.convertToType(data['ordering'], 'Number');
      }
      if (data.hasOwnProperty('comment')) {
        obj['comment'] = ApiClient.convertToType(data['comment'], 'String');
      }
      if (data.hasOwnProperty('excerpt')) {
        obj['excerpt'] = ApiClient.convertToType(data['excerpt'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Number} case
   */
  exports.prototype['case'] = undefined;
  /**
   * @member {module:model/Letter.DirectionEnum} direction
   */
  exports.prototype['direction'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {Number} channel
   */
  exports.prototype['channel'] = undefined;
  /**
   * @member {Boolean} final
   */
  exports.prototype['final'] = undefined;
  /**
   * @member {Date} date
   */
  exports.prototype['date'] = undefined;
  /**
   * @member {String} identifier
   */
  exports.prototype['identifier'] = undefined;
  /**
   * @member {Number} institution
   */
  exports.prototype['institution'] = undefined;
  /**
   * @member {Number} address
   */
  exports.prototype['address'] = undefined;
  /**
   * @member {Number} ordering
   */
  exports.prototype['ordering'] = undefined;
  /**
   * @member {String} comment
   */
  exports.prototype['comment'] = undefined;
  /**
   * @member {String} excerpt
   */
  exports.prototype['excerpt'] = undefined;


  /**
   * Allowed values for the <code>direction</code> property.
   * @enum {String}
   * @readonly
   */
  exports.DirectionEnum = {
    /**
     * value: "IN"
     * @const
     */
    "IN": "IN",
    /**
     * value: "OUT"
     * @const
     */
    "OUT": "OUT"  };


  return exports;
}));


