const iconToggleButton = document.getElementById("iconToggleButton");
const icon = document.getElementById("icon");

iconToggleButton.addEventListener("click", () => {
    if (icon.src.includes("icon_01.png")) {
        icon.src = "./icon_02.svg";
    } else {
        icon.src = "./icon_01.svg";
    }
});