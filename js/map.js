var fromLoc;
        function getAddress() {

            fromLoc = document.getElementById('userAddress').value;
            console.log(fromLoc);
        }
        function directions() {
            L.mapquest.key = 'o7PvIkuREj2G4vdr1TNevZ0jZXSOB4CD';

            var map = L.mapquest.map('map', {
                center: [43.6532, -79.3832],
                layers: L.mapquest.tileLayer('map'),
                zoom: 13
            });

            L.mapquest.directions().route({
                start: '55 st george street,Toronto,Ontario',
                end: fromLoc


            });

        }