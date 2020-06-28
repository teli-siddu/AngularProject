import { Injectable } from '@angular/core';
import { LoadingScreen } from 'src/app/models/loading-screen.model';
import { Subject, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoadingScreenService {

  private subject = new Subject<LoadingScreen>();

  private loading = false;

  private loadingText: string = "Loading...";

  constructor() { }

  onLoadingScreen(loading: boolean = this.loading): Observable<LoadingScreen> {
    return this.subject.asObservable();
  }

  start(loadingText?: string, options?: any) {
    this.setLoadingScreen(new LoadingScreen({ ...options, LoadingText: loadingText, Loading: true }))
  }
  stop() {
    this.setLoadingScreen(new LoadingScreen({ Loading: false }))
  }

  setLoadingScreen(loadingScreen: LoadingScreen): void {
    loadingScreen.Loading = loadingScreen.Loading || this.loading;
    loadingScreen.LoadingText = loadingScreen.LoadingText || this.loadingText
    this.subject.next(loadingScreen);
  }
}
