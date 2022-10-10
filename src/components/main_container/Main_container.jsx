import React from 'react';
import Content from '../content/Content';
import Header from '../header/Header';
import Navbar from '../navbar/Navbar';

const MainContainer = () => {
  return (
    <div className="container">
      <Header />
      <div className="content">
        <Navbar />
        <Content />
      </div>
    </div>
  );
};

export default MainContainer;
