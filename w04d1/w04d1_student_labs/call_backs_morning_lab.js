// const firstFunction = (param1) => {
//     param1();
// }

// const secondFunction = () => {
//     console.log("Hi");
// }

// firstFunction(secondFunction);


// //console log hi
// const foo = (param, param2) => {
//     param(param2);
// }

// const bar = (param) => {
//     console.log(param);
// }

// foo(bar, 'hi');


//console log hello
// const foo = (param, param2) => {
//     param(param2, 'hello');
// }

// const bar = (param, param2) => {
//     console.log(param2);
// }

// foo(bar, 'hi');



// // Uppercase HELLO
// const foo = (param, param2) => {
//     param(param2, 'hello');
// }

// const bar = (param, param2) => {
//     console.log(param2);
// }

// const baz = (param) => {
//     console.log(param.toUpperCase());
// }

// foo(baz, 'hello')


//Electric Mixer
// const electricMixer = (attachment) => {
//     console.log(`This mixer is now: ${attachment()}`);
// }

// const spiralizer = () => {
//     return "spiralizing";
// }

// const eggBeater = () => {
//     return "beating eggs";
// }



// electricMixer(spiralizer);
// electricMixer(eggBeater);



// //setInterval and setTimeout
// const message = () => {
//     console.log("hi");
// }

// setTimeout(message, 2000);

// setInterval(message, 2000);


// Use SetInterval to display a number that increases by 1 each second (it's a clock!)
// let seconds = 0;
// const increaseSecond = () => {
//     seconds += 1;
//     return console.log(seconds);
// }

// let si = setInterval(()=> {
//     increaseSecond();
//     if(seconds === 3) {
//         clearInterval(si);
//     }
// }, 1000);


//wordReverse 

const wordReverse = (str) => {
    let reverseString = str.split(" ").reverse().join(" ");
    return reverseString;
}

console.log(wordReverse("hello chris"));

const toUpperCase = (str) => {
    return str.toUpperCase();
}

console.log(toUpperCase("hello"));

const repMaster = (input,func) => {
    return func(input.toLowerCase()) + ' proves that I am the rep MASTER!'
}

console.log(repMaster("Never give your heart to a blockhead", wordReverse));
console.log(repMaster("I finished this practice", toUpperCase));











