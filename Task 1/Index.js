import React from 'react';
import ReactDOM from 'react-dom';
import Header from './App';
import {Home} from './App';
import{Footer} from './App';

ReactDOM.render(<Header />, document.getElementById('header'));
ReactDOM.render(<Home />, document.getElementById('home'));
ReactDOM.render(<Footer />, document.getElementById('footer'));