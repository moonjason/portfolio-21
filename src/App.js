import { Route, Switch } from 'react-router-dom';
//components
// import Header from './components/Header/Header';
// import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Menu from './components/Menu/Menu';

function App() {

  return (
    <div className="App">
      <Switch>
        <Route exact path={'/menu'} render={() => <Menu />} />
        <Route exact path={['/', '/about']} render={() => <About />} />
      </Switch>
    </div>
  );
} 

export default App;