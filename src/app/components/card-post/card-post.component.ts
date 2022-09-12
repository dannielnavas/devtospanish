import { Component, Input, OnInit } from '@angular/core';
import { IDevto } from 'src/app/core/models/devto.interface';

@Component({
  selector: 'app-card-post',
  templateUrl: './card-post.component.html',
  styleUrls: ['./card-post.component.scss'],
})
export default class CardPostComponent implements OnInit {
  @Input() post!: IDevto;
  constructor() {}

  ngOnInit(): void {}
}
