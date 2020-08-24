import React, {Fragment} from 'react';
import './App.css';
import store from './store';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import TopNavbar from './components/common/TopNavbar';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import TopGifs from './components/TopGifs';
import Search from './components/Search';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Fragment>
          <Container fluid>
            <TopNavbar/>
            <Switch>
              <Route exact path="/" component={TopGifs}/>
              <Route excat path="/search" component={Search} />
            </Switch>
          </Container>
        </Fragment>
      </BrowserRouter>
      
    </Provider>
  );
}

export default App;
