class StatsApp{

    data0Input: HTMLInputElement;
    dataArray:HTMLInputElement[] = [];
    dataSumaInput: HTMLInputElement;
    dataAvgInput: HTMLInputElement;
    dataMinInput: HTMLInputElement;
    dataMaxInput: HTMLInputElement;
    number: HTMLInputElement;
    container: HTMLElement;

    constructor(){
        this.startApp();
    }
 
    startApp(){
        this.getInputs();
        this.number = document.querySelector('#input0');
        this.container = document.getElementById("container");
        this.watchInputValues();
    }

    addInput(){
          while(this.container?.hasChildNodes()){
              this.container?.removeChild(this.container?.lastChild);
              this.dataArray=[];
              const tmp:string = "0";
              this.dataSumaInput.value=tmp;
              this.dataAvgInput.value=tmp;
              this.dataMaxInput.value=tmp;
              this.dataMinInput.value=tmp;

          }
            const tmp = +this.number.value;
            
            for(let i=0; i<tmp; i++ ){
                const p = document.createTextNode("Wartość: ");
                this.container?.appendChild(p);
                var input = document.createElement("input");
                input.type = "text";
                input.id = "input"+(i+1);
                this.container?.appendChild(input);
                this.container?.appendChild(document.createElement("br"));
            }
            
        this.getInputs();
        this.watchInputValues();
    }

    getInputs(){
        this.number = document.querySelector('#input0');
        this.container = document.getElementById("container");

        if(this.container.hasChildNodes()){
            for(let i=0; i<+this.number.value; i++){
                const tmp ="#input" + (i+1);
                this.dataArray.push(document.querySelector(tmp));
            }
        }
        
        this.dataSumaInput = document.querySelector('#inputSum');
        this.dataAvgInput = document.querySelector('#inputAvg');
        this.dataMinInput = document.querySelector('#inputMin');
        this.dataMaxInput = document.querySelector('#inputMax');
    }

    watchInputValues(){
        this.number.addEventListener('input', () => this.addInput());
        if(this.container.hasChildNodes()){
            for(var i=0; i<+this.number.value; i++){
                this.dataArray[i]?.addEventListener('input', () => this.computeData());
            }
        }
        
    }

    computeData(){
        var dataArray2:number[]=[];
        let sum:number = 0;
        for(let i=0; i<+this.number.value; i++){
            dataArray2[i]=+this.dataArray[i].value;
            sum += dataArray2[i];

            const avg = sum/+this.number.value;
            const min = Math.min.apply(Math, dataArray2);
            const max = Math.max.apply(Math, dataArray2);
            this.showStats(sum, avg, min, max);
        }      
    }

    showStats(sum: number, avg: number, min: number, max: number){
        this.dataSumaInput.value = sum.toString();
        this.dataAvgInput.value = avg.toString();
        this.dataMinInput.value = min.toString();
        this.dataMaxInput.value = max.toString();
    }
}

const statApp = new StatsApp();