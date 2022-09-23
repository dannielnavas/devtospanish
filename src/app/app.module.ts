import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import AppRoutingModule from './app-routing.module';
import AppComponent from './app.component';

registerLocaleData(localeEs, 'es');
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}, {}),
    HttpClientModule,
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'es',
    },
  ],
  bootstrap: [AppComponent],
})
export default class AppModule {}
