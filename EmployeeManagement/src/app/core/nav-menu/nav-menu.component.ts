import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from 'src/app/models/menu-item.madel';
import { ToolbarService } from 'src/app/services/toolbar.service';
import { Observable, of } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { map, filter } from 'rxjs/operators';
import { EmployeeViewModel } from 'src/app/models/employees.model';
import { EmployeesService } from 'src/app/modules/employees/Services/employees.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {

  @Input() user: EmployeeViewModel;
  @Input() menuItems: MenuItem[]
  isAuthenticated$: Observable<boolean>;
  // User: Observable<EmployeeViewModel>;
  // menuItems: Observable<MenuItem[]>;
  toggle: any = [];
  menuItems1: MenuItem[] = [
    {
      "Id": 1, "Name": "Employees", "URL": "/employees", "ParentId": -1,
      "Children": [
        {
          "Id": 15, "Name": "Add Employee", "URL": "/departments/addemployee", "ParentId": 1,
          "Children": [
            {
              "Id": 1003, "Name": "Add employee nested", "URL": "/departments/adddepartment", "ParentId": 15,
              "Children": []
            }]
        },
        {
          "Id": 16, "Name": "Update Employee", "URL": "/departments/updateemployee", "ParentId": 1,
          "Children": []
        }, {
          "Id": 17, "Name": "Delete Employee", "URL": "/departments/deleteemployee", "ParentId": 1,
          "Children": []
        }]
    }
    ,
    {
      "Id": 2, "Name": "Departments", "URL": "/departments", "ParentId": -1,
      "Children": [{
        "Id": 3, "Name": "Add Department", "URL": "/departments/adddepartment", "ParentId": 2,
        "Children": []
      }, {
        "Id": 4, "Name": "Update Department", "URL": "/departments/updatedepartment", "ParentId": 2,
        "Children": []
      }, {
        "Id": 5, "Name": "Delete Department", "URL": "/departments/deletedepartment", "ParentId": 2,
        "Children": [
          {
            "Id": 1002, "Name": "Delete Department nested", "URL": "/departments/deletedepartment", "ParentId": 5,
            "Children": []
          }]
      }]
    }
  ]
  constructor(private authenticationService: AuthenticationService, private toolbarService: ToolbarService, private employeesService: EmployeesService) { }

  ngOnInit(): void {
    // alert();
    this.isAuthenticated$ = this.authenticationService.isAuthenticated();
    // this.toolbarService.topNavMenuItems().subscribe(result => {

    //   this.menuItems = result;
    //   this.toolbarService.setTopNavMenuItems(result);
    // });
    // this.menuItems = this.toolbarService.topNavMenuItems();
    // this.User = this.employeesService.getUser();


  }
  toggleLi(i) {
    // this.menuItems.pipe(
    //   map(x => false)
    // ).subscribe(result => {

    //   this.toggle = result
    //   i = i + '';
    //   let indexes = i.split(".")
    //   for (let i = 0; i < indexes.length; i++) {
    //     this.toggle[i] = true
    //   }
    // })
    // this.toggle.map(x => false)
    // i = i + '';
    // let indexes = i.split(".")
    // for (let i = 0; i < indexes.length - 1; i++) {
    //   this.toggle[i] = true
    // }
    this.toggle[i] = !this.toggle[i]
  }
}


