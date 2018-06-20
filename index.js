var VectorTile = require('@mapbox/vector-tile').VectorTile;
var VectorTileFeature = require('@mapbox/vector-tile').VectorTileFeature;
var Protobuf = require('pbf');
var fs = require('fs');
var figlet = require('figlet');
var chalk = require('chalk');
const util = require('util')
const prompts = require('prompts');

console.log(
  chalk.red(
    figlet.textSync('Vector Tile Magic', {horizontalLayout: 'full'})
  )
);

// take input from user
(async function(){
  // TO DO: take file input from user
  var tile = new VectorTile(new Protobuf(fs.readFileSync('test.mvt')));

  console.log("Hi there - welcome to vt-magic! Let's inspect some vector tiles, shall we? \n");
  console.log("Layers available are: \n")
  // TO DO: fix the "undefined" layer showing up
  // list the layers available in the tile
  console.log(listLayers(tile) + "\n");

    const questions = [
        {
            type: 'text',
            name: 'layer',
            message: 'What layer do you want to access?',
        }
    ];

    const answer = await prompts(questions);
    layerPicker(tile, answer.layer);
})();

function layerPicker (vt, layer_name){
  // read the tile info
  // TO DO: print out which fields are available in the layer (Mapbox calls them source-layers, in spec they are layers)
  // TO DO: spit out the geometry as geojson - have to know the x,y,z.
  layer_inspector = vt.layers[layer_name]
  console.log("\nThis layer's source layers are: " + layer_inspector._keys + "\n\nSee the full details below:\n");
  console.log(util.inspect(layer_inspector, false, null));
};

function listLayers (vt) {
  var i;
  var layer_names = Object.keys(vt.layers);
    for (i=0; i < layer_names.length; i++) {
      if (typeof layer_names[i] !== "undefined"){
        console.log(layer_names[i]);
    }
  }
};
