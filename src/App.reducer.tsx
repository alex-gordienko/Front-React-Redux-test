/* tslint:disable */
import {
  IAppState,
  IFilter,
  IFullDataUser,
  IGetUsersAction,
  ISetFilterAction,
  ISetLanguageAction,
  ISetLikeAction,
  ISetViewAction,
  IView
} from "./App.types";

const defaultUser:IFullDataUser[]= [{
  "id": 0,
  "favourite": false,
  "name": "Gilbert Morton",
  "age": 30,
  "phone": "(369) 432-9206",
  "image": "sheep",
  "phrase": "Japman somam mes lizmasapa om zefopi ki wa ogju mofrajnir denba uc famoso opeipu woul.",
  "video": "shoe"
}];

const defaultFilter: IFilter={
  sortBy: 'id',
  direction: 'up',
  searchedWord: ''
};

const defaultView: IView={
  view: 'table'
}


export type IAppActions =
  IGetUsersAction
| ISetLikeAction
| ISetFilterAction
| ISetViewAction
| ISetLanguageAction;

const initialState: IAppState = {
  users: defaultUser,
  filteredUsers: [],
  filter: defaultFilter,
  view: defaultView,
  language: 'Russian'
};


const reducer = (state: IAppState, action: IAppActions) => {
  switch (action.type) {
    case 'getUserList':{
      console.log("saving users to reducer");
      return{
        ...state,
        users: action.userList,
        filteredUsers: action.userList
      }
    }
    case 'setLike':{
      var newState = state.filteredUsers.map(user=>user.id===action.user.id? action.user: user)
      return{
        ...state,
        filteredUsers:newState
      }
    }
    case 'setFilter':{
      console.log(action.newFilter);
      if(action.newFilter.searchedWord.length<1){
        var sortedFilteredUsers = state.users.sort((a,b)=>{
          if(a[action.newFilter.sortBy]<b[action.newFilter.sortBy]) return action.newFilter.direction=='up'?-1: 1;
          if(a[action.newFilter.sortBy]>b[action.newFilter.sortBy]) return action.newFilter.direction=='up'? 1: -1;
          return 0
        })
      }
      else{
        var sortedFilteredUsers = state.users
          .filter(user=> user.name.toLowerCase().includes(action.newFilter.searchedWord.toLowerCase()))
          .sort((a,b)=>{
            if(a[action.newFilter.sortBy]<b[action.newFilter.sortBy]) return action.newFilter.direction=='up'?-1: 1;
            if(a[action.newFilter.sortBy]>b[action.newFilter.sortBy]) return action.newFilter.direction=='up'? 1: -1;
            return 0
          })
      }
      return{
        ...state,
        filteredUsers: sortedFilteredUsers,
        filter: action.newFilter
      }
    }
    case 'setView':{
      console.log(action.newView)
      return{
        ...state,
        view: action.newView
      }
    }
    case 'setLang':{
      return{
        ...state,
        language: action.lang
      }
    }
    default: {
      return state;
    }
  }
};

export { initialState, reducer };
