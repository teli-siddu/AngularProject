export class LoginViewModel {
    userName: string;
    password: string;
    /**
     *
     */
    constructor(loginViewModel: Partial<LoginViewModel>) {
        Object.assign(this, loginViewModel)
    }
}