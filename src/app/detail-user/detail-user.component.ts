import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrls: ['./detail-user.component.scss']
})
export class DetailUserComponent implements OnInit {
  utente: any | undefined;

  constructor(private route: ActivatedRoute,
    public authService: AuthService) { }

  ngOnInit(): void {
    this.getId();
  }

  getId(): void {
    const id = this.route.snapshot.paramMap.get("id")
    if (id) {
      this.authService.getUser(id)
        .then(utente => {
          this.utente = utente
        })
    }

  }
}
