import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CurrencyConverterComponent } from './currency-converter.component';

@NgModule({
  declarations: [
    CurrencyConverterComponent,
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
  ],
  exports: [
    CurrencyConverterComponent,
  ],
})
export class CurrencyConverterModule { }
