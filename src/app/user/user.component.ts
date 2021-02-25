import { AuthService } from '../services/auth.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-details',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  utenti: any | undefined;
  constructor(public authService: AuthService) {
  }

  ngOnInit() {
    this.authService.getUsers()
      .then(nomi =>
        this.utenti = nomi
      )
  }
}
