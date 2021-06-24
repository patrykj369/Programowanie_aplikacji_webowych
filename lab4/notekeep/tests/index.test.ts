import {AppFirestoreStorage} from '../src/appFirestoreStorage';
import { IAppStorage } from '../src/interfaces/IAppStorage';


describe('addNote',  () =>{

    const note: IAppStorage = {
        id: 1,
        title: "Test notatki",
        content: "Content test notatki",
        color_note: "pink",
        date_note: new Date().toDateString(),
        pinned: false,
    };

    const appFirestore = new AppFirestoreStorage();

    it('test1', async () => {

        const returnNote = await appFirestore.addNote(note);
        const myNote = "dodano " + note;

        expect(returnNote).toBe(myNote);
    })
})

describe('deleteNote',  () =>{

    const appFirestore = new AppFirestoreStorage();

    it('test1', async () => {
        const id = "1";
        const returnNote = await appFirestore.deleteNote(id);
        const myNote = "usunieto id: " + id;

        expect(returnNote).toBe(myNote);
    })
})

describe('pinNote',  () =>{

    const note: IAppStorage = {
        id: 1,
        title: "Test notatki",
        content: "Content test notatki",
        color_note: "pink",
        date_note: new Date().toDateString(),
        pinned: false,
    };

    const appFirestore = new AppFirestoreStorage();

    it('test1', async () => {
        const id = "1";

        const returnNote = await appFirestore.pinNote(id, note);
        const myNote = "przypieto " + id;

        expect(returnNote).toBe(myNote);
    })
})