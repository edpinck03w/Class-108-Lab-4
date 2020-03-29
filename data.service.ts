import { Injectable } from '@angular/core';
import { User, Itema } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  saveItem(model: User) {
    throw new Error("Method not implemented.");
  }

  userList: User[] = [];
  userItem: Itema[] = [];

  constructor() { }

  saveUser(user){
    this.userList.push(user);
    
  }
  saveItema(itema){
    this.userItem.push(itema);
  }
}
