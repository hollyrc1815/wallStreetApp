import { Injectable } from '@angular/core';

import { retry, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpResponse, HttpParams } from '@angular/common/http';

export class Stocks {
  id: string;
  name: string;
  ceo: string;
  price: string;
  stockexchange: string;
  turnover: string;
  website: string;
}

export class StockPrice {
  id: string;
  name: string;
  ceo: string;
  price: string;
  stockexchange: string;
  turnover: string;
  website: string;
}


@Injectable({
  providedIn: 'root'
})
export class CrudService {

  endpoint = 'https://isc0qu6mj3.execute-api.us-east-1.amazonaws.com';
  priceEndpoint = 'https://eodhistoricaldata.com/api/eod';

  constructor(private httpClient: HttpClient) { }



  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
    })
  }  

  getSingleStock(id): Observable<Stocks> {
    return this.httpClient.get<Stocks>(this.endpoint + '/market/company/info/' + id)
    .pipe(
      retry(1),
      catchError(this.processError)
    )
  }

  getSingleStockPrice(Symbol: string, Date1: string, Date2: string): Observable<StockPrice> {
    const params = new HttpParams()
      .set('symbol', Symbol)
      .set('date1', Date1)
      .set('date2', Date2);
      console.log(params.toString());
    return this.httpClient.get<StockPrice>(this.priceEndpoint + '/' + Symbol + '.US?from' + Date1 + '&to=' + Date2 + '&api_token=OeAFFmMliFG5orCUuwAKQ8l4WWFQ67YX&period=d&fmt=json', this.httpHeader
    )
    .pipe(
      retry(1),
      catchError(this.processError)
    )
  }

  getAllStocks(): Observable<Stocks> {
    return this.httpClient.get<Stocks>(this.endpoint + '/market/company/getall')
    .pipe(
      retry(1),
      catchError(this.processError)
    )
  }

  addStock(data): Observable<Stocks> {
    return this.httpClient.put<Stocks>(this.endpoint + '/market/company/register', JSON.stringify(data))
    .pipe(
      retry(1),
      catchError(this.processError)
    )
  }  

  updateStock(id, data): Observable<Stocks> {
    return this.httpClient.put<Stocks>(this.endpoint + '/market/company/edit/' + id, JSON.stringify(data))
    .pipe(
      retry(1),
      catchError(this.processError)
    )
  }

  deleteStock(id){
    return this.httpClient.delete<Stocks>(this.endpoint + '/market/company/delete/' + id)
    .pipe(
      retry(1),
      catchError(this.processError)
    )
  }

  processError(err) {
    let message = '';
    if(err.error instanceof ErrorEvent) {
     message = err.error.message;
    } else {
     message = `Error Code: ${err.status}\nMessage: ${err.message}`;
    }
    console.log(message);
    return throwError(message);
 }
}
