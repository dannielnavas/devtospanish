import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      // eslint-disable-next-line implicit-arrow-linebreak
      import('./pages/main/main.module').then((m) => m.default),
  },
  {
    path: 'publication',
    loadChildren: () =>
      // eslint-disable-next-line implicit-arrow-linebreak
      import('./pages/article/article.module').then((m) => m.default),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export default class AppRoutingModule {}
