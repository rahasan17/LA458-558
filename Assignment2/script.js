
var marker;
var map = L.map('map', {minZoom:15}).setView([22.803558, 89.532428], 16);
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

function onMapClick (e){
  var marker=L.marker(e.latlng,{
    draggable: true,
    title : "KU",
    alt : "Khulna University",
    riseOnHover: true
}).addTo(map).bindPopup(e.latlng.toString()).openPopup();

marker.on("dragend", function (ev){
var chagedPos=ev.target.getLatLng();
this.bindPopup(chagedPos.toString()).openPopup();

});
}

map.on('click',onMapClick);



$(document).ready(function(){
$('#Dhaka').click(function() {
map.setView([23.817682, 90.411790],10 );
});
var marker4 = L.marker([23.817682, 90.411790], {
    draggable: true,
    opacity:1
}).addTo(map).bindPopup('<a href="https://en.wikipedia.org/wiki/Dhaka"> DHAKA CITY </a>').openPopup();

var marker5 = L.marker([23.817682, 90.411790], {
    draggable: true,
    opacity: 0
}).addTo(map).bindPopup("By CLickikng the link on the beside marker you will find information on the city i Live in ").openPopup();
});
$('#Khulna').click(function() {
map.setView([22.803558, 89.532428],13 );
var marker2 = L.marker([22.803558, 89.532428]).addTo(map)
        marker2.bindPopup('<a href="http://ku.ac.bd//" target="_blank"> Khulna University </a>').openPopup();
var marker3 = L.marker([22.803607, 89.534197], {
    draggable: true,
    opacity: 0
}).addTo(map).bindPopup("By CLickikng the links on the beside marker you will find information on my Undergrad University").openPopup();
});


$('#getzoom').click(function() {

x=map.getZoom();
$('#theZoom').html(x);
});


$('#randomMarker').click(function() {

var markers=L.featureGroup();
var maxY=23.9;
var minY=23;
var maxX=90.75;
var minX=90.1;
var markerArray=[];
var marker=L.marker();

for (var i=0 ;i<10 ; i++){
      y=Math.random()*(maxY-minY)+minY;
      x=Math.random()*(maxX-minX)+minX ;
      markerArray.push(L.marker([y,x]));
     }

var group =L.featureGroup(markerArray).addTo(map);
map.fitBounds(group.getBounds());

});
