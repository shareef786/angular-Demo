import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
username:string="admin";
password:string="password"
  constructor( private authservice: AuthService) { }

  ngOnInit() {
  }
  login() {
    this.authservice.setUserName(this.username);
    // this.router.navigateByUrl('/products');
  }

}