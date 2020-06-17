import { Component, OnInit } from '@angular/core';
import { EmployeeViewModel } from 'src/app/models/employees.model';
import { EmployeesService } from '../Services/employees.service';

@Component({
  selector: 'app-list-employees',
  templateUrl:'./list-employees.component.html',
  // templateUrl: './list-employees.component.html',
  // template:`hello`,
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {


  employees:EmployeeViewModel[];

  constructor(private _employeeService:EmployeesService)
  {

  }

  ngOnInit(): void {
    this._employeeService.getEmployee().subscribe((emps)=>{
      console.log(emps)
      this.employees=emps
      // console.log(this.employees) ;
    },
    error=>
    {
      console.log(error)
    }
    );

    
    
    
  }

 

}
