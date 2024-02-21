var it = require('tape'),
    fs = require('fs'),
    spatial = require('..');

it('should find spatial', function(t) {
  var stats = fs.statSync(spatial.path);
  t.ok(stats.isFile(spatial.path));
  t.end();
});
