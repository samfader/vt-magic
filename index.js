var VectorTile = require('@mapbox/vector-tile').VectorTile;
var VectorTileFeature = require('@mapbox/vector-tile').VectorTileFeature;
var Protobuf = require('pbf');
var fs = require('fs');
var vt2geojson = require('@mapbox/vt2geojson');

var tile = new VectorTile(new Protobuf(fs.readFileSync('test.mvt')));

// if user wants to convert to geojson, run this - layer name, z,x,y would need to be
// input from user as well
// vt2geojson({
//     uri: 'test.mvt',
//     layer: 'place_label',
//     z: 9,
//     x: 20,
//     y: 40
// }, function (err, result) {
//     if (err) throw err;
//     console.log("result is " + result); // => GeoJSON FeatureCollection
//     fs.writeFile("result.geojson", result, function(err) {
//     if(err) {
//         return console.log(err);
//     }
//
//     console.log("The file was saved!");
// });
// });
