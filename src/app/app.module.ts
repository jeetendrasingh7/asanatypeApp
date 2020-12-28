import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import {DpDatePickerModule} from 'ng2-date-picker';
// import { BsDatepickerModule  } from "ngx-bootstrap/datepicker";
import { NgbModule,NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from "@angular/common/http";
import { NewComponent } from './new/new.component';

@NgModule({
  declarations: [
    AppComponent,
    NewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,NgbModule,NgbDatepickerModule,FormsModule,ReactiveFormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
