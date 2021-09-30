import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface Response {
  time: { updated: string };
  bpi: {
    USD: {
      symbol: string;
      rate: string;
      rate_float: number;
    };
    BRL: {
      symbol: string;
      rate: string;
      rate_float: number;
    };
    EUR: {
      sumbol: string;
      rate: string;
      rate_float: number;
    };
  };
}

@Injectable()
export class IsabelawalletService {
  currentResponse: Response;
  updateList: Array<Response> = [];
  public bitUp: boolean;

  constructor(private http: HttpClient) {}

  update() {
    this.http
      .get<Response>('https://api.coindesk.com/v1/bpi/currentprice/BRL.json')
      .subscribe((data) => {
        if (!this.currentResponse) {
          this.updateList.push(data);
        } else if (
          data.bpi.BRL.rate_float !== this.currentResponse.bpi.BRL.rate_float
        ) {
          this.updateList.push(data);
          if (
            data.bpi.BRL.rate_float > this.currentResponse.bpi.BRL.rate_float
          ) {
            this.bitUp == true;
          } else if (
            data.bpi.BRL.rate_float < this.currentResponse.bpi.BRL.rate_float
          ) {
            this.bitUp == false;
          }
        }
        this.currentResponse = data;
      });
  }
}
