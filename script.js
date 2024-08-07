const shareButton = document.getElementById("share");
const shareSection = document.getElementById("share-section");
const authorSection = document.getElementById("author");
const bottomSection = document.getElementById("bottom-section");
const svg = document.querySelector("svg path");
let showShare = false;

shareButton.addEventListener("click", (e) => {
  showShare = !showShare;
  const isSmallScreen = window.matchMedia("(max-width: 725px)").matches;

  if (showShare) {
    svg.style.fill = "white";
    shareButton.style.backgroundColor = "var(--Grayish-Blue)";
    shareSection.style.display = "flex";
    if (isSmallScreen) {
      bottomSection.style.backgroundColor = "var(--Very-Dark-Grayish-Blue)";
      authorSection.style.display = "none";
    }
  } else {
    [
      svg.style.fill,
      shareButton.style.backgroundColor,
      shareSection.style.display,
    ] = ["", "", "none"];
    if (isSmallScreen) {
      [bottomSection.style.backgroundColor, authorSection.style.display] = [
        "",
        "grid",
      ];
    }
  }
});
