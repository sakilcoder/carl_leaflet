
var map = L.map('map').setView([50.0, -124.3], 3);

var stateLayer = L.geoJSON(states, {
    style: styleState,
    onEachFeature: onEachState,
}).addTo(map);
    
