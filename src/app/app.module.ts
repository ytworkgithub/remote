import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ContainerModule } from './container/container.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerRoutingModule } from './container/container-routing.module';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [AppComponent, ListComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ContainerRoutingModule,
    ContainerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
