import {Component, EventEmitter, Input, Output} from '@angular/core';
import {LoginService} from './services/login.service';
import {FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private loginService: LoginService) {}

  @Input()
  userEmail = '';

  @Input()
  userPassword = '';

  @Output()
  login: EventEmitter<any> = new EventEmitter();

  onClick() {
    console.log(this.login);
    this.login.emit({username: this.userEmail, password: this.userPassword});
  }

  getData() {
    console.log(this.userEmail, this.userPassword);
    this.loginService.login(this.userEmail, this.userPassword);
  }
}
