export class App {
    myKey= "99eb7e6cb81a838f7d22416630652f72";
    opwApiKey = "50d53005c0fd5f556bb4ef15224c4209";

    constructor() {
        //this.getCityInfo('zakopane');
        const inputCityBtn = document.getElementById("buttonInp");
        inputCityBtn.addEventListener("click", (e: Event) => this.getCity());
        const inputCitySearch = document.getElementById("searchInp");
        inputCitySearch.addEventListener("keydown", (e) => {
            if(e.key === 'Enter'){
                this.getCity();
            }
        })
    }

    getCity(){



        const inputCity = <HTMLInputElement>document.getElementById("searchInp");
        const city = inputCity.value;

        this.getCityInfo(city);
    }



    async getCityInfo(city: string) {
        const weather = await this.getWeather(city);

        const newDiv = document.createElement("div");
        newDiv.className = "weatherInfoBlock";
        const newP1 = document.createElement("p");
        const newP2 = document.createElement("p");
        const newP3 = document.createElement("p");
        const newP4 = document.createElement("p");
        const newP6 = document.createElement("span");
        const newP5 = document.createElement("img");

        newP1.innerHTML = weather.name;
        newP2.innerHTML = "Last actualisation: " + new Date().toLocaleTimeString('en-GB', { hour: "numeric",
        minute: "numeric"});
        newP3.innerHTML = weather.main.temp;
        newP4.innerHTML = "Air pressure: ";
        newP6.innerHTML = weather.main.pressure;
        newP5.src = "./photos/cloud-sun-solid.svg";

        newP1.classList.add("weatherInfoCity");
        newP2.classList.add("weatherInfoHour");
        newP3.classList.add("weatherInfoTemperature");
        newP4.classList.add("weatherInfoPressure");
        //newP5.classList.add("weatherInfoCity weatherCommon");
        newP6.classList.add("pressureValue");

        newP1.classList.add("weatherCommon");
        newP2.classList.add("weatherCommon");
        newP3.classList.add("weatherCommon");
        newP4.classList.add("weatherCommon");

        const weatherBlock = document.getElementById("weatherBlocksID");

        weatherBlock.appendChild(newDiv);
        newDiv.appendChild(newP1);
        newDiv.appendChild(newP2);
        newDiv.appendChild(newP3);
        newDiv.appendChild(newP4);
        newP4.appendChild(newP6);
        newDiv.appendChild(newP5);
        this.saveData(weather);
    }

    async getWeather(city: string): Promise<any> {
        const openWeatherUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${this.opwApiKey}`;
        const weatherResponse = await fetch(openWeatherUrl);
        const weatherData = await weatherResponse.json();
        console.log(weatherData);
        return weatherData;
    }
    saveData(data: any) {
        localStorage.setItem('weatherData', JSON.stringify(data));
    }
    getData() {
        const data = localStorage.getItem('weatherData');
        if (data) {
            return JSON.parse(data);
        } else {
            return {};
        }
    }
}
