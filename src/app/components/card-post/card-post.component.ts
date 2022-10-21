import {
  Component, EventEmitter, Input, Output,
} from '@angular/core';
import { HotToastService } from '@ngneat/hot-toast';
import { IDevto } from 'src/app/core/models/devto.interface';

@Component({
  selector: 'app-card-post',
  templateUrl: './card-post.component.html',
  styleUrls: ['./card-post.component.scss'],
})
export default class CardPostComponent {
  @Input() post!: IDevto;

  @Output() modalUser: EventEmitter<number> = new EventEmitter<number>();

  constructor(private toast: HotToastService) { }

  // eslint-disable-next-line class-methods-use-this
  sharePost(post: IDevto): void {
    const navigator = window.navigator as any;

    if (navigator.share) {
      navigator
        .share({
          title: post.title,
          text: post.description,
          url: post.url,
        })
        .then(() => this.toast.success('😉 proceso exitoso'))
        .catch(() => this.toast.error('🥵 Lo sentimos algo extraño paso. Te prometo que en mi maquina funciona.🥹'));
    } else {
      this.toast.info('No podemos soportar esta acción 🥹');
    }
  }
}
