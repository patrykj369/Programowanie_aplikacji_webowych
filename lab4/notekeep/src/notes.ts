import {AppStorage} from './appStorage';
import { IAppStorage } from "./interfaces/IAppStorage";
import {App} from './app';
import {Note} from './note';
import {AppFirestoreStorage} from './appFirestoreStorage';
import { switchAppMode } from './config';

export class Notes{

    constructor(){
        this.getAllNotesNumber();
    }

    async getNotesContent(){

        if(switchAppMode){
            const data = new AppFirestoreStorage();
            const allData = await data.getNotes();
            console.log(allData);

            try{
                allData.map((x:any)=> {
                const noteDiv = document.createElement("div");
                noteDiv.id = "note_"+x.id;
                noteDiv.classList.add("notesContent");
                noteDiv.style.borderColor = x.data.color_note;

                const topBarDiv = document.createElement("div");
                topBarDiv.classList.add("topBarNotes");
                topBarDiv.style.backgroundColor = x.data.color_note;

                const buttonPin = document.createElement("button");
                buttonPin.classList.add("buttonPin");
                buttonPin.id = "pin_"+x.id;

                buttonPin.addEventListener("click", async (e: any) => {
                    const idPin = ((e.target as Element).id).replace('pin_', '');
                    const noteFromFirebase = await data.getNote(idPin);

                    if(noteFromFirebase.pinned){
                        noteFromFirebase.pinned = false;
                        await data.pinNote(idPin, noteFromFirebase);
                        const elem = document.getElementById("note_"+idPin);
                        const elemDestination = document.getElementById("notesListID");
                        elemDestination.appendChild(elem);

                        const btn = document.getElementById("pin_"+idPin);
                        btn.classList.remove("buttonPinPress");
                        btn.classList.add("buttonPin");

                        const note = await new Note;
                        note.clearNotes();
                        note.clearPinnedNotes();



                    }else{
                        noteFromFirebase.pinned = true;
                        await data.pinNote(idPin, noteFromFirebase);
                        const elem = document.getElementById("note_"+idPin);
                        const elemDestination = document.getElementById("notesListID");
                        elemDestination.appendChild(elem);

                        const btn = document.getElementById("pin_"+idPin);
                        btn.classList.remove("buttonPin");
                        btn.classList.add("buttonPinPress");

                        const note = new Note;
                        note.clearNotes();
                        note.clearPinnedNotes();
                    }

                    const app = new App();
                })

                const h1 = document.createElement("h1");
                h1.textContent = x.data.title;

                const date = document.createElement("p");
                date.textContent = x.data.date_note;

                const contentDiv = document.createElement("div");
                contentDiv.classList.add("contentDivNotes");

                const noteDescription = document.createElement("p");
                noteDescription.textContent = x.data.content;

                const footer = document.createElement("div");
                footer.classList.add("footerNotes");

                const buttonRemove = document.createElement("button");
                buttonRemove.classList.add("button");
                buttonRemove.id = "remove_"+x.id;
                buttonRemove.textContent = "REMOVE";

                buttonRemove.addEventListener("click", async (e) =>{
                    const x = ((e.target as Element).id).replace('remove_', '');
                    await data.deleteNote(x);

                    const note = new Note;

                    note.clearNotes();
                    note.clearPinnedNotes();


                    const app = new App();
                })

                noteDiv.appendChild(topBarDiv);
                noteDiv.appendChild(contentDiv);
                noteDiv.appendChild(footer);

                topBarDiv.appendChild(buttonPin);
                topBarDiv.appendChild(h1);
                topBarDiv.appendChild(date);

                contentDiv.appendChild(noteDescription);


                footer.appendChild(buttonRemove);

                const notesListId = document.getElementById("notesListID");
                const notesPinnedId = document.getElementById("notesPinnedID");

                if(x.data.pinned){
                    notesPinnedId.appendChild(noteDiv);
                    const btn = document.getElementById("pin_"+x.id);
                    btn.classList.remove("buttonPin");
                    btn.classList.add("buttonPinPress");
                }else{
                    notesListId.appendChild(noteDiv);
                }

            })
            }catch(e){
                console.log(e);
            }

        }else{
            const data = new AppStorage();
            const allData = await data.getData();

            //console.log(allData);
            try{
                allData.map((x:any)=> {
                const noteDiv = document.createElement("div");
                noteDiv.id = "note"+x.id;
                noteDiv.classList.add("notesContent");
                noteDiv.style.borderColor = x.color_note;

                const topBarDiv = document.createElement("div");
                topBarDiv.classList.add("topBarNotes");
                topBarDiv.style.backgroundColor = x.color_note;

                const buttonPin = document.createElement("button");
                buttonPin.classList.add("buttonPin");
                buttonPin.id = "pin"+x.id;

                buttonPin.addEventListener("click", async (e: any) => {
                    const idNumber = parseInt(((e.target as Element).id).replace('pin', ''));
                    const dataFromLocalStorage1 = await data.getData();
                    const dataFromLocalStorage = dataFromLocalStorage1.sort();
                    const z = dataFromLocalStorage.find((el: any) => el.id === idNumber)

                    if(z.pinned){
                        const elem = document.getElementById("note"+idNumber);
                        const elemDestination = document.getElementById("notesListID");
                        elemDestination.appendChild(elem);
                        const btn = document.getElementById("pin"+idNumber);
                        btn.classList.remove("buttonPinPress");
                        btn.classList.add("buttonPin");

                        z.pinned = false;

                        const notes: IAppStorage[] = [];

                        const y = dataFromLocalStorage.indexOf(z);
                        dataFromLocalStorage.splice(y, 1);
                        dataFromLocalStorage.map((x:any) => {
                            notes.push(x);
                        })

                        notes.push(z);
                        data.saveDataAfterDeleteElement(notes);

                    }else{
                        const elem = document.getElementById("note"+idNumber);


                        const elemDestination = document.getElementById("notesPinnedID");

                        elemDestination.appendChild(elem);

                        const btn = document.getElementById("pin"+idNumber);
                        btn.classList.remove("buttonPin");
                        btn.classList.add("buttonPinPress");

                        //const x = parseInt(((e.target as Element).id).replace('remove', ''));

                        z.pinned = true;
                        const notes: IAppStorage[] = [];

                        const y = dataFromLocalStorage.indexOf(z);
                        dataFromLocalStorage.splice(y, 1);
                        dataFromLocalStorage.map((x:any) => {
                            notes.push(x);
                        })

                        notes.push(z);
                        data.saveDataAfterDeleteElement(notes);
                    }


                })

                const h1 = document.createElement("h1");
                h1.textContent = x.title;

                const date = document.createElement("p");
                date.textContent = x.date_note;

                const contentDiv = document.createElement("div");
                contentDiv.classList.add("contentDivNotes");

                const noteDescription = document.createElement("p");
                noteDescription.textContent = x.content;

                const footer = document.createElement("div");
                footer.classList.add("footerNotes");

                const buttonRemove = document.createElement("button");
                buttonRemove.classList.add("button");
                buttonRemove.id = "remove"+x.id;
                buttonRemove.textContent = "REMOVE";

                buttonRemove.addEventListener("click", async (e) =>{
                    const x = parseInt(((e.target as Element).id).replace('remove', ''));

                    const dataFromLocalStorage = await data.getData();
                    const z = dataFromLocalStorage.find((el: any) => el.id === x)
                    const y = dataFromLocalStorage.indexOf(z);
                    dataFromLocalStorage.splice(y, 1);

                    data.saveDataAfterDeleteElement(dataFromLocalStorage);
                    const note = new Note;

                    note.clearPinnedNotes();
                    note.clearNotes();

                    const app = new App();

                })

                noteDiv.appendChild(topBarDiv);
                noteDiv.appendChild(contentDiv);
                noteDiv.appendChild(footer);

                topBarDiv.appendChild(buttonPin);
                topBarDiv.appendChild(h1);
                topBarDiv.appendChild(date);

                contentDiv.appendChild(noteDescription);


                footer.appendChild(buttonRemove);

                const notesListId = document.getElementById("notesListID");
                const notesPinnedId = document.getElementById("notesPinnedID");

                if(x.pinned){
                    notesPinnedId.appendChild(noteDiv);
                    const btn = document.getElementById("pin"+x.id);
                    btn.classList.remove("buttonPin");
                    btn.classList.add("buttonPinPress");
                }else{
                    notesListId.appendChild(noteDiv);
                }

            })
            }catch(e){
                console.log(e);
            }
            }


    }

    async getAllNotesNumber(){
        if(switchAppMode){
            const data = new AppFirestoreStorage();
            const allData = await data.getNotes();
            const elem = document.getElementById("allNotesCount");

            try{
                const x = (allData.length).toString();
                if(x === '1'){
                    elem.innerHTML = x + " note";
                }else{
                    elem.innerHTML = x + " notes";
                }

            }catch(e){

            }
        }else{
            const data = new AppStorage();
            const elem = document.getElementById("allNotesCount");

            try{
                const x = (await data.localStorageLength()).toString();
                if(x === '1'){
                    elem.innerHTML = x + " note";
                }else{
                    elem.innerHTML = x + " notes";
                }

            }catch(e){

            }
        }

    }

}