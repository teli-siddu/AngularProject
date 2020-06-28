import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { AuthenticationService } from '../services/authentication.service';
import { throwError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorIntercepterService implements HttpInterceptor {

  constructor(private authenticationService: AuthenticationService) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // alert("error intercept");
    return next.handle(request).pipe(catchError(err => {
      const error = err.message || err.statusText
      if (err.status == 401) {
        // alert();
        this.authenticationService.logout();
        throwError(err);
        // location.reload(true);
      }

      return throwError(err);
    }))
  }

}
