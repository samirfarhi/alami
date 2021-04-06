let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: {lat: 31.75, lng: -7.005},
    zoom: 8
  });
}

