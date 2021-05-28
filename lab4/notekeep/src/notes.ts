import {AppStorage} from './appStorage';

export class Notes{

    async getNotesContent(){
        const data = new AppStorage();
        const allData = await data.getData();
        //console.log(allData);

        allData.map((x:any)=> {
            const noteDiv = document.createElement("div");
            noteDiv.classList.add("notesContent");

            const topBarDiv = document.createElement("div");
            topBarDiv.classList.add("topBarNotes");

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
            buttonRemove.textContent = "REMOVE";

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


        //return allData;
    }

}