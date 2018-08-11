import { AltCoin } from './../models/alt-coin.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AltCoinService {

  altCoins: AltCoin[] = [
    {
      id: 11, name: 'Mr. Nice', symbol: 'symbol', last: 122, enableForTrading: true, enableForVoting: true,
      asOfNowVoteCount: 1, coinImage: ''
    },
    {
      id: 12, name: 'Mr. Nice', symbol: 'symbol', last: 1, enableForTrading: true, enableForVoting: true,
      asOfNowVoteCount: 1, coinImage: ''
    }
  ];

  constructor() {
  }

  getAltCoinById(id: number): AltCoin {
    return this.altCoins.find(a => a.id === id);
  }

  getAltCoins(): AltCoin[] {
    return this.altCoins;
  }

  getActiveAltCoins(): AltCoin[] {
    return this.altCoins.filter(a => a.enableForVoting === true);
  }

  createAltCoin(altCoin: AltCoin) {
    this.altCoins.push(altCoin);
  }

  updateAltCoin(altCoin: AltCoin) {
    alert('Update to be Implemeted');
  }
}
