import React, { Fragment } from 'react';
import 'styles/css/App.css';
import Main from 'components/main';
import Header from 'components/navbar';

function App() {
  return (
    <Fragment>
      <header className="header">
        <Header />
      </header>
      <div className="main">
        <Main />
      </div>
    </Fragment>
  );
}

export default App;
