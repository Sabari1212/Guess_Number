import React from 'react'

function Guess({term,ori_nu}) {
    let guess;
    if(term){
    if(term > ori_nu && term<=10){
        guess="higher"

    }
    else if(term<ori_nu && term>=1){
        guess="lower";
    }
    else if(term == ori_nu){
        guess="Yippe !Correct ";
    }
    else if(term>10 || term<1){
        guess="Enter a correct value";
    }
}
    return <h3>You Guessed : {guess}</h3>
}

    export default Guess;

 
