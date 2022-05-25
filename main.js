// var manager = {
//   firstName : "lior",
//   lastName : "aytegev",
//   age : 31,
//   salary : 50000
// }
// document.write(manager)

// var employee = {
//   firstName: "jhon ",
//   lastName:" doe",
//   yearOfBirth: 1990 ,
//   email:" someMail@walla.com ",
//   adress:" lod david ha meleh 2",
// }
// document.write(employee)

// var fruit = {
//   nameOfFruit:"mango ",
//   color:" yellow/orange ",
//   type:" tropic "
// }
// document.write(fruit.nameOfFruit)
// document.write(fruit.color)
// document.write(fruit.type)

// var classN = {
//   numOfClass: 1,
//   numOfStudent : 5,
//   nameOfStudent: ["lior,daniel,nati,hen,eldad"],
// }
// for (var i = 0 ; i <classN.length ; i++ ){
//   document.write(classN[i]+"<br>")
// }

// var gan = {
//   nameOfGanenet: "shula",
//   nameOfKids : ["lior","daniel","nati","hen","eldad","abayneh","solomon","dawit","yoni","yosi"],
//   numOfkids :10,
//   nameOfStreet : prompt()
// }
// for(var i = 0; i<gan["nameOfKids"].length;i++){
//   document.write(gan["nameOfKids"][i]+"<br>")
// }
// var userKey = prompt("enter something")
// document.write(gan[userKey] )

// var myObject = {};

// myObject.numberOfclass = prompt("enter your name")
// myObject.numberOfStudent = prompt("how much students?")
// myObject.kidsAge = prompt("enter your age")

// console.log(myObject)

// var teacher = {};
// var uservalue = prompt("enter some")
// var userKey = prompt("enter your name")
// teacher[userKey] = uservalue
// console.log(teacher)

// var manager = {};
// for (var i = 0 ; i<4 ; i ++){
//   var keyFromUser = prompt("enter your key")
//   var valueFromUser = prompt("enter your value")
//   manager[keyFromUser] = valueFromUser
// }
// document.write(manager)


// function getCarDetails(){
// var carsArray = [];
// var car = {};
// for (var i = 0 ; i<4;i++){
// car["nameOfCar"]= prompt("what car?");
// car["colorOfCar"] = prompt("what color?");
// car["model"] = prompt("model of the car?");
// car["year"] = prompt("what year the car");
// carsArray.push(car);
// document.write("<div>"+car.nameOfCar+ " " +car.colorOfCar + " " + car.model + " " + car.year +"</div>");

// }
// console.log(carsArray);
// }
// getCarDetails()

// function getCat (){
//   var cat = {}
//   var catArray = []
//   for (var i = 0 ; i < 1 ; i++){
//     cat["catName"] = prompt("cat name")
//     cat["catBirth"] = prompt("year of birth")
//     cat["catType"] = prompt("type of cat")
//     cat["catWeight"] = prompt("weight of cat?")
//     catArray.push(cat)
//     document.write("<h1>"+cat.catName+"</h1>"+"<h1>"+cat.catBirth+"</h1>"+"<h1>"+cat.catType+"</h1>"+"<h1>"+cat.catWeight+"</h1>")
//   }
// }
// getCat()


function getDog (){
  var dog = {};
  var dogArray = []
  for (var i = 0 ;i<1;i++){
    dog["dogName"] = prompt("enter name")
    dog["age"] = prompt("enter age")
    dog["type"] = prompt("enter type")
    dog["owners"] = prompt("name of owner")
    dogArray.push(dog)
    document.write("<p>"+dog.dogName+"</p>"+"<p>"+dog.age+"</p>"+"<p>"+dog.type+"</p>"+"<p>"+dog.owners+"</p>")

  }
}
getDog()