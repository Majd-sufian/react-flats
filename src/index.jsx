import React from 'react';
import ReactDOM from 'react-dom';


import flats from './components/flats';
import '../assets/stylesheets/application.scss';

console.log(flats);

const Hello = ({ name }) => {
  return (
    <div>
      Hello,
      {name}
    </div>
  );
};

const root = document.getElementById('root');
if (root) {
  ReactDOM.render(<Hello name="World" />, root);
}
