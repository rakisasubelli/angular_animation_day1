import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent }  from './app.component';
import { FormsModule } from '@angular/forms'

import { AnimateExampleComponent } from './components/animate.example.component';

@NgModule({
  imports:      [ BrowserModule, BrowserAnimationsModule, HttpModule, FormsModule ],
  declarations: [ AppComponent, AnimateExampleComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
 