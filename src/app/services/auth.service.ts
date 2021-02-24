import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable, OnInit } from '@angular/core';

import firebase from 'firebase';

// type Competenze = "Beginners" | "Intermediate" | "Pro"
// interface Skills {
//   linguaggi: string;
//   livello: Competenze;
// }
// export interface Data {
//   nome: string,
//   skill: Array<Skills>
// }

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  exampleItems: any;
  constructor(private firestore: AngularFirestore) { }

  // Invio dati a Firebase
  createForm(data: any) {
    return new Promise<any>((
      resolution, reject) => {
      this.firestore.collection("form")
        .add(data)
        .then((res) => {
          alert("Dato inviato correttamente");
        }, err => alert(err));
    });
  }

  // Prendo tutti gli utenti
  getUser() {
    const db = firebase.firestore()
    db.collection('form')
    .get()
    .then((res) => {
      res.forEach((doc) => {
        console.log(`${doc.data().nome}`)
      })
    })
  }

}





