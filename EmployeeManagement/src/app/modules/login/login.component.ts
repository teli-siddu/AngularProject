import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from './login.service';
import { LoginViewModel } from 'src/app/models/login-view-model';
import { JwtService } from 'src/app/services/jwt.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { AccessToken } from 'src/app/models/access-token.model';
import { AlertService } from 'src/app/core/alert/alert.service';
import { LoadingScreenService } from 'src/app/core/loading-screen/loading-screen.service';

// import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  public loginInvalid: boolean;
  private formSubmitAttempt: boolean;
  private returnUrl: string;
  loginViewModel: LoginViewModel
  private authToken: AccessToken;
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private loginService: LoginService,
    // private jwtService: JwtService
    private authenticationService: AuthenticationService,
    private alertService: AlertService,
    private loadingScreenService: LoadingScreenService


    // private authService: AuthService
  ) {
  }

  async ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/game';

    this.form = this.fb.group({
      UserName: ['', [Validators.email, Validators.required]],
      Password: ['', Validators.required]
    });

    // if (await this.authService.checkAuthenticated()) {
    //   await this.router.navigate([this.returnUrl]);
    // }
  }

  public get userName() {
    return this.form.get("UserName")
  }
  public get password() {
    return this.form.get("Password")
  }

  async onSubmit() {
    this.loginInvalid = false;
    this.formSubmitAttempt = false;
    if (this.form.valid) {

      this.loadingScreenService.start();
      this.authenticationService.authenticate(this.form.value)
        .subscribe(token => {
          //alert(token);
          this.authToken = token
          if (this.authenticationService.isAuthenticated()) {
            this.router.navigate(['/employees'])
            this.loadingScreenService.stop();
          }
          else {

            this.alertService.error("invalid user name or password")
            this.loadingScreenService.stop();
          }
        }

        );


      // } catch (err) {
      //   console.log(err)
      //   this.loginInvalid = true;
      // }
    } else {
      this.formSubmitAttempt = true;
    }
  }
}