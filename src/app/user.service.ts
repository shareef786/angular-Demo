import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {

  constructor(private http:HttpClient) { }
  getUsers():Observable<any>{
    // Make HTTP call
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  getUser(id: number){
    return this.http.get('https://jsonplaceholder.typicode.com/users/{{id}}');
  }
}