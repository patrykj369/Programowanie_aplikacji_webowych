class StatsApp{

    data1Input: HTMLInputElement;
    data2Input: HTMLInputElement;
    data3Input: HTMLInputElement;
    data4Input: HTMLInputElement;
    dataSumaInput: HTMLInputElement;
    dataAvgInput: HTMLInputElement;
    dataMinInput: HTMLInputElement;
    dataMaxInput: HTMLInputElement;

    constructor(){
        this.startApp();
    }
 
    startApp(){
        this.getInputs();
        this.watchInputValues();
    }

    getInputs(){
        this.data1Input = document.querySelector('#input1');
        this.data2Input = document.querySelector('#input2');
        this.data3Input = document.querySelector('#input3');
        this.data4Input = document.querySelector('#input4');
        this.dataSumaInput = document.querySelector('#inputSum');
        this.dataAvgInput = document.querySelector('#inputAvg');
        this.dataMinInput = document.querySelector('#inputMin');
        this.dataMaxInput = document.querySelector('#inputMax');
    }

    watchInputValues(){
        this.data1Input.addEventListener('input', () => this.computeData());
        this.data2Input.addEventListener('input', () => this.computeData());
        this.data3Input.addEventListener('input', () => this.computeData());
        this.data4Input.addEventListener('input', () => this.computeData());

    }

    computeData(){
        const data1 = +this.data1Input.value;
        const data2 = +this.data2Input.value;
        const data3 = +this.data3Input.value;
        const data4 = +this.data4Input.value;
        const sum = data1 + data2 + data3 + data4;
        const avg = sum/4;
        const min = Math.min(data1, data2, data3, data4);
        const max = Math.max(data1, data2, data3, data4);
        this.showStats(sum, avg, min, max);
        
    }

    showStats(sum: number, avg: number, min: number, max: number){
        this.dataSumaInput.value = sum.toString();
        this.dataAvgInput.value = avg.toString();
        this.dataMinInput.value = min.toString();
        this.dataMaxInput.value = max.toString();
    }
}

