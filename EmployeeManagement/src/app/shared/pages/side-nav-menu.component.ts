import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav-menu',
  templateUrl: './side-nav-menu.component.html',
  styleUrls: ['./side-nav-menu.component.css']
})
export class SideNavMenuComponent implements OnInit {

  width:string="wt-60"
  collapseNavMenu:boolean=true;
  navMenucssClass:string=this.collapseNavMenu?"collapse":null;

  constructor() { }

  ngOnInit(): void {
    // alert("ng init");
  }

  ToggleNavMenuClick()
  {
    
    this.collapseNavMenu = !this.collapseNavMenu;
  }
  ToggleWidthClick(event)
  {
     alert("sdfsadsa");
    if (this.width == "wt-60")
    {
        this.width = "wt-180";
    }
    else
    {
        this.width = "wt-60";
    }
  }

  clickFunction()
  {
    alert("sfsdf")
  }
}
