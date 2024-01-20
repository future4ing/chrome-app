function onGeoOk(position) {
    const lat = position.coords.latitude;
    const long = position.coords.longitude;
    console.log("you live in", lat, long);
}

function onGeoError() {
    alert("can't find you. no weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);