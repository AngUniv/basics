import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { ColorPickerComponent } from './components/color-picker/color-picker.component';

import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBoxComponent,
    ColorPickerComponent,
    ReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, ReactiveFormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
