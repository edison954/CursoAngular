import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VirtualComponent } from './components/virtual/virtual.component';

import { ScrollingModule } from '@angular/cdk/scrolling';
import { DragComponent } from './components/drag/drag.component';

import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    AppComponent,
    VirtualComponent,
    DragComponent
  ],
  imports: [
    BrowserModule,
    ScrollingModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
