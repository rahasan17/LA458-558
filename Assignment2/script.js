
var marker;
var map = L.map('map', {minZoom:15}).setView([22.803669, 89.53351], 16);
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
$('#Khulna').click(function() {
map.setView([22.803558, 89.532428],13 );
var marker2 = L.marker([22.803558, 89.532428]).addTo(map)
        marker2.bindPopup('<a href="http://ku.ac.bd//" target="_blank"> Khulna University </a>').openPopup();
var marker3 = L.marker([22.803607, 89.534197], {
    draggable: true,
    opacity: 0
}).addTo(map).bindPopup("Let's find something about my Undergrad University").openPopup();
});
$('#Dhaka').click(function() {
map.setView([23.814854, 90.411102],10 );
});
var marker4 = L.marker([23.814854, 90.411102], {
    draggable: true,
    opacity:1
}).addTo(map).bindPopup('<a href="https://en.wikipedia.org/wiki/Dhaka"> DHAKA CITY </a>').openPopup();
//adding few important location points of my undergrad life and google map markers to show them
var myPoints = [
    [22.802731, 89.534758, "set", "Academic Building 1"],
    [22.802276, 89.537611, "dorm", "Khan Bahadur Ahsanullal Hall"],
    [22.801845, 89.534559, "cafe", "Central Cafe"]
    ];

function getColor(s) {
    return  s == "set" ? 'http://www.googlemapsmarkers.com/v1/e41a1c' :
            s == "dorm" ? 'http://www.googlemapsmarkers.com/v1/377eb8' :
            s == "cafe" ? 'http://www.googlemapsmarkers.com/v1/4daf4a' :
            'http://www.googlemapsmarkers.com/v1/FFFFFF';
}

for (var i = 0; i < myPoints.length; i++) {
    marker = new L.marker([myPoints[i][0],myPoints[i][1]], {
        icon: L.icon({iconUrl: getColor(myPoints[i][2]),iconSize:[10, 17],iconAnchor:[5, 17],popupAnchor:[0, -20]}), title: myPoints[i][3], opacity: 1.0
    }).bindPopup('<b>'+myPoints[i][3]+'</b>').addTo(map);
}

$('#getzoom').click(function() {

x=map.getZoom();
$('#theZoom').html(x);
});

//adding a few random points in the map
$('#randomMarker').click(function() {

var markers=L.featureGroup();
var maxY=89.55;
var minY=89.35;
var maxX=22.82;
var minX=22.70;
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
