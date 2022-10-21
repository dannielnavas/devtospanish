import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogRef } from '@angular/material/dialog';
import UserInformationComponent from './user-information.component';

@NgModule({
  declarations: [
    UserInformationComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    UserInformationComponent,
  ],
})
export default class UserInformationModule {
  constructor(public dialogRef: MatDialogRef<UserInformationModule>) {}
}
