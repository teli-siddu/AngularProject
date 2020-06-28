import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListEmployeesComponent } from './Pages/list-employees.component';
import { AddEmployeeComponent } from './Pages/add-employee.component';
import { AuthGuardService } from 'src/app/guards/auth-guard.service';

const routes: Routes = [

    { path: "", component: ListEmployeesComponent, canActivate: [AuthGuardService] },
    { path: "addemployee", component: AddEmployeeComponent, canActivate: [AuthGuardService] },
    { path: "editemployee/:Id", component: AddEmployeeComponent, canActivate: [AuthGuardService] },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [AuthGuardService]
})
export class EmployeesRoutingModule { }
