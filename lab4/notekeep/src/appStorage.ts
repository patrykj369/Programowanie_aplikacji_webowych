import { IAppStorage } from "./interfaces/IAppStorage";

export class AppStorage{
    notes: IAppStorage[] = [];

    saveData(data: IAppStorage) {
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

    async getData() {
        const items:IAppStorage[] = [];
        const dataFromStorage = localStorage.getItem('notes');
        const actuallyData = JSON.parse(dataFromStorage);
        items.push(actuallyData);

        return items;
    }
}