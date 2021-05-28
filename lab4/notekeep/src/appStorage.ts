import { IAppStorage } from "./interfaces/IAppStorage";

export class AppStorage{
    notes: IAppStorage[] = [];

    saveData(data: IAppStorage) {
        const dataFromStorage = localStorage.getItem('notes');
        if(dataFromStorage != null){
            const actuallyData = JSON.parse(dataFromStorage);

            actuallyData.map((x:any)=> this.notes.push(x))

            if(data.title != ""){
                this.notes.push(data);
                localStorage.setItem("notes", JSON.stringify(this.notes));
            }

        }else{
            this.notes.push(data);
            localStorage.setItem("notes", JSON.stringify(this.notes));
        }

    }

    saveDataAfterDeleteElement(data: any){
        localStorage.setItem("notes", JSON.stringify(data));
    }

    deleteData(data: any){
        localStorage.removeItem(data);
    }

    async getData() {
        const dataFromStorage = localStorage.getItem('notes');
        const actuallyData = JSON.parse(dataFromStorage);
        const x = actuallyData;
       //console.log(x);
        return x;
    }

    async localStorageLength(){
        const dataFromStorage = await localStorage.getItem('notes');
        const actuallyData = JSON.parse(dataFromStorage);
        //console.log(actuallyData.length);
        if(actuallyData === null){
            return 0;
        }else{
           return actuallyData.length;
        }

    }
}