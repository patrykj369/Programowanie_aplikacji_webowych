import {AppStorage} from './appStorage';
import {App} from './app';
import {Note} from './note';

export class Notes{

    constructor(){
        this.getAllNotesNumber();
    }

    async getNotesContent(){
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
                //console.log(y);
                data.saveDataAfterDeleteElement(dataFromLocalStorage);
                const note = new Note;
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
            notesListId.appendChild(noteDiv);
        })
        }catch(e){
            console.log(e);
        }

    }

    async getAllNotesNumber(){
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