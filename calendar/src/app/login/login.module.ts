import {NgModule} from '@angular/core';

import {LoginComponent} from './login.component';
import {LoginService} from './services/login.service';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    children: [
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    FormsModule,
    MatButtonModule,
    MatInputModule
  ],
  exports: [],
  declarations: [LoginComponent],
  providers: [LoginService],
})
export class LoginModule {
}
