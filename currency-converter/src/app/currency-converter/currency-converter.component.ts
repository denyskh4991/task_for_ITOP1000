import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CurrencyService } from '../currency.service';

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.css'],
})
export class CurrencyConverterComponent implements OnInit {
  conversionForm!: FormGroup; // добавим !

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
  }

  convertFrom(): number {
    return 0;
  }

  convertTo(): number {
    return 0;
  }
}
