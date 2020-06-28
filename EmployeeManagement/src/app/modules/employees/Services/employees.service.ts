import { Injectable } from '@angular/core';
import { EmployeeViewModel } from 'src/app/models/employees.model';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { from, Observable, of, throwError } from 'rxjs';
import { map, retry, catchError } from 'rxjs/operators'
import { error } from 'protractor';
import { async } from '@angular/core/testing';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {



  private _employees: EmployeeViewModel[];
  public get employees(): EmployeeViewModel[] {
    return this._employees;
  }
  public set employees(employees: EmployeeViewModel[]) {
    this._employees = employees;
  }

  constructor(private httpClient: HttpClient) {

  }

  private baseURL: string = environment.baseUrl;

  employees1: EmployeeViewModel[];
  getEmployee(): Observable<EmployeeViewModel[]> {

    return this.httpClient.get(this.baseURL + "/api/employees/employees")
      .pipe(
        // map(x=>x),
        // map(x=>{
        //     return x
        // }),
        // retry(2),
        catchError(error => {
          console.log(error)
          return of(error)
        })

      );


  }

  EditEmployee(Id: number): Observable<any> {

    return this.httpClient.get(`${this.baseURL}/api/employees/EditEmployee/${Id}`)
      .pipe(
        retry(1),
        catchError(error => {
          console.log(error)
          return of(error)
        })
      )

  }

  updateEmployee(employee: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    return this.httpClient.post(`${this.baseURL}/api/employees/Updatemployee`, employee)
      .pipe(
        retry(1),
        catchError(error => {
          console.log(error)
          return of(error)
        })
      )
  }

  saveEmployee(employee): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'jwt-token'
      })
    };



    let x: Observable<any> = this.httpClient.post(`${this.baseURL}/api/employees/AddEmployee`, employee, httpOptions).pipe(
      retry(1),
      catchError(error => {
        console.log(error);
        return of(error);
      })
    )
    // console.log(x);
    // console.log(x.subscribe(x=>console.log(x)));
    return x;
  }

  deleteEmployee(id: number): Observable<any> {

    return this.httpClient.delete(`${this.baseURL}/api/employees/DeleteEmployee/${id}`)
      .pipe(
        // retry(1),
        catchError(error => {
          return of(error)
        })
      )
  }

  uploadProfileImage(formData: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({

      }),
      responseType: 'text' as 'json'
    };
    return this.httpClient.post(`${this.baseURL}/api/employees/UploadProfileImage`, formData, httpOptions).pipe(
      // retry(1),
      map(result => result),
      catchError(error => {
        // return this.handleError<string>("uploda image", "")
        return throwError(error);
      })
    );

  }

  employeeDetails(id): Observable<any> {

    return this.httpClient.get<any>(`${this.baseURL}/api/employees/EmployeeDetails/${id}`)
  }

  getUser(): Observable<any> {
    return this.httpClient.get<any>(`${this.baseURL}/api/employees/GetUser`)
  }

  private handleError<T>(operation = 'operation', result?: T) {

    (error: any): Observable<T> => {
      console.log(error)
      return
    }
    return of(result as T)

  }
}
