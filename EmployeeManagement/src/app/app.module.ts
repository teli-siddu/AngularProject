import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HelpComponent } from './help/help.component';

import { RouterModule, Routes, ROUTES } from '@angular/router';

// import { ListEmployeesComponent } from './Modules/employees/Pages/list-employees.component';
// import { CardComponent } from './shared/components/card.component';
import { TypeScriptTestComponent } from './type-script-test/type-script-test.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { EmployeesModule } from './modules/employees/employees.module';
import { ListEmployeesComponent } from './modules/employees/Pages/list-employees.component';
import { NavMenuComponent } from './shared/pages/nav-menu.component';
import { HeaderComponent } from './shared/pages/header.component';
import { SideNavMenuComponent } from './shared/pages/side-nav-menu.component';
import { FooterComponent } from './shared/pages/footer.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DropdownsService } from './shared/services/dropdowns.service';
import { EmployeesService } from './modules/employees/Services/employees.service';
import { EmailValidator } from './shared/directives/email-validator.directive';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';




const appRoutes: Routes =
  [
    // { path: "employees", component:ListEmployeesComponent},
    // { path: "test", component:TypeScriptTestComponent},

    // { path: "", redirectTo:"/employees" ,pathMatch:"full" }
  ]
@NgModule({
  declarations: [
    AppComponent,
    HelpComponent,
    // CardComponent,

    TypeScriptTestComponent,
    NavMenuComponent,
    HeaderComponent,
    SideNavMenuComponent,
    FooterComponent,
    // FormsModule






  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    EmployeesModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    FormsModule
  ],
  providers: [HttpClient, DropdownsService, EmployeesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
