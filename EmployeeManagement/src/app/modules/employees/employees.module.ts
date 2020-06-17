import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListEmployeesComponent } from './Pages/list-employees.component';
import { Routes, RouterModule } from '@angular/router';
import { CardComponent } from 'src/app/shared/pages/card.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { TypeScriptTestComponent } from 'src/app/type-script-test/type-script-test.component';
import { AddEmployeeComponent } from './Pages/add-employee.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';


const routes: Routes =
  [
    // { path: "employees", component:ListEmployeesComponent},
    // { path: "addemployee", component:AddEmployeeComponent},
    // { path: "test", component:TypeScriptTestComponent},
    // { path: "", redirectTo:"/employees" ,pathMatch:"full" }
  ]
@NgModule({
  declarations: [ListEmployeesComponent, CardComponent, AddEmployeeComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    BsDatepickerModule

  ]
})
export class EmployeesModule { }
