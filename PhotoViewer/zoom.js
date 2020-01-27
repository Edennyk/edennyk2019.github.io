
//<![CDATA[
"use strict"; // interpret document contents in JavaScript strict mode

/* global variables */
var openerWindow = window.opener;
var photoOrderArray = openerWindow.photoOrder;
var figFilename = "images/IMG_0" + photoOrderArray[2] + ".jpg";

/* populate img element and create event listener */
function pageSetup() {
  document.getElementsByTagName("img")[0].src = figFilename; // assign filename to img element
  createEventListener();
}

/* close window */
function closeWin() {
  window.close();
}

/* add a photo to the favorite list */
function addFav() {
  if (openerWindow.favCount < 5) {
    // openerWindow from photos 
    var favoriteList = openerWindow.document.getElementById("favorites");
    // connect
    var newFavorite = openerWindow.document.createElement("img");
    newFavorite.src = figFilename;
    newFavorite.width = 200;
    newFavorite.height = 200;
    newFavorite.addEventListener("click", showRemoveBtn, false);
    
    // attach 
    favoriteList.appendChild(newFavorite);
    openerWindow.favCount++;
  }
}

/* remove button */
function showRemoveBtn() {
  var removeBtn = openerWindow.document.createElement("button");
  var txt = openerWindow.document.createTextNode("Remove");
  removeBtn.addEventListener("click", removeFav, false);
  removeBtn.appendChild(txt);

  this.parentElement.insertBefore(removeBtn, this);
}
/* remove fav lists*/
function removeFav() {
  var favoriteList = openerWindow.document.getElementById("favorites");
  favoriteList.removeChild(this.nextSibling);
  favoriteList.removeChild(this);
  openerWindow.favCount--;
}

/* create event listener for close button */
function createEventListener() {
  document.getElementById("closeWin").addEventListener("click", closeWin, false);
  document.getElementById("addFav").addEventListener("click", addFav, false);
}
/* add img src value and create event listener when page finishes loading */
window.onload = pageSetup;
//]]>