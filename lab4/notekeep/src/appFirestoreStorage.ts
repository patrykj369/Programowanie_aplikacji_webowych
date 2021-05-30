import firebase from 'firebase';
import {firebaseConfig} from './config';
import { IAppStorage } from './interfaces/IAppStorage';

export class AppFirestoreStorage{
    firebaseApp = firebase.initializeApp(firebaseConfig);
    db = this.firebaseApp.firestore();

    constructor() {
        this.addNote();
    }

    async addNote(){

        const note: IAppStorage = {
            id: 1,
            title: 'notatka z kompa',
            content: 'content z kompa',
            color_note: 'green',
            date_note: new Date().toDateString(),
            pinned: false
        }

        const res = await this.db.collection('notes').add(note);
        console.log(res);
    }
}


