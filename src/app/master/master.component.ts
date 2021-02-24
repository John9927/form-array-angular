import { AngularFirestore } from '@angular/fire/firestore';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.scss']
})
export class MasterComponent implements OnInit {

  form: FormGroup;
  data = [
    {
      livello: "Beginner"
    },
    {
      livello: "Intermediate"
    },
    {
      livello: "Pro"
    },
  ];
  constructor(private fb: FormBuilder, public authService: AuthService, private firestore: AngularFirestore) {
    this.form = this.fb.group({
      nome: ['', Validators.required],
      skills: this.fb.array([]),
    });
  }

  get skills() : FormArray {
    return this.form.get("skills") as FormArray
  }

  exampleItems: any;

  ngOnInit() {
    this.addSkills();
  }

  newSkills(): FormGroup {
    return this.fb.group({
      linguaggi: '',
      livello: ["Beginner"],
    })
  }

  addSkills() {
    this.skills.push(this.newSkills());
  }

  removeSkills(i: number) {
    this.skills.removeAt(i);
  }

  onSubmit() {
    this.authService.createForm(this.form.value)
  }

  // getData() {
  //   this.authService.getData();
  // }
}
