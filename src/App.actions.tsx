/* tslint:disable */
import {
  IFullDataUser,
  IGetUsersAction,
  ISetLikeAction,
  ISetFilterAction,
  ISetViewAction,
  IFilter,
  IView,
  ISetLanguageAction,
} from "./App.types";

const saveList = (users: IFullDataUser[]):IGetUsersAction=>({
  type: 'getUserList',
  userList: users
});

const setLike = (user: IFullDataUser):ISetLikeAction=>({
  type: 'setLike',
  user
});

const setFilter = (newFilter: IFilter):ISetFilterAction=>({
  type:'setFilter',
  newFilter
});

const setView = (newView: IView):ISetViewAction=>({
  type:'setView',
  newView
});

const setLanguage = (lang: 'English'|'Russian'):ISetLanguageAction=>({
  type: 'setLang',
  lang
})

export { 
  saveList,
  setLike,
  setFilter,
  setView,
  setLanguage
};
