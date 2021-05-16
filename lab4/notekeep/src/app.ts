export class App {
    opwApiKey = "99eb7e6cb81a838f7d22416630652f72";
    liczbaWywolan: number = 0;


    constructor() {
        this.getLocalStorageNumberLines();
        this.getItemsFromLocalStorage();
    }

    getInputText(){
        const inputText = <HTMLInputElement>document.getElementById("searchInp");
        const text = inputText.value;

        this.saveData(text);
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


    async getCityInfoFromLocalStorage(item: any) {



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
