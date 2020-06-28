import { Component, ChangeDetectorRef } from '@angular/core';

class DataListProvider {
  // in a real application the returned data will be different every time
  get data() {
    return [1, 2, 3, 4, 5];
  }
}

@Component({
  selector: 'giant-list',
  template: `
      <li *ngFor="let d of dataProvider.data">Data {{d}}</li>
    `,
})
class GiantList {
  constructor(private ref: ChangeDetectorRef, public dataProvider: DataListProvider) {
    ref.detach();
    setInterval(() => {
      this.ref.detectChanges();
    }, 5000);
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numberOfTicks = 0;
  private now: Date;
  constructor(private ref: ChangeDetectorRef) {
    setInterval(() => {
      this.numberOfTicks++;
      this.now = new Date();
      // require view to be updated
      //this.ref.markForCheck();
    }, 1000);
  }
}

