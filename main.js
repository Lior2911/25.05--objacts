var manager = {
  firstName : "lior",
  lastName : "aytegev",
  age : 31,
  salary : 50000
}
document.write(manager)

var employee = {
  firstName: "jhon ",
  lastName:" doe",
  yearOfBirth: 1990 ,
  email:" someMail@walla.com ",
  adress:" lod david ha meleh 2",
}
document.write(employee)

var fruit = {
  nameOfFruit:"mango ",
  color:" yellow/orange ",
  type:" tropic "
}
document.write(fruit.nameOfFruit)
document.write(fruit.color)
document.write(fruit.type)

var classN = {
  numOfClass: 1,
  numOfStudent : 5,
  nameOfStudent: ["lior,daniel,nati,hen,eldad"],
}
for (var i = 0 ; i <classN.length ; i++ ){
  document.write(classN[i]+"<br>")
}

var gan = {
  nameOfGanenet: "shula",
  nameOfKids : ["lior","daniel","nati","hen","eldad","abayneh","solomon","dawit","yoni","yosi"],
  numOfkids :10,
  nameOfStreet : prompt()
}
for(var i = 0; i<gan["nameOfKids"].length;i++){
  document.write(gan["nameOfKids"][i]+"<br>")
}
var userKey = prompt("enter something")
document.write(gan[userKey] )