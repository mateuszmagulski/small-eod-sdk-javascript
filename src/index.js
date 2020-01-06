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

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/AddressData', 'model/AdministrativeUnit', 'model/CaseAuditedInstitution', 'model/CaseMatrix', 'model/Channel', 'model/Collection', 'model/Description', 'model/Dictionary', 'model/DictionaryValue', 'model/Error', 'model/Event', 'model/File', 'model/FileSigner', 'model/Institution', 'model/InstitutionExternalIdentifier', 'model/Letter', 'model/ModelCase', 'model/Note', 'model/Session', 'model/TagNamespace', 'model/User', 'model/UserRef', 'small_eod_client/AdministrativeUnitApi', 'small_eod_client/CaseApi', 'small_eod_client/CollectionApi', 'small_eod_client/DescriptionApi', 'small_eod_client/DictionaryApi', 'small_eod_client/EventApi', 'small_eod_client/FileApi', 'small_eod_client/InstitutionApi', 'small_eod_client/LetterApi', 'small_eod_client/NoteApi', 'small_eod_client/NotifiedUserApi', 'small_eod_client/ResponsibleUserApi', 'small_eod_client/SessionApi', 'small_eod_client/TagNamespaceApi', 'small_eod_client/UserApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/AddressData'), require('./model/AdministrativeUnit'), require('./model/CaseAuditedInstitution'), require('./model/CaseMatrix'), require('./model/Channel'), require('./model/Collection'), require('./model/Description'), require('./model/Dictionary'), require('./model/DictionaryValue'), require('./model/Error'), require('./model/Event'), require('./model/File'), require('./model/FileSigner'), require('./model/Institution'), require('./model/InstitutionExternalIdentifier'), require('./model/Letter'), require('./model/ModelCase'), require('./model/Note'), require('./model/Session'), require('./model/TagNamespace'), require('./model/User'), require('./model/UserRef'), require('./small_eod_client/AdministrativeUnitApi'), require('./small_eod_client/CaseApi'), require('./small_eod_client/CollectionApi'), require('./small_eod_client/DescriptionApi'), require('./small_eod_client/DictionaryApi'), require('./small_eod_client/EventApi'), require('./small_eod_client/FileApi'), require('./small_eod_client/InstitutionApi'), require('./small_eod_client/LetterApi'), require('./small_eod_client/NoteApi'), require('./small_eod_client/NotifiedUserApi'), require('./small_eod_client/ResponsibleUserApi'), require('./small_eod_client/SessionApi'), require('./small_eod_client/TagNamespaceApi'), require('./small_eod_client/UserApi'));
  }
}(function(ApiClient, AddressData, AdministrativeUnit, CaseAuditedInstitution, CaseMatrix, Channel, Collection, Description, Dictionary, DictionaryValue, Error, Event, File, FileSigner, Institution, InstitutionExternalIdentifier, Letter, ModelCase, Note, Session, TagNamespace, User, UserRef, AdministrativeUnitApi, CaseApi, CollectionApi, DescriptionApi, DictionaryApi, EventApi, FileApi, InstitutionApi, LetterApi, NoteApi, NotifiedUserApi, ResponsibleUserApi, SessionApi, TagNamespaceApi, UserApi) {
  'use strict';

  /**
   * JS API client generated by OpenAPI Generator.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var SmallEod = require('index'); // See note below*.
   * var xxxSvc = new SmallEod.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new SmallEod.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new SmallEod.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new SmallEod.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 1.0.0
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The AddressData model constructor.
     * @property {module:model/AddressData}
     */
    AddressData: AddressData,
    /**
     * The AdministrativeUnit model constructor.
     * @property {module:model/AdministrativeUnit}
     */
    AdministrativeUnit: AdministrativeUnit,
    /**
     * The CaseAuditedInstitution model constructor.
     * @property {module:model/CaseAuditedInstitution}
     */
    CaseAuditedInstitution: CaseAuditedInstitution,
    /**
     * The CaseMatrix model constructor.
     * @property {module:model/CaseMatrix}
     */
    CaseMatrix: CaseMatrix,
    /**
     * The Channel model constructor.
     * @property {module:model/Channel}
     */
    Channel: Channel,
    /**
     * The Collection model constructor.
     * @property {module:model/Collection}
     */
    Collection: Collection,
    /**
     * The Description model constructor.
     * @property {module:model/Description}
     */
    Description: Description,
    /**
     * The Dictionary model constructor.
     * @property {module:model/Dictionary}
     */
    Dictionary: Dictionary,
    /**
     * The DictionaryValue model constructor.
     * @property {module:model/DictionaryValue}
     */
    DictionaryValue: DictionaryValue,
    /**
     * The Error model constructor.
     * @property {module:model/Error}
     */
    Error: Error,
    /**
     * The Event model constructor.
     * @property {module:model/Event}
     */
    Event: Event,
    /**
     * The File model constructor.
     * @property {module:model/File}
     */
    File: File,
    /**
     * The FileSigner model constructor.
     * @property {module:model/FileSigner}
     */
    FileSigner: FileSigner,
    /**
     * The Institution model constructor.
     * @property {module:model/Institution}
     */
    Institution: Institution,
    /**
     * The InstitutionExternalIdentifier model constructor.
     * @property {module:model/InstitutionExternalIdentifier}
     */
    InstitutionExternalIdentifier: InstitutionExternalIdentifier,
    /**
     * The Letter model constructor.
     * @property {module:model/Letter}
     */
    Letter: Letter,
    /**
     * The ModelCase model constructor.
     * @property {module:model/ModelCase}
     */
    ModelCase: ModelCase,
    /**
     * The Note model constructor.
     * @property {module:model/Note}
     */
    Note: Note,
    /**
     * The Session model constructor.
     * @property {module:model/Session}
     */
    Session: Session,
    /**
     * The TagNamespace model constructor.
     * @property {module:model/TagNamespace}
     */
    TagNamespace: TagNamespace,
    /**
     * The User model constructor.
     * @property {module:model/User}
     */
    User: User,
    /**
     * The UserRef model constructor.
     * @property {module:model/UserRef}
     */
    UserRef: UserRef,
    /**
     * The AdministrativeUnitApi service constructor.
     * @property {module:small_eod_client/AdministrativeUnitApi}
     */
    AdministrativeUnitApi: AdministrativeUnitApi,
    /**
     * The CaseApi service constructor.
     * @property {module:small_eod_client/CaseApi}
     */
    CaseApi: CaseApi,
    /**
     * The CollectionApi service constructor.
     * @property {module:small_eod_client/CollectionApi}
     */
    CollectionApi: CollectionApi,
    /**
     * The DescriptionApi service constructor.
     * @property {module:small_eod_client/DescriptionApi}
     */
    DescriptionApi: DescriptionApi,
    /**
     * The DictionaryApi service constructor.
     * @property {module:small_eod_client/DictionaryApi}
     */
    DictionaryApi: DictionaryApi,
    /**
     * The EventApi service constructor.
     * @property {module:small_eod_client/EventApi}
     */
    EventApi: EventApi,
    /**
     * The FileApi service constructor.
     * @property {module:small_eod_client/FileApi}
     */
    FileApi: FileApi,
    /**
     * The InstitutionApi service constructor.
     * @property {module:small_eod_client/InstitutionApi}
     */
    InstitutionApi: InstitutionApi,
    /**
     * The LetterApi service constructor.
     * @property {module:small_eod_client/LetterApi}
     */
    LetterApi: LetterApi,
    /**
     * The NoteApi service constructor.
     * @property {module:small_eod_client/NoteApi}
     */
    NoteApi: NoteApi,
    /**
     * The NotifiedUserApi service constructor.
     * @property {module:small_eod_client/NotifiedUserApi}
     */
    NotifiedUserApi: NotifiedUserApi,
    /**
     * The ResponsibleUserApi service constructor.
     * @property {module:small_eod_client/ResponsibleUserApi}
     */
    ResponsibleUserApi: ResponsibleUserApi,
    /**
     * The SessionApi service constructor.
     * @property {module:small_eod_client/SessionApi}
     */
    SessionApi: SessionApi,
    /**
     * The TagNamespaceApi service constructor.
     * @property {module:small_eod_client/TagNamespaceApi}
     */
    TagNamespaceApi: TagNamespaceApi,
    /**
     * The UserApi service constructor.
     * @property {module:small_eod_client/UserApi}
     */
    UserApi: UserApi
  };

  return exports;
}));
