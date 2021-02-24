import { AuthService } from '../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
@Component({
  selector: 'app-details',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit{

  constructor(public authService: AuthService, private firestore: AngularFirestore) {
  }

  ngOnInit() {
    this.authService.getUser();
  }


}
