import React, { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './pages/header';

function App() {
  return (
    <Fragment>
      <Header />
      <Outlet />
    </Fragment>
  );
}

export default App;
