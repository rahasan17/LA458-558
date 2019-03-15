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

var geojsonLayer = new L.GeoJSON.AJAX(myURL , {
	 pointToLayer: function (feature, latlng) {
        return new L.CircleMarker(latlng, {
            stroke: false,
            weight: 0.25, //stroke weight
            color: '#000000', //stroke color
            opacity: 1.0, //stoke opacity
			fillColor: 'lightBlue',
            fillOpacity: 0.85,
            radius: 10,
           //title: this is not supported here - see layer.bindTooltip  below
        });
    },

    onEachFeature: function (feature, layer) {
        htmlText = "<strong>" + feature.properties.name + "</strong>";
        layer.bindPopup(htmlText);
        textForTooltip = feature.properties.name+"is"+feature.properties.type;
        layer.bindTooltip(textForTooltip);
    }
}).addTo(map);