import React, { Component } from 'react';
import DynamicLvls from './DynamicLvls';
import CharAttr from './CharAttr';
import './App.css';

import { Container } from 'reactstrap';
import { Col } from 'reactstrap';
import { Row } from 'reactstrap';


class App extends Component {
  
  constructor(props){
      super(props);
      this.state={
            chosenClass: ' ',
            chosenLevel: '',
            chosenGender: ''
      };
      this.takeClass=this.takeClass.bind(this);
      this.takeLevel=this.takeLevel.bind(this);
      this.takeGender=this.takeGender.bind(this);
  }
  takeClass(event){
      this.setState({
          chosenClass: event.target.value+''
      })
  }
  takeLevel(event){
      this.setState({
          chosenLevel: event.target.value+''
      })
  }
  takeGender(event){
      this.setState({
          chosenGender: event.target.value+''
      })
  }
  render(){
            console.log(this.state.chosenClass);
            return (
                <div>
                   <Container>
                   <Row>
                   <Col sm="12" lg="5">
                       <h3>Wygeneruj cyberpunka!</h3>
                   </Col>
                   <Col sm="12" lg="6">
                      <form className="initial-form" action="">
                          <Container fluid={true}>
                              <Row>
                                  <Col sm="12" lg="3">
                                           <input type="search" placeholder="Klasa postaci" list="formClasses" onChange={this.takeClass}></input>
                                            <datalist id="formClasses">
                                                <option value="Biznesman"></option>
                                                <option value="Fixer"></option>
                                                <option value="Gliniarz"></option>
                                                <option value="Medyk"></option>
                                                <option value="Netrunner"></option>
                                                <option value="Nomad"></option>
                                                <option value="Reporter"></option>
                                                <option value="Rockman"></option>
                                                <option value="Solo"></option>
                                                <option value="Technik"></option>
                                            </datalist>
                                  </Col>
                                  <Col sm="12" lg="1"></Col>
                                  <Col sm="12" lg="3">
                                           <input type="search" placeholder="Poziom postaci" list="formLevels" onChange={this.takeLevel}></input>
                                            <DynamicLvls characterClass={this.state.chosenClass}/>
                                  </Col>
                                  <Col sm="12" lg="1"></Col>
                                  <Col sm="12" lg="3">
                                           <input type="search" placeholder="Płeć postaci" list="formGenders" onChange={this.takeGender}></input>
                                            <datalist id="formGenders">
                                                <option value="Kobieta"></option>
                                                <option value="Mężczyzna"></option>
                                            </datalist>
                                  </Col>
                                  <Col sm="12" lg="1">
                                           <input type="reset" value="Wyczyść"/>
                                  </Col>
                                </Row>
                            </Container>
                        </form>
                        
                    </Col>
                    <Col sm="12" lg="1"></Col>
                    <Col sm="12">
                        <CharAttr characterClass={this.state.chosenClass} characterLevel={this.state.chosenLevel} characterGender={this.state.chosenGender}/>
                    </Col>
                    </Row>
                    </Container>
                </div>
                )
}}

export default App;
