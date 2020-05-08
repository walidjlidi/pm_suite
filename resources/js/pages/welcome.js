import React from 'react';
import GuestNav from '../components/guest-nav';

function Welcome () {
  return (
    <div>
      <GuestNav />
      <div className="container">
        <div className="jumbotron">
            <h1>Bootstrap starter template</h1>
            <p className="lead">Use this document as a way to quickly start any new project.<br/> All you get is this
                text and a mostly barebones HTML document.</p>
        </div>
    </div>
    </div>
  );
};

export default Welcome;
