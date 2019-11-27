import {Observable, of, Subject} from 'rxjs';
import {map} from 'rxjs/operators';
import {User} from "../../models/user";


const subject = new Subject();

export class LoginService {


  valid = false;

  // login(email: string, password: string) {
  //    of(subject).pipe(
  //      map( value => {if (email === 'admin' && password === 'admin') { this.valid = true; } else { this.valid = false; }})
  //    ).subscribe(value => console.log(value));
  // }

  // login(email: string, password: string): Observable<any> {
  //   return of('admin').pipe(
  //     map( value => {if (email === 'admin' && password === 'admin') { this.valid = true; } else { this.valid = false; }})
  //   );
  // }

  public login(email: string, password: string): Observable<void> {
    return of(subject).pipe(
      map(value => {
        if (email === 'admin') {
          this.valid = true;
        } else {
          this.valid = false;
        }
      })
    );
  }
}

  // login(email: string, password: string): Observable<User> {
  //   return of(User);
//   }
// }
