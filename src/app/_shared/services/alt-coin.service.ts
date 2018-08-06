import { environment } from './../../../environments/environment';
import { AltCoin } from './../models/alt-coin.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AltCoinService {

  altCoins: AltCoin[] = [
    {
      id: 11, name: 'Mr. Nice', symbol: 'symbol', last: 122,
      enableForTrading: true, enableForVoting: true,
      asOfNowVoteCount: 0, coinImage: '', isVoted: true
    },
    {
      id: 12, name: 'Mr. Nice', symbol: 'symbol', last: 1,
      enableForTrading: true, enableForVoting: true,
      asOfNowVoteCount: 12, coinImage: '', isVoted: false
    }
  ];
  private apiUrl: string = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

  // create(accountingCode: AccountingCode): Observable<any> {
  //   return this.httpClient.post(this.apiUrl + 'AccountingCodes/Create', accountingCode);
  // }

  // list(): Observable<AccountingCode[]> {
  //   return this.httpClient.get<AccountingCode[]>(this.apiUrl + 'AccountingCodes/List');
  //   // return this.httpClient.get<AccountingCode[]>(this.apiUrl + 'BuyerOrgLocations/Test2');
  // }

  getAltCoinById(id: number): AltCoin {
    return this.altCoins.find(a => a.id === id);
  }

  getVoteEnabledAltCoins(): Observable<any> {
    return this.httpClient.get(this.apiUrl + 'bclvtng/admin/bl/getAltCoins');
  }

  getAltCoins(): Observable<any> {
    return this.httpClient.get(this.apiUrl + 'bclvtng/admin/bl/getAltCoins');
  }

  createAltCoin(altCoin: AltCoin) {
    this.altCoins.push(altCoin);
  }

  updateAltCoin(altCoin: AltCoin) {
    alert('Update to be Implemeted');
  }
}
