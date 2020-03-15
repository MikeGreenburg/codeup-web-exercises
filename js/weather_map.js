"use strict";

//------------- alternate styled map-----------------------------//


//---------------------------------easter egg--------------------------------------//
// function konamiCode(){
//
//     var keys = {
//         13: 'Enter',
//         37: 'ArrowLeft',
//         38: 'ArrowUp',
//         39: 'ArrowRight',
//         40: 'ArrowDown',
//         65: 'a',
//         66: 'b'
//     };
//
//     var konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a', 'Enter'];
//     var userInput = 0;
//     $('backgroundImage').html('contra');
//     document.addEventListener('keydown', function (e) { // starts 2nd code
//
//         var key = keys[e.keyCode];
//         var requiredKey = konamiCode[userInput];
//
//         if (key === requiredKey) {
//             userInput++;
//             if (userInput === konamiCode.length) {
//                 activateCheats();
//                 userInput = 0;
//     function activateCheats() {
//         $('h1').html("You Have found the Moon Map feature");
//         function initMap() {
//             var map1 = new google.maps.Map(document.getElementById('map'), {
//                 center: {lat: 0, lng: 0},
//                 zoom: 1,
//                 streetViewControl: false,
//                 mapTypeControlOptions: {
//                     mapTypeIds: ['moon']
//                 }
//             });
//
//             var moonMapType = new google.maps.ImageMapType({
//                 getTileUrl: function(coord, zoom) {
//                     var normalizedCoord = getNormalizedCoord(coord, zoom);
//                     if (!normalizedCoord) {
//                         return null;
//                     }
//                     var bound = Math.pow(2, zoom);
//                     return '//mw1.google.com/mw-planetary/lunar/lunarmaps_v1/clem_bw' +
//                         '/' + zoom + '/' + normalizedCoord.x + '/' +
//                         (bound - normalizedCoord.y - 1) + '.jpg';
//                 },
//                 tileSize: new google.maps.Size(256, 256),
//                 maxZoom: 9,
//                 minZoom: 0,
//                 radius: 1738000,
//                 name: 'Moon'
//             });
//
//             map1.mapTypes.set('moon', moonMapType);
//             map1.setMapTypeId('moon');
//         }
//
// // Normalizes the coords that tiles repeat across the x axis (horizontally)
// // like the standard Google map tiles.
//         function getNormalizedCoord(coord, zoom) {
//             var y = coord.y;
//             var x = coord.x;
//
//             // tile range in one direction range is dependent on zoom level
//             // 0 = 1 tile, 1 = 2 tiles, 2 = 4 tiles, 3 = 8 tiles, etc
//             var tileRange = 1 << zoom;
//
//             // don't repeat across y-axis (vertically)
//             if (y < 0 || y >= tileRange) {
//                 return null;
//             }
//
//             // repeat across x-axis
//             if (x < 0 || x >= tileRange) {
//                 x = (x % tileRange + tileRange) % tileRange;
//             }
//
//             return {x: x, y: y};
//         }
//     }
//             } else {
//                 userInput = 0;
//             }
//         }
//
//     })
// }
// konamiCode();
// Associate the styled map with the MapTypeId and set it to display.

$(document).ready(function() {
    $.get("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/"+ darkSkyKey + "/29.4241,-98.4936");
    $.get("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/39fcbf9abb9b85b22991f38b945d8297/29.423161,-98.484513").done(function(data) {
        console.log(data);
        console.log(new Date(data.currently.time * 1000));
    });


    //Main map
    mapboxgl.accessToken = mapboxToken;
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        zoom: 14,
        pitch: 45,
        bearing: -17.6,
        center: [-98.484513, 29.423161],//Longitude first and Latitude second
        antialias: true

    });

    map.addLayer(
        {
            'id': '3d-buildings',
            'source': 'composite',
            'source-layer': 'building',
            'filter': ['==', 'extrude', 'true'],
            'type': 'fill-extrusion',
            'minzoom': 15,
            'paint': {
                'fill-extrusion-color': '#aaa',

// use an 'interpolate' expression to add a smooth transition effect to the
// buildings as the user zooms in
                'fill-extrusion-height': [
                    'interpolate',
                    ['linear'],
                    ['zoom'],
                    15,
                    0,
                    15.05,
                    ['get', 'height']
                ],
                'fill-extrusion-base': [
                    'interpolate',
                    ['linear'],
                    ['zoom'],
                    15,
                    0,
                    15.05,
                    ['get', 'min_height']
                ],
                'fill-extrusion-opacity': 0.6
            }
        });
    //-------------------------Geolocation Control------------------------------//

});

