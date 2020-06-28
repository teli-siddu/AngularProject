import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { MenuItem } from '../models/menu-item.madel';
import { environment } from 'src/environments/environment';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ToolbarService {

  baseUrl: string = environment.baseUrl;
  private menuItems = new BehaviorSubject<MenuItem[]>([])
  constructor(private httpClient: HttpClient) { }


  topNavMenuItems(): Observable<MenuItem[]> {

    let httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }
    return this.httpClient.get<MenuItem[]>(`${this.baseUrl}/api/Menu/TopNavMenuItems`)
      .pipe(
        retry(1),

        catchError(this.handleError<MenuItem[]>('TopNavMenuItems', []))
      )

  }

  handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {

      console.log(error); // log to console instead


      return of(result as T);
    }
  }

  setTopNavMenuItems(menuItems: MenuItem[]) {

    localStorage.setItem("top_nav_menu_items", JSON.stringify(menuItems));
  }
  getTopNavMenuItems(): Observable<MenuItem[]> {

    let str_TopNavMenuItems = localStorage.getItem("top_nav_menu_items")

    if (str_TopNavMenuItems && str_TopNavMenuItems.length > 0) {
      let topNavMenuItems = JSON.parse(str_TopNavMenuItems)
      return of(topNavMenuItems);
    }
    else {
      this.topNavMenuItems();

    }


  }

}
