import React from 'react'
import DetailMovies from '../Page/detail/indexdetail';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
  } from "react-router-dom";
import LoginMovies from '../Page/login/indexLogin'
import ListMovies from '../Page/ListMovies/indexList'
import SearchMovies from '../Page/SearchMovies/indexSearch'
import { helper } from '../helper/common';


  const RouterMovies = () => {
    function PrivateRouteMovies({ children, ...rest }) {
        let auth = helper.cheackId();
        return (
          <Route
          {...rest}
            render={({ location }) =>
              auth ? (
                children
              ) : (
                <Redirect
                  to={{
                    pathname: "/login-movies",
                    state: { from: location }
                  }}
                />
                
              )
            }
          />
        );
      }
      function IsPrivateRouteMovies({ children, ...rest }) {
        let auth = helper.cheackId();
          return(
              <Route
              {...rest}
              render={({ location }) =>
              auth?(
                <Redirect
                  to={{
                    pathname: "/list-movies",
                    state: { from: location }
                  }}
                />
                
              ):(
                children
              ) 
            }
             />
             
          )
      }
      return (
<Router>
    <Switch>
        <PrivateRouteMovies path="/" exact>
            <ListMovies/>
        </PrivateRouteMovies>
        <PrivateRouteMovies path="/list-movies">
            <ListMovies/>
        </PrivateRouteMovies>
        <PrivateRouteMovies path="/search-movies">
            <SearchMovies/>
        </PrivateRouteMovies>
        <Route path="/movies/:slug~:id">
        <DetailMovies/>
        </Route>
        <IsPrivateRouteMovies path="/login-movies">
         <LoginMovies/>
        </IsPrivateRouteMovies>
    </Switch>
</Router>
    
   

      )
  }
  export default RouterMovies