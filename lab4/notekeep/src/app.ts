import {Note} from './note';
import {Notes} from './notes';
import {AppFirestoreStorage} from './appFirestoreStorage';

export class App {

    constructor() {
        this.addNewNote();
        this.getNotes();
        this.getNotesFromFirebase();
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
        tmp.getNotesContent();
    }

    async getNotesFromFirebase(){
        const res = new AppFirestoreStorage();
       // res.addNote();
       console.log(res);
    }

}
