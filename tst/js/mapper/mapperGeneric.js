'use strict';

var User = require("./user");
var assert = require("assert");

describe('Mapper Generic', function () {
  describe('User', function () {
    it('user should be map', function () {
      var user = new User("name", "6546");
      var userFilter ;
      assert.doesNotThrow(() => {userFilter = user.map()});
      assert.equal(userFilter.name, user.name);
      assert.equal(userFilter.password, user.password);
      assert.equal(userFilter.id, 0);
      assert.equal(userFilter.adress.label, user.adress.label);
      assert.notEqual(userFilter.id, user.id);
    });

    it('user should be invalid', function () {
      var user = new User("name", "a");
      assert.throws(() => user.validate(), Error);
    });
  });
});
