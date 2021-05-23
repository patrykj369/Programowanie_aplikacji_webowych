import {AppStorage} from './appStorage';

export class Notes{

    constructor(){
        this.getNotesContent();
    }

    async getNotesContent(){
        const data = new AppStorage();
        const allData = await data.getData();
        //console.log(allData);

        // dorobic dodawanie rzeczy na strone
        return allData;
    }
}