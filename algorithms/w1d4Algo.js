// function greetUser(firstname, lastname) {
//     console.log( 'Hello ' + firstname + ' ' + lastname );
// }

// greetUser( 'Kelvin', 'Chan' );


// Parameter -> the words that represent what the function is expecting as input. Paremeters are set when you DEFINE the function

// Argument-> the data I give to the function when I INVOKE/CALL the function! 





// function sum( num1, num2 ) {
//     return num1 + num2;
// }

// let sumNum = sum( 3, 9 ) + sum( 1, 2 );
// console.log( sumNum );


let artists = [ 'Drake', 'J Cole', 'MJ', 'Hannah Montana', 'The Dale Gribble Bluegrass Experience', 'Kanye', 'Ariana Grande' ];

function searchForArtists( artistName ) {
    // return artists.indexOf( artistName );
    for( let i = 0; i < artists.length; i++ ) {
        // console.log( artists[i] );
        if( artists[i] === artistName ) {
            return 'Found your artist at index ' + i;
        }
        else{
            return 'No artist found with that name';
        }
    }
}

console.log( searchForArtists('Kelvin') );