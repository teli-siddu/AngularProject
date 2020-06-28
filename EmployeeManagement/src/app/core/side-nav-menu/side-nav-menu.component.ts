import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MenuItem } from 'src/app/models/menu-item.madel';
import { MatSidenav } from '@angular/material';
import { ToolbarService } from 'src/app/services/toolbar.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-side-nav-menu',
  templateUrl: './side-nav-menu.component.html',
  styleUrls: ['./side-nav-menu.component.css']
})
export class SideNavMenuComponent implements OnInit {

  width: string = "wt-60"
  collapseNavMenu: boolean = true;
  navMenucssClass: string = this.collapseNavMenu ? "collapse" : null;
  toggle: any = {};
  menuItems: Observable<MenuItem[]>;

  @ViewChild('sidenav') sidenav: MatSidenav;
  isExpanded = true;
  showSubmenu: boolean = false;
  isShowing = false;
  showProfile = false;
  showSubSubMenu: boolean = false;

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
  constructor(private toolbarService: ToolbarService) {
    this.toggle = this.menuItems1.map(i => false);
  }

  ngOnInit(): void {
    // console.log(this.menuItems1);
    this.menuItems = this.toolbarService.topNavMenuItems();
  }
  ToggleNavMenuClick() {

    this.collapseNavMenu = !this.collapseNavMenu;
  }
  ToggleWidthClick(event) {
    alert("sdfsadsa");
    if (this.width == "wt-60") {
      this.width = "wt-250";
    }
    else {
      this.width = "wt-60";
    }
  }

  mouseenter() {
    // alert();
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }

  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }

  clickFunction() {
    alert("sfsdf")
  }

  log(msg) {
    console.log(msg);
  }
  toggleLi(i) {
    this.toggle[i] = !this.toggle[i]
  }

}
