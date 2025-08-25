export interface LoginResponse {
  access_token: string;
}

export interface UserForLogin {
  id: string | number;
  email: string;
}
