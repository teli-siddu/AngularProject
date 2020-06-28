import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListEmployeesComponent } from './Pages/list-employees.component';
import { Routes, RouterModule } from '@angular/router';


// import { TypeScriptTestComponent } from 'src/app/type-script-test/type-script-test.component';
import { AddEmployeeComponent } from './Pages/add-employee.component';
import { ReactiveFormsModule } from '@angular/forms';

import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { EmployeesRoutingModule } from './employees-routing.module';
import { ErrorIntercepterService } from 'src/app/intercepters/error-intercepter.service';
import { AuthGuardService } from 'src/app/guards/auth-guard.service';
import { CoreModule } from 'src/app/core/core.module';
import { CardComponent } from 'src/app/core/card/card.component';

// import { CardComponent } from 'src/app/core/card/card.component';


// const routes: Routes =
//   [
//     // { path: "employees", component:ListEmployeesComponent},
//     // { path: "addemployee", component:AddEmployeeComponent},
//     // { path: "test", component:TypeScriptTestComponent},
//     // { path: "", redirectTo:"/employees" ,pathMatch:"full" }
//   ]
@NgModule({
  declarations: [ListEmployeesComponent, AddEmployeeComponent],
  imports: [
    CommonModule,

    RouterModule,
    ReactiveFormsModule,
    CoreModule,

    BsDatepickerModule,
    EmployeesRoutingModule,


  ],

})
export class EmployeesModule { }
