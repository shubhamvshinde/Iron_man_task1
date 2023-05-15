import React from 'react';
import { Provider } from 'react-redux';
import store from './store/index';
import ComponentA from './components/ComponentA';
import './App.css';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <ComponentA />
      </Provider>
    </div>
  );
}

export default App;
