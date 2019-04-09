$(document).ready(function(){
  //three (3) baselayers
var OpenTopoMap = L.tileLayer('http://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
	maxZoom: 18,
	attribution: 'Map data: &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
});

var OpenStreetMap_Mapnik = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});

var Hydda_Base = L.tileLayer('http://{s}.tile.openstreetmap.se/hydda/base/{z}/{x}/{y}.png', {
	maxZoom: 18,
	attribution: 'Tiles courtesy of <a href="http://openstreetmap.se/" target="_blank">OpenStreetMap Sweden</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});

//setting the Map extent

var map = L.map('map', {
  center: [51.731094, -1.260656],
  zoom: 4,
  layers: [OpenStreetMap_Mapnik]
});
//Layer Control for basemap
var baseMaps = {
  "Topgraphic Map": OpenTopoMap,
	"Open Street Map": OpenStreetMap_Mapnik,
  "Hydrographic Map":Hydda_Base,
};
//Use of JSON
var cities = [{
    "name" : "London",
    "lat" : "51.5",
    "long" : "0.1",
    "iconImage" : "https://d30y9cdsu7xlg0.cloudfront.net/png/66270-200.png",
    "iconColor" : "0000ff",
    "popupText" : "The Capital OF England"
},
{
    "name" : "Paris",
    "lat" : "48.9",
    "long" : "2.25",
    "iconColor" : "ff0000",
    "iconImage" : "https://cdn4.iconfinder.com/data/icons/travel-2/500/Eiffel_eiffel_tower_France_landmark_Paris_travel-512.png",
    "popupText" : "The Caital of France "
}];

//Adding Json


 for (var i = 0; i < cities.length; i++) {


  console.log(cities[i].name);

  var marker = L.marker([cities[i].lat, cities[i].long], {
    icon: L.icon({
      iconUrl: cities[i].iconImage,
      iconSize:[120,70],
      iconAnchor:[60, 60],
      popupAnchor:[0, -20]
    }),
    title: cities[i].name
  }).bindPopup("<b>"+cities[i].name+"</b>"+":"+cities[i].popupText+".").addTo(map);
}
//
var myGeoJSON= [{"type":"FeatureCollection","features":[{"type":"Feature","properties":{"marker-color":"#80ffff","marker-size":"medium","marker-symbol":"rail-light"},"geometry":{"type":"Point","coordinates":[8.573970794677734,50.04931318448308]}},{"type":"Feature","properties":{"marker-color":"#0000ff","marker-size":"medium","marker-symbol":"rail-light"},"geometry":{"type":"Point","coordinates":[2.1886825561523438,41.38737021318928]}},{"type":"Feature","properties":{},"geometry":{"type":"Polygon","coordinates":[[[8.349609375,50.317408112618686],[8.3935546875,50.317408112618686],[8.3935546875,50.401515322782366],[8.349609375,50.401515322782366],[8.349609375,50.317408112618686]]]}},{"type":"Feature","properties":{"marker-color":"#400080","marker-size":"medium","marker-symbol":"airport"},"geometry":{"type":"Point","coordinates":[0.17578125,51.795027225829145]}},{"type":"Feature","properties":{"stroke":"#80ff80","stroke-width":3,"stroke-opacity":1},"geometry":{"type":"LineString","coordinates":[[2.021484375,43.004647127794435],[0.17578125,52.32191088594773],[8.0859375,51.28940590271679]]}},{"type":"Feature","properties":{"stroke":"#ff0000","stroke-width":3.5,"stroke-opacity":1},"geometry":{"type":"LineString","coordinates":[[8.349609375,50.84757295365389],[2.548828125,43.197167282501276]]}}]}]

// Polylines
var polylines = L.polyline([
  [48.8611111, 2.3363889],
  [41.906388,12.454444],
  [43.7769400,11.258730],
  [52.3600, 4.885277],
  [51.5194590,-0.1269310],
  [48.8611111, 2.3363889]

], {color: 'green'}).addTo(map);

//Pointmarkers

	var Louvre= L.marker([48.8611111, 2.3363889]).bindPopup('<a href="http://www.louvre.fr/en"> Louvre Museum </a>').addTo(map),
  British=L.marker([51.5194590,-0.1269310]).bindPopup('<a href="https://en.wikipedia.org/wiki/British_Museum"> The British Museum </a>'),
  Vatican=L.marker([41.906388,12.454444]).bindPopup('<a href="http://www.museivaticani.va/content/museivaticani/en.html"> The Vatican Museums </a>'),
  Galleria= L.marker([43.7769400,11.258730]).bindPopup('<a href="http://www.accademia.org/"> Galleria dell Accademia </a>'),
	Rijksmuseum=L.marker([52.3600, 4.885277]).bindPopup('<a href="https://www.rijksmuseum.nl/en"> The Rijksmuseum</a>').addTo(map);

  var europeMuseums = L.layerGroup([British, Vatican,Galleria]).addTo(map);
  
  var cow=L.geoJSON(myGeoJSON, {
      style: myStyle,
    }).addTo(map);

// Other layer controls
var overlays = {
  "Museums Road Tour Plan" :polylines,
  "Louvre Museum":Louvre,
  "The Rijksmuseum":Rijksmuseum,
  "GeoJSON" :cow,
  "Famous Museums": europeMuseums
}
 var myStyle = {
      "color": "red",
      "weight": 5,
      "opacity": 0.65,
    };


L.control.layers(baseMaps, overlays).addTo(map);
 });