import { v4 as uuidv4 } from 'uuid';

import { IUser } from '../../ts/interfaces/app_interfaces';

class User implements IUser {
  id: string;

  name: string;

  login: string;

  password?: string;

  constructor({ id = uuidv4(), name = 'USER', login = 'user', password = 'P@55w0rd' } = {}) {
    this.id = id;
    this.name = name;
    this.login = login;
    this.password = password;
  }

  static toResponse(user: IUser): IUser {
    const { id, name, login } = user;
    return { id, name, login };
  }

  static fromRequest(body: IUser): IUser {
    return new User(body);
  }
}

export default User;
