import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScrollTriggerModule } from './shared/scroll-trigger/scroll-trigger.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScrollTriggerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
