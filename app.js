function version() {
    var os = navigator.appVersion;
    document.getElementById("OS").innerHTML = os;
}

function operatingSytem() {
    var OSName = "Unknown OS";
    if (navigator.appVersion.indexOf("Win") != -1) OSName = "Windows";
    if (navigator.appVersion.indexOf("Mac") != -1) OSName = "MacOS";
    if (navigator.appVersion.indexOf("X11") != -1) OSName = "UNIX";
    if (navigator.appVersion.indexOf("Linux") != -1) OSName = "Linux";

    document.getElementById("OS-Name").innerHTML = OSName;
}

function devisedetect() {
    var detector = new MobileDetect(window.navigator.userAgent)
    console.log("Mobile = " + detector.mobile());
    console.log("Phone = " + detector.phone());
    document.getElementById('device').innerHTML = "Mobile = " + detector.mobile();
}