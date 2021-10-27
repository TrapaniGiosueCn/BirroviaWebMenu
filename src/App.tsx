import React                         from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import './App.css';
import { SelectLanguagePage }        from './containers/SelectLanguagePage';
import { EnglishSelectionPage }      from './containers/EnglishSelectionPage';
import { ItalianSelectionPage }      from './containers/ItalianSelectionPage';

function App() {
  return (
    <div>
     <Switch>
       <Route path={'/'} exact component={SelectLanguagePage} />
       <Route path={'/english'} exact component={EnglishSelectionPage} />
       <Route path={'/italiano'} exact component={ItalianSelectionPage} />
     </Switch>
    </div>
  );
}

export default withRouter(App);
