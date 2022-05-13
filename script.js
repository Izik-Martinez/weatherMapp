const detailsBox = document.querySelector(".detailsBox");
document.addEventListener("mouseover", (e) => {
    if (e.target.tagName == "path") {
        detailsBox.innerText = "Testing";
        detailsBox.style.opacity = "100%";
    } else {
        detailsBox.style.opacity = "0%";
    }
});

window.onmouseover = (e) => {
    let x = e.clientX,
    y = e.clientY;
    detailsBox.style.top = (y + 20) + "px";
    detailsBox.style.left = (x) + "px";
};