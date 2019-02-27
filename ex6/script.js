var map = L.map('map', {minZoom:15}).setView([42.041484, -93.640635],[42.027784, -93.649862], 16);
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    L.marker([42.027784, -93.649862]).addTo(map)
            .bindPopup("Durham Center")
            .openPopup();
    L.marker([42.041484, -93.640635]).addTo(map)
            .bindPopup("Home")
            .openPopup();

var coordinates = [
    [42.041484, -93.640635],
    [42.041651, -93.641000],
    [42.041536, -93.640861],
    [42.040787, -93.641016],
    [42.040787, -93.641016],
    [42.040568, -93.643682],
    [42.040456, -93.643704],
    [42.040392, -93.643720],
    [42.039070, -93.643495],
    [42.038930, -93.644788],
    [42.036896, -93.644776],
    [42.030524, -93.644663],
    [42.030504, -93.641530],
    [42.028994, -93.641520],
    [42.028899, -93.641509],
    [42.028879, -93.644416],
    [42.028891, -93.648890],
    [42.028890, -93.649156],
    [42.028390, -93.649285],
    [42.028119, -93.649284],
    [42.027906, -93.649912],
    [42.027784, -93.649862]
    ];

var polyline = L.polyline(coordinates, {color: 'maroon', opacity:0.90}).addTo(map);
polyline.bindTooltip("Home to Office");
var circle1 = L.circle([42.041484, -93.640635], {radius: 100, color: '#dd1c77', weight: 0}).addTo(map);
var circle2 = L.circle([42.027784, -93.649862], {radius: 100, color: '#dd1c77', weight: 0}).addTo(map);

var myPoints = [
    [42.028674, -93.652924, "cod", "College of Design"],
    [42.027525, -93.650120, "office", "Durham Center"],
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

var cirmarker1 = L.circleMarker([42.028592, -93.646500], {fillOpacity   : 1, fillColor: "#762a83", weight: 0, radius: 5}).addTo(map);

var cirmarker2 = L.circleMarker([42.027896, -93.645184], {fillOpacity   : 1, fillColor: "#762a83", weight: 0, radius: 5}).addTo(map);

var cirmarker3 = L.circleMarker([42.029396, -93.648633], {fillOpacity   : 1, fillColor: "#762a83", weight: 0, radius: 5}).addTo(map);

var rectangle = L.rectangle([[42.028696, -93.649327],[42.027588, -93.648204]], {color: "#ff7800", weight: 1}).addTo(map);

rectangle.bindPopup('<b>Parks Library</b>')