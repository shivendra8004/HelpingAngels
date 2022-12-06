const signUP = document.querySelector(".signup");
const signIN = document.querySelector(".signin");
signUP.addEventListener("click", () => {
  document.querySelector(".box").style.display = "none";
  document.querySelector(".signup-box").style.display = "block";
});
signIN.addEventListener("click", () => {
  document.querySelector(".box").style.display = "block";
  document.querySelector(".signup-box").style.display = "none";
});

const logIN = document.querySelector(".login");
logIN.addEventListener("click", () => {
  document.querySelector(".box").style.display = "block";
  document.querySelector(".signup-box").style.display = "none";
  document.getElementById("nav").style.filter = "blur(3px)";
  document.getElementById("main").style.filter = "blur(3px)";
});

logReg.addEventListener("click", () => {
  alert("hello");
});

var address = document.getElementById("address");
function showAddress() {
  if (addressArr.length > 0) {
    addressArr.forEach((element) => {
      latitude.push(element.lat);
      longitude.push(element.lon);
    });
  }
}
// function findCoordinates() {
//   var url =
//     "https://nominatim.openstreetmap.org/search?format=json&limit=3&q=" +
//     address.value;
//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => (addressArr = data))
//     .then((show) => showAddress())
//     .catch((arr) => console.log(arr));
// }

function initMap(lat, lon) {
  //   Map Object
  var option = {
    zoom: 12,
    center: { lat: 24.4348, lng: 77.1609 },
  };
  // Display Map
  var map = new google.maps.Map(document.getElementById("map"), option);
  // Array for latitude and longitude
  var latitude = [24.4348];
  var longitude = [77.1609];
  //   Loop for Adding marker on each Lat and long
  for (let i = 0; i <= latitude.length; i++) {
    addMarker(latitude[i], longitude[i]);
  }
  // Add Marker Function
  function addMarker(lat, lon) {
    var marker = new google.maps.Marker({
      position: { lat: lat, lng: lon },
      map: map,
    });
    const addmarker = addMarker(lat, lon);
    return addmarker;
  }
  var map = new google.maps.Map(document.getElementById("map"), option);
  // Array for latitude and longitude
  var latitude = [24.4348];
  var longitude = [77.1609];
  //   Loop for Adding marker on each Lat and long
  for (let i = 0; i <= latitude.length; i++) {
    addMarker(latitude[i], longitude[i]);
  }
}