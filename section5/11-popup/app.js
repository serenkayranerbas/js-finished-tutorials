const button = document.querySelector("button");
const mainPopup = document.querySelector(".main-popup");
const popupClose = document.querySelector(".popup-close");
// console.log(popup);
button.addEventListener("click", () => {
  mainPopup.style.display = "block";
});

popupClose.addEventListener("click", () => {
  mainPopup.style.display = "none";
});

mainPopup.addEventListener("click",e => {
  console.log(e.target);
  if(e.target.className==='main-popup'){//tıklananın classı main-popup ise bunu
    mainPopup.style.display='none';
  }
});
