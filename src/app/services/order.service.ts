import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Order} from '../dtos/order';
import {Observable} from 'rxjs';

const URL = 'http://localhost:8080/api/v1/orders';

@Injectable()
export class OrderService {

  constructor(private http: HttpClient) {
  }

  saveOrder(order: Order): Observable<boolean> {
    return this.http.post<boolean>(URL, order);
  }

  getTotalOrders(): Observable<number> {
    return this.http.get<number>(URL + '/count');
  }

}
