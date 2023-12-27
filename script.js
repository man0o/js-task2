"use strict";

// 1 -------

for (let i = 5; i < 100; i++) {

    console.log(i)
}

// 2 -------

let array1=[1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12];

for (let i=0; i<array1.length; i++) {

    if (array1[i] > 0 && array1[i] < 10) {
        console.log(array1[i])
    } 
} 

// 3 -------


let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let a=0; a < array2.length; a++) {

    if (array2 = 5) {
        console.log("aris")
    }
}

// 4 --------


let array3 = [1, 2, 3, 4, 5]; 
let sum = 0; 
for (let i = 0; i < array3.length; i++) 
{ sum += array3[i]; } 
console. log(sum);


// 5 -------

let array4 = [1, 2, 3, 4, 5]; 
let sum1 = 0; 
for (let i = 0; i < array4.length; i++) 
{ sum1 += array4[i]; } 
console. log(sum1/array4.length);


// 6 --------

let array5 = [1, 2, 3, 7, 6, 9];

for (let i of array5) {

    if ( i==7 ) {
        continue;
    }
    console.log (i)
}

// 7 --------

let user = {
    firstname: "giorgi",
    lastname: "smith",
    age: 25,
    studentstatus: "active"
}

console.log (user.studentstatus)


// 8 ---------

let user2 = {
    name: 'anna',
    age: 20,
    studentstatus: 'active'
    }

    if (user2.age < 18 && user2.studentstatus === "active") {
        console.log("hello user")
    } else if (user2.name === "levan") {
       console.log("hello levan")
    } else if (user2.studentstatus === "active" || user.age < 25) {
        console.log("hello anna")
    } else {
        console.log("error")
    }


    // 9 --------

    let array6 = [ 2, 3, 5, 10, 25, 24, 11, 100, 6, 7, 10]
     for(let i=0; i<array6.length; i++){
        if (array6[i] % 2 === 0) {
            console.log(array6[i])
        }
     }



     // 10 ------

     let users = [
        {username: 'giorgi', status: false},
        {username: 'levani', status: false},
        {username: 'anna', status: true}
        ]

        console.log(users[2].status)






 

