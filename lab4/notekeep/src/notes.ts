import {AppStorage} from './appStorage';

export class Notes{

    constructor(){
        this.getNotesContent();
    }

    async getNotesContent(){
        const data = new AppStorage();
        const allData = await data.getData();
        //console.log(allData);

        allData.map((x:any)=> {
            const h1 = document.createElement("h1");
            h1.textContent = x.title;
            document.body.appendChild(h1);
        })
        
        //return allData;
    }
}