export class AppStorage{
    liczbaWywolan: number = 0;

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