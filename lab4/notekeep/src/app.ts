import {Note} from './note';
import {Notes} from './notes';
//import {AppFirestoreStorage} from './appFirestoreStorage';
import {switchAppMode} from './config';

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
        tmp.getNotesContent();

    }

    // async getNotesFromFirebase(){
    //     const res = new AppFirestoreStorage();
    //     res.getNotes().then((res: any) => console.log(res));
    // }

}
