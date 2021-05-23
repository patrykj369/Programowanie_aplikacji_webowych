import { IAppStorage } from "./interfaces/IAppStorage";

export class AppStorage{
    notes: IAppStorage[] = [];

    saveData(data: IAppStorage) {
        //this.liczbaWywolan++;
        const tmp = localStorage.getItem('notes');
        if(tmp != null){
            const ob = JSON.parse(tmp);
            this.notes.push(ob);

            this.notes.push(data);

            localStorage.setItem("notes", JSON.stringify(this.notes));

        }else{
            localStorage.setItem("notes", JSON.stringify(data));
        }

    }

    deleteData(data: any){
        localStorage.removeItem(data);
    }

    // async getData() {
    //     const items =[];
    //     const quantity = this.liczbaWywolan;
    //     for(let i = 1; i <= quantity; i++){
    //         items[i-1] = localStorage.getItem('btn' + i);
    //     }
    //     return items;
    // }
}