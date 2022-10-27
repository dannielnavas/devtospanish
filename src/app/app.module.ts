import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import { HotToastModule } from '@ngneat/hot-toast';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import AppRoutingModule from './app-routing.module';
import AppComponent from './app.component';
import LoaderInterceptor from './core/interceptors/loader.interceptor';
import LoaderModule from './components/loader/loader.module';

registerLocaleData(localeEs, 'es');
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}, {}),
    HttpClientModule,
    HotToastModule.forRoot(),
    BrowserAnimationsModule,
    LoaderModule,
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'es',
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export default class AppModule {}
