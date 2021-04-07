interface IUser {
    email: string;
}

interface AuthState {
    user: IUser;
    isAuth: boolean;
}
