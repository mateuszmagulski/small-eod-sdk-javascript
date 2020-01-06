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
    define(['ApiClient', 'model/Error', 'model/TagNamespace'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Error'), require('../model/TagNamespace'));
  } else {
    // Browser globals (root is window)
    if (!root.SmallEod) {
      root.SmallEod = {};
    }
    root.SmallEod.TagNamespaceApi = factory(root.SmallEod.ApiClient, root.SmallEod.Error, root.SmallEod.TagNamespace);
  }
}(this, function(ApiClient, Error, TagNamespace) {
  'use strict';

  /**
   * TagNamespace service.
   * @module api/TagNamespaceApi
   * @version 1.0.0
   */

  /**
   * Constructs a new TagNamespaceApi. 
   * @alias module:api/TagNamespaceApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Create a tag namespace
     * @param {module:model/TagNamespace} tagNamespace New tag namespace
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TagNamespace} and HTTP response
     */
    this.createTagNamespaceWithHttpInfo = function(tagNamespace) {
      var postBody = tagNamespace;
      // verify the required parameter 'tagNamespace' is set
      if (tagNamespace === undefined || tagNamespace === null) {
        throw new Error("Missing the required parameter 'tagNamespace' when calling createTagNamespace");
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
      var returnType = TagNamespace;
      return this.apiClient.callApi(
        '/tagNamespace', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create a tag namespace
     * @param {module:model/TagNamespace} tagNamespace New tag namespace
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TagNamespace}
     */
    this.createTagNamespace = function(tagNamespace) {
      return this.createTagNamespaceWithHttpInfo(tagNamespace)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Deletes a single tag namespace based on the ID supplied
     * @param {Number} tagNamespaceId The id of the tag namespace to delete
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.deleteTagNamespaceWithHttpInfo = function(tagNamespaceId) {
      var postBody = null;
      // verify the required parameter 'tagNamespaceId' is set
      if (tagNamespaceId === undefined || tagNamespaceId === null) {
        throw new Error("Missing the required parameter 'tagNamespaceId' when calling deleteTagNamespace");
      }

      var pathParams = {
        'tagNamespaceId': tagNamespaceId
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
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi(
        '/tagNamespace/{tagNamespaceId}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Deletes a single tag namespace based on the ID supplied
     * @param {Number} tagNamespaceId The id of the tag namespace to delete
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.deleteTagNamespace = function(tagNamespaceId) {
      return this.deleteTagNamespaceWithHttpInfo(tagNamespaceId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List all tag namespaces
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit How many items to return at one time (max 100)
     * @param {Number} opts.offset How many items skip in return
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/TagNamespace>} and HTTP response
     */
    this.listTagNamespaceWithHttpInfo = function(opts) {
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
      var returnType = [TagNamespace];
      return this.apiClient.callApi(
        '/tagNamespace', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List all tag namespaces
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit How many items to return at one time (max 100)
     * @param {Number} opts.offset How many items skip in return
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/TagNamespace>}
     */
    this.listTagNamespace = function(opts) {
      return this.listTagNamespaceWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Info for a specific tag namespace
     * @param {Number} tagNamespaceId The id of the tag namespace to retrieve
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TagNamespace} and HTTP response
     */
    this.showTagNamespaceByIdWithHttpInfo = function(tagNamespaceId) {
      var postBody = null;
      // verify the required parameter 'tagNamespaceId' is set
      if (tagNamespaceId === undefined || tagNamespaceId === null) {
        throw new Error("Missing the required parameter 'tagNamespaceId' when calling showTagNamespaceById");
      }

      var pathParams = {
        'tagNamespaceId': tagNamespaceId
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
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = TagNamespace;
      return this.apiClient.callApi(
        '/tagNamespace/{tagNamespaceId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Info for a specific tag namespace
     * @param {Number} tagNamespaceId The id of the tag namespace to retrieve
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TagNamespace}
     */
    this.showTagNamespaceById = function(tagNamespaceId) {
      return this.showTagNamespaceByIdWithHttpInfo(tagNamespaceId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
