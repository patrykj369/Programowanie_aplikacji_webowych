import {Note} from './note';

export class App {

    constructor() {
        this.addNewNote();
    }

    //metoda do wyszukiwania z inputu
    getInputText(){
        const inputText = <HTMLInputElement>document.getElementById("searchInp");
        const text = inputText.value;
    }

    addNewNote(){
        const btnNote = document.getElementById('addNoteButton');
        const fc = new Note();
        btnNote.addEventListener("click", fc.openNoteWindow);
    }
}
