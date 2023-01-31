export interface userData {
  id: number;
  username: string;
  firstname: string;
  lastname: string,
  email: string;
  password: string;
  gender: string;
  phoneNumber: number;
  //Groups
  //1 = Administrator
  //2 = Developer
  group: number;
}

export interface authStatus {
  notification: boolean;
}
