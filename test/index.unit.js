'use strict';

var should = require('chai').should();

describe('Index Exports', function() {
  it('will export bcscore-lib', function() {
    var bcscore = require('../');
    should.exist(bcscore.lib);
    should.exist(bcscore.lib.Transaction);
    should.exist(bcscore.lib.Block);
  });
});
