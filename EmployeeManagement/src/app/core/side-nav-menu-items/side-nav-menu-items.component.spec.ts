import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavMenuItemsComponent } from './side-nav-menu-items.component';

describe('SideNavMenuItemsComponent', () => {
  let component: SideNavMenuItemsComponent;
  let fixture: ComponentFixture<SideNavMenuItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideNavMenuItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavMenuItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
