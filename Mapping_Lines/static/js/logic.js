// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
// This is a shorter method for the same script below...
// let map = L.map('mapid').setView([40.7, -94.5], 4);

// Create the map object with a center and zoom level using the setView() method
let map = L.map("mapid").setView([37.6213, -122.3790], 5);

// Coordinates for each point to be used in the line.
let line = [
    [33.9416, -118.4085],
    [30.1975, -97.6664],
    [39.9999, -82.8872],
    [40.6413, -73.7781],
    [43.6777, -79.6248]
];

// Create a polyline using the line coordinates and make the line dashed blue.
L.polyline(line, {
    color: "blue",
    weight: 4,
    dashArray: '20, 10'
}).addTo(map);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    // use this ID to change the style of the tile layer
    id: 'mapbox/satellite-streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);