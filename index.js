// Code your solutions in this file
const name = (['Lisa', 'Kaitlin', 'Jan'], 'surprise');

function writeCards(name, surprise) {
    let newName = [];
    for(let i=0; i<name.length; i++) {
        newName.push(`Thank you, ${name[i]}, for the wonderful surprise gift!`);
    }
    return newName;
}



function countDown(){
let num=6;    
    while (num > 0) {
        console.log(num);
        num--;
    }
let num1=4;    
    while (num1 >= 0) {
        console.log(num1);
        num1--;
    }

}
