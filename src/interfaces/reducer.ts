interface User {
  id: string;
  email: string;
  token: string;
}

export interface InitialState {
  sidebarActive: boolean;
  isLoggedIn: boolean;
  user: User;
}

export interface Action {
  type: string;
  payload?: any;
}