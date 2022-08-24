import { Component } from '@angular/core';
import DevtoService from 'src/app/core/services/devto.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export default class MainComponent {
  constructor(private devtoService: DevtoService) {
    devtoService
      .getAllPosts(1, 'español')
      .subscribe((posts) => console.log(posts));
  }
}
