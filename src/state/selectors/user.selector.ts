import { createSelector } from '@ngrx/store';
import { UserState } from 'src/user/user.state';
import { AppState } from '../app.state';


export const selectUserFeature = (state: AppState) => state.users;

export const selectListUsers = createSelector(
  selectUserFeature,
  (state: UserState) => state.users
);

export const selectLoading = createSelector(
    selectUserFeature,
    (state: UserState) => state.loading
  );