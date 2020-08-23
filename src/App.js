import React from 'react';
import './App.css';
import store from './store';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <p>Hello</p>
      </div>
    </Provider>
  );
}

export default App;
