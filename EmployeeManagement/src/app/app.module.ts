import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HelpComponent } from './help/help.component';

import { RouterModule, Routes, ROUTES, ActivatedRoute } from '@angular/router';

// import { ListEmployeesComponent } from './Modules/employees/Pages/list-employees.component';
// import { CardComponent } from './shared/components/card.component';
import { TypeScriptTestComponent } from './type-script-test/type-script-test.component';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
// import { EmployeesModule } from './modules/employees/employees.module';
import { ListEmployeesComponent } from './modules/employees/Pages/list-employees.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DropdownsService } from './shared/services/dropdowns.service';
import { EmployeesService } from './modules/employees/Services/employees.service';
import { EmailValidator } from './shared/directives/email-validator.directive';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { MatProgressBarModule } from '@angular/material/progress-bar'

import { LoginComponent } from './modules/login/login.component';
import { LoginModule } from './modules/login/login.module';
import { JwtModule, JwtModuleOptions, JwtHelperService } from '@auth0/angular-jwt'
import { AuthenticationService } from './services/authentication.service';
import { JwtIntercepterService } from './intercepters/jwt-intercepter.service';
import { ErrorIntercepterService } from './intercepters/error-intercepter.service';
import { AuthGuardService } from './guards/auth-guard.service';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule, MatMenuModule } from '@angular/material';
import { SsComponent } from './ss/ss.component';
import { CoreModule } from './core/core.module';
import { LoadingScreen } from './models/loading-screen.model';






const appRoutes: Routes =
  [
    // { path: "employees", component:ListEmployeesComponent},
    // { path: "test", component:TypeScriptTestComponent},

    // { path: "", redirectTo:"/employees" ,pathMatch:"full" }
  ]
export function tokenGetter() {
  return localStorage.getItem("access_token");
}
const tokenConfig: JwtModuleOptions = {
  config: {
    tokenGetter: tokenGetter,
    whitelistedDomains: ['localhost:44320'],
    blacklistedRoutes: ['http://localhost:3000/auth/login']
  }
}

@NgModule({
  declarations: [
    AppComponent,
    HelpComponent,
    // CardComponent,

    TypeScriptTestComponent,

    SsComponent,


    // FormsModule






  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // RouterModule.forRoot(appRoutes),
    HttpClientModule,
    // EmployeesModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    FormsModule,
    MatProgressBarModule,
    CoreModule,

    // JwtModule.forRoot(tokenConfig)
    JwtModule.forRoot(tokenConfig),
    MatTreeModule,
    MatIconModule,
    MatMenuModule

  ],
  providers: [HttpClient, DropdownsService, EmployeesService, AuthenticationService,
    // AuthGuardService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtIntercepterService, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorIntercepterService, multi: true },

  ],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }
