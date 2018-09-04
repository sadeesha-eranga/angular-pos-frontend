import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Item} from '../dtos/item';
import {Observable} from 'rxjs';

const URL = 'http://localhost:8080/api/v1/items';

@Injectable()
export class ItemService {

  constructor(private http: HttpClient) { }

  saveItem(item: Item): Observable<boolean> {
    return this.http.put<boolean>(URL, item);
  }

  updateItem(item: Item): Observable<boolean> {
    return this.http.post<boolean>(URL + '/' + item.itemId, item);
  }

  deleteItem(itemId: number): Observable<boolean> {
    return this.http.delete<boolean>(URL + '/' + itemId);
  }

  getAllItems(): Observable<Array<Item>> {
    return this.http.get<Array<Item>>(URL);
  }
}
