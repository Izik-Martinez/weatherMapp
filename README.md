# Capital Weather (weatherMapp)

Capital Weather, aka weatherMapp, is a web app that allows users to interact with a United States map for weather information on capital cities. When the user mouses-over a state, the state capital's current temperature and cloud data are displayed visually. 

[**Link to project:**](https://izik-martinez.github.io/weatherMapp/) 

![weatherMapp](https://github.com/Izik-Martinez/weatherMapp/blob/main/screenshot.jpg)

## How It's Made:

**Tech used:** HTML, CSS, JavaScript, Axios

I utilized openweathermap's api (https://openweathermap.org/api) to retrieve accurate current weather data. Depending on the current cloud data of the selected capital city, the title's background image will display sunny, partly-sunny, cloudy, or overcast skies. On each mouseover of a particular state, the state capital's current temperature is displayed within a styled box. On the front end, I used CSS to style the free U.S. svg map (https://simplemaps.com/resources/svg-us) and CSS plus Javascript (JS) to style/activate the details box. The title's dynamic background was powered by classList (web api) and JS.    

## Optimizations

In the future I plan to change the title background images, especially "partlySunny", so that they're more interpretable. I also plan on configuring the SVG so that it's responsive for mobile devices. For ease-of-use., I could add identifiers to each state.


## Lessons Learned:

I gained practice with handling promise objects, try/catch, and tying event listeners to api requests. I discovered the utility of switch-cases.


## Examples:

Take a look at this repo: [thisRepo](https://github.com/Izik-Martinez/weatherMapp)
