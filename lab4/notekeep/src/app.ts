import {Note} from './note';
import {Notes} from './notes';

export class App {

    constructor() {
        this.addNewNote();
        this.getNotes();
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

    async getNotes(){
        const tmp = new Notes();
    }
}
