import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert/alert.component';
import { CardComponent } from './card/card.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LoadingScreenComponent } from './loading-screen/loading-screen.component';
import { MenuItemsComponent } from './menu-items/menu-items.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { SideNavMenuComponent } from './side-nav-menu/side-nav-menu.component';
import { RouterModule } from '@angular/router';
import { MatProgressBarModule } from '@angular/material/progress-bar'
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule, MatMenuModule, MatSidenavModule } from '@angular/material';
import { MatListModule } from '@angular/material/list';
import { SideNavMenuItemsComponent } from './side-nav-menu-items/side-nav-menu-items.component';
import { MatRippleModule } from '@angular/material/core'




@NgModule({
  declarations: [AlertComponent, CardComponent, FooterComponent, HeaderComponent, LoadingScreenComponent, MenuItemsComponent, NavMenuComponent, SideNavMenuComponent, SideNavMenuItemsComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatProgressBarModule,
    MatTreeModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    MatRippleModule
  ],
  exports: [AlertComponent, CardComponent, FooterComponent, HeaderComponent, LoadingScreenComponent, MenuItemsComponent, NavMenuComponent, SideNavMenuComponent]
})
export class CoreModule { }
