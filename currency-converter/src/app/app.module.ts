import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { CurrencyConverterModule } from './currency-converter/currency-converter.module';

import { AppComponent } from './app.component';
import { CurrencyService } from './currency.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    CurrencyConverterModule,
  ],
  providers: [CurrencyService],
  bootstrap: [AppComponent],
})
export class AppModule { }
