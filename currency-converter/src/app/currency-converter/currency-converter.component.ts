import { Component } from '@angular/core';
import { CurrencyService } from '../currency.service';

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.css'],
})
export class CurrencyConverterComponent {
  amount: number = 1;
  currencyFrom: string = 'USD';
  currencyTo: string = 'UAH';

  constructor(private currencyService: CurrencyService) {}

  updateExchangeRates() {
  }

  convertFrom(): number {
    return 0;
  }

  convertTo(): number {
    return 0;
  }
}
