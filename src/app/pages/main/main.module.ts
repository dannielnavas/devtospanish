import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { CardPostModule } from 'src/app/components/card-post/card-post.module';

@NgModule({
  declarations: [MainComponent],
  imports: [CommonModule, MainRoutingModule, CardPostModule],
})
export class MainModule {}
