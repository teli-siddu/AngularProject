import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DropdownsService {

  
  private baseURL:string="https://localhost:44320";
  constructor(private httpClient:HttpClient) { 
  
  }

  departments():Observable<any>{
     return this.httpClient.get("")
  }
  genders():Observable<any>{
    return of([
      {Key:"0",Value:"Select Gender"},
      {Key:"1",Value:"Male"},
      {Key:"2",Value:"FeMale"},
    ])
  }
  nationalities():Observable<any>{
    return this.httpClient.get("")
  }
  maritialStatuses():any{
    return this.httpClient.get("")
  }
  countries():Observable<any>{
    return this.httpClient.get("")
  }
  states(countryId:number):Observable<any>{
    return this.httpClient.get(`${this.baseURL}/api/Dropdowns/States/${countryId}`);
  }
  cities(stateId:number): Observable<any> {
    return this.httpClient.get(`${this.baseURL}/api/Dropdowns/Cities/${stateId}`);
  }

  employeeDropdowns():Observable<any>{
    return this.httpClient.get(this.baseURL+"/api/Dropdowns/GetAddEmployeeDropdowns");
  }
  roles():Observable<any>{
    return this.httpClient.get(this.baseURL+"/api/Roles/GetRoles");
  }



  

}
