import {AppFirestoreStorage} from '../src/appFirestoreStorage';
import { IAppStorage } from '../src/interfaces/IAppStorage';


describe('notes',  () =>{

    const note: IAppStorage = {
        id: 1,
        title: "Test notatki",
        content: "Content test notatki",
        color_note: "pink",
        date_note: new Date().toDateString(),
        pinned: false,
    };

    const appFirestore = new AppFirestoreStorage();

    it('addNote', async () => {

        const returnNote = await appFirestore.addNote(note);
        const myNote = "dodano " + note;

        expect(returnNote).toBe(myNote);
    })

    it('deleteNote', async () => {
        const id = "1";
        const returnNote = await appFirestore.deleteNote(id);
        const myNote = "usunieto id: " + id;

        expect(returnNote).toBe(myNote);
    })

    it('pinNote', async () => {
        const id = "1";

        const returnNote = await appFirestore.pinNote(id, note);
        const myNote = "przypieto " + id;

        expect(returnNote).toBe(myNote);
    })

    it('getNote', async () => {
        const id = "1";

        const returnNote = await appFirestore.getNote(id);
        const myNote:any = undefined;

        expect(returnNote).toBe(myNote);
    })

    it('getNotes', async () => {
        await appFirestore.addNote(note); //dodanie notatki

        const returnNote = await appFirestore.getNotes();
        const myNote:any = undefined;

        expect(returnNote.length > 0);
    })
})
