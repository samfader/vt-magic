var VectorTile = require('@mapbox/vector-tile').VectorTile;
var VectorTileFeature = require('@mapbox/vector-tile').VectorTileFeature;
var Protobuf = require('pbf');
var fs = require('fs');
var vt2geojson = require('@mapbox/vt2geojson');
var figlet = require('figlet');
var chalk = require('chalk');
var inquirer = require('inquirer');

console.log(
  chalk.red(
    figlet.textSync('Vector Tile Magic', {horizontalLayout: 'full'})
  )
);

var tile = new VectorTile(new Protobuf(fs.readFileSync('test.mvt')));

console.log("Hi there - welcome to vt-magic! Let's inspect some vector tiles, shall we? \n");
console.log("Layers available are: \n")
console.log(listLayers(tile) + "\n");

// take input from user
var questions = [
  {
    type: 'input',
    name: 'layer',
    message: "What layer do you want to access"
  }
];

inquirer.prompt(questions).then(answers => {
  // call layerPicker function with user input
  layerPicker(answers.layer);
});

function layerPicker (layer_name){
  // read the tile info
  console.log("line 39");
  console.log("line 40" + tile.layers.layer_name);
  console.log("are we working? " + layer_name);
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
