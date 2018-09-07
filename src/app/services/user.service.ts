import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../models/user';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Router} from '@angular/router';

const URL = 'http://localhost:8080/api/v1/login';

@Injectable()
export class UserService {

  constructor(private http: HttpClient, private router: Router) {
  }

  authenticateUser(user: User): Observable<boolean> {
    return this.http.post<boolean>(URL, user).pipe(map((result) => {
        if (result) {
          localStorage.setItem('logged', 'true');
        }
        return result;
      })
    );
  }

  logout() {
    localStorage.removeItem('logged');
    this.router.navigate(['/login']);
  }
}
