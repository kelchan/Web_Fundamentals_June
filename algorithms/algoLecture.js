let nums = [ 23, 0, 30, 24, 8, 6, 1, 22 ];
let nums2 = [ 4, 8, 0, 2, 5 ];

//search through a given array for a number, and return which index (position) this number was  found. If the number was not found, return -1.
function searchForNum( arr, numToFind ) {
    for( let i = 0; i < arr.length; i++ ) {
        if( arr[i] == numToFind ) {
            return i;
        }
    }
    return 'number is not in array';
}


// console.log( searchForNum( nums, 11 ) );


let nestedNums = [ [ 4, 8, 10 ], [ 3, 6, 9], [ 23, 24, 99 ] ];

function searchNestedArray( arr, numToFind ) {
    for( let i = 0; i < arr.length; i++ ) {
        for( let j = 0; j < arr[i].length; j++ ) {
            if( arr[i][j] == numToFind ) {
                return { i, j };
            }
        }
    }
}

console.log( searchNestedArray( nestedNums, 9 ) );  //should reutrn 1,2