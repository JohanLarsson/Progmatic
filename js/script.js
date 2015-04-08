google.maps.event.addDomListener(window, "load", init);
var map;
function init() {
    var mapOptions = {
        center: new google.maps.LatLng(58.802362, 29.197997),
        zoom: 4,
        zoomControl: false,
        disableDoubleClickZoom: false,
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
    var locations = [
["progmatic", "undefined", "", "", "undefined", 60.621607, 16.775918000000047, "https://mapbuildr.com/assets/img/markers/ellipse-green.png"]
    ];
    for (i = 0; i < locations.length; i++) {
        if (locations[i][1] == "undefined") { description = ""; } else { description = locations[i][1]; }
        if (locations[i][2] == "undefined") { telephone = ""; } else { telephone = locations[i][2]; }
        if (locations[i][3] == "undefined") { email = ""; } else { email = locations[i][3]; }
        if (locations[i][4] == "undefined") { web = ""; } else { web = locations[i][4]; }
        if (locations[i][7] == "undefined") { markericon = ""; } else { markericon = locations[i][7]; }
        marker = new google.maps.Marker({
            icon: markericon,
            position: new google.maps.LatLng(locations[i][5], locations[i][6]),
            map: map,
            title: locations[i][0],
            desc: description,
            tel: telephone,
            email: email,
            web: web
        });
        link = "";
    }
}