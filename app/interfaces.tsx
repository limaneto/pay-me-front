export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
}

export interface Auth {
  token: string;
}

export interface LoginResponse {
  login: {
    message?: string;
    token?: string;
    errors?: {
      key: string;
      message: string;
    }
  }
}

export interface Store {
  user?: User;
  auth?: Auth;
  updateUser(user: User): void;
  updateAuth(auth: Auth): void;
}