import { Component, OnInit, } from '@angular/core';
import { FormGroup,FormArray, FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  form: FormGroup;
  selected: any;
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

  constructor(private fb:FormBuilder) {
    this.form = this.fb.group({
      nome: ['', Validators.required],
      skills: this.fb.array([]) ,
    });
  }

  get skills() : FormArray {
    return this.form.get("skills") as FormArray
  }

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
    console.log(this.form.value);
  }

}


// export class Form {
//   id: string;
//   name: string;

//   constructor(id: string, name: string) {
//     this.id = id;
//     this.name = name;
//   }
// }
