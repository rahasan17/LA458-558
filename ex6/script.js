var map = L.map('map', {minZoom:15}).setView([42.027784, -93.649862], 16);
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

var coordinates = [
    [42.028537, -93.653180],
    [42.028274, -93.652882],
    [42.028261, -93.652901],
    [42.028078, -93.652637],
    [42.028070, -93.652106],
    [42.028087, -93.652057],
    [42.028092, -93.651898],
    [42.028144, -93.651898],
    [42.028147, -93.651556],
    [42.028149, -93.651127],
    [42.028113, -93.651105],
    [42.028103, -93.651090],
    [42.028104, -93.650653],
    [42.028095, -93.650570],
    [42.027990, -93.650310],
    [42.027980, -93.650299],
    [42.027978, -93.649968],
    [42.027969, -93.649946],
    [42.027937, -93.649892],
    [42.027937, -93.649861],
    [42.027766, -93.649870]
    ];

var polyline = L.polyline(coordinates, {color: 'maroon', opacity:0.90}).addTo(map);
polyline.bindTooltip("Home to Office");
var circle1 = L.circle([42.028674, -93.652924], {radius: 100, color: '#dd1c77', weight: 0}).addTo(map);
var circle2 = L.circle([42.027784, -93.649862], {radius: 100, color: '#dd1c77', weight: 0}).addTo(map);

var myPoints = [
    [42.028537, -93.653180, "cod", "College of Design"],
    [42.027766, -93.649870, "office", "Durham Center"],
    [42.027323, -93.648476, "cafe", "Heaping Plato"]
    ];

function getColor(s) {
    return  s == "cod" ? 'http://www.googlemapsmarkers.com/v1/e41a1c' :
            s == "office" ? 'http://www.googlemapsmarkers.com/v1/377eb8' :
            s == "cafe" ? 'http://www.googlemapsmarkers.com/v1/4daf4a' :
            'http://www.googlemapsmarkers.com/v1/FFFFFF';
}

for (var i = 0; i < myPoints.length; i++) {
    marker = new L.marker([myPoints[i][0],myPoints[i][1]], {
        icon: L.icon({iconUrl: getColor(myPoints[i][2]),iconSize:[10, 17],iconAnchor:[5, 17],popupAnchor:[0, -20]}), title: myPoints[i][3], opacity: 1.0
    }).bindPopup('<b>'+myPoints[i][3]+'</b>').addTo(map);
}

var cirmarker1 = L.circleMarker([42.026119, -93.649923], {fillOpacity   : 1, fillColor: "#1B27CE", weight: 0, radius: 5}).addTo(map);
var cirmarker2 = L.circleMarker([42.026374, -93.648483], {fillOpacity   : 1, fillColor: "#1B27CE", weight: 0, radius: 5}).addTo(map);
var cirmarker3 = L.circleMarker([42.024893, -93.646165], {fillOpacity   : 1, fillColor: "#1B27CE", weight: 0, radius: 5}).addTo(map);
var cirmarker4 = L.circleMarker([42.027871, -93.651719], {fillOpacity   : 1, fillColor: "#1B27CE", weight: 0, radius: 5}).addTo(map);
var rectangle = L.rectangle([[42.028696, -93.649327],[42.027588, -93.648204]], {color: "#ff7800", weight: 1}).addTo(map);
rectangle.bindPopup('<b>Parks Library</b>')