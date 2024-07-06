// WEKEEND LAB
let saturdayFun = "roller-skate";
const fn = function(){
    console.log (`${saturdayFun}`,);
};
fn();
//function has been epressed using a function expression

let mondayWork = "go to the office";
const f = function(){
    console.log (`${mondayWork}`,);
};
f();
//function has been epressed using a function expression

function wrapAdjective(name="Amali", describe ="beautiful"){
 const innerfunction = function (special="charismatic"){
        return (`${name}, ${describe}, ${special},`);
};
return innerfunction;
} 
wrapAdjective("Amali","Beautiful","charismatic");





