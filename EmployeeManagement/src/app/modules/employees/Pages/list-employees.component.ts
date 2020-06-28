import { Component, OnInit } from '@angular/core';
import { EmployeeViewModel } from 'src/app/models/employees.model';
import { EmployeesService } from '../Services/employees.service';
import { AlertService } from 'src/app/core/alert/alert.service';
import { LoadingScreenService } from 'src/app/core/loading-screen/loading-screen.service';


@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  // templateUrl: './list-employees.component.html',
  // template:`hello`,
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {


  employees: EmployeeViewModel[];

  constructor(private employeeService: EmployeesService, private alertService: AlertService, private loadingScreenService: LoadingScreenService) {

  }

  ngOnInit(): void {
    this.loadingScreenService.start("Please wait...!")
    this.employeeService.getEmployee().subscribe((emps) => {
      // console.log(emps)
      this.employees = emps
      this.loadingScreenService.stop();
      // console.log(this.employees) ;
    },
      error => {
        console.log(error)
      }
    );








  }

  ngAfterViewChecked() {

  }

  deleteEmployee(id: number) {

    this.loadingScreenService.start("please wait...");
    this.employeeService.deleteEmployee(id).subscribe(retResult => {
      if (retResult.Succeeded) {

        let index: number = this.employees.findIndex((emp) => emp.Id == id);
        // alert(index);
        this.employees.splice(index, 1);
        this.alertService.success("employee deleted successfully...!");
        this.loadingScreenService.stop();
      }
      else {
        this.alertService.error("something went wrong...!");
        this.loadingScreenService.stop();
      }

    })
  }



}
