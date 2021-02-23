import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private firestore: AngularFirestore) { }

  // Qui è dove creo la collection dove invio i dati al Cloud Firestore. Al component nell'onSubmit faccio la chiamata
  createForm(data: any) {
    return new Promise <any> ((
      resolution, reject) => {
        this.firestore.collection("form")
        .add (data)
        .then ((res) => {
          alert("Dato inviato correttamente");
        }, err => alert(err));
      });
  }

}

