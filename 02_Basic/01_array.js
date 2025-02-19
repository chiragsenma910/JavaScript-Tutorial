//array

// ----Array Declare----
const myArr=[0,1,2,3,4,5]; //array is object
const student=["chirag","vansh","ved"];
const arr2=new Array(1,2,3,4,5);

console.log(student);
console.log(arr2);
console.log(myArr[3]); //access a elements

// -----Array Methods---------

const arr1=[];
arr1.push(1,2,3); //push method

// console.log(arr1);

// arr1.pop(); //remove last element

arr1.unshift(9);//add element at starting  output:-[9,1,2,3]
arr1.shift() //remove a starting element   output:-[1,2,3]

console.log(arr1);
console.log(arr1.includes(9));//return true or false
console.log(arr1.indexOf(3));

const newArr=arr1.join() //join() method are convert into string and bind a element

console.log(newArr);
console.log(typeof newArr);

//slice , splice

const newarr2=[1,2,3,4,5,6];

console.log("A",newarr2);

console.log(newarr2.slice(1,3)); //start index=1 and end index=3-1=2

const newarr3=[1,2,3,4,5,6];

console.log(newarr3.splice(1,3));

console.log(newarr3);

//slice() → Extracts part of an array without modifying the original array

//splice() → Modifies the original array by adding or removing elements.























