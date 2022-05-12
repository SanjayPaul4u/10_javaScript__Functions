console.log("This function tutorial in javaScript..");
// // Function 1📌📌📌
// let name1 = "sanjay";
// let name2 = "Rohan";

// function greet(nam){//Define function.
//     console.log(`Good morning ${nam}, Have a nice day, you are great man, you are awesome...`);
// }

// greet(name1)//Calling function.
// greet("raju");
// greet("kalu");
// greet(name2);
// //---------------------------------------------------------------------------------------------
// // Function 2📌📌📌
// function greet2 (name1, name2, greet ="Great"){// Here greet have default value.
//     console.log(`${name1} and ${name2} both you are ${greet}`);

//     return 1;//we can return string also
// }

// let value = greet2("Mou", "Riya", "Awesome");
// let value2 = greet2("Sanjay", "Ricky");// it will be get default value
// console.log(value);
// //---------------------------------------------------------------------------------------------
// // Function 3📌📌📌
// function greet2 (name1, name2, greet ="Great"){// Here greet have default value.
//     let string =`${name1} and ${name2} both you are ${greet}`;

//     return string;
// }

// let value3 = greet2("Mou", "Riya", "Awesome");
// let value4 = greet2("Sanjay", "Ricky");// it will be get default values
// console.log(value3);
// console.log(value4);
// //---------------------------------------------------------------------------------------------
// // 4. Function in object📌📌📌
// let myObj = {
//     name1: "sanjay",
//     age: 74,
//     game: function(){
//         return "GTA";
//     }
// }
// console.log(myObj.game());
// //---------------------------------------------------------------------------------------------
// // 5. Function with array📌📌📌

// let array = ["fruits", "vegetable", "Farnicher"];
// array.forEach(function(element, index, array){
//     console.log(element, index);
// });
// //---------------------------------------------------------------------------------------------
// // SCOPE📌📌📌

if(1){
    let i = 888888;
    console.log(i);
}
console.log(i);// <------------------it will be throw error. let is block scope

console.log(i);
function ui (name){
      i = 10;
      console.log(i);

    return`This is ${name} ui`
}
let value = ui("sanjay");
console.log(value);



