

function sing(){
    let be = "let it be, ";
    let uno = "whisper words of wisdom, ";
    let dos = "there will be an answer, let it be";
    let bucle1 = [];
    let bucle2 = [];

   
    for( let i = 0; i < 5; i++){
        if(i < 4) {
            bucle1.push(be)
        } else {
            bucle2.push(be)
        }
    }
    console.log(bucle1 + uno + bucle2 + dos)
}

console.log(sing());
    
    


//Your code above ^^^
 
