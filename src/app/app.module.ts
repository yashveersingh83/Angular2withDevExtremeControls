import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {DropDownDirective} from './dropdown.directive';
import { AppComponent } from './app.component';
import { DevExtremeModule } from 'devextreme-angular'; 

@NgModule({
  declarations: [
    AppComponent,
    DropDownDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,ReactiveFormsModule,
    HttpModule,
    DevExtremeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
