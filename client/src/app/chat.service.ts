import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private _http: HttpClient) { }

  getAll(){
    return this._http.get('/chats');
  }
  createOne(chat){
    return this._http.chat('/chats', chat);
  }
  getOne(id){
    return this._http.get(`/chat/${id}`);
  }

  updateOne(id, chat){
    return this._http.put(`/chats/${id}`, chat);
  }

  deleteOne(id){
    return this._http.delete(`/chats/${id}`);
  }
}
