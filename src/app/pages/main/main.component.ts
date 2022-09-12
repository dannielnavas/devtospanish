import { Component, OnInit } from '@angular/core';
import { IDevto } from 'src/app/core/models/devto.interface';
import DevtoService from 'src/app/core/services/devto.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export default class MainComponent implements OnInit {
  posts!: IDevto[];
  constructor(private devtoService: DevtoService) {}

  ngOnInit(): void {
    this.getPostSpanish();
  }

  getPostSpanish(): void {
    this.devtoService.getPostSpanish().subscribe((data: IDevto[]) => {
      this.posts = data;
    });
  }

  trackByPost(index: number, post: IDevto): number {
    return post.id;
  }
}
