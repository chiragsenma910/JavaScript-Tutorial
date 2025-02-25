// singleton
//object.create

//object Literals

const mySym=Symbol('mykey1') //symbol declare

const JSUser={
    name:"chirag", //key:value
    age:21,
    [mySym]:'chirag senma',//symbol declare in object with usnig square bracket
    location:'Piludar',
    email:"chirag@gmail.com",
    isLoggedIn:false,
    lastLogIn:["monday",'saturday']
}
//access a value

console.log(JSUser.name);
console.log(JSUser["name"]);
console.log(JSUser[mySym]);
console.log(JSUser);

console.log(typeof JSUser[mySym]);

//value chnage
JSUser.email="ravat@gmail.com";
console.log(JSUser.email);

// Object.freeze(JSUser); //here we lock a object means not a change any value of object

JSUser.greeting=function(){
    console.log("Hello Chirag");
}

console.log(JSUser.greeting);
console.log(JSUser.greeting());
