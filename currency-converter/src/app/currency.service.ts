import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  constructor(private http: HttpClient) {}

  getExchangeRates(): Observable<any> {
    return this.http.get('ваш API для курса обмена');
  }
}
