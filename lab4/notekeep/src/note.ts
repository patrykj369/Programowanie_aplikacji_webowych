export class Note{

    constructor(){
        this.closeNoteWindow();
    }

    openNoteWindow(){
        console.log("dupa");
        const modal = document.getElementById('myModal');
        modal.style.display = "block";
    }

    closeNoteWindow(){
        const span1 = document.getElementById("spanFirst");
        const modal = document.getElementById("myModal");
        const modal1 = document.getElementById("modal1");

        window.onclick = function(event: Event){
            if(event.target == modal || event.target == span1){
                modal.style.display="none";
                modal1.textContent = "";
            }
        }
    }


}