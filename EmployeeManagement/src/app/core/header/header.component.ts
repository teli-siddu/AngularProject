import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthGuardService } from 'src/app/guards/auth-guard.service';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isAuthenticated$: Observable<boolean>;
  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    this.isAuthenticated$ = this.authenticationService.isAuthenticated();
  }
}
