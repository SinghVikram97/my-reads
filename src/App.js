import React from 'react'
import {Switch,Route} from "react-router-dom"
import * as BooksAPI from './BooksAPI'
import './App.css'
import Shelf from "./components/Shelf";
import FAB from "./components/FAB"
import Home from "./views/Home"
import Search from "./views/Search"
import Provider,{MyContext} from './Provider/'
class BooksApp extends React.Component {
    render() {
    return (
      <div className="app">
        <Provider>
            <MyContext.Consumer>

                <Switch>
                    <Route exact path={"/"} component={Home}/>
                    <Route exact path={"/search"} component={Search}/>
                </Switch>
            </MyContext.Consumer>
        </Provider>
      </div>
    )
  }
}

export default BooksApp
