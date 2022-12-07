import { Component } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import LoaderService from './core/services/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export default class AppComponent {
  title = 'devtospanish';

  constructor(private loaderService: LoaderService, private swUpdate: SwUpdate) {
    this.loaderService.show();
    this.updatePWA();
  }

  updatePWA(): void {
    this.swUpdate.versionUpdates.subscribe((value) => {
      console.log('uodate', value);
      window.location.reload();
    });
  }
}
