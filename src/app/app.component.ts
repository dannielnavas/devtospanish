import { Component } from '@angular/core';
import LoaderService from './core/services/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export default class AppComponent {
  title = 'devtospanish';

  constructor(private loaderService: LoaderService) {
    this.loaderService.show();
  }
}
