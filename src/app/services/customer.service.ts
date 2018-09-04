import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Customer} from '../dtos/customer';
import {Observable} from 'rxjs';

const URL = 'http://localhost:8080/api/v1/customers';

@Injectable()
export class CustomerService {

  constructor(private http: HttpClient) { }

  saveCustomer(customer: Customer): Observable<boolean> {
    return this.http.put<boolean>(URL, customer);
  }

  updateCustomer(customer: Customer): Observable<boolean> {
    return this.http.post<boolean>(URL + '/' + customer.customerId, customer);
  }

  deleteCustomer(customerId: number): Observable<boolean> {
    return this.http.delete<boolean>(URL + '/' + customerId);
  }

  getAllCustomers(): Observable<Array<Customer>> {
    return this.http.get<Array<Customer>>(URL);
  }
}
