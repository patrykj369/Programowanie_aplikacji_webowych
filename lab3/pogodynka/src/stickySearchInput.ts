export class stickySearchInput{
    stickySearch(id: any){
        const search = document.getElementById(id);
        const sticky = search.offsetTop;

        if(window.pageYOffset>= sticky){
            search.classList.add("sticky");
        }else{
            search.classList.remove("sticky");
        }
    }

}