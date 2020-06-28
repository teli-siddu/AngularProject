import { Component, SimpleChanges, AfterViewInit, OnInit } from '@angular/core';

import { from, Observable } from 'rxjs';
import { Router, NavigationStart, NavigationEnd, NavigationCancel } from '@angular/router';

import { AuthenticationService } from './services/authentication.service';
import { LoadingScreenService } from './core/loading-screen/loading-screen.service';
import { EmployeesService } from './modules/employees/Services/employees.service';
import { EmployeeViewModel } from './models/employees.model';
import { ToolbarService } from './services/toolbar.service';
import { MenuItem } from './models/menu-item.madel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, OnInit {
  title = 'EmployeeManagement';

  isAuthenticated$: Observable<boolean>;
  user: Observable<EmployeeViewModel>;
  menuItems: Observable<MenuItem[]>;
  collapseNavMenu: boolean = true;
  navMenucssClass: string = this.collapseNavMenu ? "hide-navbar" : null;
  width: string = "wt-60"

  /**
   *
   */
  constructor(private router: Router, private loadingScreenService: LoadingScreenService,
    private authenticationService: AuthenticationService, private employeeService: EmployeesService,
    private toolBarService: ToolbarService
  ) {
    this.isAuthenticated$ = this.authenticationService.isAuthenticated();
    this.user = this.employeeService.getUser()
    this.menuItems = this.toolBarService.topNavMenuItems()


  }


  ToggleNavMenuClick() {
    this.navMenucssClass = this.navMenucssClass == "hide-navbar" ? "" : "hide-navbar";

  }
  ToggleWidthClick() {
    //  alert("sdfsadsa");
    if (this.width == "wt-60") {
      this.width = "wt-180";
    }
    else {
      this.width = "wt-60";
    }
  }

  ngOnInit() {

    // this.router.events.subscribe((event) => {

    // })
    // this.loadingScreenService.start("sadfsdfsd")
    // alert("navigation started")
  }
  ngAfterViewInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        // this.loadingScreenService.start("sadfsdfsd")
      }
      else if (
        event instanceof NavigationEnd ||
        event instanceof NavigationCancel
      ) {
        this.loadingScreenService.stop();

      }
    })

    // alert("navigation ended")
  }
}
