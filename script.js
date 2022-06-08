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
            case "AZ": detailsBox.innerText = await getWeather("Phoenix");
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
            case "AZ": let howCloudyOdd = await getClouds("Phoenix");
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
                titleBackgroundIMG.classList.remove("sunny","cloudy","partlySunny","overcast");
                if (howCloudy6.all < 60) {
                    titleBackgroundIMG.classList.add("sunny");
                } else if (howCloudy6.all > 60 && howCloudy6.all < 70) {
                    titleBackgroundIMG.classList.add("partlySunny");
                } else if (howCloudy6.all > 70 && howCloudy6 .all < 80) {
                    titleBackgroundIMG.classList.add("cloudy");
                } else if (howCloudy6.all > 80) {
                    titleBackgroundIMG.classList.add("overcast");
            }
            break;
            case "FL": let howCloudy7 = await getClouds("Tallahassee");
                titleBackgroundIMG.classList.remove("sunny","cloudy","partlySunny","overcast");
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
                titleBackgroundIMG.classList.remove("sunny","cloudy","partlySunny","overcast");
                if (howCloudy9.all < 60) {
                    titleBackgroundIMG.classList.add("sunny");
                } else if (howCloudy9.all > 60 && howCloudy9.all < 70) {
                    titleBackgroundIMG.classList.add("partlySunny");
                } else if (howCloudy9.all > 70 && howCloudy9.all < 80) {
                    titleBackgroundIMG.classList.add("cloudy");
                } else if (howCloudy9.all > 80) {
                    titleBackgroundIMG.classList.add("overcast");
                }
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
                titleBackgroundIMG.classList.remove("sunny","cloudy","partlySunny","overcast");
                if (howCloudy11.all < 60) {
                    titleBackgroundIMG.classList.add("sunny");
                } else if (howCloudy11.all > 60 && howCloudy11.all < 70) {
                    titleBackgroundIMG.classList.add("partlySunny");
                } else if (howCloudy11.all > 70 && howCloudy11.all < 80) {
                    titleBackgroundIMG.classList.add("cloudy");
                } else if (howCloudy11.all > 80) {
                    titleBackgroundIMG.classList.add("overcast");
                }
            break;
            case "IN": let howCloudy12 = (await getClouds("Indianapolis"));
                titleBackgroundIMG.classList.remove("sunny","cloudy","partlySunny","overcast");
                if (howCloudy12.all < 60) {
                    titleBackgroundIMG.classList.add("sunny");
                } else if (howCloudy12.all > 60 && howCloudy12.all < 70) {
                    titleBackgroundIMG.classList.add("partlySunny");
                } else if (howCloudy12.all > 70 && howCloudy12.all < 80) {
                    titleBackgroundIMG.classList.add("cloudy");
                } else if (howCloudy12.all > 80) {
                    titleBackgroundIMG.classList.add("overcast");
                }
            break;
            case "IA": let howCloudy13 = await getClouds("Des Moines");
                titleBackgroundIMG.classList.remove("sunny","cloudy","partlySunny","overcast");
                if (howCloudy13.all < 60) {
                    titleBackgroundIMG.classList.add("sunny");
                } else if (howCloudy13.all > 60 && howCloudy13.all < 70) {
                    titleBackgroundIMG.classList.add("partlySunny");
                } else if (howCloudy13.all > 70 && howCloudy13.all < 80) {
                    titleBackgroundIMG.classList.add("cloudy");
                } else if (howCloudy13.all > 80) {
                    titleBackgroundIMG.classList.add("overcast");
                }
            break;
            case "KS": let howCloudy14 = (await getClouds("Topeka"));
               titleBackgroundIMG.classList.remove("sunny","cloudy","partlySunny","overcast");
                if (howCloudy14.all < 60) {
                    titleBackgroundIMG.classList.add("sunny");
                } else if (howCloudy14.all > 60 && howCloudy14.all < 70) {
                    titleBackgroundIMG.classList.add("partlySunny");
                } else if (howCloudy14.all > 70 && howCloudy14.all < 80) {
                    titleBackgroundIMG.classList.add("cloudy");
                } else if (howCloudy14.all > 80) {
                    titleBackgroundIMG.classList.add("overcast");
                }
            break;
            case "KY": let howCloudy15 = await getClouds("Frankfort");
            titleBackgroundIMG.classList.remove("sunny","cloudy","partlySunny","overcast");
            if (howCloudy15.all < 60) {
                titleBackgroundIMG.classList.add("sunny");
            } else if (howCloudy15.all > 60 && howCloudy15.all < 70) {
                titleBackgroundIMG.classList.add("partlySunny");
            } else if (howCloudy15.all > 70 && howCloudy15.all < 80) {
                titleBackgroundIMG.classList.add("cloudy");
            } else if (howCloudy15.all > 80) {
                titleBackgroundIMG.classList.add("overcast");
            }
            break;
            case "LA": let howCloudy16 = (await getClouds("Baton Rouge"));
               titleBackgroundIMG.classList.remove("sunny","cloudy","partlySunny","overcast");
                if (howCloudy16.all < 60) {
                    titleBackgroundIMG.classList.add("sunny");
                } else if (howCloudy16.all > 60 && howCloudy16.all < 70) {
                    titleBackgroundIMG.classList.add("partlySunny");
                } else if (howCloudy16.all > 70 && howCloudy16.all < 80) {
                    titleBackgroundIMG.classList.add("cloudy");
                } else if (howCloudy16.all > 80) {
                    titleBackgroundIMG.classList.add("overcast");
                }
            break;
            case "ME": let howCloudy17 = await getClouds("Augusta");
               titleBackgroundIMG.classList.remove("sunny","cloudy","partlySunny","overcast");
                if (howCloudy17.all < 60) {
                    titleBackgroundIMG.classList.add("sunny");
                } else if (howCloudy17.all > 60 && howCloudy17.all < 70) {
                    titleBackgroundIMG.classList.add("partlySunny");
                } else if (howCloudy17.all > 70 && howCloudy17.all < 80) {
                    titleBackgroundIMG.classList.add("cloudy");
                } else if (howCloudy17.all > 80) {
                    titleBackgroundIMG.classList.add("overcast");
                }
            break;
            case "MD": let howCloudy18 = (await getClouds("Annapolis"));
               titleBackgroundIMG.classList.remove("sunny","cloudy","partlySunny","overcast");
                if (howCloudy18.all < 60) {
                    titleBackgroundIMG.classList.add("sunny");
                } else if (howCloudy18.all > 60 && howCloudy18.all < 70) {
                    titleBackgroundIMG.classList.add("partlySunny");
                } else if (howCloudy18.all > 70 && howCloudy18.all < 80) {
                    titleBackgroundIMG.classList.add("cloudy");
                } else if (howCloudy18.all > 80) {
                    titleBackgroundIMG.classList.add("overcast");
                }
            break;
            case "MI": let howCloudy19 = await getClouds("Lansing");
                titleBackgroundIMG.classList.remove("sunny","cloudy","partlySunny","overcast");
                if (howCloudy19.all < 60) {
                    titleBackgroundIMG.classList.add("sunny");
                } else if (howCloudy19.all > 60 && howCloudy19.all < 70) {
                    titleBackgroundIMG.classList.add("partlySunny");
                } else if (howCloudy19.all > 70 && howCloudy19.all < 80) {
                    titleBackgroundIMG.classList.add("cloudy");
                } else if (howCloudy19.all > 80) {
                    titleBackgroundIMG.classList.add("overcast");
                }
            break;
            case "MN": let howCloudy20 = (await getClouds("Saint Paul"));
                titleBackgroundIMG.classList.remove("sunny","cloudy","partlySunny","overcast");
                if (howCloudy20.all < 60) {
                    titleBackgroundIMG.classList.add("sunny");
                } else if (howCloudy20.all > 60 && howCloudy20.all < 70) {
                    titleBackgroundIMG.classList.add("partlySunny");
                } else if (howCloudy20.all > 70 && howCloudy20.all < 80) {
                    titleBackgroundIMG.classList.add("cloudy");
                } else if (howCloudy20.all > 80) {
                    titleBackgroundIMG.classList.add("overcast");
                }
            break;
            case "MS": let howCloudy21 = await getClouds("Jackson");
                titleBackgroundIMG.classList.remove("sunny","cloudy","partlySunny","overcast");
                if (howCloudy21.all < 60) {
                    titleBackgroundIMG.classList.add("sunny");
                } else if (howCloudy21.all > 60 && howCloudy21.all < 70) {
                    titleBackgroundIMG.classList.add("partlySunny");
                } else if (howCloudy21.all > 70 && howCloudy21.all < 80) {
                    titleBackgroundIMG.classList.add("cloudy");
                } else if (howCloudy21.all > 80) {
                    titleBackgroundIMG.classList.add("overcast");
                }
            break;
            case "MO": let howCloudy22 = (await getClouds("Jefferson City"));
                titleBackgroundIMG.classList.remove("sunny","cloudy","partlySunny","overcast");
                if (howCloudy22.all < 60) {
                    titleBackgroundIMG.classList.add("sunny");
                } else if (howCloudy22.all > 60 && howCloudy22.all < 70) {
                    titleBackgroundIMG.classList.add("partlySunny");
                } else if (howCloudy22.all > 70 && howCloudy22.all < 80) {
                    titleBackgroundIMG.classList.add("cloudy");
                } else if (howCloudy22.all > 80) {
                    titleBackgroundIMG.classList.add("overcast");
                }
            break;
            case "MT": let howCloudy23 = await getClouds("Helena");
                titleBackgroundIMG.classList.remove("sunny","cloudy","partlySunny","overcast");
                if (howCloudy23.all < 60) {
                    titleBackgroundIMG.classList.add("sunny");
                } else if (howCloudy23.all > 60 && howCloudy23.all < 70) {
                    titleBackgroundIMG.classList.add("partlySunny");
                } else if (howCloudy23.all > 70 && howCloudy23.all < 80) {
                    titleBackgroundIMG.classList.add("cloudy");
                } else if (howCloudy23.all > 80) {
                    titleBackgroundIMG.classList.add("overcast");
                }
            break;
            case "NE": let howCloudy24 = (await getClouds("Lincoln"));
                titleBackgroundIMG.classList.remove("sunny","cloudy","partlySunny","overcast");
                if (howCloudy24.all < 60) {
                    titleBackgroundIMG.classList.add("sunny");
                } else if (howCloudy24.all > 60 && howCloudy24.all < 70) {
                    titleBackgroundIMG.classList.add("partlySunny");
                } else if (howCloudy24.all > 70 && howCloudy24.all < 80) {
                    titleBackgroundIMG.classList.add("cloudy");
                } else if (howCloudy24.all > 80) {
                    titleBackgroundIMG.classList.add("overcast");
                }
            break;
            case "NV": let howCloudy25 = await getClouds("Carson City");
                titleBackgroundIMG.classList.remove("sunny","cloudy","partlySunny","overcast");
                if (howCloudy25.all < 60) {
                    titleBackgroundIMG.classList.add("sunny");
                } else if (howCloudy25.all > 60 && howCloudy25.all < 70) {
                    titleBackgroundIMG.classList.add("partlySunny");
                } else if (howCloudy25.all > 70 && howCloudy25.all < 80) {
                    titleBackgroundIMG.classList.add("cloudy");
                } else if (howCloudy25.all > 80) {
                    titleBackgroundIMG.classList.add("overcast");
                }
            break;
            case "NH": let howCloudy26 = (await getClouds("Concord"));
                titleBackgroundIMG.classList.remove("sunny","cloudy","partlySunny","overcast");
                if (howCloudy26.all < 60) {
                    titleBackgroundIMG.classList.add("sunny");
                } else if (howCloudy26.all > 60 && howCloudy26.all < 70) {
                    titleBackgroundIMG.classList.add("partlySunny");
                } else if (howCloudy26.all > 70 && howCloudy26.all < 80) {
                    titleBackgroundIMG.classList.add("cloudy");
                } else if (howCloudy26.all > 80) {
                    titleBackgroundIMG.classList.add("overcast");
                }
            break;
            case "NJ": let howCloudy27 = await getClouds("Trenton");
                titleBackgroundIMG.classList.remove("sunny","cloudy","partlySunny","overcast");
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
            case "NM": let howCloudy28 = (await getClouds("Santa Fe"));
            titleBackgroundIMG.classList.remove("sunny","cloudy","partlySunny","overcast");
                if (howCloudy28.all < 60) {
                    titleBackgroundIMG.classList.add("sunny");
                } else if (howCloudy28.all > 60 && howCloudy28.all < 70) {
                    titleBackgroundIMG.classList.add("partlySunny");
                } else if (howCloudy28.all > 70 && howCloudy28.all < 80) {
                    titleBackgroundIMG.classList.add("cloudy");
                } else if (howCloudy28.all > 80) {
                    titleBackgroundIMG.classList.add("overcast");
                }
            break;
            case "NY": let howCloudy29 = await getClouds("Albany");
            titleBackgroundIMG.classList.remove("sunny","cloudy","partlySunny","overcast");
                if (howCloudy29.all < 60) {
                    titleBackgroundIMG.classList.add("sunny");
                } else if (howCloudy29.all > 60 && howCloudy29.all < 70) {
                    titleBackgroundIMG.classList.add("partlySunny");
                } else if (howCloudy29.all > 70 && howCloudy29.all < 80) {
                    titleBackgroundIMG.classList.add("cloudy");
                } else if (howCloudy29.all > 80) {
                    titleBackgroundIMG.classList.add("overcast");
                }
            break;
            case "NC": let howCloudy30 = (await getClouds("Raleigh"));
                titleBackgroundIMG.classList.remove("sunny","cloudy","partlySunny","overcast");
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
                titleBackgroundIMG.classList.remove("sunny","cloudy","partlySunny","overcast");
                if (howCloudy31.all < 60) {
                    titleBackgroundIMG.classList.add("sunny");
                } else if (howCloudy31.all > 60 && howCloudy31.all < 70) {
                    titleBackgroundIMG.classList.add("partlySunny");
                } else if (howCloudy31.all > 70 && howCloudy31.all < 80) {
                    titleBackgroundIMG.classList.add("cloudy");
                } else if (howCloudy31.all > 80) {
                    titleBackgroundIMG.classList.add("overcast");
                }
            break;
            case "OH": let howCloudy32 = (await getClouds("Columbus"));
                titleBackgroundIMG.classList.remove("sunny","cloudy","partlySunny","overcast");
                if (howCloudy32.all < 60) {
                    titleBackgroundIMG.classList.add("sunny");
                } else if (howCloudy32.all > 60 && howCloudy32.all < 70) {
                    titleBackgroundIMG.classList.add("partlySunny");
                } else if (howCloudy32.all > 70 && howCloudy32.all < 80) {
                    titleBackgroundIMG.classList.add("cloudy");
                } else if (howCloudy32.all > 80) {
                    titleBackgroundIMG.classList.add("overcast");
                }
            break;
            case "OK": let howCloudy33 = await getClouds("Oklahoma City");
                titleBackgroundIMG.classList.remove("sunny","cloudy","partlySunny","overcast");
                if (howCloudy33.all < 60) {
                    titleBackgroundIMG.classList.add("sunny");
                } else if (howCloudy33.all > 60 && howCloudy.all < 70) {
                    titleBackgroundIMG.classList.add("partlySunny");
                } else if (howCloudy33.all > 70 && howCloudy.all < 80) {
                    titleBackgroundIMG.classList.add("cloudy");
                } else if (howCloudy33.all > 80) {
                    titleBackgroundIMG.classList.add("overcast");
                }
            break;
            case "OR": let howCloudy34 = (await getClouds("Salem"));
                titleBackgroundIMG.classList.remove("sunny","cloudy","partlySunny","overcast");
                if (howCloudy34.all < 60) {
                    titleBackgroundIMG.classList.add("sunny");
                } else if (howCloudy34.all > 60 && howCloudy34.all < 70) {
                    titleBackgroundIMG.classList.add("partlySunny");
                } else if (howCloudy34.all > 70 && howCloudy34.all < 80) {
                    titleBackgroundIMG.classList.add("cloudy");
                } else if (howCloudy34.all > 80) {
                    titleBackgroundIMG.classList.add("overcast");
                }
            break;
            case "PA": let howCloudy35 = await getClouds("Harrisburg");
                titleBackgroundIMG.classList.remove("sunny","cloudy","partlySunny","overcast");
                if (howCloudy35.all < 60) {
                    titleBackgroundIMG.classList.add("sunny");
                } else if (howCloudy35.all > 60 && howCloudy35.all < 70) {
                    titleBackgroundIMG.classList.add("partlySunny");
                } else if (howCloudy35.all > 70 && howCloudy35.all < 80) {
                    titleBackgroundIMG.classList.add("cloudy");
                } else if (howCloudy35.all > 80) {
                    titleBackgroundIMG.classList.add("overcast");
                }
            break;
            case "RI": let howCloudy36 = (await getClouds("Providence"));
                titleBackgroundIMG.classList.remove("sunny","cloudy","partlySunny","overcast");
                if (howCloudy36.all < 60) {
                    titleBackgroundIMG.classList.add("sunny");
                } else if (howCloudy36.all > 60 && howCloudy36.all < 70) {
                    titleBackgroundIMG.classList.add("partlySunny");
                } else if (howCloudy36.all > 70 && howCloudy36.all < 80) {
                    titleBackgroundIMG.classList.add("cloudy");
                } else if (howCloudy36.all > 80) {
                    titleBackgroundIMG.classList.add("overcast");
                }
            break;
            case "SC": let howCloudy37 = await getClouds("Columbia");
                titleBackgroundIMG.classList.remove("sunny","cloudy","partlySunny","overcast");
                if (howCloudy37.all < 60) {
                    titleBackgroundIMG.classList.add("sunny");
                } else if (howCloudy37.all > 60 && howCloudy37.all < 70) {
                    titleBackgroundIMG.classList.add("partlySunny");
                } else if (howCloudy37.all > 70 && howCloudy37.all < 80) {
                    titleBackgroundIMG.classList.add("cloudy");
                } else if (howCloudy37.all > 80) {
                    titleBackgroundIMG.classList.add("overcast");
                }
            break;
            case "SD": let howCloudy38 = (await getClouds("Pierre"));
                titleBackgroundIMG.classList.remove("sunny","cloudy","partlySunny","overcast");
                if (howCloudy38.all < 60) {
                    titleBackgroundIMG.classList.add("sunny");
                } else if (howCloudy38.all > 60 && howCloudy38.all < 70) {
                    titleBackgroundIMG.classList.add("partlySunny");
                } else if (howCloudy38.all > 70 && howCloudy38.all < 80) {
                    titleBackgroundIMG.classList.add("cloudy");
                } else if (howCloudy38.all > 80) {
                    titleBackgroundIMG.classList.add("overcast");
                }
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
                titleBackgroundIMG.classList.remove("sunny","cloudy","partlySunny","overcast");
                if (howCloudy41.all < 60) {
                    titleBackgroundIMG.classList.add("sunny");
                } else if (howCloudy41.all > 60 && howCloudy41.all < 70) {
                    titleBackgroundIMG.classList.add("partlySunny");
                } else if (howCloudy41.all > 70 && howCloudy41.all < 80) {
                    titleBackgroundIMG.classList.add("cloudy");
                } else if (howCloudy41.all > 80) {
                    titleBackgroundIMG.classList.add("overcast");
                }
            break;  
            case "VT": let howCloudy42 = (await getClouds("Montpelier"));
            titleBackgroundIMG.classList.remove("sunny","cloudy","partlySunny","overcast");
                if (howCloudy42.all < 60) {
                    titleBackgroundIMG.classList.add("sunny");
                } else if (howCloudy42.all > 60 && howCloudy42.all < 70) {
                    titleBackgroundIMG.classList.add("partlySunny");
                } else if (howCloudy42.all > 70 && howCloudy42.all < 80) {
                    titleBackgroundIMG.classList.add("cloudy");
                } else if (howCloudy42.all > 80) {
                    titleBackgroundIMG.classList.add("overcast");
                }
            break;
            case "VA": let howCloudy43 = (await getClouds("Richmond"));
                titleBackgroundIMG.classList.remove("sunny","cloudy","partlySunny","overcast");
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
                titleBackgroundIMG.classList.remove("sunny","cloudy","partlySunny","overcast");
                if (howCloudy44.all < 60) {
                    titleBackgroundIMG.classList.add("sunny");
                } else if (howCloudy44.all > 60 && howCloudy44.all < 70) {
                    titleBackgroundIMG.classList.add("partlySunny");
                } else if (howCloudy44.all > 70 && howCloudy44.all < 80) {
                    titleBackgroundIMG.classList.add("cloudy");
                } else if (howCloudy44.all > 80) {
                    titleBackgroundIMG.classList.add("overcast");
                }
            break;
            case "WV": let howCloudy45 = (await getClouds("Charleston"));
                titleBackgroundIMG.classList.remove("sunny","cloudy","partlySunny","overcast");
                if (howCloudy45.all < 60) {
                    titleBackgroundIMG.classList.add("sunny");
                } else if (howCloudy45.all > 60 && howCloudy45.all < 70) {
                    titleBackgroundIMG.classList.add("partlySunny");
                } else if (howCloudy45.all > 70 && howCloudy45.all < 80) {
                    titleBackgroundIMG.classList.add("cloudy");
                } else if (howCloudy45.all > 80) {
                    titleBackgroundIMG.classList.add("overcast");
                }
            break;
            case "WI": let howCloudy46 = (await getClouds("Madison"));
                titleBackgroundIMG.classList.remove("sunny","cloudy","partlySunny","overcast");
                if (howCloudy46.all < 60) {
                    titleBackgroundIMG.classList.add("sunny");
                } else if (howCloudy46.all > 60 && howCloudy46.all < 70) {
                    titleBackgroundIMG.classList.add("partlySunny");
                } else if (howCloudy46.all > 70 && howCloudy46.all < 80) {
                    titleBackgroundIMG.classList.add("cloudy");
                } else if (howCloudy46.all > 80) {
                    titleBackgroundIMG.classList.add("overcast");
                }
            break;
            case "WY": let howCloudy47 = (await getClouds("Cheyenne"));
                titleBackgroundIMG.classList.remove("sunny","cloudy","partlySunny","overcast");
                if (howCloudy47.all < 60) {
                    titleBackgroundIMG.classList.add("sunny");
                } else if (howCloudy47.all > 60 && howCloudy47.all < 70) {
                    titleBackgroundIMG.classList.add("partlySunny");
                } else if (howCloudy47.all > 70 && howCloudy47.all < 80) {
                    titleBackgroundIMG.classList.add("cloudy");
                } else if (howCloudy47.all > 80) {
                    titleBackgroundIMG.classList.add("overcast");
                }
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
