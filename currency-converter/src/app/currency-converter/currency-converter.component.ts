import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CurrencyService } from '../currency.service';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CurrencyConverterComponent implements OnInit {
  conversionForm!: FormGroup;

  constructor(private fb: FormBuilder, private currencyService: CurrencyService) {}

  ngOnInit(): void {
    this.conversionForm = this.fb.group({
      amount: 1,
      currencyFrom: 'USD',
      currencyTo: 'UAH',
    });

    this.updateExchangeRates();
  }

  updateExchangeRates() {
    // implement the logic to update exchange rates
  }

  convertFrom(): number {
    // implement the logic for conversion
    return 0;
  }

  convertTo(): number {
    // implement the logic for conversion
    return 0;
  }
}
