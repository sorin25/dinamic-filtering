import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { FilterComponent } from './filter/filter.component';

@NgModule({
  imports:      [ CommonModule, BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule ],
  declarations: [ AppComponent, FilterComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {

}
