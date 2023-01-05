import { Component, Inject } from '@angular/core';
import { IUserDevto } from 'src/app/core/models/user-devto.interface';
import { MatLegacyDialogRef as MatDialogRef, MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA } from '@angular/material/legacy-dialog';

@Component({
  selector: 'app-user-information',
  templateUrl: './user-information.component.html',
  styleUrls: ['./user-information.component.scss'],
})
export default class UserInformationComponent {
  constructor(
    public dialogRef: MatDialogRef<UserInformationComponent>,
    @Inject(MAT_DIALOG_DATA) public userData: IUserDevto,
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
