import React, { Component } from 'react';
import Footer from './layout/footer';
import Header from './layout/header';
import Main from './layout/main';
import './css/global.css';

class App extends Component {

  render(): React.ReactNode {

    return (
      <>
        <Header />
        <Main />
        <Footer />
      </>);
  }
}

export default App;
