import { Component, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EmployeeManagement';

  collapseNavMenu:boolean=true;
  navMenucssClass:string=this.collapseNavMenu?"hide-navbar":null;
  width:string="wt-60"
  


ToggleNavMenuClick()
{
  this.navMenucssClass= this.navMenucssClass=="hide-navbar"?"":"hide-navbar";
  
}
ToggleWidthClick()
  {
    //  alert("sdfsadsa");
    if (this.width == "wt-60")
    {
        this.width = "wt-180";
    }
    else
    {
        this.width = "wt-60";
    }
  }
}
