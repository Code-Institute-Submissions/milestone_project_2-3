function initMap() {
  // The location of Uluru
  var uluru = {lat: 52.836165, lng: -6.929240 };
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 15, center: uluru});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: uluru, map: map});
}
