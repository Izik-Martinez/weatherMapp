// const detailsBox = document.querySelector(".detailsBox");
// const getWeather = async (cityName) => {
//     try {
//         const result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=9b5e48a248a824d83fdcdf5f648e6474`)
//         let degreesF = `${((result.data.main.feels_like)* 1.8 - 459.67)} degrees`;
//         console.log(degreesF);
//         return degreesF;
//     } catch {alert("error")}
// }
// document.addEventListener("mouseover", (e) => {
//     if (e.target.tagName == "path") {
//         let pathID = e.target.id;
//         switch (pathID) {
//             case "WA": console.log(getWeather("Seattle"));
//             break;
//             case "CA": detailsBox.innerText = console.log((getWeather("Sacramento")));
//             break;

//         }

//         detailsBox.style.opacity = "100%";
//     } else {
//         detailsBox.style.opacity = "0%";
//     }
// });

// window.onmouseover = (e) => {
//     let x = e.clientX,
//     y = e.clientY;
//     detailsBox.style.top = (y + 20) + "px";
//     detailsBox.style.left = (x) + "px";
// };

const detailsBox = document.querySelector(".detailsBox");
const getWeather = async (cityName) => {
    try {
        const result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=9b5e48a248a824d83fdcdf5f648e6474`)
        let degreesF = `${((result.data.main.feels_like)* 1.8 - 459.67)} degrees`;
        return degreesF;
    } catch {alert("error")}
}
document.addEventListener("mouseover", async (e) => {
    if (e.target.tagName == "path") {
        let pathID = e.target.id;
        switch (pathID) {
            case "WA": console.log(await getWeather("Seattle"));
            break;
            case "CA": detailsBox.innerText = (await getWeather("Sacramento"));
            break;

        }
        
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

