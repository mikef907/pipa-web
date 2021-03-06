import React, { createContext } from 'react';
import jwt_decode from 'jwt-decode';
import { IUser } from '../interfaces/IUser';
import { API, IMGKEY, TOKEN } from '../constants';

export type User = {
  user: IUser | null;
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
  checkRoles: (user: IUser | null, ...roles: string[]) => boolean;
};

const token = () => localStorage.getItem(TOKEN);
const tmpImg = () => localStorage.getItem(IMGKEY);

export const setUserFromLocalStorage = () => {
  const val = token();

  if (val) {
    return getUserFromToken();
  }

  return null;
};

export const parseUserFromToken = (token: string) => {
  localStorage.setItem(TOKEN, token);
  return getUserFromToken();
};

export const getUserImgLink = (user: IUser | null) =>
  user?.img ? `${API}/images/${user.img}` : '';

export const checkRoles = (user: IUser | null, ...roles: string[]) => {
  if (user)
    return user.roles?.some((role) => roles.includes(role.name)) || false;
  else return false;
};

export const UserContext = createContext<User>({
  user: null,
  setUser: () => null,
  checkRoles: () => false,
});

const getUserFromToken = () => {
  const decoded = jwt_decode(token() as string) as any;
  const user = decoded.user as IUser;

  if (tmpImg()) user.img = tmpImg() as string;
  else if (decoded.img) user.img = decoded.img;

  return user;
};
