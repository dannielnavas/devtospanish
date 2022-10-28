import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import NavbarComponent from './navbar.component';

@NgModule({
  declarations: [
    NavbarComponent,
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
  ],
  exports: [
    NavbarComponent,
  ],
})
export default class NavbarModule { }
