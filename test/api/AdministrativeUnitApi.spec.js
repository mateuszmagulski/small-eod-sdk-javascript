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
    instance = new SmallEod.AdministrativeUnitApi();
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

  describe('AdministrativeUnitApi', function() {
    describe('createAdministrativeUnit', function() {
      it('should call createAdministrativeUnit successfully', function(done) {
        //uncomment below and update the code to test createAdministrativeUnit
        //instance.createAdministrativeUnit(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteAdministrativeUnit', function() {
      it('should call deleteAdministrativeUnit successfully', function(done) {
        //uncomment below and update the code to test deleteAdministrativeUnit
        //instance.deleteAdministrativeUnit(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listAdministrativeUnit', function() {
      it('should call listAdministrativeUnit successfully', function(done) {
        //uncomment below and update the code to test listAdministrativeUnit
        //instance.listAdministrativeUnit(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('showAdministrativeUnitById', function() {
      it('should call showAdministrativeUnitById successfully', function(done) {
        //uncomment below and update the code to test showAdministrativeUnitById
        //instance.showAdministrativeUnitById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
