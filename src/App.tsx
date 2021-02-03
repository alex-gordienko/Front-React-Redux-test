/* tslint:disable */
import React, { useEffect, useReducer, useCallback } from "react";
import { Redirect, useHistory } from "react-router";
import { BrowserRouter, Switch, Route, useParams, Link } from "react-router-dom";
//import { ThemeProvider } from "emotion-theming";
//import lighten from "./styles/themes/lighten";
//import darken from "./styles/themes/darken";

import LanguageContext, {englishLang, russianLang} from './language/language';

import { httpGet } from "../src/backend/httpGet";

import { initialState, reducer } from "./App.reducer";
import {
  saveList,
  setLike,
  setFilter,
  setView,
  setLanguage
} from "./App.actions";
import UserList from "./components/UserList";
import { IFilter, IFullDataUser, IView } from "./App.types";
import FilterBlock from "./components/FilterBlock";

const App = () => {
  const [
    { 
      filteredUsers,
      filter,
      view,
      language
    }, dispatch] = useReducer(
    reducer,
    initialState
  );

  const sendToServer = (
    param: string,
    url: string,
  ) => {
  httpGet(url)
      .then(
        (response: any) => {
          const res = JSON.parse(response);
          switch(param){
            case 'users':{
              dispatch(saveList(res))
            }
          }
        },
        error => console.error(error)
      )
      .catch(function(err) {
        console.error(err);
      });
  };

  async function startProject(){
    sendToServer("users",`${process.env.PUBLIC_URL}/assets/data.json`);
  }
  useEffect(() => {
    startProject();
  }, [1]);

  

  const MainPage = () => {
    let { sort, direction, display } = useParams<{sort:'id'|'name'|'age', direction:'up'|'down', display:'table'|'preview'}>();
    let history = useHistory();
    
    window.onload =(e:Event)=>{
      dispatch(setFilter({sortBy:sort, direction, searchedWord:''}));
      dispatch(setView({view:display}))
    }

    const onLike = (updatedUser:IFullDataUser)=>{
      console.log(updatedUser);
      dispatch(setLike(updatedUser));
    }

    const onFilter=(updatedfilter: IFilter)=>{
      history.push('/'+updatedfilter.sortBy+'&'+updatedfilter.direction+'&'+view.view)
      dispatch(setFilter(updatedfilter));
    }

    const onView = (updatedView:IView)=>{
      history.push('/'+filter.sortBy+'&'+filter.direction+'&'+updatedView.view)
      dispatch(setView(updatedView));
    }

    const onSearch = (e: string)=> {
      console.log(e);
      dispatch(setFilter({...filter, searchedWord:e}));
    }

    return(
      <div>
        <FilterBlock 
          initFilter={filter} 
          initView={view} 
          onChangeFilter={onFilter} 
          onChangeView={onView}
          onSearchChange={onSearch}
          onLangChange={e=>dispatch(setLanguage(e? 'English':'Russian'))}
          />
        <UserList 
          data={filteredUsers} 
          view={view}
          onLike={onLike}
          />
      </div>
      
    )
  };

  return (
    <LanguageContext.Provider value={language=='Russian'? russianLang: englishLang}>
      <BrowserRouter basename={`${process.env.PUBLIC_URL}/`}>
        <Switch>
          <Route exact={true} path='/' render={()=><Redirect to='/id&up&table'/>}/>
          <Route path="/:sort&:direction&:display" component={MainPage}/>
        </Switch>
      </BrowserRouter>
    </LanguageContext.Provider>
  )
};

export default App;