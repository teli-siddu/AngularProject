import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { ListEmployeesComponent } from './modules/employees/Pages/list-employees.component';
import { TypeScriptTestComponent } from './type-script-test/type-script-test.component';
import { LogoutComponent } from './modules/login/logout.component';
// import { AddEmployeeComponent } from './modules/employees/Pages/add-employee.component';


const routes: Routes =
  [

    { path: "test", component: TypeScriptTestComponent },

    { path: "", redirectTo: "/login", pathMatch: "full" },

    { path: "employees", loadChildren: () => import('./modules/employees/employees.module').then(m => m.EmployeesModule) },
    { path: '', loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule) },

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
