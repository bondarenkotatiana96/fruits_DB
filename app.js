const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/fruitsDB", { useNewUrlParser: true, useUnifiedTopology: true });

const fruitSchema =  new mongoose.Schema({
  name: String,
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
  name: "kiwi",
  rating: 2,
  review: "Solid"
});
fruit.save();

const personSchema =  new mongoose.Schema({
  name: String,
  age: Number,
  favouriteFruit: fruitSchema
});

const Person = mongoose.model("Person", personSchema);

const person = new Person({
  name: "Kira",
  age: 25,
  favouriteFruit: fruit
});

person.save();


// Fruit.find(function(err, fruits){
//   if (err){
//     console.log(err);
//   }else {
//     console.log(fruits);
//   }
// });
//
// Fruit.updateOne({
//   _id: "5f10a9b5234e4c267c372850"
// }, {name: "Peach"}, function(err){
//   if (err){
//     console.log(err);
//   } else {
//     console.log("Cool!");
//   }
// });

//mongoose.connection.close();
