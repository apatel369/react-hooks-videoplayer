import React from 'react';
import WbnPlayer from './WbnPlayer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import GlobalStyle from '../styles/GlobalStyle';


const App = () => (
 <BrowserRouter>
  <React.Fragment>
    <Switch>
        <Route exact path="/" component={WbnPlayer} />
        <Route exact path="/:activeVideo" component={WbnPlayer} />
      </Switch>
    <GlobalStyle/>
  </React.Fragment>
 </BrowserRouter>
)

export default App;