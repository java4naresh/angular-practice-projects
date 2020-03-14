import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'MyApp2Forms';
  registerForm:FormGroup;
  constructor(private formBuilder:FormBuilder) {

  }
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName:['N', Validators.required],
      lastName: ['K'],
      email: ['N'],
      password: ['******'],
      skills: this.formBuilder.group({
       skillName:['Java'],
       experience:['3 years'],
       prof:['biginner']
      })
    });
   /* this.registerForm = new FormGroup({
          firstName: new FormControl(),
          lastName: new FormControl(),
          email: new FormControl(),
          password: new FormControl()
    }); */
  }

  onSubmit() {
    console.log(this.registerForm.value)
  }
  loadData():void {
    this.registerForm.patchValue({
          firstName:"Naresh",
          lastName:"Kambala",
          email:"java4naresh@gmail.com",
        //  password:"451@Java"
    });
  }
}
