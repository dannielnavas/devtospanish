import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import CardPostModule from 'src/app/components/card-post/card-post.module';
import MainComponent from './main.component';
import MainRoutingModule from './main-routing.module';

@NgModule({
  declarations: [MainComponent],
  imports: [CommonModule, MainRoutingModule, CardPostModule],
})
export default class MainModule {}
