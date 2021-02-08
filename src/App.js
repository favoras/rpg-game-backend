import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ListCharactersComponent from "./components/characterComponents/ListCharactersComponent";
import CreateCharacterComponent from "./components/characterComponents/CreateCharacterComponent";
import HeaderComponent from "./components/Header/HeaderComponent";
import FooterComponent from "./components/Footer/FooterComponent";
import ViewCharacterComponent from "./components/characterComponents/ViewCharacterComponent";
import ListItemComponent from "./components/itemComponents/ListItemComponent";

function App() {
  return (
      <div>
          <Router>
                  <HeaderComponent />
                  <div className="container">
                      <Switch>
                        <Route path="/" exact component={ListCharactersComponent}/>
                        <Route path="/characters" component={ListCharactersComponent}/>
                        <Route path="/addCharacter/:id" component={CreateCharacterComponent}/>
                        <Route path="/viewCharacter/:id" component={ViewCharacterComponent}/>
                        <Route path="/shop" component={ListItemComponent}/>
                      </Switch>
                  </div>
          </Router>
      </div>
  );
}

export default App;
