import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import FormPage from './pages/FormPage'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={FormPage} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
