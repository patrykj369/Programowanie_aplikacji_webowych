import { IAppStorage } from "./interfaces/IAppStorage";

export class AppStorage{
    notes: IAppStorage[] = [];

    saveData(data: IAppStorage) {
        const dataFromStorage = localStorage.getItem('notes');
        if(dataFromStorage != null){
            const actuallyData = JSON.parse(dataFromStorage);

            actuallyData.map((x:any)=> this.notes.push(x))

            //this.notes.push(actuallyData);

            this.notes.push(data);

            localStorage.setItem("notes", JSON.stringify(this.notes));

        }else{
            this.notes.push(data);
            localStorage.setItem("notes", JSON.stringify(this.notes));
        }

    }

    deleteData(data: any){
        localStorage.removeItem(data);
    }

    async getData() {
        const dataFromStorage = localStorage.getItem('notes');
        const actuallyData = JSON.parse(dataFromStorage);
        const x = actuallyData;
        console.log(x);
        return x;
    }

    async localStorageLength(){
        const dataFromStorage = await localStorage.getItem('notes');
        const actuallyData = JSON.parse(dataFromStorage);
        console.log(actuallyData.length);
        return actuallyData.length;
    }
}