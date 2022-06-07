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
//             case "CA": let howCloudy = console.log((getWeather("Sacramento")));
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

const paths = document.querySelectorAll("path");


const detailsBox = document.querySelector(".detailsBox");
const getWeather = async (cityName) => {
    try {
        
        const result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=9b5e48a248a824d83fdcdf5f648e6474`)

        console.log(result)
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


//  --Clouds--

const getClouds = async (cityName) => {
    try {
        
        const result2 = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=9b5e48a248a824d83fdcdf5f648e6474`)

        console.log(result2)
        let percentCloudy = result2.data.clouds;
        console.log(percentCloudy);
        return percentCloudy;
    } catch {alert("error")}
}


let titleBackgroundIMG = document.body.querySelector(".title");

// console.log(titleBackgroundIMG);

document.addEventListener("mouseover", async (e) => {
    if (e.target.tagName == "path") {
        let pathID = e.target.id;
        switch (pathID) {
            case "AL": let howCloudy = await getClouds("Montgomery");
            if (howCloudy.all < 60) {
                titleBackgroundIMG.classList.add("sunny");
            } else if (howCloudy.all > 60 && howCloudy.all < 70) {
                titleBackgroundIMG.classList.add("partlySunny");
            } else if (howCloudy.all > 70 && howCloudy.all < 80) {
                titleBackgroundIMG.classList.add("cloudy");
            } else if (howCloudy.all > 80) {
                titleBackgroundIMG.classList.add("overcast");
            }
            break;
            case "AK": let howCloudy1 = (await getClouds("Juneau"));
            titleBackgroundIMG.classList.remove("sunny","cloudy","partlySunny","overcast");
            if (howCloudy1.all < 60) {
                titleBackgroundIMG.classList.add("sunny");
            } else if (howCloudy1.all > 60 && howCloudy1.all < 70) {
                titleBackgroundIMG.classList.add("partlySunny");
            } else if (howCloudy1.all > 70 && howCloudy1.all < 80) {
                titleBackgroundIMG.classList.add("cloudy");
            } else if (howCloudy1.all > 80) {
                titleBackgroundIMG.classList.add("overcast");
            }
            break;
            case "AZ": let howCloudyOdd = await getClouds("Pheonix");
            titleBackgroundIMG.classList.remove("sunny","cloudy","partlySunny","overcast");
            if (howCloudyOdd.all < 60) {
                titleBackgroundIMG.classList.add("sunny");
            } else if (howCloudyOdd.all > 60 && howCloudyOdd.all < 70) {
                titleBackgroundIMG.classList.add("partlySunny");
            } else if (howCloudyOdd.all > 70 && howCloudyOdd.all < 80) {
                titleBackgroundIMG.classList.add("cloudy");
            } else if (howCloudyOdd.all > 80) {
                titleBackgroundIMG.classList.add("overcast");
            }
            break;
            case "AR": let howCloudy2 = (await getClouds("Little Rock"));
            titleBackgroundIMG.classList.remove("sunny","cloudy","partlySunny","overcast");
            if (howCloudy2.all < 60) {
                titleBackgroundIMG.classList.add("sunny");
            } else if (howCloudy2.all > 60 && howCloudy2.all < 70) {
                titleBackgroundIMG.classList.add("partlySunny");
            } else if (howCloudy2.all > 70 && howCloudy2.all < 80) {
                titleBackgroundIMG.classList.add("cloudy");
            } else if (howCloudy2.all > 80) {
                titleBackgroundIMG.classList.add("overcast");
            }
            break;
            case "CA": let howCloudy3 = (await getClouds("Sacramento"));
            titleBackgroundIMG.classList.remove("sunny","cloudy","partlySunny","overcast");
            if (howCloudy3.all < 60) {
                    titleBackgroundIMG.classList.add("sunny");
            } else if (howCloudy3.all > 60 && howCloudy3.all < 70) {
                    titleBackgroundIMG.classList.add("sunny");
                titleBackgroundIMG.classList.add("partlySunny");
            } else if (howCloudy3.all > 70 && howCloudy3.all < 80) {
                titleBackgroundIMG.classList.add("cloudy");
            } else if (howCloudy3.all > 80) {
                titleBackgroundIMG.classList.add("overcast");
            }
            break;
            case "CO": let howCloudy4 = (await getClouds("Denver"));
            titleBackgroundIMG.classList.remove("sunny","cloudy","partlySunny","overcast");
            if (howCloudy4.all < 60) {
                titleBackgroundIMG.classList.add("sunny");
            } else if (howCloudy4.all > 60 && howCloudy4.all < 70) {
                titleBackgroundIMG.classList.add("partlySunny");
            } else if (howCloudy4.all > 70 && howCloudy4.all < 80) {
                titleBackgroundIMG.classList.add("cloudy");
            } else if (howCloudy4.all > 80) {
                titleBackgroundIMG.classList.add("overcast");
            }
            break;
            case "CT": let howCloudy5 = await getClouds("Hartford");
                titleBackgroundIMG.classList.remove("sunny","cloudy","partlySunny","overcast");
                if (howCloudy5.all < 60) {
                    titleBackgroundIMG.classList.add("sunny");
                } else if (howCloudy5.all > 60 && howCloudy5.all < 70) {
                    titleBackgroundIMG.classList.add("partlySunny");
                } else if (howCloudy5.all > 70 && howCloudy5.all < 80) {
                    titleBackgroundIMG.classList.add("cloudy");
                } else if (howCloudy5.all > 80) {
                    titleBackgroundIMG.classList.add("overcast");
                }
            break;
            case "DE": let howCloudy6 = await getClouds("Dover");
                        if (howCloudy6.all < 60) {
                titleBackgroundIMG.style.backroundImage = 'url("cloudy.jpg")'
            };
            break;
            case "FL": let howCloudy7 = await getClouds("Tallahassee");
            console.log("is working");
                if (howCloudy7.all < 60) {
                    titleBackgroundIMG.classList.add("sunny");
                } else if (howCloudy7.all > 60 && howCloudy7.all < 70) {
                    titleBackgroundIMG.classList.add("partlySunny");
                } else if (howCloudy7.all > 70 && howCloudy7.all < 80) {
                    titleBackgroundIMG.classList.add("cloudy");
                } else if (howCloudy7.all > 80) {
                    titleBackgroundIMG.classList.add("overcast");
                }
            // case "GA": let howCloudy8 = (await getClouds("Atlanta"));
            break;
            case "HI": let howCloudy9 = await getClouds("Honolulu");
            break;
            case "ID": let howCloudy10 = (await getClouds("Boise"));
            titleBackgroundIMG.classList.remove("sunny","cloudy","partlySunny","overcast");
            if (howCloudy10.all < 60) {
                titleBackgroundIMG.classList.toggle("sunny");
            } else if (howCloudy10.all > 60 && howCloudy10.all < 70) {
                titleBackgroundIMG.classList.toggle("partlySunny");
            } else if (howCloudy10.all > 70 && howCloudy10.all < 80) {
                titleBackgroundIMG.classList.toggle("cloudy");
            } else if (howCloudy10.all > 80) {
                titleBackgroundIMG.classList.toggle("overcast");
            }
            break;
            case "IL": let howCloudy11 = await getClouds("Springfield");
            break;
            case "IN": let howCloudy12 = (await getClouds("Indianapolis"));
            break;
            case "IA": let howCloudy13 = await getClouds("Des Moines");
            break;
            case "KS": let howCloudy14 = (await getClouds("Topeka"));
            break;
            case "KY": let howCloudy15 = await getClouds("Frankfort");
            break;
            case "LA": let howCloudy16 = (await getClouds("Baton Rouge"));
            break;
            case "ME": let howCloudy17 = await getClouds("Augusta");
            break;
            case "MD": let howCloudy18 = (await getClouds("Annapolis"));
            break;
            case "MI": let howCloudy19 = await getClouds("Lansing");
            break;
            case "MN": let howCloudy20 = (await getClouds("Saint Paul"));
            break;
            case "MS": let howCloudy21 = await getClouds("Jackson");
            break;
            case "MO": let howCloudy22 = (await getClouds("Jefferson City"));
            break;
            case "MT": let howCloudy23 = await getClouds("Helena");
            break;
            case "NE": let howCloudy24 = (await getClouds("Lincoln"));
            break;
            case "NV": let howCloudy25 = await getClouds("Carson City");
            break;
            case "NH": let howCloudy26 = (await getClouds("Concord"));
            break;
            case "NJ": let howCloudy27 = await getClouds("Trenton");
            break;
            case "NM": let howCloudy28 = (await getClouds("Santa Fe"));
            break;
            case "NY": let howCloudy29 = await getClouds("Albany");
            break;
            case "NC": let howCloudy30 = (await getClouds("Raleigh"));
            if (howCloudy30.all < 60) {
                titleBackgroundIMG.classList.add("sunny");
            } else if (howCloudy30.all > 60 && howCloudy30.all < 70) {
                titleBackgroundIMG.classList.add("partlySunny");
            } else if (howCloudy30.all > 70 && howCloudy30.all < 80) {
                titleBackgroundIMG.classList.add("cloudy");
            } else if (howCloudy30.all > 80) {
                titleBackgroundIMG.classList.add("overcast");
            }
            break;
            case "ND": let howCloudy31 = await getClouds("Bismarck");
            break;
            case "OH": let howCloudy32 = (await getClouds("Columbus"));
            break;
            case "OK": let howCloudy33 = await getClouds("Oklahoma City");
            break;
            case "OR": let howCloudy34 = (await getClouds("Salem"));
            break;
            case "PA": let howCloudy35 = await getClouds("Harrisburg");
            break;
            case "RI": let howCloudy36 = (await getClouds("Providence"));
            break;
            case "SC": let howCloudy37 = await getClouds("Columbia");
            break;
            case "SD": let howCloudy38 = (await getClouds("Pierre"));
            break;
            case "TN": let howCloudy39 = (await getClouds("Nashville"));
            titleBackgroundIMG.classList.remove("sunny","cloudy","partlySunny","overcast");
            if (howCloudy39.all < 60) {
                titleBackgroundIMG.classList.toggle("sunny");
            } else if (howCloudy39.all > 60 && howCloudy39.all < 70) {
                titleBackgroundIMG.classList.toggle("partlySunny");
            } else if (howCloudy39.all > 70 && howCloudy39.all < 80) {
                titleBackgroundIMG.classList.toggle("cloudy");
            } else if (howCloudy39.all > 80) {
                titleBackgroundIMG.classList.toggle("overcast");
            } else {alert("test")}
            break;
            case "TX": let howCloudy40 = (await getClouds("Austin"));
            titleBackgroundIMG.classList.remove("sunny","cloudy","partlySunny","overcast");
            if (howCloudy40.all < 60) {
                titleBackgroundIMG.classList.toggle("sunny");
            } else if (howCloudy40.all > 60 && howCloudy40.all < 70) {
                titleBackgroundIMG.classList.toggle("partlySunny");
            } else if (howCloudy40.all > 70 && howCloudy40.all < 80) {
                titleBackgroundIMG.classList.toggle("cloudy");
            } else if (howCloudy40.all > 80) {
                titleBackgroundIMG.classList.toggle("overcast");
            }
            break;
            case "UT": let howCloudy41 = (await getClouds("Salt Lake City"));
            break;  
            case "VT": let howCloudy42 = (await getClouds("Montpelier"));
            break;
            case "VA": let howCloudy43 = (await getClouds("Richmond"));
            console.log(howCloudy43.all)
            if (howCloudy43.all < 60) {
                titleBackgroundIMG.classList.add("sunny");
            } else if (howCloudy43.all > 60 && howCloudy43.all < 70) {
                titleBackgroundIMG.classList.add("partlySunny");
            } else if (howCloudy43.all > 70 && howCloudy43.all < 80) {
                titleBackgroundIMG.classList.add("cloudy");
            } else if (howCloudy43.all > 80) {
                titleBackgroundIMG.classList.add("overcast");
            }
            break;
            case "WA": let howCloudy44 = (await getClouds("Olympia"));
            break;
            case "WV": let howCloudy45 = (await getClouds("Charleston"));
            break;
            case "WI": let howCloudy46 = (await getClouds("Madison"));
            break;
            case "WY": let howCloudy47 = (await getClouds("Cheyenne"));
            break;
        }
        
        detailsBox.style.opacity = "100%";
    } else {
        detailsBox.style.opacity = "0%";
    }
});



// --Details Box--
window.onmouseover = (e) => {
    let x = e.clientX,
    y = e.clientY;
    detailsBox.style.top = (y + 20) + "px";
    detailsBox.style.left = (x) + "px";
};



//-- Solved --
titleBackgroundIMG.classList.remove("sunny","cloudy","partlySunny","overcast");
