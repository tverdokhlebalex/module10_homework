const screenSizeButton = document.getElementById("screenSizeButton");

screenSizeButton.addEventListener("click", () => {
    const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    const screenHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    
    alert(`Ширина экрана: ${screenWidth}px
Высота экрана: ${screenHeight}px`);
});
