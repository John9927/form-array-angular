import { map } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

import firebase from 'firebase';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private firestore: AngularFirestore) { }

  // Invio dati a Firebase
  createForm(data: any) {
    return new Promise<any>((
      resolution, reject) => {
      this.firestore.collection("form")
        .add(data)
        .then(() => {
          alert("Dato inviato correttamente");
        })
        .catch(err => alert(err));
    });
  }

  // Prendo tutti gli utenti
  async getUsers() {
    return await firebase.firestore()
      .collection('form')
      .get( )
      .then((res) => res.docs.map(doc => ({
        ...doc.data(), id: doc.id
      })
    ))
  }

  async getUser(id: string) {
    return await firebase.firestore()
      .collection('form')
      .doc(id)
      .get()
      .then((res) => res.data())
  }

}




