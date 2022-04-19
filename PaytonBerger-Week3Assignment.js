// Payton Berger- Week 3 coding assignment

/*
1.	Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
    a.	Programmatically subtract the value of the first element in the array from the value in the last element of the array 
        (do not use numbers to reference the last element, find it programmatically, ages[7] – ages[0] is not allowed). 
        Print the result to the console.
    b.	Add a new age to your array and repeat the step above to ensure it is dynamic (works for arrays of different lengths).
    c.	Use a loop to iterate through the array and calculate the average age. Print the result to the console.
*/
let ages = [3, 9, 23, 64, 2, 8, 28, 93];

let first = ages.slice(0, 0);   // I don't know how to subtract the first element fromt he last programmatically.
console.log(first);

let last = ages.length -1;    // This is how one would grab the final element in an array. 
console.log(ages[last]);

const average = ages.reduce((a, b) => a + b, 0) / ages.length;     // average age in the age array
console.log(average);

/*
2.	Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
    a.	Use a loop to iterate through the array and calculate the average number of letters per name. 
        Print the result to the console.
    b.	Use a loop to iterate through the array again and concatenate all the names together, 
        separated by spaces, and print the result to the console.
*/
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];   // names array
console.log(names);

// I don't know how to count the number of letters in a string in an array.

let result = '';                            // this loop concatenates the elements in the strings array 
for (let i = 0; i < names.length; i++) {
    result = result.concat(names[i] + " ");
}
console.log(result);


/*
3.	How do you access the last element of any array?
array.pop()

4.	How do you access the first element of any array?
array.shift()

5.	Create a new array called nameLengths. Write a loop to iterate over the previously 
    created names array and add the length of each name to the nameLengths array.
For example:
namesArray = ["Kelly", "Sam", "Kate"] //given this array
nameLengths = [5, 3, 4] //create this new array
*/

let nameLengths = names.map(w => w.length);  // map function creates new array with the length of each word
console.log(nameLengths);

// 6.	Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. 
//     Print the result to the console.

let sumNames = 0;
for (let i = 0; i < nameLengths.length; i++) {    // adds all the values of the previous array 
    sumNames += nameLengths[i];
}

console.log(sumNames);

// 7.Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to 
// itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).

function concat(word, n){
    console.log(word.repeat(n));   // repeats the input "word" and repeats it n nubmer of times.
}
concat("Grateful", 6);

// 8.	Write a function that takes two parameters, firstName and lastName, and returns a full name (the full name should 
// be the first and the last name separated by a space).

function createFullName(firstName, lastName){  
    console.log(firstName + ' ' + lastName);
}
createFullName('John','Doe');

// 9.	Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is 
//     greater than 100.

let numbers9 = [1, 9, 1, 2, 3, 3]    
function sumNumbers(){         // adds all numbers in array together and compares them to a value of 100 and runs accordingly
    let sum = 0;
    for (let i = 0; i < numbers9.length; i ++) {
        sum += numbers9[i];
    }
    if (sum > 100) {return true;}
    else {return false;}
}
console.log(sumNumbers());

//10.	Write a function that takes an array of numbers and returns the average of all the elements in the array.

array10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

function calculateAverage(arr10) {
    var total = 0;
    var count = 0;

    arr10.forEach(function(item, index) {
        total += item;
        count++;
    });

    return total / count;
}
console.log(calculateAverage(array10));


// 11.	Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is 
//     greater than the average of the elements in the second array.

let arrayEleven = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
let numbersEleven = [1, 9, 1, 2, 300, 3]

function meanNumbers(){
    let sum1 = 0;                    // sum of the top array
    for (let i = 0; i < arrayEleven.length; i ++) {
        sum1 += arrayEleven[i];
    }
    let sum2 = 0;                   // sum of the bottom array
    for (let i = 0; i < numbersEleven.length; i ++) {
        sum2 += numbersEleven[i];
    }
    if (sum1 > sum2) {return true;}   // comparison to determine if the first array is greater than the second array
    else {return false;}
}
console.log(meanNumbers());

// 12.	Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if 
//     it is hot outside and if moneyInPocket is greater than 10.50.

let moneyInPocket = 13.00;         
let isHotOutside = true;

function willBuyDrink(){         // this function will allow me to buy a drink if it is hot outside AND if I have enough money
    if (moneyInPocket > 10.50 && isHotOutside == true){return "Yes, I will buy the drink."}
    else {return "No, I will not buy the drink."};
}
console.log(willBuyDrink());

// 13.	Create a function of your own that solves a problem. In comments, write what the function does and why you created it.

let isNiceOutside = true;
let doIHaveHomework = true;

function myFunction(){
    if (isNiceOutside == true && doIHaveHomework == false){return "I will go for a bike ride." }
    else if (isNiceOutside == false && doIHaveHomework == false){return "I will work on another project."}
    else {return "Do your homework."};
}
console.log(myFunction());

// This function is used to determine whether or not I can go for a bike ride, 
// depending if I have homework and what the weather is like.



