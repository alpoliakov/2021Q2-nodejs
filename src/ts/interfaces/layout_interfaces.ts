export interface IWrite<T> {
  create(item: T): Promise<T>;
  update(id: string, item: T): Promise<T>;
  remove(id: string): Promise<void>;
}

export interface IRead<U, T> {
  findAll(): Promise<T[]>;
  findOne(id: U): Promise<T>;
}

export interface IFindOneOrRemove<T, U> {
  (id: T): Promise<U>;
}

export interface IFindAll<T> {
  (): Promise<T[]>;
}

export interface ISave<T> {
  (entity: T): Promise<T>;
}

export interface IUpdate<T, U> {
  (id: T, entity: U): Promise<U>;
}

export interface IFindAllTasks<T, U> {
  (id: T): Promise<U[]>;
}

export interface IFindOneOrRemoveTasks<T, U> {
  (boardId: T, id: T): Promise<U>;
}
