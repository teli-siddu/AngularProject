import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListEmployeesComponent } from './modules/employees/Pages/list-employees.component';
import { TypeScriptTestComponent } from './type-script-test/type-script-test.component';
import { AddEmployeeComponent } from './modules/employees/Pages/add-employee.component';


const routes: Routes =
  [
    { path: "employees", component: ListEmployeesComponent },
    { path: "addemployee", component: AddEmployeeComponent },
    { path: "editemployee/:Id", component: AddEmployeeComponent },
    { path: "test", component: TypeScriptTestComponent },

    { path: "", redirectTo: "/employees", pathMatch: "full" }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
