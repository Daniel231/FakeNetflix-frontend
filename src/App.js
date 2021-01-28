import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/config/configureStore';
import AppRouter from './routers/AppRoute';


function App() {
  return (
        <Provider store={configureStore()}>
          <AppRouter/>
        </Provider>
  );
}

export default App;