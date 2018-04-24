import { User } from '../models/user';

export class SharedState {
    currentUser: User = new User();
    isAuthenticated: boolean = false;
}
