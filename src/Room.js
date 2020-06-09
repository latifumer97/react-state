import React, {useState} from 'react';


function Room(){
    //const state = useState(true);
    //console.log("State = " ,state);
    let [isLit, setLet] = useState(true);
    let [count1 , setCountLit] = useState(0);
    let [count2 , setCountAc] = useState(0);

function updateLit(){
    console.log("Button clicked");
    setLet(!isLit);
    setCountLit(++count1)
}
function updateAc(){
    console.log("Ac Button clicked");
    setLet(!isLit);
    setCountAc(++count2)
}
   
return(
<div>
    This Room is {isLit? "Lit": "dark"}
    <br/> Count={count1} <br/>
    <button onClick={updateLit} >Toggle Light</button>
    <br/>
    <button onClick={updateAc} >Toggle Ac</button>
    <br/>Count={count2}<br/>
</div>
);


}

export default Room;