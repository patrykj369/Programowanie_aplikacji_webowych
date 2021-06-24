import firebase from 'firebase';
import {firebaseConfig} from './config';
import { IAppStorage } from './interfaces/IAppStorage';

export class AppFirestoreStorage{
    firebaseApp: any; //firebase.initializeApp(firebaseConfig);
    db: any; // =  this.firebaseApp.firestore();

    constructor(){

        if (!firebase.apps.length) {
            this.firebaseApp = firebase.initializeApp(firebaseConfig);

        }else{
            this.firebaseApp = firebase.app();

        }
        this.db = this.firebaseApp.firestore();
    }

    async addNote(note: IAppStorage){
        await this.db.collection('notes').add(note);
        const obj = "dodano " + note;
        return  obj;
    }

    async deleteNote(id: string){
        await this.db.collection('notes').doc(id).delete();
        const obj = "usunieto id: " + id;
        return  obj;
    }

    async pinNote(id: string, note: IAppStorage){
        try{
            await this.db.collection('notes').doc(id).update(note);
        }catch(e){
            console.log(e);
        }

        const obj = "przypieto " + id;
        return  obj;
    }

    async getNote(id: string){
        const obj = await this.db.collection('notes').doc(id).get().then((res: any) => res.data());
        return obj;
    }

    async getNotes(){

        const collection = await this.db.collection('notes').get().then((res: any) => ({size: res.size, docs: res.docs}));

        return collection.docs.map((doc: any) => ({id: doc.id, data: doc.data()}));

    }
}


