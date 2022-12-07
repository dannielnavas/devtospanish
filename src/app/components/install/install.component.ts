import {
  Component, EventEmitter, Output,
} from '@angular/core';

@Component({
  selector: 'app-install',
  templateUrl: './install.component.html',
  styleUrls: ['./install.component.scss'],
})
export default class InstallComponent {
  @Output() install = new EventEmitter<boolean>();
}
