import { Component, OnInit, Input } from '@angular/core';
import { EmployeeViewModel } from 'src/app/models/employees.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input()
  employee:EmployeeViewModel;
  constructor() { }

  ngOnInit(): void {
  }

  delete():void{
    alert();
  }

}
