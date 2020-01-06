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
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SmallEod);
  }
}(this, function(expect, SmallEod) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new SmallEod.Session();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('Session', function() {
    it('should create an instance of Session', function() {
      // uncomment below and update the code to test Session
      //var instance = new SmallEod.Session();
      //expect(instance).to.be.a(SmallEod.Session);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new SmallEod.Session();
      //expect(instance).to.be();
    });

    it('should have the property user (base name: "user")', function() {
      // uncomment below and update the code to test the property user
      //var instance = new SmallEod.Session();
      //expect(instance).to.be();
    });

    it('should have the property userAgent (base name: "userAgent")', function() {
      // uncomment below and update the code to test the property userAgent
      //var instance = new SmallEod.Session();
      //expect(instance).to.be();
    });

    it('should have the property createdOn (base name: "createdOn")', function() {
      // uncomment below and update the code to test the property createdOn
      //var instance = new SmallEod.Session();
      //expect(instance).to.be();
    });

    it('should have the property validUntil (base name: "validUntil")', function() {
      // uncomment below and update the code to test the property validUntil
      //var instance = new SmallEod.Session();
      //expect(instance).to.be();
    });

    it('should have the property secret (base name: "secret")', function() {
      // uncomment below and update the code to test the property secret
      //var instance = new SmallEod.Session();
      //expect(instance).to.be();
    });

  });

}));
