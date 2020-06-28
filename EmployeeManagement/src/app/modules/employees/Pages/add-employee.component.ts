import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
// import { AddEmployeeViewModel } from 'src/app/models/employees.model';
import { FormControl, FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { DropdownsService } from 'src/app/shared/services/dropdowns.service';
import { EmployeesService } from '../Services/employees.service';
import { EmailValidator } from 'src/app/shared/directives/email-validator.directive';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { ActivatedRoute, Router } from '@angular/router';
import { error } from 'protractor';
import { AlertService } from 'src/app/core/alert/alert.service';
import { LoadingScreenService } from 'src/app/core/loading-screen/loading-screen.service';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})

export class AddEmployeeComponent implements OnInit, AfterViewInit {

  @ViewChild("fileInput") fileInput: ElementRef;
  fileData: File = null;
  filePath: Observable<string>;
  previewUrl: any = "../assets/images/placeholder-profile-male.jpg";
  EmployeeFormGroup: FormGroup;
  submitted = false;
  departments = [];
  genders = [];
  maritialStatuses = [];
  nationalities = [];
  countries = [];
  states = [];
  cities = [];
  profilePictures = [];
  rolesArray = [];
  retResult = {};
  bsConfig: Partial<BsDatepickerConfig> = Object.assign({}, { dateInputFormat: 'DD-MMM-YYYY', containerClass: 'theme-dark-blue' });

  options = {
    autoClose: false,
    keepAfterRouteChange: true
  };


  constructor(private activatedRoute: ActivatedRoute, private route: Router,
    private fb: FormBuilder, private dropdownService: DropdownsService,
    private employeesService: EmployeesService, private alertService: AlertService,
    private loadingScreenService: LoadingScreenService) {


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
      ProfilePictureUrl: [],
      ProfilePictures: this.fb.array([]),
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

    this.loadingScreenService.start("Please wait...!")
    let param = this.activatedRoute.snapshot.paramMap.get("Id")
    if (param != undefined && param != null && param != "") {
      this.activatedRoute.paramMap.subscribe(paramMap => {
        this.EditEmployee(+paramMap.get("Id"))
      })

    }

    // this.log(param);

  }
  ngAfterViewInit() {
    this.loadingScreenService.stop();
  }
  ngAfterViewChecked() {


  }

  log(val: any) {
    console.log(val);
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
  public AddProfilePictures(path) {
    let control = <FormArray>this.EmployeeFormGroup.controls.ProfilePictures;
    control.push(
      this.fb.group({
        Path: [path]
      })
    )

  }
  public RemoveProfilePicture() {
    let control = <FormArray>this.EmployeeFormGroup.controls.ProfilePictures;
    control.clear();
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


  EditEmployee(param: number): void {

    this.employeesService.EditEmployee(+param).subscribe(result => {
      // console.log(result);

      this.stateChange(+result.Addresses[0].StateMasterId);
      this.previewUrl = result.ProfilePictureUrl || this.previewUrl;
      this.countryChange(+result.Addresses[0].CountryMasterId);

      this.EmployeeFormGroup.patchValue(result),
        error => {
          console.log(error);
        }
    });
  }

  updateEmployee(employee: any) {
    this.loadingScreenService.start("Updating please wait...")
    this.employeesService.updateEmployee(employee).subscribe(retResult => {
      if (retResult.Succeeded) {
        this.alertService.success('employee updated successfully...!', this.options)
        this.loadingScreenService.stop();
        this.route.navigate(['/employees']);

      }
      else {
        this.loadingScreenService.stop();
        this.alertService.error('something went wrong...!', this.options)
      }
    })
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

      if (retResult.Succeeded) {
        this.alertService.success('employee saved successfully...!', this.options)
        this.route.navigate(['/employees']);

      }
      else {
        this.alertService.error('something went wrong...!', this.options)
      }



    }))
  }

  fileChange(event) {
    let inputelement = this.fileInput.nativeElement as HTMLElement
    inputelement.click();
  }
  uploadFile(fileInput) {

    this.fileData = this.fileInput.nativeElement.files[0];
    let formData = new FormData();
    formData.append('file', this.fileData)
    this.employeesService.uploadProfileImage(formData).subscribe(result => {
      this.RemoveProfilePicture();
      this.previewUrl = "";
      this.AddProfilePictures(result);
      this.preview();
    })


  }


  preview() {
    // Show preview 
    var mimeType = this.fileData.type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }
    var reader = new FileReader();
    reader.readAsDataURL(this.fileData);
    reader.onload = (_event) => {
      // this.EmployeeFormGroup.controls.ProfilePictureUrl.setValue(reader.result)
      this.previewUrl = reader.result;
    }
  }
  removeProfile() {
    this.previewUrl = "../assets/images/placeholder-profile-male.jpg";
    this.RemoveProfilePicture();
  }

}
