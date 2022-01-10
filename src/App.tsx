import React                         from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import './App.css';
import { SelectLanguagePage }        from './containers/SelectLanguagePage';
import { EnglishSelectionPage }      from './containers/EnglishSelectionPage';
import { ItalianSelectionPage }      from './containers/ItalianSelectionPage';
import { PdfPage }                   from './containers/PdfPage';

function App() {
  return (
    <div>
     <Switch>
       <Route path={'/'} exact component={SelectLanguagePage} />
       <Route path={'/english'} exact component={EnglishSelectionPage} />
       <Route path={'/english/story'} exact component={ItalianSelectionPage} />
       <Route path={'/english/sandwich'} exact component={ItalianSelectionPage} />
       <Route path={'/english/pizzas'} exact component={ItalianSelectionPage} />
       <Route path={'/english/kitchen'} exact component={ItalianSelectionPage} />
       <Route path={'/english/burgers'} exact component={ItalianSelectionPage} />
       <Route path={'/english/beers'} exact component={ItalianSelectionPage} />
       <Route path={'/english/wines'} exact component={ItalianSelectionPage} />
       <Route path={'/english/bar'} exact component={ItalianSelectionPage} />
       <Route path={'/italiano'} exact component={ItalianSelectionPage} />
       <Route path={'/italiano/storia'} exact component={() => <PdfPage url={"https://birrovia.s3.amazonaws.com/italiano/storia.pdf"}/>}/>
       <Route path={'/italiano/panini'} exact component={() => <PdfPage url={"https://birrovia.s3.amazonaws.com/italiano/panini.pdf"}/>} />
       <Route path={'/italiano/pizze'} exact component={() => <PdfPage url={"https://birrovia.s3.amazonaws.com/italiano/pizze.pdf"}/>} />
       <Route path={'/italiano/cucina'} exact component={() => <PdfPage url={"https://birrovia.s3.amazonaws.com/italiano/cucina.pdf"}/>} />
       <Route path={'/italiano/burgers'} exact component={() => <PdfPage url={"https://birrovia.s3.amazonaws.com/italiano/burgers.pdf"}/>} />
       <Route path={'/italiano/birre'} exact component={() => <PdfPage url={"https://birrovia.s3.amazonaws.com/italiano/birre.pdf"}/>} />
       <Route path={'/italiano/vini'} exact component={() => <PdfPage url={"https://birrovia.s3.amazonaws.com/italiano/vini.pdf"}/>} />
       <Route path={'/italiano/bar'} exact component={() => <PdfPage url={"https://birrovia.s3.amazonaws.com/italiano/bar.pdf"}/>} />
     </Switch>
    </div>
  );
}

export default withRouter(App);
