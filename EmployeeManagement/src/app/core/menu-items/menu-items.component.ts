import { Component, OnInit, Input, ViewChildren, QueryList, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import { MenuItem } from 'src/app/models/menu-item.madel';

@Component({
  selector: 'app-menu-items',
  templateUrl: './menu-items.component.html',
  styleUrls: ['./menu-items.component.css']
})
export class MenuItemsComponent implements OnInit, AfterViewInit {

  @Input() menuItems: MenuItem[];
  @ViewChild('childMenu', { static: true }) public childMenu: any;

  constructor(private eRef: ElementRef) {

  }

  ngOnInit(): void {
    // console.log(this.menuItems)
  }
  ngAfterViewInit() {

  }

  log(msg) {
    console.log(msg);
    // this.menuItems.filter(x => x.Id == x.ParentId)
  }

  hasChildren(parentId): boolean {
    // return this.menuItems.filter(x => x.ParentId == parentId).length > 0
    return false;
  }


}
