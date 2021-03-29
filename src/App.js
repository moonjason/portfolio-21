import { Route, Switch } from 'react-router-dom';
import { 
  CSSTransition,
  TransitionGroup
} from 'react-transition-group';

import './App.scss';
//components
import About from './components/About/About';
import Menu from './components/Menu/Menu';
import Projects from './components/Projects/Projects';

function App() {

  return (
    <div className="App">
      <Menu />
      <Route render={({location}) => (
        <TransitionGroup>
          <CSSTransition key={location.key} timeout={50}>
              <Switch location={location}>git 
                <Route exact path={['/', '/about']} render={() => <About />} />
                <Route exact path={['/projects']} render={() => <Projects />} />
              </Switch>
          </CSSTransition>
        </TransitionGroup>
      )} />
    </div>
  );
} 

export default App;