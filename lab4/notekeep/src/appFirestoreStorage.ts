import firebase from 'firebase';
import {firebaseConfig} from './config';
import { IAppStorage } from './interfaces/IAppStorage';

export class AppFirestoreStorage{
    firebaseApp: any; //firebase.initializeApp(firebaseConfig);
    db: any; // =  this.firebaseApp.firestore();

    constructor(){

        if (!firebase.apps.length) {
            this.firebaseApp = firebase.initializeApp(firebaseConfig);
            this.db = this.firebaseApp.firestore();
        }else{
            this.firebaseApp = firebase.app();
            this.db = this.firebaseApp.firestore();
        }
    }


    // constructor() {
    //     this.addNote();
    // }

    async addNote(note: IAppStorage){

        const res = await this.db.collection('notes').add(note);

    }
}


