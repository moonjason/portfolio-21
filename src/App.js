import { Route, useHistory } from 'react-router-dom';
import { useEffect } from 'react'

import { 
  CSSTransition,
} from 'react-transition-group';

import './App.scss';
//components
import About from './components/About/About';
import Menu from './components/Menu/Menu';
import Projects from './components/Projects/Projects';


const routes = [
  { path: '/', name: 'Home', Component: About },
  { path: '/projects', name: 'Projects', Component: Projects },
]

const paths = ['/', '/projects']

function App() {
  let history = useHistory();

  useEffect(()=> {
    async function redirect404() {
        if (!paths.includes(window.location.pathname)) return history.push('/')
    }
    redirect404();
  })

  return (
    <div className="App">
      <Menu />
      {/* <Route render={({location}) => (
        <TransitionGroup>
          <CSSTransition key={location.key} timeout={50}>
              <Switch location={location}>
                <Route exact path={'/'} render={() => <About />} />
                <Route exact path={'/projects'} render={() => <Projects />} />
              </Switch>
          </CSSTransition>
        </TransitionGroup>
      )} /> */}
      {routes.map(({ path, Component }) => (
            <Route key={path} exact={path !=='*'} path={path}>
              {({ match }) => (
                <CSSTransition
                  in={match != null}
                  timeout={50}
                  classNames="page"
                  unmountOnExit
                >
                  <div className="page">
                    <Component />
                  </div>
                </CSSTransition>
              )}
            </Route>
        ))}
    </div>
  );
} 

export default App;