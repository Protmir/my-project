import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'login-smart-component',
  template: `
    <tests-login (login)="doLogin($event)"></tests-login>
  `
})

export class LoginSmartComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  doLogin(credentials: any): void {

  }
}
