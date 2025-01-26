export type User = {
  username: string;
  lastname: string;
  email: string;
  picture: string;
  user_id: number;
};

export type LoginUser = {
  email: string;
  password: string;
};

export type RegisterUser = {
  username: string;
  lastname: string;
  email: string;
  password: string;
};
