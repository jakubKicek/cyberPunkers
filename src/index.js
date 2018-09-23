import React from 'react';
import ReactDOM from 'react-dom';
//import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Container } from 'reactstrap';
import { Col } from 'reactstrap';
import { Row } from 'reactstrap';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
