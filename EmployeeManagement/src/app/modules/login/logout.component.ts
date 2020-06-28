import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';
@Component({
    selector: 'app-logout',
    template: `<ng-content></ng-content>`
})
export class LogoutComponent implements OnInit {


    constructor(private authenticationService: AuthenticationService, private router: Router) {
    }
    ngOnInit() {

        this.authenticationService.logout();

        this.router.navigate(['/login']);

    }
}