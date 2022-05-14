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
        let degreesF = `${Math.floor((result.data.main.feels_like)* 1.8 - 459.67)} degrees`;
        return degreesF;
    } catch {alert("error")}
}
document.addEventListener("mouseover", async (e) => {
    if (e.target.tagName == "path") {
        let pathID = e.target.id;
        switch (pathID) {
            case "AL": detailsBox.innerText = await getWeather("Montgomery");
            break;
            case "AK": detailsBox.innerText = (await getWeather("Juneau"));
            break;
            case "AZ": detailsBox.innerText = await getWeather("Pheonix");
            break;
            case "AR": detailsBox.innerText = (await getWeather("Little Rock"));
            break;
            case "CA": detailsBox.innerText = (await getWeather("Sacramento"));
            break;
            case "CO": detailsBox.innerText = (await getWeather("Denver"));
            break;
            case "CT": detailsBox.innerText = await getWeather("Hartford");
            break;
            case "DE": detailsBox.innerText = (await getWeather("Dover"));
            break;
            case "FL": detailsBox.innerText = await getWeather("Tallahassee");
            break;
            case "GA": detailsBox.innerText = (await getWeather("Atlanta"));
            break;
            case "HI": detailsBox.innerText = await getWeather("Honolulu");
            break;
            case "ID": detailsBox.innerText = (await getWeather("Boise"));
            break;
            case "IL": detailsBox.innerText = await getWeather("Springfield");
            break;
            case "IN": detailsBox.innerText = (await getWeather("Indianapolis"));
            break;
            case "IA": detailsBox.innerText = await getWeather("Des Moines");
            break;
            case "KS": detailsBox.innerText = (await getWeather("Topeka"));
            break;
            case "KY": detailsBox.innerText = await getWeather("Frankfort");
            break;
            case "LA": detailsBox.innerText = (await getWeather("Baton Rouge"));
            break;
            case "ME": detailsBox.innerText = await getWeather("Augusta");
            break;
            case "MD": detailsBox.innerText = (await getWeather("Annapolis"));
            break;
            case "MI": detailsBox.innerText = await getWeather("Lansing");
            break;
            case "MN": detailsBox.innerText = (await getWeather("Saint Paul"));
            break;
            case "MS": detailsBox.innerText = await getWeather("Jackson");
            break;
            case "MO": detailsBox.innerText = (await getWeather("Jefferson City"));
            break;
            case "MT": detailsBox.innerText = await getWeather("Helena");
            break;
            case "NE": detailsBox.innerText = (await getWeather("Lincoln"));
            break;
            case "NV": detailsBox.innerText = await getWeather("Carson City");
            break;
            case "NH": detailsBox.innerText = (await getWeather("Concord"));
            break;
            case "NJ": detailsBox.innerText = await getWeather("Trenton");
            break;
            case "NM": detailsBox.innerText = (await getWeather("Santa Fe"));
            break;
            case "NY": detailsBox.innerText = await getWeather("Albany");
            break;
            case "NC": detailsBox.innerText = (await getWeather("Raleigh"));
            break;
            case "ND": detailsBox.innerText = await getWeather("Bismarck");
            break;
            case "OH": detailsBox.innerText = (await getWeather("Columbus"));
            break;
            case "OK": detailsBox.innerText = await getWeather("Oklahoma City");
            break;
            case "OR": detailsBox.innerText = (await getWeather("Salem"));
            break;
            case "PA": detailsBox.innerText = await getWeather("Harrisburg");
            break;
            case "RI": detailsBox.innerText = (await getWeather("Providence"));
            break;
            case "SC": detailsBox.innerText = await getWeather("Columbia");
            break;
            case "SD": detailsBox.innerText = (await getWeather("Pierre"));
            break;
            case "TN": detailsBox.innerText = (await getWeather("Nashville"));
            break;

            case "TX": detailsBox.innerText = (await getWeather("Austin"));
            break;

            case "UT": detailsBox.innerText = (await getWeather("Salt Lake City"));
            break;

            case "VT": detailsBox.innerText = (await getWeather("Montpelier"));
            break;

            case "VA": detailsBox.innerText = (await getWeather("Richmond"));
            break;

            case "WA": detailsBox.innerText = (await getWeather("Olympia"));
            break;

            case "WV": detailsBox.innerText = (await getWeather("Charleston"));
            break;

            case "WI": detailsBox.innerText = (await getWeather("Madison"));
            break;

            case "WY": detailsBox.innerText = (await getWeather("Cheyenne"));
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

