import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EConfigRoutes } from './utils/routes/config.routes';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/main/main.module').then((m) => m.default),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export default class AppRoutingModule {}
