const a1=["chirag","ved","jash"]
const a2=["vansh","tirth","smit"]

// a1.push(a2);
// console.log(a1);
// console.log(a1[3][2]);

const a3=a1.concat(a2)
console.log(a3);

const new_a=[...a1,...a2] //here we used a spread operator 

console.log(new_a);

const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]

const new_another_array=another_array.flat(Infinity) // all element set in single array
console.log(new_another_array);

console.log(Array.isArray('chirag'));//that is tell a about it is array or not
console.log(Array.from('chirag'));//convert into array








