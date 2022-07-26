import { ActionReducer, ActionReducerMap } from "@ngrx/store";
import { UserState } from "src/user/user.state";
import { userReducer } from "./reducers/user.reducer";

export interface AppState {
  users: UserState
}


export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
    users: userReducer
}