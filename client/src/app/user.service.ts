import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http: HttpClient) { }

  getAll(){
    return this._http.get('/users');
  }
  createOne(user){
    return this._http.post('/users', user);
  }
  getOne(id){
    return this._http.get(`/user/${id}`);
  }

  addChat(id, review){
    return this._http.post(`/users/${id}/chat`, chat);
  }

  updateOne(id, user){
    return this._http.put(`/users/${id}`, user);
  }

  deleteOne(id){
    return this._http.delete(`/users/${id}`);
  }
}
