/* */ 
(function(Buffer) {
  var assert = require("assert");
  var xor = require("../index");
  var xorInline = require("../inline");
  var fixtures = require("./fixtures.json!systemjs-json");
  describe('xor', function() {
    fixtures.forEach(function(f) {
      it('returns ' + f.expected + ' for ' + f.a + '/' + f.b, function() {
        var a = new Buffer(f.a, 'hex');
        var b = new Buffer(f.b, 'hex');
        var actual = xor(a, b);
        assert.equal(actual.toString('hex'), f.expected);
        assert.equal(a.toString('hex'), f.a);
        assert.equal(b.toString('hex'), f.b);
      });
    });
  });
  describe('xor/inline', function() {
    fixtures.forEach(function(f) {
      it('returns ' + f.expected + ' for ' + f.a + '/' + f.b, function() {
        var a = new Buffer(f.a, 'hex');
        var b = new Buffer(f.b, 'hex');
        var actual = xorInline(a, b);
        assert.equal(actual.toString('hex'), f.expected);
        assert.equal(a.toString('hex'), f.mutated || f.expected);
        assert.equal(b.toString('hex'), f.b);
      });
    });
  });
})(require("buffer").Buffer);
