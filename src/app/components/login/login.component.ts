import {Component, OnInit} from '@angular/core';
import {User} from '../../models/user';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';
import swal from 'sweetalert';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User = new User();

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  authenticateUser() {
    this.userService.authenticateUser(this.user).subscribe((result) => {
      if (result) {
        this.router.navigate(['/dashboard']);
      } else {
        swal({
          title: 'Invalid credentials!',
          text: 'Please check the username, password and try again',
          icon: 'error',
        });
      }
    });
  }
}
