import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';

import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import votes from './reducers';

function App() {
  const store = createStore(votes, composeWithDevTools());
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
