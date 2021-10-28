let cord = document.getElementById('cord')
let rssi = document.getElementById('rssi')

function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
        cord.innerHTML = "Geolocation is not supported by this browser.";
    }
  }

  function showPosition(position) {
    cord.innerHTML = "Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude;
  }

  
  getLocation()