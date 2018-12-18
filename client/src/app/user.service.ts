import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http: HttpClient) { }

  getUsers(){
    return this._http.get(`/users`);
  }

  removeUser(user_id){
    return this._http.delete(`/users/${user_id}`);
  }

  createUser(newUser){
    return this._http.post(`/users`, newUser);
  }
}
