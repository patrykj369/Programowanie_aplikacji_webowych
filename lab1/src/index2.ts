class StatsApp{

    data0Input: HTMLInputElement;
    dataArray: HTMLInputElement[] = [];
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
                const p = document.createElement("label");
                p.textContent="Wartość: ";
                p.id = "label"+(i+1);
                this.container?.appendChild(p);

                var input = document.createElement("input");
                input.type = "text";
                input.id = "input"+(i+1);
                input.className = "input";
                this.container?.appendChild(input);

                var button = document.createElement("button");
                button.textContent = "DELETE";
                button.id = (i+1).toString();

                button.addEventListener('click',()=>{
                    if(this.container.childElementCount>4){
                        var d = document.getElementById("input"+(i+1));
                        var l = document.getElementById("label"+(i+1));
                        var b = document.getElementById((i+1).toString());
                        var dd = document.getElementById("container");
                        
                        dd.removeChild(d);
                        dd.removeChild(l);
                        dd.removeChild(b);
                        
                        const val = +(this.number.value)-1;
                        this.number.value = val.toString();
                        var brbr = document.getElementById("br"+(i+1));
                        dd.removeChild(brbr);

                        this.dataArray.splice(i,1);
                        this.computeData();
                    }else{
                        alert("Musi występowac choć jeden input");
                    }
                        
                        
                });
                this.container?.appendChild(button);

                var br = document.createElement("br")
                br.id = "br"+(i+1);
                this.container?.appendChild(br);
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
                           
        }   
        const avg = sum/+this.number.value;  
        const max = Math.max.apply(Math, dataArray2);   
        const min = Math.min.apply(Math, dataArray2);
        this.showStats(sum, avg, min, max);
    }

    showStats(sum: number, avg: number, min: number, max: number){
        if(!(isNaN(sum) || isNaN(avg) || isNaN(min) || isNaN(max))){
            var element = document.getElementById('hid');
            var element1 = document.getElementById('suMa');
            var element2 = document.getElementById('sreDnia');
            var element3 = document.getElementById('mIn');
            var element4 = document.getElementById('mAx');

            var elementPoprawne = document.getElementById('poprawne');
            elementPoprawne.style.visibility = "hidden";

            element.style.visibility = "visible";
            element1.style.visibility = "visible";
            element2.style.visibility = "visible";
            element3.style.visibility = "visible";
            element4.style.visibility = "visible";
            element.style.visibility = "visible";

            this.dataSumaInput.value = sum.toString();
            this.dataAvgInput.value = avg.toString();
            this.dataMinInput.value = min.toString();
            this.dataMaxInput.value = max.toString();
            
        }else{
            var element = document.getElementById('hid');
            var element1 = document.getElementById('suMa');
            var element2 = document.getElementById('sreDnia');
            var element3 = document.getElementById('mIn');
            var element4 = document.getElementById('mAx');

            var elementPoprawne = document.getElementById('poprawne');
            elementPoprawne.style.visibility = "visible";

            element.style.visibility = "hidden";
            element1.style.visibility = "hidden";
            element2.style.visibility = "hidden";
            element3.style.visibility = "hidden";
            element4.style.visibility = "hidden";
        }
        
    }
}

const statApp = new StatsApp();