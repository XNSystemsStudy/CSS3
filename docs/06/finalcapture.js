addButtons();

var finalcapture = document.querySelector("#finalcapture");
var displayButton = document.querySelector("#ccDisplay");
var zIndexButton = document.querySelector("#ccZIndex");
var opacityButton = document.querySelector("#ccOpacity");
displayButton.addEventListener('click', displayClicked);
zIndexButton.addEventListener('click', zIndexClicked);
opacityButton.addEventListener('click', opacityClicked);

updateButtonText();

function addButtons() {
    var div1 = document.createElement('div');
    var div2 = document.createElement('div');
    div1.innerHTML = '<div id="finalcapture"></div>';
    div2.innerHTML = '<div id="capturecontrols"><button id="ccDisplay">display</button><button id="ccZIndex">zIndex</button><button id="ccOpacity">opacity</button></div>';

    document.body.insertBefore(div2, document.body.firstChild);
    document.body.insertBefore(div1, document.body.firstChild);
}

function updateButtonText() {
    var display = window.getComputedStyle(finalcapture).display;
    var zIndex = parseInt(window.getComputedStyle(finalcapture).zIndex);
    var opacity = parseFloat(window.getComputedStyle(finalcapture).opacity);

    displayButton.textContent = display == "none" ? "none->block" : "block->none";
    zIndexButton.textContent = zIndex > 0 ? "9999 -> -9999" : "-9999 -> 9999";
    opacityButton.textContent = opacity < 1.0 ? "0.5 -> 1.0" : "1.0 -> 0.5";
}

function displayClicked() {
    console.log('display clicked');
    console.dir(finalcapture.style);
    var display = window.getComputedStyle(finalcapture).display;
    finalcapture.style.display = display == "none" ? "block" : "none";
    updateButtonText();
}
function zIndexClicked() {
    console.log('zIndex clicked');
    var zIndex = parseInt(window.getComputedStyle(finalcapture).zIndex);
    finalcapture.style.zIndex = zIndex > 0 ? "-9999" : "9999";
    updateButtonText();
}
function opacityClicked() {
    console.log('opacity clicked');
    var opacity = parseFloat(window.getComputedStyle(finalcapture).opacity);
    finalcapture.style.opacity = opacity < 1.0 ? "1.0" : "0.5";
    updateButtonText();
}
