import { Component, Input } from '@angular/core';
import { IDevto } from 'src/app/core/models/devto.interface';

@Component({
  selector: 'app-card-post',
  templateUrl: './card-post.component.html',
  styleUrls: ['./card-post.component.scss'],
})
export default class CardPostComponent {
  @Input() post!: IDevto;
}
