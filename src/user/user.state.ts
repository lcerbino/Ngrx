import { User } from "./user";

export interface UserState {
    loading: boolean;
    users: ReadonlyArray<User>;
}