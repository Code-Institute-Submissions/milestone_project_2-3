function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 3,
        center: {
            lat: -6.9341,
            lng: 52.8365
        }
    });

    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    
    var locations = [
        { lat: 52.836120, lng: -6.929189 }
    ];

    var markers = location.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    var markerCluster = new MarkerClusterer(map, markers,
    {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});

}