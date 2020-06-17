import { Component, OnInit, ViewChild } from '@angular/core';
// import { AddEmployeeViewModel } from 'src/app/models/employees.model';
import { FormControl, FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { DropdownsService } from 'src/app/shared/services/dropdowns.service';
import { EmployeesService } from '../Services/employees.service';
import { EmailValidator } from 'src/app/shared/directives/email-validator.directive';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { ActivatedRoute } from '@angular/router';
import { error } from 'protractor';


@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})

export class AddEmployeeComponent implements OnInit {

  EmployeeFormGroup: FormGroup;
  submitted = false;
  departments = [];
  genders = [];
  maritialStatuses = [];
  nationalities = [];
  countries = [];
  states = [];
  cities = [];
  rolesArray = [];
  retResult = {};
  bsConfig: Partial<BsDatepickerConfig> = Object.assign({}, { dateInputFormat: 'DD-MMM-YYYY', containerClass: 'theme-dark-blue' });




  constructor(private route: ActivatedRoute, private fb: FormBuilder, private dropdownService: DropdownsService, private employeesService: EmployeesService) {


    this.EmployeeFormGroup = this.fb.group({

      Id: [0],
      FirstName: ['', [Validators.required, Validators.minLength(4)]],
      LastName: [''],
      EmployeeId: [''],
      Designation: [''],

      DateofJoining: [''],

      DateOfBirth: [''],

      FatherName: [''],

      PassportNumber: [''],

      UserName: ['', [Validators.required]],
      Password: ['', [Validators.required]],
      ConfirmPassword: ['', [Validators.required]],
      GenderId: ['0'],
      MaritialStatusId: ['0'],
      NationalityId: ['0'],
      AddressTypeId: [3],
      DepartmentId: ['0'],
      // Mobiles:this.Mobiles,
      Mobiles: this.fb.array([
        this.fb.group({
          MobileNumber: ['']
        })

      ]),

      Emails: this.fb.array([
        this.fb.group({
          EmailId: ['', [EmailValidator(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i)]]
        })
      ]),
      // Emails1:this.fb.array([
      //   this.fb.control('')
      // ]),
      Addresses: this.fb.array([
        this.fb.group({
          CountryMasterId: [0],
          StateMasterId: [0],
          CityMasterId: [0],
          AddressTypeId: [''],
          LandMark: ['']

        })

      ]),
      Roles: this.fb.array([
        // this.fb.group({
        //   IsSelected:false,
        //   RoleName:"Admin"

        // })
      ]),

    })

    //  this.AddMobilesControl();
    // this.AddEmailsControl();
    //  this.AddAddressControl();
    this.dropdownService.employeeDropdowns().subscribe(empdrpdn => {

      this.departments = empdrpdn.Departments;
      this.countries = empdrpdn.Countries;
      this.genders = empdrpdn.Genders;
      this.maritialStatuses = empdrpdn.MaritialStatuses;
      this.nationalities = empdrpdn.Nationalities;

      console.log(this.departments)
    })

    this.dropdownService.roles().subscribe(roles => {
      this.rolesArray = roles;
      for (let i = 0; i < roles.length; i++) {
        this.roles.push(this.fb.group({
          IsSelected: roles[i].IsSelected,
          RoleName: roles[i].RoleName

        }))
      }

      // this.EmployeeFormGroup.setControl('Roles',this.fb.array(roles))
      // this.roles.push(roles);
      // console.log(this.EmployeeFormGroup);
    })

  }

  ngOnInit(): void {

    let param = this.route.snapshot.paramMap.get("Id")
    if (param != undefined && param != null && param != "") {
      this.route.paramMap.subscribe(parammap => {
        this.employeesService.EditEmployee(+param).subscribe(result => {
          console.log(result);
          this.EmployeeFormGroup.patchValue(result),
            error => {
              console.log(error);
            }
        })
      })
    }
    this.log(param);

  }
  ngAfterViewChecked() {


  }

  log(val: any) {
    console.log(val);
  }


  editEmployee(employee:) {

  }
  // properties

  public get mobiles(): FormArray {
    return this.EmployeeFormGroup.get("Mobiles") as FormArray;
  }

  public get firstName() {
    return this.EmployeeFormGroup.get("FirstName")
  }

  public get userName() {
    return this.EmployeeFormGroup.get("UserName")
  }
  public get password() {
    return this.EmployeeFormGroup.get("Password")
  }
  public get confirmPassword() {
    return this.EmployeeFormGroup.get("ConfirmPassword")
  }

  public get emails(): FormArray {
    return this.EmployeeFormGroup.get("Emails") as FormArray;
  }

  public get addresses(): FormArray {
    return this.EmployeeFormGroup.get("Addresses") as FormArray;
  }
  public get roles(): FormArray {
    return this.EmployeeFormGroup.get("Roles") as FormArray;
  }



  Roles: []
  AddMobilesControl() {
    // let control=<FormArray>this.EmployeeFormGroup.controls.Mobiles;
    // control.push(
    //   this.fb.group({
    //     MobileNumber:['']
    //   })
    // )

    this.mobiles.push(this.fb.group({
      MobileNumber: ['']
    }));
  }

  AddEmailsControl() {
    // let control=<FormArray>this.EmployeeFormGroup.controls.Emails;
    // control.push(
    //   this.fb.group({
    //     EmailId:['']
    //   })
    // )
    this.emails.push(this.fb.group({
      EmailId: ['', [EmailValidator(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i)]]
    }))
    // this.emails.push(this.fb.control(''))

  }

  AddAddressControl() {
    this.addresses.push(this.fb.group({
      CountryMasterId: ['0'],
      StateMasterId: ['0'],
      CityMasterId: ['0'],
      AddressTypeId: [],
      LandMark: []
    }))
  }


  countryChange(countryId: number) {
    // alert(countryId);
    this.dropdownService.states(countryId).subscribe(states => {
      this.states = states
      // console.log(this.states);
    })
  }
  stateChange(stateId: number) {
    this.dropdownService.cities(stateId).subscribe(cities => {
      this.cities = cities
      // console.log(this.states);
    })
  }

  saveEmployee(employeeData: any) {
    this.employeesService.saveEmployee(employeeData).subscribe((retResult => {
      this.retResult;
      console.log(retResult)

    }))
  }

}
