/**********************************************************************
Set up and Configuration
**********************************************************************/
// Dependencies
const mongoose = require('mongoose');
const seedData = require('./models/seed_vampires.js');
const Vampire = require('./models/vampire.js');

// Configuration
const mongoURI = 'mongodb://localhost:27017/'+ 'vampires';
const db = mongoose.connection;

// Connect to Mongo
mongoose.connect( mongoURI, { 
  useNewUrlParser: true, 
  useUnifiedTopology: true
});

// Connection Error/Success
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', mongoURI));
db.on('disconnected', () => console.log('mongo disconnected'));

db.on( 'open' , ()=>{
  console.log('Connection made!');
});

/**********************************************************************
Write Your Code Below
**********************************************************************/
// Vampire.insertMany(seedData, (err, vampires) => {
//   if(err) {
//     console.log(err);
//   } else {
//     console.log(vampires);
//   }
//   db.close();
// })


// Vampire.create({
//   name: 'Vampire 4',
//   title: 'Count',
//   hair_color: 'pink',
//   eye_color: 'black',
//   dob: new Date(1941, 6, 10, 9, 47),
//   loves: ['blood','people'],
//   location: 'San Diego, California, US',
//   gender: 'w',
//   victims: 17,
// }, (err, vampire) => {
//   if(err) {
//     console.log(err);
//   }
//   console.log("Vampire 4", vampire);
// })

// Querying
// Select by comparison
// Write a different query to select all the vampires that:
// ...are females
// Vampire.find({gender: "f"}, (err, vampires) => {
//   if (err) {
//     console.log(err);
//   }

//   console.log(vampires); 
//    db.close();
// });

// ...have greater than 500 victims

// Vampire.find({victims: {$gt: 500}}, (err, vampires) => {
//   if (err) {
//     console.log(err);
//   }

//   console.log(vampires);
//    db.close();
// });
// ...have fewer than or equal to 150 victims
// Vampire.find({victims: {$lte: 150}}, (err, vampires) => {
//   if (err) {
//     console.log(err);
//   }

//   console.log(vampires);
//    db.close();
// });

// ...have a victim count that is not equal to 210234
// Vampire.find({victims: {$ne: 210234}}, (err, vampires) => {
//     if (err) {
//     console.log(err);
//   }

//   console.log(vampires);
//    db.close();
// })

// ...have greater than 150 AND fewer than 500 victims
// Vampire.find({$and: [{victims: {$gt: 150}},{victims: {$lt: 500}}]}, (err, vampires) => {
//       if (err) {
//     console.log(err);
//   }

//   console.log(vampires);
//    db.close();
// })


// Select by exists or does not exist
// Select all the vampires that:

// ...have a key of 'title'
// Vampire.find({title:{$exists: true}}, (err, vampires) => {
//   if (err) {
//     console.log(err)
//   }; 
//   console.log(vampires);
//   db.close();
// });
// ...do not have a key of 'victims'
// Vampire.find({victims:{$exists: true}}, (err, vampires) => {
//   if (err) {
//     console.log(err)
//   }; 
//   console.log(vampires);
//   db.close();
// });

// ...have a title AND no victims
// Vampire.find({$and: [{title: {$exists: true}}, {victims: {$eq: 0}}]}, (err, vampires) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(vampires);
//   db.close();
// })
// ...have victims AND the victims they have are greater than 1000

// Vampire.find({$and: [{victims: {$exists: true}},{victims:{$gt:1000}}]}, (err, vampires) => {
//   if(err){
//     console.log(err);
//   } 
//   console.log(vampires);
//   db.close();
// })



// Select all the vampires that:

// ...are from New York, New York, US or New Orleans, Louisiana, US
// Vampire.find({$or: [{location: "New York, New York, US"},{location: "New Orleans, Louisiana, US"}]}, (err, vampires) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(vampires);
//   db.close();
// })

// ...love brooding or being tragic
// Vampire.find({$or: [{loves: {$in: "brooding"}},{loves: {$in: "being tragic"}}]}, (err, vampires) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(vampires);
//   db.close();
// });

// ...have more than 1000 victims or love marshmallows

// Vampire.find({$or: [{victims: {$gt: 1000}}, {loves: {$in: "marshmallows"}}]},(err, vampires) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(vampires);
//   db.close();
// });


// ...have red hair or green eyes
Vampire.find({$or: [{hair_color: "red"}, {eye_color: "green"}]},(err, vampires) => {
  if (err) {
    console.log(err);
  }
  console.log(vampires);
  db.close();
});