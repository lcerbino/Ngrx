import { createReducer, on } from '@ngrx/store';
import { User } from 'src/user/user';
import { UserState } from 'src/user/user.state';
import { loadedUsers, loadUsers } from '../actions/user.action';


export const initialState : UserState = { loading: false, users: [] };


export  const userReducer = createReducer(
    initialState,
    on(loadUsers, (state) => {  
         return { ...state , loading : true} 
        }
    ),
    on(loadedUsers, (state, obj) => {  
        return { ...state , loading : true, users : obj.users} 
       }
   ),
)
