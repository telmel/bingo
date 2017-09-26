import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
	<div>
		  <div id="testimonial">
			<div className="mask-testimonial"></div>
		  </div>
		  <Module />
		  <Main />
		  <Lower />
		  <Footer />
	</div>
    );
  }
}

const Module = () => <div className="three"></div>;
const Main = () => <div className="most"></div>;
const Lower = () => <div className="low"></div>;
const Footer = () => <div className="bkg"></div>;

export default App;


