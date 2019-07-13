var fromLoc;
L.mapquest.key = "o7PvIkuREj2G4vdr1TNevZ0jZXSOB4CD";
function getAddress() {
  fromLoc = document.getElementById("userAddress").value;
  console.log(fromLoc);
}

function addDirections() {
  getAddress();
 
  var directions = L.mapquest.directions();
  directions.route(
    {
      start: fromLoc,
      end: "55 st george street,Toronto,Ontario",
      options: {
        enhancedNarrative: true
      }
    },
    createMap
  );
}



function createMap(err, response) {
  var map = L.mapquest.map("map", {
      center: [43.6532, -79.3832],
      layers: L.mapquest.tileLayer("map"),
      zoom: 7
    });
  
  var directionsLayer = L.mapquest
    .directionsLayer({
      directionsResponse: response
    })
    .addTo(map);

  var narrativeControl = L.mapquest.narrativeControl({
    directionsResponse: response,
    compactResults: false,
    interactive: true
  });

  narrativeControl.setDirectionsLayer(directionsLayer);
  narrativeControl.addTo(map);
}

function updateButton2(){
  var inputValue =document.getElementById('userAddress').value;
  L.mapquest.directions().route({
    start:inputValue,
    end:"55 st george street,Toronto,Ontario"
  });
}

var btn2 = document.querySelector(".btn2").addEventListener("click", updateButton2);