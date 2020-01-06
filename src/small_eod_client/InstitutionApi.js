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
    define(['ApiClient', 'model/Error', 'model/Institution'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Error'), require('../model/Institution'));
  } else {
    // Browser globals (root is window)
    if (!root.SmallEod) {
      root.SmallEod = {};
    }
    root.SmallEod.InstitutionApi = factory(root.SmallEod.ApiClient, root.SmallEod.Error, root.SmallEod.Institution);
  }
}(this, function(ApiClient, Error, Institution) {
  'use strict';

  /**
   * Institution service.
   * @module small_eod_client/InstitutionApi
   * @version 1.0.0
   */

  /**
   * Constructs a new InstitutionApi. 
   * @alias module:small_eod_client/InstitutionApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Create a institution
     * @param {module:model/Institution} institution New institution
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Institution} and HTTP response
     */
    this.createInstitutionWithHttpInfo = function(institution) {
      var postBody = institution;
      // verify the required parameter 'institution' is set
      if (institution === undefined || institution === null) {
        throw new Error("Missing the required parameter 'institution' when calling createInstitution");
      }

      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['sessionAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Institution;
      return this.apiClient.callApi(
        '/institution', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create a institution
     * @param {module:model/Institution} institution New institution
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Institution}
     */
    this.createInstitution = function(institution) {
      return this.createInstitutionWithHttpInfo(institution)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List all institutions
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit How many items to return at one time (max 100)
     * @param {Number} opts.offset How many items skip in return
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/Institution>} and HTTP response
     */
    this.listInstitutionWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;

      var pathParams = {
      };
      var queryParams = {
        'limit': opts['limit'],
        'offset': opts['offset'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['sessionAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [Institution];
      return this.apiClient.callApi(
        '/institution', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List all institutions
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit How many items to return at one time (max 100)
     * @param {Number} opts.offset How many items skip in return
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/Institution>}
     */
    this.listInstitution = function(opts) {
      return this.listInstitutionWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
