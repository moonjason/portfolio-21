import { Route, Switch } from 'react-router-dom';
import { 
  CSSTransition,
  TransitionGroup
} from 'react-transition-group';

import './App.scss';
//components
import About from './components/About/About';
import Menu from './components/Menu/Menu';

function App() {

  return (
    <div className="App">
      <Route render={({location}) => (
        <TransitionGroup>
          <CSSTransition key={location.key} timeout={1500}>
              <Switch location={location}>git 
                <Route exact path={'/menu'} render={() => <Menu />} />
                <Route exact path={['/', '/about']} render={() => <About />} />
              </Switch>
          </CSSTransition>
        </TransitionGroup>
      )} />
    </div>
  );
} 

export default App;