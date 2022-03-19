// Code your solutions in this file

// for (let age = 30; age < 40 ; age++) {
//     console.log(`I'm ${age} years old. Happy birthday to me!`)
//     debugger;
// }

// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(giftsArr) {
//     for (let i=0; i < giftsArr.length; i++){
//         console.log(`Wrapped ${giftsArr[i]} and added a bow!`);
//         debugger;
//     }
//     return giftsArr;
// }

// wrapGifts(gifts);

// const names = ["Guadalupe", "Ollie", "Aki"];

// function writeCards(nameArr, eventName) {
//     for(let i=0; i < nameArr.length; i++){
//     return `Thank you, ${nameArr}, for the wonderful ${eventName} gift!`;
//     // debugger;
//     }
// }

// writeCards(names, "surprise");

// const names = ["Guadalupe", "Ollie", "Aki"];

// function writeCards(nameArr, eventName) {
//     for(let i=0; i < nameArr.length; i++){
//     const message = `Thank you, ${nameArr[i]}, for the wonderful ${eventName} gift!`;
//     //debugger;
//     }
//     return message;
// }

// writeCards(names, "surprise");
function writeCards(nameArr, eventName) {
    const messages = []
    for(let i=0; i < nameArr.length; i++){
    const message = `Thank you, ${nameArr[i]}, for the wonderful ${eventName} gift!`;
    messages.push(message);
    //debugger;
    }
    return messages;
}

writeCards(["Guadalupe", "Ollie", "Aki"], "surprise");


function countDown() {
    let countsdown = 10;
    while (countsdown >= 0) {
        console.log(countsdown--);
    }
}