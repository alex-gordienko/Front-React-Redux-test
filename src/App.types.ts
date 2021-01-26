/* tslint:disable */

export interface IGetUsersAction{
  type: 'getUserList',
  userList: IFullDataUser[]
}

export interface ISetLikeAction{
  type: 'setLike',
  user: IFullDataUser
}

export interface ISetFilterAction{
  type: 'setFilter',
  newFilter: IFilter;
}

export interface ISetViewAction{
  type: 'setView',
  newView: IView;
}

export interface ISetLanguageAction{
  type: 'setLang',
  lang: 'English'|'Russian'
}

export interface IAppState {
  users: IFullDataUser[];
  filteredUsers: IFullDataUser[];
  filter: IFilter;
  view: IView;
  language: 'English'|'Russian';
}

export interface IFullDataUser {
  id: number,
  favourite: boolean,
  name: string,
  age: number,
  phone: string,
  image: string,
  phrase: string,
  video?: string
}

export interface IFilter {
  sortBy: 'id'|'name'|'age';
  direction: 'up'|'down';
  searchedWord: string;
}

export interface IView {
  view: 'table'|'preview'
}