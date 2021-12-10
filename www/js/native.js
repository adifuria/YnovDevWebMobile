function onBatteryStatus(status) {
  console.log("Battery Level Low " + status.level + "%");
}

const openInAppBrowserOptions = "location=yes,zoom=false";

const openInAppBrowser = (link) => {
  cordova.InAppBrowser.open(link, "_blank", openInAppBrowserOptions);
};

const deviceReady = () => {
  window.addEventListener("batterystatus", onBatteryStatus, false);
};

// set to either landscape FOR PHONE
//screen.orientation.lock('landscape');

// allow user rotate
screen.orientation.unlock();

// access current orientation
console.log('Orientation is ' + screen.orientation.type);

window.addEventListener("orientationchange", function(){
  console.log(screen.orientation.type); // e.g. portrait
});

document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    console.log(StatusBar);
    StatusBar.backgroundColorByHexString("#333"); // => #333333
}