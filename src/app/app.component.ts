import { Component, OnInit, } from '@angular/core';
import { FormGroup,FormArray, FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  form: FormGroup;
  constructor(private fb:FormBuilder) {
    this.form = this.fb.group({
      nome: ['', Validators.required],
      professione: this.fb.array([]) ,
    });
  }

  get professione() : FormArray {
    return this.form.get("professione") as FormArray
  }

  ngOnInit() {
    this.addProfessione();
  }

  newProfessione(): FormGroup {
    return this.fb.group({
      linguaggi: '',
      anni_di_esperienza: '',
    })
  }

  addProfessione() {
    this.professione.push(this.newProfessione());
  }

  removeProfessione(i: number) {
    this.professione.removeAt(i);
  }

  onSubmit() {
    console.log(this.form.value);
  }

}


export class country {
  id: string;
  name: string;

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }

}
