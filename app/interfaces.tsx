export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface Auth {
  token: string;
}

export interface Store {
  user?: User;
  auth?: Auth;
  updateUser?(user: User): void;
  updateAuth?(auth: Auth): void;
}