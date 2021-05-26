//Find Oprating Syatem Version
function version() {
    var os = navigator.appVersion;
    document.getElementById("OS").innerHTML = os;
}

//Find Oprating System Name
function operatingSytem() {
    var OSName = "Unknown OS";
    if (navigator.appVersion.indexOf("Win") != -1) OSName = "Windows";
    if (navigator.appVersion.indexOf("Mac") != -1) OSName = "MacOS";
    if (navigator.appVersion.indexOf("X11") != -1) OSName = "UNIX";
    if (navigator.appVersion.indexOf("Linux") != -1) OSName = "Linux";

    document.getElementById("OS-Name").innerHTML = OSName;
}

//Finding Device
function devisedetect() {
    var detector = new MobileDetect(window.navigator.userAgent)
    console.log("Mobile = " + detector.mobile());
    console.log("Phone = " + detector.phone());
    document.getElementById('device').innerHTML = "Mobile = " + detector.mobile();
}


// Finding location
let geocode = {
    reverseGeocode : function (latitude, longitude) {
        var apikey = 'fe936fe3df894267a6f05ff761d3a355';

        var api_url = 'https://api.opencagedata.com/geocode/v1/json'

        var request_url = api_url
            + '?'
            + 'key=' + apikey
            + '&q=' + encodeURIComponent(latitude + ',' + longitude)
            + '&pretty=1'
            + '&no_annotations=1';

        var request = new XMLHttpRequest();
        request.open('GET', request_url, true);

        request.onload = function () {

            if (request.status === 200) {
                // Success!
                var data = JSON.parse(request.responseText);
                // console.log(data.results[0]); // print the location
                document.getElementById('getlocation').innerHTML = data.results[0].formatted;

            } else if (request.status <= 500) {
                // We reached our target server, but it returned an error

                console.log("unable to geocode! Response code: " + request.status);
                var data = JSON.parse(request.responseText);
                console.log('error msg: ' + data.status.message);
            } else {
                console.log("server error");
            }
        };

        request.onerror = function () {
            // There was a connection error of some sort
            console.log("unable to connect to server");
        };

        request.send();  // make the request
    },
    getLocation: function () {
        function success(data) {
            geocode.reverseGeocode(data.coords.latitude, data.coords.longitude);
        }
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(success, console.error);
        }

    }
};

geocode.getLocation();

