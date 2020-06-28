import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { LoadingScreen } from 'src/app/models/loading-screen.model';
import { Subscription } from 'rxjs';
import { LoadingScreenService } from './loading-screen.service';

@Component({
  selector: 'app-loading-screen',
  templateUrl: './loading-screen.component.html',
  styleUrls: ['./loading-screen.component.css']
})
export class LoadingScreenComponent implements OnInit, OnDestroy {

  loadingScreen: LoadingScreen;
  loadingScreenSubscription: Subscription;
  constructor(private loadingService: LoadingScreenService) { }

  @Input()
  id = 'default-alert';
  @Input()
  fade = true;
  ngOnInit(): void {
    this.loadingScreenSubscription = this.loadingService.onLoadingScreen().subscribe(loadingscreen => {
      this.loadingScreen = loadingscreen;
      console.log(loadingscreen)
    })

  }
  ngOnDestroy(): void {
    this.loadingScreenSubscription.unsubscribe();
  }

}
