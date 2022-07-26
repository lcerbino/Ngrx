import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User} from './user';

@Injectable({
  providedIn: 'root',
})


export class UserService {
    api: string = "https://localhost:7134"
    constructor(private http: HttpClient) { }
    
     getUsers = () => {
        return this.http.get<User[]>(`${this.api}/user`);
     } 

}