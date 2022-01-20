import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BitcoinService {

  constructor(private http: HttpClient) { }

  public getRate() {
    return this.http.get<string>('https://blockchain.info/tobtc?currency=USD&value=1')
      .pipe(map(res => res)
      )
  }

  public getMarketPrice() {
    return this.http.get<{ answer: string }>('https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true')
      .pipe(map(res => res.answer)
      )
    // console.log(strg);
    // return strg

  }
}
