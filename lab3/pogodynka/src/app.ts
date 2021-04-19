export class App {
    opwApiKey = "99eb7e6cb81a838f7d22416630652f72";
    liczbaWywolan: number = 0;

    constructor() {
        this.getLocalStorageNumberLines();
        this.getItemsFromLocalStorage();
        //this.getData();

        //this.getCityInfo('zakopane');
        //this.getData();
        //console.log(this.getData());
        // const inputCityBtn = document.getElementById("buttonInp");
        // inputCityBtn.addEventListener("click", (e: Event) => this.getCity());
        // const inputCitySearch = document.getElementById("searchInp");
        // inputCitySearch.addEventListener("keydown", (e) => {
        //     if(e.key === 'Enter'){
        //         this.getCity();
        //     }
        // })
        this.pressButtonOrClickMouse();
    }

    pressButtonOrClickMouse(){
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

    getLocalStorageNumberLines(){
        const wywolania = localStorage.getItem('liczbaWywolan');
        this.liczbaWywolan = JSON.parse(wywolania);
        //console.log(JSON.parse(wywolania));
    }

    async getItemsFromLocalStorage(){
        // this.getData();
        const obiekty = this.getData();
        let items;
        for(let i=0; i<this.liczbaWywolan; i++){
            items = await obiekty;
        }
        for(let i=0; i<this.liczbaWywolan; i++){
            const item = JSON.parse(items[i]);
            this.getCityInfoFromLocalStorage(item.name);
        }

        // const nowe = (await obiekty).values;
        //console.log(item);
    }


    async getCityInfo(city: string) {
        const weather = await this.getWeather(city);
        //---tworzenie nowych elementow---
        const newDiv = document.createElement("section");
        newDiv.className = "weatherInfoBlock";
        const newName = document.createElement("p");
        const newLastActualisation = document.createElement("p");
        const newDegrees = document.createElement("p");
        const newAirPressureText = document.createElement("p");
        const newImage = document.createElement("img");
        const newAirPressure = document.createElement("span");
        const newDegreesChar = document.createElement("p");


        //---uzupełnianie elementow danymi---
        newName.innerHTML = weather.name;
        newLastActualisation.innerHTML = "Last actualisation: " + new Date().toLocaleTimeString('en-GB', { hour: "numeric",
        minute: "numeric"});
        newDegrees.innerHTML = Math.round(weather.main.temp - 273.15).toString(); //oblicza z Kelwinów stopnie Celsjusza i zaokrągla
        newAirPressureText.innerHTML = "Air pressure: ";
        newAirPressure.innerHTML = weather.main.pressure + " hPa";
        const srcImg =  `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;
        newImage.src = srcImg;
        newDegreesChar.innerHTML = "&ordm";
        //---dodawanie odpowiednich klas do stylowania---
        newName.classList.add("weatherInfoCity");
        newLastActualisation.classList.add("weatherInfoHour");
        newDegrees.classList.add("weatherInfoTemperature");
        newAirPressureText.classList.add("weatherInfoPressure");
        newAirPressure.classList.add("pressureValue");
        newDegreesChar.classList.add("degrees");

        newName.classList.add("weatherCommon");
        newLastActualisation.classList.add("weatherCommon");
        newDegrees.classList.add("weatherCommon");
        newAirPressureText.classList.add("weatherCommon");

        //---wprowadzanie elementow na strone---
        const weatherBlock = document.getElementById("weatherBlocksID");
        weatherBlock.appendChild(newDiv);
        newDiv.appendChild(newName);
        newDiv.appendChild(newLastActualisation);
        newDiv.appendChild(newDegrees);
        newDiv.appendChild(newAirPressureText);
        newAirPressureText.appendChild(newAirPressure);
        newDiv.appendChild(newImage);
        newDegrees.appendChild(newDegreesChar);

        //---czyszczenie inputu miasta---
        const inputCitySearch = <HTMLInputElement>document.getElementById("searchInp");
        inputCitySearch.value = "";

        //---zapis w pamieci localStorage---
        this.saveData(weather);
    }

    async getCityInfoFromLocalStorage(city: string) {
        const weather = await this.getWeather(city);

        //const icon = weather.weather[0].icon;
        //console.log(icon);

        //---tworzenie nowych elementow---
        const newDiv = document.createElement("section");
        newDiv.className = "weatherInfoBlock";
        const newName = document.createElement("p");
        const newLastActualisation = document.createElement("p");
        const newDegrees = document.createElement("p");
        const newAirPressureText = document.createElement("p");
        const newImage = document.createElement("img");
        const newAirPressure = document.createElement("span");
        const newDegreesChar = document.createElement("p");


        //---uzupełnianie elementow danymi---
        newName.innerHTML = weather.name;
        newLastActualisation.innerHTML = "Last actualisation: " + new Date().toLocaleTimeString('en-GB', { hour: "numeric",
        minute: "numeric"});
        newDegrees.innerHTML = Math.round(weather.main.temp - 273.15).toString(); //oblicza z Kelwinów stopnie Celsjusza i zaokrągla
        newAirPressureText.innerHTML = "Air pressure: ";
        newAirPressure.innerHTML = weather.main.pressure + " hPa";
        const srcImg =  `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;
        newImage.src = srcImg;
        newDegreesChar.innerHTML = "&ordm";
        //---dodawanie odpowiednich klas do stylowania---
        newName.classList.add("weatherInfoCity");
        newLastActualisation.classList.add("weatherInfoHour");
        newDegrees.classList.add("weatherInfoTemperature");
        newAirPressureText.classList.add("weatherInfoPressure");
        newAirPressure.classList.add("pressureValue");
        newDegreesChar.classList.add("degrees");

        newName.classList.add("weatherCommon");
        newLastActualisation.classList.add("weatherCommon");
        newDegrees.classList.add("weatherCommon");
        newAirPressureText.classList.add("weatherCommon");

        //---wprowadzanie elementow na strone---
        const weatherBlock = document.getElementById("weatherBlocksID");
        weatherBlock.appendChild(newDiv);
        newDiv.appendChild(newName);
        newDiv.appendChild(newLastActualisation);
        newDiv.appendChild(newDegrees);
        newDiv.appendChild(newAirPressureText);
        newAirPressureText.appendChild(newAirPressure);
        newDiv.appendChild(newImage);
        newDegrees.appendChild(newDegreesChar);

        //---czyszczenie inputu miasta---
        const inputCitySearch = <HTMLInputElement>document.getElementById("searchInp");
        inputCitySearch.value = "";

        //---zapis w pamieci localStorage---
        //this.saveData(weather);
    }



    async getWeather(city: string): Promise<any> {
        const openWeatherUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${this.opwApiKey}`;
        const weatherResponse = await fetch(openWeatherUrl);
        const weatherData = await weatherResponse.json();
        //console.log(weatherData);
        return weatherData;
    }
    saveData(data: any) {
        this.liczbaWywolan++;
        localStorage.setItem('weatherData' + this.liczbaWywolan, JSON.stringify(data));
        localStorage.setItem('liczbaWywolan', JSON.stringify(this.liczbaWywolan))
    }
    async getData() {

        //const values = { ...localStorage};
        const items =[];
        const quantity = this.liczbaWywolan;
        for(let i = 1; i <= quantity; i++){
            items[i-1] = localStorage.getItem('weatherData' + i);
        }
        //console.log(items);
        return items;

        //const quantity = this.liczbaWywolan;
        //console.log(quantity);
        // const data = localStorage.getItem('weatherData' + i)

        // let values = [],
        //     keys = Object.keys(data),
        //     i = keys.length;

        //     while ( i-- ) {
        //         values.push( localStorage.getItem(keys[i]) );
        //     }
        //     console.log(values);


        // for(let i = 1; i <= quantity; i++){
        //     const data = localStorage.getItem('weatherData' + i);
        //     if (data) {
        //         console.log(JSON.parse(data));
        //         return JSON.parse(data);
        //     } else {
        //         return {};
        //     }
        // }

    }
}
