class StatApp{
    containerDOMElement: Element;
    ui: UI;
    constructor(containerDOMElement: Element){
        if(!containerDOMElement){
            throw new Error('musisz podać pojemnik dla programu StartApp');
        }
        this.containerDOMElement = containerDOMElement;
        this.startApp();
    }
    startApp():void{

    }
    
}



class UI{

}

const statApp = new StatApp(document.body);