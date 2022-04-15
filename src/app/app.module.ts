import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerRoutingModule } from './container/container-routing.module';
import { ContainerModule } from './container/container.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, ContainerRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
