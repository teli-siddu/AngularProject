import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MenuItem } from 'src/app/models/menu-item.madel';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-side-nav-menu-items',
  templateUrl: './side-nav-menu-items.component.html',
  styleUrls: ['./side-nav-menu-items.component.css']
})
export class SideNavMenuItemsComponent implements OnInit {

  @Input()
  menuItems: MenuItem[]

  @ViewChild('sidenav') sidenav: MatSidenav;
  isExpanded = true;
  showSubmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  mouseenter() {
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
}
