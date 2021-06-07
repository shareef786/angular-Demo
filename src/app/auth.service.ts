import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable()
export class AuthService {

  subject = new Subject<string>();
  constructor() { }
  setUserName(username:string){ // Invoked by Logincomp
    this.subject.next(username);
  }
  getUsername():Observable<string>{  //Invoked by HeaderComponent
    return this.subject.asObservable();
  }
}