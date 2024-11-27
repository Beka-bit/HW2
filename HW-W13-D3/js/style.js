let sandar=[];

    while(true){
        let san = +prompt("Sandar engiz Toktaty yshin 0 di engiz")
        if(san==0){
            break;
        }if(san%2==0){
            sandar.unshift(san);
        }else{
            sandar.push(san)
        }
    }

    
console.log("Massiv: " ,sandar);
console.log("Yzyndygi: ",sandar.length);