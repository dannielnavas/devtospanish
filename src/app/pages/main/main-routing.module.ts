import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EConfigRoutes } from 'src/app/utils/routes/config.routes';
import { MainComponent } from './main.component';

const routes: Routes = [
  {
    component: MainComponent,
    path: '',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
