export interface ILoginFormInputs {
  emailOrUsername: string;
  password: string;
}

export interface IRegisterFormInputs {
  fullName: string;
  email: string;
  username: string;
  password: string;
  avatar: FileList;
  coverImage?: FileList;
}

export interface IUser {
  _id: string;
  username: string;
  email: string;
  fullName: string;
  avatar: string;
  coverImage: string;
  watchHistory: any[]; // Adjust this type if you know the structure of the watchHistory array
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface IAuthResponse {
  statusCode: number;
  data: {
    user: IUser;
    accessToken: string;
    refreshToken: string;
  };
  message: string;
  success: boolean;
}

export interface ISignUpAuthResponse {
  statusCode: number;
  data: {
    user: IUser;
  };
  message: string;
  success: boolean;
}
