import React from 'react';
import actualNameGenerator from './Names';
import OtherSkills from './OtherSkills';

import { Container } from 'reactstrap';
import { Col } from 'reactstrap';
import { Row } from 'reactstrap';

                                                            // function iterating through an object
function mapObject(object,callback){
    return Object.keys(object).map(function(key){
        return callback(key, object[key]);
    })
}


function CharAttr({
    characterClass,
    characterLevel,
    characterGender
}) {
    let levelValue = 0;
    switch (characterLevel) {
        case "Pomocnik Biurowy":
        case "Uliczny punk":
        case "Prywatny ochroniarz":
        case "Pielęgniarz":
        case "Lamer":
        case "Członek klanu":
        case "Wolny strzelec":
        case "Niezbyt częste występy":
        case "Uliczny ronin":
        case "Miejscowy technik":
            levelValue = 5;
            break;
            
        case "Manager":
        case "Przywódca gangu":
        case "Gliniarz miejski":
        case "Ochroniarz korporacji":
        case "Technik medyczny":
        case "Hacker":
        case "Wojownik":
        case "Dziennikarz":
        case "Stałe zatrudnienie w klubie":
        case "Prywatny strażnik":
        case "Prywatny operator":
            levelValue = 6;
            break;
            
        case "Dyrektor":
        case "Ochroniarz":
        case "Ochroniarz korporacji/detektyw":
        case "Ripperdoc":
        case "Bit-dżokej":
        case "Głowa domu":
        case "Dyrektor działu":
        case "Grasz w dużych klubach":
        case "Strażnik korporacji":
        case "Technik korporacyjny":
            levelValue = 7;
            break;
            
        case "Ważniejszy dyrektor":
        case "Młodszy pomocnik":
        case "Psychosquad":
        case "Medyk TraumaTeam":
        case "Kowboj sieci":
        case "Zwiadowca":
        case "Redaktor naczelny":
        case "Masz kontrakt":
        case "Profesjonalny agent":
        case "Młodszy inżynier":
            levelValue = 8;
            break;
            
        case "Szef działu":
        case "Prawa ręka":
        case "Szef oddz. bezp.":
        case "Własna klinika":
        case "Deckslinger":
        case "Starszy klanu":
        case "Lokalna osobistość":
        case "Grasz w znanej kapeli":
        case "Pierwsza liga": 
        case "Inżynier":
            levelValue = 9;
            break;
            
        case "Szef oddziału":
        case "Książe zbrodni":
        case "Szef policji":
        case "Specjalista":
        case "Sysop":
        case "Głowa rodu":
        case "Ogólnokrajowa osobistość":
        case "Gwiazda muzyczna":
        case "Elitarny zabójca":
        case "Starszy inżynier":
            levelValue = 10;
            break;
        default:
            levelValue = '';
            break;
    }
                                                                //generate blank ability array
                                                                //abilities = [INT,REF,OP,TECH,SZ,ATR,SZYB,EMP,BC] //9
                                                                //derived = [BIEG,SKOK,UDŹWIG,MBC,CZ]
    let abilities=[0,0,0,0,0,0,0,0,0];
    let derived=[0,0,0,0,0];
    
    let plusOrMinus=Math.random()<0.5?-1:1;
    let primAb=levelValue+Math.floor(Math.random()*(2-0));
    let secAb=levelValue+plusOrMinus;
    let suppAb=levelValue-Math.floor(Math.random()*(2-1)+1);
    let otherAb_1=Math.floor(Math.random()*(levelValue)+2);
    let otherAb_2=Math.floor(Math.random()*(levelValue)+2);
    let otherAb_3=Math.floor(Math.random()*(levelValue)+2);
    let otherAb_4=Math.floor(Math.random()*(levelValue)+2);
    let otherAb_5=Math.floor(Math.random()*(levelValue)+2);
    let otherAb_6=Math.floor(Math.random()*(levelValue)+2);
    
                                                                //defining classSkills objects for each of classes
    let Biznesman = {
        "Zasoby":0,
        "Etykieta":2,
        "Image":2,
        "Moda i styl":2,
        "Wykształcenie":2,
    }
    let Fixer = {
        "Powiązania":0,
        "Broń ręczna":2,
        "Fałszerstwo":2,
        "Kradzież kieszonkowa":2,
        "Otwieranie zamków":2,
        "Perswazja":2,
        "Pistolet":2,
        "Spostrzegawczość":2,
        "Walka wręcz":2,
        "Zastraszanie":2,
        "Postrzeganie emocji":2,
        "Przeszukiwanie baz danych":2,
        "Transakcje giełdowe":2,
        "Wykształcenie":2
    }
    let Gliniarz = {
        "Autorytet":0,
        "Broń ręczna":2,
        "Pistolet":2,
        "Postrzeganie emocji":2,
        "Przesłuchiwanie":2,
        "Spostrzegawczość":2,
        "Walka wręcz":2,
        "Wykształcenie":2,
        "Wysportowanie":2,
        "Znajomośc półświatka":2
    }
    let Medyk = {
        "Technika medyczna":0,
        "Diagnoza":2,
        "Farmaceutka":2,
        "Obsługa komór kriotonicznych":2,
        "Podstawowe naprawy":2,
        "Postrzeganie emocji":2,
        "Przeszukiwanie baz danych":2,
        "Spostrzegawczość":2,
        "Wykształcenie":2,
        "Zoologia":2
    }
    let Netrunner = {
        "Interface":0,
        "Cybertechnika":2,
        "Elektronika":2,
        "Komponowanie":2,
        "Podstawowe naprawy":2,
        "Programowanie":2,
        "Projektowanie cyberdeków":2,
        "Spostrzegawczość":2,
        "Wykształcenie":2,
        "Znajomość sieci":2
    }
    let Nomad = {
        "Status rodzinny":0,
        "Broń ręczna":2,
        "Karabin":2,
        "Podstawowe naprawy":2,
        "Prowadzenie samochodu":2,
        "Spostrzegawczość":2,
        "Sztuka przetrwania":2,
        "Walka wręcz":2,
        "Wysportowanie":2,
        "Wytrzymałość":2
    }
    let Reporter = {
        "Wiarygodność":0,
        "Etykieta":2,
        "Fotografia i film":2,
        "Komponowanie":2,
        "Perswazja":2,
        "Postrzeganie emocji":2,
        "Przeprowadzanie wywiadów":2,
        "Spostrzegawczość":2,
        "Wykształcenie":2,
        "Znajomość półświatka":2
    }
    let Rockman = {
        "Charyzma":0,
        "Aktorstwo":2,
        "Granie na instrumencie":2,
        "Komponowanie":2,
        "Moda i styl":2,
        "Perswazja":2,
        "Spostrzegawczość":2,
        "Uwodzenie":2,
        "Walka wręcz":2,
        "Znajomość półświatka":2
    }
    let Solo = {
        "Zmysł walki":0,
        "Broń ręczna":2,
        "Karabin":2,
        "Pistolet":2,
        "Pistolet maszynowy":2,
        "Skradanie się":2,
        "Spostrzegawczość":2,
        "Walka wręcz":2,
        "Sztuka walki":2,
        "Wysportowanie":2,
        "Znajomość broni":2
    }
    let Technik = {
        "Prowizorka":(0),
        "Cybertechnika":2,
        "Elektronika":2,
        "Nauczanie":2,
        "Podstawowe naprawy":2,
        "Spostrzegawczość":2
    }
    
    
    let skills = {};
                                                                //asign Abs to classes and classSkills to character
    switch(characterClass){
        case 'Biznesman':
            abilities[0]=primAb;
            abilities[1]=otherAb_1;
            abilities[2]=suppAb;
            abilities[3]=otherAb_2;
            abilities[4]=otherAb_3;
            abilities[5]=secAb;
            abilities[6]=otherAb_4;
            abilities[7]=otherAb_5;
            abilities[8]=otherAb_6;
            skills=Biznesman;
            break;
            
        case 'Fixer':
            abilities[0]=primAb;
            abilities[1]=otherAb_1;
            abilities[2]=suppAb;
            abilities[3]=otherAb_2;
            abilities[4]=otherAb_3;
            abilities[5]=secAb;
            abilities[6]=otherAb_4;
            abilities[7]=otherAb_5;
            abilities[8]=otherAb_6;
            skills=Fixer;
            break;
            
        case 'Gliniarz':
            abilities[0]=otherAb_1;
            abilities[1]=secAb;
            abilities[2]=primAb;
            abilities[3]=suppAb;
            abilities[4]=otherAb_2;
            abilities[5]=otherAb_3;
            abilities[6]=otherAb_4;
            abilities[7]=otherAb_5;
            abilities[8]=otherAb_6;
            skills=Gliniarz;
            break;
            
        case 'Medyk':
            abilities[0]=secAb;
            abilities[1]=suppAb;
            abilities[2]=otherAb_1;
            abilities[3]=primAb;
            abilities[4]=otherAb_2;
            abilities[5]=otherAb_3;
            abilities[6]=otherAb_4;
            abilities[7]=otherAb_5;
            abilities[8]=otherAb_6;
            skills=Medyk;
            break;
            
        case 'Netrunner':
            abilities[0]=primAb;
            abilities[1]=secAb;
            abilities[2]=otherAb_1;
            abilities[3]=suppAb;
            abilities[4]=otherAb_2;
            abilities[5]=otherAb_3;
            abilities[6]=otherAb_4;
            abilities[7]=otherAb_5;
            abilities[8]=otherAb_6;
            skills=Netrunner;
            break;
            
        case 'Nomad':
            abilities[0]=otherAb_1;
            abilities[1]=primAb;
            abilities[2]=secAb;
            abilities[3]=otherAb_2;
            abilities[4]=otherAb_3;
            abilities[5]=otherAb_4;
            abilities[6]=suppAb;
            abilities[7]=otherAb_5;
            abilities[8]=otherAb_6;
            skills=Nomad;
            break;
            
        case 'Reporter':
            abilities[0]=secAb;
            abilities[1]=otherAb_1;
            abilities[2]=suppAb;
            abilities[3]=otherAb_2;
            abilities[4]=otherAb_3;
            abilities[5]=primAb;
            abilities[6]=otherAb_4;
            abilities[7]=otherAb_5;
            abilities[8]=otherAb_6;
            skills=Reporter;
            break;
            
        case 'Rockman':
            abilities[0]=otherAb_1;
            abilities[1]=secAb;
            abilities[2]=suppAb;
            abilities[3]=otherAb_2;
            abilities[4]=otherAb_3;
            abilities[5]=primAb;
            abilities[6]=otherAb_4;
            abilities[7]=otherAb_5;
            abilities[8]=otherAb_6;
            skills=Rockman;
            break;
            
        case 'Solo':
            abilities[0]=otherAb_1;
            abilities[1]=primAb;
            abilities[2]=secAb;
            abilities[3]=otherAb_2;
            abilities[4]=otherAb_3;
            abilities[5]=otherAb_4;
            abilities[6]=otherAb_5;
            abilities[7]=otherAb_6;
            abilities[8]=suppAb;
            skills=Solo;
            break;
            
        case 'Technik':
            abilities[0]=secAb;
            abilities[1]=suppAb;
            abilities[2]=otherAb_1;
            abilities[3]=primAb;
            abilities[4]=otherAb_2;
            abilities[5]=otherAb_3;
            abilities[6]=otherAb_4;
            abilities[7]=otherAb_5;
            abilities[8]=otherAb_6;
            skills=Technik;
            break;
    }
    
                                                                                    //calculate derived abilities
    derived[0]=3*abilities[6];
    derived[1]=Math.floor(derived[0]/4);
    derived[2]=abilities[8]*10;
    switch(abilities[8]){
        case 0:
        case 1:
        case 2:
            derived[3]=0;
            break;
        case 3:
        case 4:
            derived[3]=-1;
            break;
        case 5:
        case 6:
        case 7:
            derived[3]=-2;
            break;
        case 8:
        case 9:
            derived[3]=-3;
            break;
        case 10:
            derived[3]=-4;
            break;
        default:
            derived[3]=-5;
            break;    
    }
    derived[4]=abilities[7]*10;

                                                                    //wrapping abilities and derived into one object
    let attributes ={
        "Inteligencja": abilities[0],
        "Refleks": abilities[1],
        "Opanowanie": abilities[2],
        "Zdolności techniczne": abilities[3],
        "Szczęście": abilities[4],
        "Atrakcyjność": abilities[5],
        "Szybkość": abilities[6],
        "Empatia": abilities[7],
        "Budowa ciała": abilities[8],
        "Bieg": derived[0]+' m',
        "Skok": derived[1]+' m',
        "Udźwig": derived[2]+' kg',
        "Modyfikator obrażeń": derived[3],
        "Człowieczeństwo": derived[4]
    }
    

                                                                                //calculating skills levels
        let randomsRootVariable=levelValue-1;                                   //array of random numbers
        let randoms=Array.from({length: 20},()=>Math.floor(Math.random()*(randomsRootVariable)));
        randoms[0]=levelValue;
    
    let i=0;
    if(characterClass!=' '&&characterClass!=''){
    for(let field in skills){
        if(skills.hasOwnProperty(field)){
            skills[field]+=randoms[i];
            i++;
        }
    }
    skills=OtherSkills(levelValue,skills);
    }
    
    let name = actualNameGenerator(characterGender);                            //getting values from other functions
    
    return(
        <div id="char-attr">
            <Container fluid={true}>
                <Row>
                    <Col sm={12} className="basic-info-table">
                        <Container fluid={true}>
                            <Row>
                                <Col sm="12" lg="5">
                                    <Container fluid={true}>
                                        <Row>
                                            <Col className="basic-info" sm="6">
                                               <div>Imię: <span>{name}</span></div>
                                            </Col>
                                            <Col className="basic-info" sm="6">
                                                <div>Klasa: <span>{characterClass}</span></div>
                                            </Col>
                                            <Col className="basic-info" sm="6">
                                                <div>Płeć: <span>{characterGender}</span></div>
                                            </Col>
                                            <Col className="basic-info" sm="6">
                                                <div>Poziom: <span>{characterLevel}</span></div>
                                            </Col>
                                        </Row>
                                    </Container>
                                </Col>
                                <Col className="basic-desc" sm="12" lg="7">
                                    <div>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, pariatur.
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, pariatur.
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, pariatur.
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                    <Col sm="12" lg="4" className="secondary-info-table">
                        <section className="secondary-info">
                            <p>Cechy</p>
                            <div>
                                {mapObject(attributes,function(key,value){
                                    return(
                                        <Container fluid={true}>
                                            <Row>
                                                <Col sm="8">
                                                    {key}
                                                </Col>
                                                <Col sm="4">
                                                    {value}
                                                </Col>
                                            </Row>
                                        </Container>
                                    )
                                })}
                            </div>
                        </section>
                    </Col>
                    <Col sm="12" lg="4" className="secondary-info-table">
                        <section className="secondary-info">
                            <p>Umiejętności</p>
                            <div>
                                {mapObject(skills,function(key,value){
                                    return(
                                        <Container fluid={true}>
                                            <Row>
                                                <Col sm="8">
                                                    <div>{key} </div>
                                                </Col>
                                                <Col sm="4">
                                                    <div>{value}</div>
                                                </Col>
                                            </Row>
                                        </Container>
                                    )
                                })}
                            </div>
                        </section>
                    </Col>
                    <Col sm="12" lg="4" className="secondary-info-table">
                        <section className="secondary-info">
                            <p>Ekwipunek</p>
                            <ul>
                                <li><span>staff_1</span></li>
                                <li><span>staff_2</span></li>
                                <li><span>staff_3</span></li>
                                <li><span>staff_4</span></li>
                                <li><span>staff_5</span></li>
                                <li><span>staff_6</span></li>
                            </ul>
                        </section>
                        <section className="secondary-info implants">
                            <p>Implanty</p>
                             <ul>
                                <li><span>cyber_1</span></li>
                                <li><span>cyber_2</span></li>
                                <li><span>cyber_3</span></li>
                                <li><span>cyber_4</span></li>
                                <li><span>cyber_5</span></li>
                            </ul>
                        </section>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default CharAttr;

