let obj1 = {name:'Amigo Reddy'}

//let obj2= {...obj1};// spread operator it won't
let obj2 = {obj1};

obj2.name='Akhil Reddy';

console.log(obj1.name); //Akhil Reddy
console.log(obj2.name);
