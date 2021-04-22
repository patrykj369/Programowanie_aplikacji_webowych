import {stickySearchInput} from './stickySearchInput';

export class App {
    opwApiKey = "99eb7e6cb81a838f7d22416630652f72";
    liczbaWywolan: number = 0;


    constructor() {
        this.stickySearchI();
        this.getLocalStorageNumberLines();
        this.getItemsFromLocalStorage();
        this.getXCityWeather();
        this.spanClosedFn();
        setInterval(() => this.timedRefresh(), 200000);
        this.pressButtonOrClickMouse();
    }

    getXCityWeather(){
        const tmp = document.getElementById("clearButton");
        tmp.addEventListener("click", function(){
            const weatherBlockCount = document.getElementById("weatherBlocksID").childElementCount;

            for(let i=0; i<weatherBlockCount; i++){
            const weatherBlock = document.getElementById("weatherBlocksID");
            weatherBlock.removeChild(weatherBlock.lastChild);

            localStorage.clear();

        }
        });
    }

    spanClosedFn(){
        const span1 = document.getElementById("spanFirst");
        const modal = document.getElementById("myModal");

        window.onclick = function(event: Event){
            if(event.target == modal || event.target == span1){
                modal.style.display="none";
            }
        }

    }

    popUpWindow(e: Event){
        const tmp = e.target as Element;
        const id = tmp.id;
        // const city = await this.getDailyWeather(id);
        // console.log(id);

        //const weather = await this.getWeather(tmp.id);

        //-----------------------------------
        const modal = document.getElementById('myModal');
        // const div = document.createElement('div');
        // const span1 = document.createElement('span');
        // const p1 = document.createElement('p');

        // div.classList.add("modal-content");
        // span1.classList.add("close");

        // span1.innerHTML = "&times";
        // p1.innerHTML = weather.main.pressure;

        // elem.appendChild(div);
        // div.appendChild(span1);
        // div.appendChild(p1);
        modal.style.display = "block";
    }

    getValue(e:Event){
        // const tmp = e.target as Element;
        // const id = tmp.id;
        // const city = await this.getDailyWeather(id);
        // console.log(id);
        console.log(e.target);
    }

    stickySearchI(){
        const tmp = new stickySearchInput();
        tmp.stickySearch("searchInputID");
    }

    timedRefresh() {
        const weatherBlockCount = document.getElementById("weatherBlocksID").childElementCount;
        //console.log(weatherBlockCount);
        for(let i=0; i<weatherBlockCount; i++){
            const weatherBlock = document.getElementById("weatherBlocksID");
            weatherBlock.removeChild(weatherBlock.lastChild);
        }

        this.getLocalStorageNumberLines();
        this.getItemsFromLocalStorage();

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
        //-------------------------------------
        // const removeBtn = document.getElementById("btn1");
        // removeBtn.addEventListener("click", (e: Event) => this.removeCityWeather(e));
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
            if(item!=null)
            this.getCityInfoFromLocalStorage(item);
        }

        // const nowe = (await obiekty).values;
        //console.log(item);
    }


    async getCityInfo(city: string) {

        const weather = await this.getWeather(city);
        //---tworzenie nowych elementow---
        const newDiv = document.createElement("div");
        newDiv.className = "weatherInfoBlock";
        newDiv.id = "" +this.liczbaWywolan;
        const newName = document.createElement("p");
        const newLastActualisation = document.createElement("p");
        const newDegrees = document.createElement("p");
        const newAirPressureText = document.createElement("p");
        const newImage = document.createElement("img");
        const newAirPressure = document.createElement("span");
        const newDegreesChar = document.createElement("p");
        const newBtn = document.createElement("button");

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
        newBtn.innerHTML = "More information";

        //---dodawanie odpowiednich klas do stylowania---
        newName.classList.add("weatherInfoCity");
        newLastActualisation.classList.add("weatherInfoHour");
        newDegrees.classList.add("weatherInfoTemperature");
        newAirPressureText.classList.add("weatherInfoPressure");
        newAirPressure.classList.add("pressureValue");
        newDegreesChar.classList.add("degrees");
        newBtn.classList.add("moreInfo");
        newBtn.id = weather.name;
        newBtn.onclick = this.popUpWindow;

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
        newDiv.appendChild(newBtn);
        //---czyszczenie inputu miasta---
        const inputCitySearch = <HTMLInputElement>document.getElementById("searchInp");
        inputCitySearch.value = "";

        //---zapis w pamieci localStorage---
        this.saveData(weather);
    }

    async getCityInfoFromLocalStorage(item: any) {
        const weather = await this.getWeather(item.name);


        //---tworzenie nowych elementow---
        const newDiv = document.createElement("div");
        newDiv.className = "weatherInfoBlock";
        newDiv.id = "" +this.liczbaWywolan;
        const newName = document.createElement("p");
        const newLastActualisation = document.createElement("p");
        const newDegrees = document.createElement("p");
        const newAirPressureText = document.createElement("p");
        const newImage = document.createElement("img");
        const newAirPressure = document.createElement("span");
        const newDegreesChar = document.createElement("p");
        const newBtn = document.createElement("button");

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
        newBtn.innerHTML = "More information";

        //---dodawanie odpowiednich klas do stylowania---
        newName.classList.add("weatherInfoCity");
        newLastActualisation.classList.add("weatherInfoHour");
        newDegrees.classList.add("weatherInfoTemperature");
        newAirPressureText.classList.add("weatherInfoPressure");
        newAirPressure.classList.add("pressureValue");
        newDegreesChar.classList.add("degrees");
        newBtn.classList.add("moreInfo");
        newBtn.id = weather.name;
        newBtn.onclick = this.popUpWindow;

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
        newDiv.appendChild(newBtn);
        //---czyszczenie inputu miasta---
        const inputCitySearch = <HTMLInputElement>document.getElementById("searchInp");
        inputCitySearch.value = "";

        //---zapis w pamieci localStorage---
        //this.saveData(weather);
        this.liczbaWywolan++;
        localStorage.setItem('liczbaWywolan', JSON.stringify(this.liczbaWywolan))
    }

    async getDailyWeather(city: string): Promise<any>{
        const cityName = await this.getWeather(city);
        //const cityN = JSON.parse(cityName);
        const lat = cityName.coord.lat;
        const lon = cityName.coord.lon;
        const daily = "daily";
        const openWeatherUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=${daily}&appid=${this.opwApiKey}`;
        const weatherResponse = await fetch(openWeatherUrl);
        const weatherDaily = await weatherResponse.json();
        return weatherDaily;
    }



    async getWeather(city: string): Promise<any> {
        const openWeatherUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${this.opwApiKey}`;
        const weatherResponse = await fetch(openWeatherUrl);
        const weatherData = await weatherResponse.json();
        return weatherData;
    }

    saveData(data: any) {
        this.liczbaWywolan++;
        localStorage.setItem("btn"+(this.liczbaWywolan), JSON.stringify(data));
        localStorage.setItem('liczbaWywolan', JSON.stringify(this.liczbaWywolan))
    }

    deleteData(data: any){
        localStorage.removeItem(data);
    }

    async getData() {
        const items =[];
        const quantity = this.liczbaWywolan;
        for(let i = 1; i <= quantity; i++){
            items[i-1] = localStorage.getItem('btn' + i);
        }
        return items;
    }
}
