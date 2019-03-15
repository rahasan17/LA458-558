// Initializing two tile layer variables:

var osm = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
});

var esriWorldImagery = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
});

var map = L.map('map', {
    center: [37.6916159, -94.9964676],
    zoom: 4,
    layers: [osm]
});

// Adding controls for baselayers, overlays:

var baseMaps = {
    "Streets": osm,
    "Aerial": esriWorldImagery
};

L.control.layers(baseMaps).addTo(map);

var myURL = "https://rahasan17.github.io/LA458-558/ex8/ex8/maps.geojson";
function style(feature) {
    return {
        stroke: false,
        fillColor: ((feature.properties.rank == 3) ? '#a1dab4' : 
            (feature.properties.rank == 5) ? '#2c7fb8' :
            (feature.properties.rank == 8) ? '#41b6c4': '#d73027'),
        weight: 0
    };
}
var geojsonLayer = new L.GeoJSON.AJAX(myURL , {
    style: style,
	 pointToLayer: function (feature, latlng) {
        return new L.circleMarker(latlng, {
            fillOpacity: 0.85,
            radius: feature.properties.rank+7,
           //title: this is not supported here - see layer.bindTooltip  below
        });
    },

    onEachFeature: function (feature, layer) {
        htmlText = "<strong>" + feature.properties.name + "</strong>";
        layer.bindPopup(htmlText);
        textForTooltip = feature.properties.name+ " is " + feature.properties.type + " priority with a ranking point of " + feature.properties.rank;
        layer.bindTooltip(textForTooltip);
    }
}).addTo(map);

var breaks = [3, 5, 8,]; 
var labels = ['Top Priority', 'Moderate', 'Below Moderate'];
function getColor(d) {
    return  d == '3' ? "#a1dab4" :
    d == '5' ? "#2c7fb8" :
    d == '8' ? "#41b6c4":
    "#FFFFFF";
}


var legend = L.control({position: 'bottomright'});
legend.onAdd = function (map) {
    var div = L.DomUtil.create('div', 'info legend');
    // loop through items and generate legend items each
    for (var i = 0; i < breaks.length; i++) {
        div.innerHTML +=
            '<i style="background:' + getColor(breaks[i]) + ' "></i> ' +
            labels[i] + (breaks ? '' +  '<br>' : '');
    }
    return div;
};
legend.addTo(map);