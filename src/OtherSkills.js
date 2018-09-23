import React from 'react';

let skillsList=["Image","Moda i styl","Pływanie","Siłacz","Wytrzymałość","Aktorstwo","Etykieta","Perswazja","Postrzeganie emocji","Przeprowadzanie wywiadów","Uwodzenie","Zdolności przywódcze","Antropologia","Biologia","Botanika","Chemia","Diagnoza lekarska","Fizyka","Geologia","Hazard","Komponowanie","Księgowość","Matematyka","Nauczanie","Programowanie","Przeszuiwanie baz danych","Spostrzegawczość","Sztuka przetrwania","Śledzenie","Transakcje giełdowe","Ukrywanie się","Wykształcenie","Znajomość sieci","Zoologia","Odporność na tortury/narkotyki","Przemawianie","Przesłuchiwanie","Zastraszanie","Znajomość półświatka","Broń ciężka","Broń ręczna","Karabin","Łucznictwo","Obsługa ciężkich maszyn","Pilotaż pojazdów AV","Pilotaż stałopłatów","Pilotaż sterowców","Pilotaż żyrokopterów","Pistolet","Pistolet maszynowy","Prowadzenie motocykli","Prowadzenie aut","Skradanie się","Szermierka","Sztuki walki","Taniec","Unikanie ciosów","Walka wręcz","Wysportowanie","Charakteryzacja","Cybertechnika","Elektronika","Fałszerstwo","Farmaceutyka","Kinematografia","Fotografia","Granie na instrumencie","Kradzież kieszonkowa","Malowanie","Rysowanie","Materiały wybuchowe","Naprawa helikopterów","Naprawa pojazdów AV","Naprawa aut","Naprawa stałopłatów","Obsługa komór kriotonicznych","Otwieranie zamków","Pierwsza pomoc","Podstawowe naprawy","Projektowanie cyberdeków","Zabezpieczenia elektroniczne","Znajomość broni"];

function OtherSkills(levelValue,characterSkills){
    let tabLength=skillsList.length;
    let setSkillsListLength=5;
    let randoms=Array.from({length: (setSkillsListLength)},()=>Math.floor(Math.random()*(tabLength)));
    let randomLevels=Array.from({length: setSkillsListLength},()=>Math.floor(Math.random()*(levelValue)+1));
    
    for(let i=0;i<setSkillsListLength;i++){
        let o=1;//boolean value
        let newSkill='';//string value
        while(o){
            if(skillsList[randoms[i]] in characterSkills){
                o=1;
                randoms[i]+=1;
            }
            else{
                newSkill=skillsList[randoms[i]];
                characterSkills[ newSkill ] = randomLevels[i];
                o=0;
            } 
            }
        }
    
    return characterSkills;
    }
export default OtherSkills;