///<reference path="../typings/index.d.ts"/>

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from "./app.component";


@NgModule({
  imports:      [
    BrowserModule,
    FormsModule
  ],
  declarations: [ AppComponent], //any other declared components goes here
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
