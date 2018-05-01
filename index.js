
// // Note: This example requires that you consent to location sharing when
// // prompted by your browser. If you see the error "The Geolocation service
// // failed.", it means you probably did not give permission for the browser to
// // locate you.
// var map, infoWindow;
// function initMap() {
// map = new google.maps.Map(document.getElementById('map-canvas'), {
//     center: {lat: -34.397, lng: 150.644},
//     zoom: 13
// });
// infoWindow = new google.maps.InfoWindow;

// // Try HTML5 geolocation.
// if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(function(position) {
//     var pos = {
//         lat: position.coords.latitude,
//         lng: position.coords.longitude
//     };

//     infoWindow.setPosition(pos);
//     infoWindow.setContent('Location found.');
//     infoWindow.open(map);
//     map.setCenter(pos);
//     }, function() {
//     handleLocationError(true, infoWindow, map.getCenter());
//     });
// } else {
//     // Browser doesn't support Geolocation
//     handleLocationError(false, infoWindow, map.getCenter());
// }
// }

// function handleLocationError(browserHasGeolocation, infoWindow, pos) {
// infoWindow.setPosition(pos);
// infoWindow.setContent(browserHasGeolocation ?
//                         'Error: The Geolocation service failed.' :
//                         'Error: Your browser doesn\'t support geolocation.');
// infoWindow.open(map);
// }



// Build the JS API request node.
var script = document.createElement('script');
var query = '?key=AIzaSyBKvzTkXLExmLwiU8ZY4MaS522McemciA4&libraries=places&callback=mapsLoaded';
var langCode = getUrlParameter('language');
// Try to be generous with accepting upper/lower case.
if (langCode.length === 2) {
langCode = langCode.toLowerCase();
}
if (langCode) {
query += '&language=' + langCode;
}
var regionCode = getUrlParameter('region').toUpperCase();
if (regionCode) {
query += '&region=' + regionCode;
}
script.src = 'https://maps.googleapis.com/maps/api/js' + query;
script.setAttribute('async', '');
script.setAttribute('defer', '');
document.head.appendChild(script);

