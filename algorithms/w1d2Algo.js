/*
Data types
Data types can include the following:
1. Numbers (integers and decimals (floats)) -> 1, 2, 3, 99, 100; Decimals: 3.14, 1.45
2. Strings -> Characters and letters combined into one using quotes -> "Hello"; 'Welcome to Web Fundamentals'
3. Boolean -> True or False 
4. 

You can put these data types into variables

camelCase
snake_case
PascalCase
*/

var name = "Rob Dahal";
var age = 29;
var chiplotlePrice = 9.75; 
var isTeachingToday = true; 

chiplotlePrice += 1;
var halfMyAge = age / 2;
var twiceMyAge = age * 2;

// console.log(twiceMyAge);



/*
Data Structures are things where we can put one or many data types inside of ( we can group data types into one thing)

1. Array -> []

*/

var artists = ['Drake', 'Weezy', 'Weekend', 'NIN', 'Saint John', 'Taylor Swift', 'Weezer', 'Andrew3000']; // 9 elements
// indexes -> 0         1           2       3          4              5            6            7

// A for loop is a way for us to repeat a process a certain number of times

for ( let i = 0; i < artists.length; i++ ) {
    console.log( artists[i] );
}



