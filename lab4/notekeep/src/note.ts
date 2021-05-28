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

    async saveNote(){

        //dorobic zapisywanie wybranego koloru
        const titleInp = document.getElementById('titleInp') as HTMLInputElement;
        const contentInp = document.getElementById('contentInp') as HTMLInputElement;
        const btn_click_yellow = document.getElementById('btn_yellow_click') as HTMLInputElement;
        const btn_click_green = document.getElementById('btn_green_click') as HTMLInputElement;
        const btn_click_red = document.getElementById('btn_red_click') as HTMLInputElement;
        const btn_click_pink = document.getElementById('btn_pink_click') as HTMLInputElement;
        const btn_click_blue = document.getElementById('btn_blue_click') as HTMLInputElement;

        let selectedColor  = "";

        if(btn_click_green.checked){
            selectedColor  = "green";
        }else if(btn_click_yellow.checked){
            selectedColor  = "yellow";
        }else if(btn_click_red.checked){
            selectedColor  = "red";
        }else if(btn_click_pink.checked){
            selectedColor  = "pink";
        }else if(btn_click_blue.checked){
            selectedColor  = "royalblue";
        }else{
            selectedColor  = "yellow";
        }

        const app = new AppStorage();
        const identyfikator: number = parseInt(await app.localStorageLength());
        const allItems = await app.getData();
        let lastItem:number = 0;

        if(allItems != null){
            lastItem = allItems[identyfikator-1].id;
        }else{
            lastItem = 0;
        }


        const obiekt: IAppStorage = {
            id: (lastItem+1),
            title: titleInp.value,
            content: contentInp.value,
            color_note: selectedColor,
            date_note: new Date().toDateString(),
            pinned: false,
        }

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
        //console.log(notes);
    }
}