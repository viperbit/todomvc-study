(function(exports) {
  'use strict';
  function Model(storage) {
    console.log('Model created!');
    this.storage = storage;
  }
  exports.app = exports.app || {};
  exports.app.Model = Model;
})(this);
