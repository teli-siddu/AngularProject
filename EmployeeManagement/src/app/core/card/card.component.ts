import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EmployeeViewModel } from 'src/app/models/employees.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input()
  employee: EmployeeViewModel;

  @Output()
  delete = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  // delete():void{
  //   alert();
  // }
  deleteClick(id: number): void {

    this.delete.emit(id);
  }

}
