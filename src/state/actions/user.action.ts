import { createAction, props } from '@ngrx/store';
import { User } from 'src/user/user';

export const loadUsers = createAction(
  '[User List] load User'
);

export const loadedUsers = createAction(
    '[User List] user return successfully',
    props<{ users: User[] }>()
  );
