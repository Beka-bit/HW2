let footbalObj = {
    name:"Ronaldo",
    first:"Cristiano",
    age:39,
    goals:913,
    footbalClup:["Celtic","Manchester Unaited","RealMadrid","Al-Nasr"]
};
alert(`Aty: ${footbalObj.name} \n Tegi: ${footbalObj.first} \n Jasy: ${footbalObj.age} \n Goal sany: ${footbalObj.goals} \n Oinagan clybtary: ${footbalObj.footbalClup}`)


footbalObj.goals=915;
alert(`Oiunan keiingi goldary ${footbalObj.goals}`)



console.log("Үй тапсырма талаптарына сай");
console.log(footbalObj.name,footbalObj.first);
console.log(`Currect club: ${footbalObj.footbalClup[3]}`);