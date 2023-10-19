import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRotas } from './app.routes';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRotas)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
