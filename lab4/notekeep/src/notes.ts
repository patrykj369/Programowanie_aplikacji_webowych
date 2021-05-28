import {AppStorage} from './appStorage';

export class Notes{

    constructor(){
        this.getNotesContent();

    }

    public async getNotesContent(){
        const data = new AppStorage();
        const allData = await data.getData();
        //console.log(allData);

        const h1 = document.createElement("h1");
        h1.textContent = allData[0].title;
        document.body.appendChild(h1);
        //return allData;
    }
}