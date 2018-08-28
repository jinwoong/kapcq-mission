import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { User } from '../providers/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User;
  constructor(public AuthService: AuthService) { }

  ngOnInit() {
    this.AuthService.user$.subscribe(user => this.user = user);
  }

  login() {
    this.AuthService.loginWithGoogle();
    //direct to attendance screen
  }

  logout() {
    this.AuthService.logout();
  }
}
