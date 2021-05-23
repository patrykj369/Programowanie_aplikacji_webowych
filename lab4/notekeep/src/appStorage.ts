import { IAppStorage } from "./interfaces/IAppStorage";

export class AppStorage{
    notes: IAppStorage[] = [];

    saveData(data: IAppStorage) {
        //this.liczbaWywolan++;
        const dataFromStorage = localStorage.getItem('notes');
        if(dataFromStorage != null){
            const actuallyData = JSON.parse(dataFromStorage);
            this.notes.push(actuallyData);

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