//google.maps.event.addDomListener(window, "load", init);
var map;
function init() {
    var mapOptions = {
        center: new google.maps.LatLng(58.802362, 29.197997),
        zoom: 4,
        zoomControl: false,
        disableDoubleClickZoom: true,
        mapTypeControl: false,
        scaleControl: false,
        scrollwheel: false,
        panControl: false,
        streetViewControl: false,
        draggable: false,
        overviewMapControl: false,
        overviewMapControlOptions: {
            opened: false,
        },
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        styles: [
{
    "featureType": "administrative",
    "elementType": "labels",
    "stylers": [
        {
            "visibility": "off"
        }
    ]
},
{
    "featureType": "administrative.country",
    "elementType": "geometry.stroke",
    "stylers": [
        {
            "visibility": "on"
        },
        {
            "color": "#999999"
        }
    ]
},
{
    "featureType": "administrative.province",
    "elementType": "geometry.stroke",
    "stylers": [
        {
            "visibility": "off"
        }
    ]
},
{
    "featureType": "landscape",
    "elementType": "geometry",
    "stylers": [
        {
            "visibility": "on"
        },
        {
            "color": "#e3e3e3"
        }
    ]
},
{
    "featureType": "landscape.natural",
    "elementType": "labels",
    "stylers": [
        {
            "visibility": "off"
        }
    ]
},
{
    "featureType": "poi",
    "elementType": "all",
    "stylers": [
        {
            "visibility": "off"
        }
    ]
},
{
    "featureType": "road",
    "elementType": "all",
    "stylers": [
        {
            "visibility": "on"
        },
        {
            "color": "#999999"
        }
    ]
},
{
    "featureType": "road",
    "elementType": "labels",
    "stylers": [
        {
            "visibility": "off"
        }
    ]
},
{
    "featureType": "transit",
    "elementType": "labels.icon",
    "stylers": [
        {
            "visibility": "off"
        }
    ]
},
{
    "featureType": "transit.line",
    "elementType": "geometry",
    "stylers": [
        {
            "visibility": "off"
        }
    ]
},
{
    "featureType": "transit.line",
    "elementType": "labels.text",
    "stylers": [
        {
            "visibility": "off"
        }
    ]
},
{
    "featureType": "transit.station.airport",
    "elementType": "geometry",
    "stylers": [
        {
            "visibility": "on"
        }
    ]
},
{
    "featureType": "transit.station.airport",
    "elementType": "labels",
    "stylers": [
        {
            "visibility": "off"
        }
    ]
},
{
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
        {
            "color": "#FFFFFF"
        }
    ]
},
{
    "featureType": "water",
    "elementType": "labels",
    "stylers": [
        {
            "visibility": "off"
        }
    ]
}
        ]
    }
    var mapElement = document.getElementById("map");
    var map = new google.maps.Map(mapElement, mapOptions);
    var locations = [new google.maps.Marker({
        icon: "https://mapbuildr.com/assets/img/markers/ellipse-green.png",
        position: new google.maps.LatLng(60.621607, 16.775918000000047),
        map: map,
    })];
}