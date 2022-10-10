import { Component, Input } from '@angular/core';
import { IDevto } from 'src/app/core/models/devto.interface';

@Component({
  selector: 'app-card-post',
  templateUrl: './card-post.component.html',
  styleUrls: ['./card-post.component.scss'],
})
export default class CardPostComponent {
  @Input() post!: IDevto;

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
        .then(() => console.log('Successful share'))
        .catch((error: any) => console.log('Error sharing', error));
    } else {
      alert('No podemos soportar esta acción por el momento');
    }
  }
}
