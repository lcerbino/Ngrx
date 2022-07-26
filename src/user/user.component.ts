import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {  loadedUsers, loadUsers } from 'src/state/actions/user.action';
import { selectLoading } from 'src/state/selectors/user.selector';
import { UserService } from './userService';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit{
  
  users: any[] | undefined;
  loading$ : Observable<boolean> = new Observable<boolean>(); 
  
  constructor(private userService:  UserService, private store: Store<any>){

  }
  
  ngOnInit(): void {
    this.loading$ = this.store.select(selectLoading);
    this.store.dispatch(loadUsers());
    // this.userService.getUsers()
    // .subscribe(response =>{
    //      this.store.dispatch(loadedUsers(
    //       { users : response }
    //      ))
    //   });

    // this.store.dispatch(loadUsers()); 
  }
  
  title = 'craft-labs';
}
