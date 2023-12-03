import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../currency.service';

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.css']
})
export class CurrencyConverterComponent {
  amount: number = 1;
  currencyFrom: string = 'UAH';
  currencyTo: string = 'USD';
  exchangeRates: any;

  constructor(private currencyService: CurrencyService) {}

  convertFrom(): number {
    return this.amount * this.exchangeRates[`${this.currencyFrom}_${this.currencyTo}`];
  }

  convertTo(): number {
    return this.amount / this.exchangeRates[`${this.currencyFrom}_${this.currencyTo}`];
  }

  updateExchangeRates() {
    this.currencyService.getExchangeRates().subscribe(data => {
      this.exchangeRates = data;
    });
  }
}
