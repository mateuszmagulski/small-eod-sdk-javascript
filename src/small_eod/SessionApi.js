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
    define(['ApiClient', 'model/Error', 'model/Session'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Error'), require('../model/Session'));
  } else {
    // Browser globals (root is window)
    if (!root.SmallEod) {
      root.SmallEod = {};
    }
    root.SmallEod.SessionApi = factory(root.SmallEod.ApiClient, root.SmallEod.Error, root.SmallEod.Session);
  }
}(this, function(ApiClient, Error, Session) {
  'use strict';

  /**
   * Session service.
   * @module small_eod/SessionApi
   * @version 1.0.0
   */

  /**
   * Constructs a new SessionApi. 
   * @alias module:small_eod/SessionApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Create a session
     * @param {Number} userId The id of the user to modify
     * @param {Object} body New session
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Session} and HTTP response
     */
    this.createSessionWithHttpInfo = function(userId, body) {
      var postBody = body;
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling createSession");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createSession");
      }

      var pathParams = {
        'userId': userId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Session;
      return this.apiClient.callApi(
        '/user/{userId}/session', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create a session
     * @param {Number} userId The id of the user to modify
     * @param {Object} body New session
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Session}
     */
    this.createSession = function(userId, body) {
      return this.createSessionWithHttpInfo(userId, body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Deletes a single session based on the ID supplied
     * @param {Number} userId The id of the user to modify
     * @param {Number} sessionId The id of the session to delete
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.deleteSessionWithHttpInfo = function(userId, sessionId) {
      var postBody = null;
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling deleteSession");
      }
      // verify the required parameter 'sessionId' is set
      if (sessionId === undefined || sessionId === null) {
        throw new Error("Missing the required parameter 'sessionId' when calling deleteSession");
      }

      var pathParams = {
        'userId': userId,
        'sessionId': sessionId
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
        '/user/{userId}/session/{sessionId}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Deletes a single session based on the ID supplied
     * @param {Number} userId The id of the user to modify
     * @param {Number} sessionId The id of the session to delete
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.deleteSession = function(userId, sessionId) {
      return this.deleteSessionWithHttpInfo(userId, sessionId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * List all sessions
     * @param {Number} userId The id of the user to modify
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/Session>} and HTTP response
     */
    this.listSessionOfUserWithHttpInfo = function(userId) {
      var postBody = null;
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling listSessionOfUser");
      }

      var pathParams = {
        'userId': userId
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
      var returnType = [Session];
      return this.apiClient.callApi(
        '/user/{userId}/session', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * List all sessions
     * @param {Number} userId The id of the user to modify
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/Session>}
     */
    this.listSessionOfUser = function(userId) {
      return this.listSessionOfUserWithHttpInfo(userId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Info for a specific session of user
     * @param {Number} userId The id of the user to retrieve
     * @param {Number} sessionId The id of the user to retrieve
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Session} and HTTP response
     */
    this.showSessionByIdWithHttpInfo = function(userId, sessionId) {
      var postBody = null;
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling showSessionById");
      }
      // verify the required parameter 'sessionId' is set
      if (sessionId === undefined || sessionId === null) {
        throw new Error("Missing the required parameter 'sessionId' when calling showSessionById");
      }

      var pathParams = {
        'userId': userId,
        'sessionId': sessionId
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
      var returnType = Session;
      return this.apiClient.callApi(
        '/user/{userId}/session/{sessionId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Info for a specific session of user
     * @param {Number} userId The id of the user to retrieve
     * @param {Number} sessionId The id of the user to retrieve
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Session}
     */
    this.showSessionById = function(userId, sessionId) {
      return this.showSessionByIdWithHttpInfo(userId, sessionId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
