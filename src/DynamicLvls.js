import React from 'react';

function DynamicLvls({characterClass}){
    switch(characterClass){
        case 'Biznesman':
            return(
                <datalist id="formLevels">
                    <option value="Pomocnik Biurowy"></option>
                    <option value="Manager"></option>
                    <option value="Dyrektor"></option>
                    <option value="Ważniejszy dyrektor"></option>
                    <option value="Szef działu"></option>
                    <option value="Szef oddziału"></option>
                </datalist>
            );
            break;
        case 'Fixer':
             return(
                <datalist id="formLevels">
                    <option value="Uliczny punk"></option>
                    <option value="Przywódca gangu"></option>
                    <option value="Ochroniarz"></option>
                    <option value="Młodszy pomocnik"></option>
                    <option value="Prawa ręka"></option>
                    <option value="Książe zbrodni"></option>
                </datalist>
            );
            break;
        case 'Gliniarz':
            return(
                <datalist id="formLevels">
                    <option value="Prywatny ochroniarz"></option>
                    <option value="Gliniarz miejski"></option>
                    <option value="Ochroniarz korporacji"></option>
                    <option value="Psychosquad"></option>
                    <option value="Szef oddz. bezp."></option>
                    <option value="Szef policji"></option>
                </datalist>
            );
            break;
        case 'Medyk':
            return(
                <datalist id="formLevels">
                    <option value="Pielęgniarz"></option>
                    <option value="Technik medyczny"></option>
                    <option value="Ripperdoc"></option>
                    <option value="Medyk TraumaTeam"></option>
                    <option value="Własna klinika"></option>
                    <option value="Specjalista"></option>
                </datalist>
            );
            break;
        case 'Netrunner':
            return(
                <datalist id="formLevels">
                    <option value="Lamer"></option>
                    <option value="Hacker"></option>
                    <option value="Bit-dżokej"></option>
                    <option value="Kowboj sieci"></option>
                    <option value="Deckslinger"></option>
                    <option value="Sysop"></option>
                </datalist>
            );
            break;
        case 'Nomad':
            return(
                <datalist id="formLevels">
                    <option value="Członek klanu"></option>
                    <option value="Wojownik"></option>
                    <option value="Głowa domu"></option>
                    <option value="Zwiadowca"></option>
                    <option value="Starszy klanu"></option>
                    <option value="Głowa rodu"></option>
                </datalist>
            );
            break;
        case 'Reporter':
            return(
                <datalist id="formLevels">
                    <option value="Wolny strzelec"></option>
                    <option value="Dziennikarz"></option>
                    <option value="Dyrektor działu"></option>
                    <option value="Redaktor naczelny"></option>
                    <option value="Lokalna osobistość"></option>
                    <option value="Ogólnokrajowa osobistość"></option>
                </datalist>
            );
            break;
        case 'Rockman':
            return(
                <datalist id="formLevels">
                    <option value="Niezbyt częste występy"></option>
                    <option value="Stałe zatrudnienie w klubie"></option>
                    <option value="Grasz w dużych klubach"></option>
                    <option value="Masz kontrakt"></option>
                    <option value="Grasz w znanej kapeli"></option>
                    <option value="Gwiazda muzyczna"></option>
                </datalist>
            );
            break;
        case 'Solo':
            return(
                <datalist id="formLevels">
                    <option value="Uliczny ronin"></option>
                    <option value="Prywatny strażnik"></option>
                    <option value="Strażnik korporacji"></option>
                    <option value="Profesjonalny agent"></option>
                    <option value="Pierwsza liga"></option>
                    <option value="Elitarny zabójca"></option>
                </datalist>
            );
            break;
        case 'Technik':
            return(
                <datalist id="formLevels">
                    <option value="Miejscowy technik"></option>
                    <option value="Prywatny operator"></option>
                    <option value="Technik korporacyjny"></option>
                    <option value="Młodszy inżynier"></option>
                    <option value="Inżynier"></option>
                    <option value="Starszy inżynier"></option>
                </datalist>
            );
            break;
        
        default:
            return(' ');
            break;
    }
}

export default DynamicLvls;