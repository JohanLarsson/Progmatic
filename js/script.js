var map;
function init() {
    var mapElement = document.getElementById("map");
    var center;
    if (mapElement.clientHeight > mapElement.clientWidth) {
        center = new google.maps.LatLng(62.5, 25);
    } else {
        center = new google.maps.LatLng(62.5, 29);
    }
    var mapOptions = {
        center: center,
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

    var map = new google.maps.Map(mapElement, mapOptions);
    var progmaticPosition = new google.maps.LatLng(60.6, 16.8);
    var locations = [new google.maps.Marker({
        icon: {
            path: google.maps.SymbolPath.CIRCLE,
            strokeWeight: 0,
            fillOpacity: 1,
            fillColor: '#679469',
            scale: 8
        },
        position: progmaticPosition,
        map: map,
        title: "progmatic",
        desc: "här finner du oss"
    })];
}