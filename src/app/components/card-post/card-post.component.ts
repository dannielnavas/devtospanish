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
  async sharePost(post: IDevto): Promise<void> {
    if (!navigator.share) return;
    const share = {
      title: post.title,
      text: post.description,
      url: post.url,
    };
    try {
      await navigator.share(share);
    } catch (error) {
      console.log(error);
    }
  }
}
