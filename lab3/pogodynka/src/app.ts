export class App {
    opwApiKey = "tu wklej klucz z api openweathermap.org";
    constructor() {
        this.getCityInfo('zakopane')
    }
    async getCityInfo(city: string) {
        const weather = await this.getWeather('zakopane');
        const newDiv = document.createElement("div");
        newDiv.id = "div_1";
        newDiv.innerHTML = weather.main.temp;
        document.body.appendChild(newDiv);

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