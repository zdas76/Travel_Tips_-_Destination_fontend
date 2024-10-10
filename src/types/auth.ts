export type TLoginUser = {
  name: string;
  email: string;
  role: string;
  iat: number;
  exp: number;
};

export type TUser = {
  _id: string;
  name: string;
  email: string;
  password: string;
  phone?: string;
  profileImage?: string;
  address?: string;
  role: string;
  status: string;
  isDeleted: boolean;
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
};
