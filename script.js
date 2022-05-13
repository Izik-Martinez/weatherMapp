const detailsBox = document.querySelector(".detailsBox");
document.addEventListener("mouseover", (e) => {
    if (e.target.tagName == "path") {
        let pathID = e.target.id;
        if (pathID == "AL"){
           let cityName = "Montgomery"
        }
        
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

// const getWeather = async () => {
//     try {
//         let cityName = "boston";
//         const result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=9b5e48a248a824d83fdcdf5f648e6474`)
//         console.log(result);
//     } catch {alert("error")}
// }