import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { StudentComponent } from './student/student.component';

const routes:Routes = [
  { path:'employee', component:EmployeeComponent},
    
   {path:'student', component: StudentComponent, },
   {path:'', redirectTo:'/employee', pathMatch:'full' }
 
];

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    StudentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
