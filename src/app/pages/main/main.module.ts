import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import CardPostModule from 'src/app/components/card-post/card-post.module';
import { MatDialogModule } from '@angular/material/dialog';
import InstallModule from 'src/app/components/install/install.module';
import MainComponent from './main.component';
import MainRoutingModule from './main-routing.module';

@NgModule({
  declarations: [MainComponent],
  imports: [CommonModule, MainRoutingModule, CardPostModule,
    MatDialogModule, InstallModule],
  providers: [
  ],
})
export default class MainModule { }
