import {IAppStorage} from '../src/interfaces/IAppStorage';
import { App } from './app';
import {AppStorage} from './appStorage'
import { Notes } from './notes';

export class Note{

    constructor(){
        this.closeNoteWindow();
        this.buttonSaveClick();
    }

    openNoteWindow(){
        const modal = document.getElementById('myModal');
        modal.style.display = "block";
    }

    closeNoteWindow(){
        const span1 = document.getElementById("spanFirst");
        const modal = document.getElementById("myModal");
        const btn_save = document.getElementById("buttonSaveNote");


        window.onclick = (event: Event) =>{
            if(event.target == modal || event.target == span1 || event.target == btn_save){
                modal.style.display="none";
                this.clearForm();
            }
        }
    }

    buttonSaveClick(){
        const btn_save = document.getElementById('buttonSaveNote');
        btn_save.addEventListener("click", () => this.saveNote());
    }

    saveNote(){

        //dorobic zapisywanie wybranego koloru
        const titleInp = document.getElementById('titleInp') as HTMLInputElement;
        const contentInp = document.getElementById('contentInp') as HTMLInputElement;
        const btn_click_yellow = document.getElementById('btn_yellow_click') as HTMLInputElement;
        const btn_click_green = document.getElementById('btn_green_click') as HTMLInputElement;
        const btn_click_red = document.getElementById('btn_red_click') as HTMLInputElement;
        const btn_click_pink = document.getElementById('btn_pink_click') as HTMLInputElement;
        const btn_click_blue = document.getElementById('btn_blue_click') as HTMLInputElement;

        const selectedColor  = "";

        const obiekt: IAppStorage = {
            title: titleInp.value,
            content: contentInp.value,
            color_note: "#fff",
            date_note: new Date().toDateString(),
            pinned: false,
        }

        const app = new AppStorage();

        //const clearNotesContent = new Notes();

        app.saveData(obiekt);

        this.clearNotes();
        const app2 = new App();

        this.clearForm();
    }

    clearForm(){
        const titleInp = document.getElementById('titleInp') as HTMLInputElement;
        const contentInp = document.getElementById('contentInp') as HTMLInputElement;
        const btn_click_yellow = document.getElementById('btn_yellow_click') as HTMLInputElement;
        const btn_click_green = document.getElementById('btn_green_click') as HTMLInputElement;
        const btn_click_red = document.getElementById('btn_red_click') as HTMLInputElement;
        const btn_click_pink = document.getElementById('btn_pink_click') as HTMLInputElement;
        const btn_click_blue = document.getElementById('btn_blue_click') as HTMLInputElement;

        titleInp.value = "";
        contentInp.value = "";
        btn_click_yellow.checked = false;
        btn_click_green.checked = false;
        btn_click_red.checked = false;
        btn_click_pink.checked = false;
        btn_click_blue.checked = false;
    }

    clearNotes(){
        const notes = document.getElementById("notesListID");
        notes.innerHTML = "";
        console.log(notes);
    }
}