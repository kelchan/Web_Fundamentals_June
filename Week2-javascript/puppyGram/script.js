function uploadPup( element ) {
    console.log( 'wazzaaa', element );
    element.innerText = "Uploaded! Thank you.";
}

function removeElement( element ) {
    console.log( 'remove element' );
    element.remove();
}

// function likeBtn( element ) {
//     let likes = parseInt( element.innerText );
//     likes++;
//     element.innerText = likes + ' Likes'
//     alert( 'You liked this pet!' );
// }

function playVideo( element ) {
    console.log( 'play this video' );
    element.play();
}

function pauseVideo( element ) {
    element.pause();
    element.currentTime = 0;
}

function changeImg( element ){
    console.log( 'change image', element );
    element.src = './resources/anothaPuppy.jpeg';
}

function removeCookie( element ) {
    console.log( 'cookies', element );
    element = document.querySelector( '#cookie-box' );
    element.remove();
}

// function incrementLike( id ){
//     console.log( 'like me', id );
//     let element = document.querySelector( id );
//     element.innerText++;

// }

function incrementLike( id ) {
    document.querySelector( id ).innerText++;
}

function alertMessage() {
    console.log( 'connected!' );
    alert( 'hello' );
    let searchInput = document.querySelector( '#search' );
    alert( 'You searched for ' + searchInput.value );
}