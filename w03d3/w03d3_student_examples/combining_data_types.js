const foo = {
    someObject: {
      someProperty: 'oh'
    }
  }
  // the dot means the thing before it is an object
  foo.someObject.someProperty
  
  // what is a method?
  // a function tied to an object
  const foo2 = {
    someMethod: () => {
      console.log('this is a method')
    }
  }
  
  foo2.someMethod();

  ///Global scoped function not affected by object method
  // function someMethod() {
//   console.log('outside function')
// }
// someMethod()

const foo3 = [
    ["0,0", "0,1", "0,2"],
    ["1,0", "1,1", "1,2"],
    ["2,0", "2,1", "2,2"]
];
foo3;

Object.keys(foo);
Object.values(foo);
Object.entries(foo);


const foo4 = {
    someArray:[1,2,3]
};
foo4

// for..in = objects
// for..of = arrays
// element below is the actual value in the array
//SHORT HAND FOR LOOPING THROUGH ARRAYS
// DECLARATIVE CODING
for(let element of foo4.someArray){
    console.log(element)
  }
  
  // IMPERATIVE CODING
  for(let i = 0; i < foo4.someArray.length; i += 1){
    console.log(foo4.someArray[i])
  }



//   You can loop over an array in an array. Just add an additional [index] after the first [index]

// const foo = [
//     ["0,0", "0,1", "0,2"],
//     ["1,0", "1,1", "1,2"],
//     ["2,0", "2,1", "2,2"]
// ];

// for(row of foo){
//     for(element of row){
//         console.log(element);
//     }
// }

// //same as above
// for (let i = 0; i < foo.length; i++) {
//     for (let j = 0; j < foo[i].length; j++) {
//         console.log(foo[i][j]);
//     }
// }




const foo5 = ()=>{
    return {
        someProperty: 'hi!',
        anotherProperty: 'goodbye'
    }
};

// calling the foo5 function
// this returns a object
// the object has a key called someProperty
// that key has a value set to 'hi!'
foo5().someProperty;//hi
foo5().anotherProperty;//hi
let foo5Obj = foo5()

for(let key in foo5Obj){
  console.log('key', key)
}




const foo6 = ()=>{
    return ()=>{
        console.log('whaaaa?');
    }
};

foo6() // => [Function]
// first () calls the foo6 function
// that returns a function
// the second () calls that function
foo6()();