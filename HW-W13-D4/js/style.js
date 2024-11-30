

// task1
    // let arr=[1,2,3,4,5,6,7,8,9];
    // let arrSandar=arr.map(function(num){
    //     return num*num*num;
    // });


    // console.log(arrSandar);
// task2


let student = +prompt("Студент санынын енгізіңіз:");
let total = [];

for (let i = 0; i < student; i++) {
    let grade = +prompt(`Студент №${i + 1}-дің бағасын енгізіңіз:`);
    total.push(grade);
    console.log(`Студент №${i + 1}-дің бағасы: ${grade}`); 
}

let totalScore = 0;

for (let i = 0; i < total.length; i++) {
    totalScore = totalScore + total[i]; 
}

let ortakBal = totalScore / student;

console.log("Оқушылардың ортақ бағасы: " + ortakBal); 


let zhogary = [];
for (let i = 0; i < total.length; i++) {
    if (total[i] > 85) {
        zhogary.push(total[i]);
    }
}

console.log("85-тен жоғары бағалар: " + zhogary); 

console.log("Енгізілген барлық бағалар: " + total); 