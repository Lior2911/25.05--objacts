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


// function getDog (){
//   var dog = {};
//   var dogArray = []
//   var numberOfDogs = prompt("how many dogs you have?")


//   for (var i = 0 ;i<numberOfDogs;i++){
//     dog["dogName"] = prompt("enter name")
//     dog["age"] = prompt("enter age")
//     dog["type"] = prompt("enter type")
//     dog["owners"] = prompt("name of owner")
//     dogArray.push(dog)
//     document.write("<p>"+dog.dogName+"</p>"+"<p>"+dog.age+"</p>"+"<p>"+dog.type+"</p>"+"<p>"+dog.owners+"</p>")

//   }
// }
// getDog()

// 19.	צרו פונקציה הקולטת מספר מהמשתמש ומייצרת מספר אובייקטים, על פי הקלט, של חרק, לכל חרק יש שם רגיל, שם מדעי, מספר רגליים והאם יש לו כנפיים. תנו להם ערכים מהמשתמש, הדפיסו רק את החרקים שיש להם כנפיים, כל חרק ב H3 משלו.

// function getBugs(){
//   var bugs = {} ; 
//   var numbersOfBugs = prompt("how many bugs can u count?") ; 
//   for (var i = 0 ; i < numbersOfBugs ; i++){
//     bugs["commonName"] = prompt("enter a common name");
//     bugs["scinceName"] = prompt("enter scince Name");
//     bugs["numOfLags"] = prompt("enter num of Legs");
//     bugs["gotWings?"] = confirm("does he got wings answer by yes or no")
    
//   }
//   if(bugs["gotWings?"] == true){
//     document.write("<h3>"+bugs.commonName+"</h3>"+"<h3>"+bugs.scinceName+"</h3>"+"<h3>"+bugs.numOfLags+"</h3>")
//   }
// }
// getBugs()

// 20.	צרו פונקציה הקולטת מספר מהמשתמש ומייצרת מספר אובייקטים, על פי הקלט, של ילד, לכל ילד יש שם מלא, גיל, והאם הוא בגן. תנו להם ערכים מהמשתמש, הדפיסו רק את הילדים מעל גיל 4 למסך, כל ילד ב p משלו.
// // 

// function getKids(){
//   var numOfKids = prompt("how many kids u got")
//   for(var i = 0 ; i<numOfKids ; i++){
//     var kids = {
//       fullName : prompt("full name"),
//       kidsAge : prompt("kid's age"),
//       kidInClass : prompt("the kid in this class?")
//     };
//   }
//   if(kids.kidsAge > 4){
//     document.write("p"+kids.fullName+kids.kidsAge+"</p>")
//   }
// }
// getKids()

// 21.	צרו פונקציה המקבלת מספר כארגומנט ומייצרת מספר אובייקטים, על פי המספר, של מחשב, לכל מחשב יש חברה, דגם, משקל והאם יש במלאי. תנו להם ערכים מהמשתמש, הדפיסו רק את המחשבים שיש במלאי והמשקל שלהם מעל 2 קילו למסך, כל מחשב ב p משלו.

// function getComputer(num){
//   for (var i = 0 ; i < num ; i++){
//      var computer = {
//     brand : prompt("brand of comp?"),
//     model : prompt("name the model"),
//     weight : prompt("kg?"),
//     availble : confirm("this model availble?")
//   }
// }
// if(computer.weight > 2 && computer.availble == true){
//   document.write("p"+computer.brand+computer.model+"</p>")
// }
// }
// getComputer(prompt("how many com' u want to see?"))

// 22.	צרו פונקציה המקבלת מספר כארגומנט ומייצרת מספר אובייקטים, על פי המספר, של מורה, לכל מורה יש שם מלא, שכר שעתי, אימייל ושנת לידה. תנו להם ערכים מהמשתמש, הדפיסו רק את המורים שמקבלים יותר מ 100  שקל לשעה או שנת הלידה שלהם נמוכה מ 1990 למסך, כל מורה ב SPAN משלו.

// function getTeachers (num){
//   for(var i = 0 ; i < num ; i++){
//     var teacher = {
//       fullName : prompt("full name"),
//       salary : prompt("salary"),
//       yearOfBirth : prompt("year of birth"),
//       email : prompt("enter your email")
//     }
//     if (teacher.salary<100 || teacher.yearOfBirth <1990){
//       document.write(
//         "<span>"+teacher.fullName+teacher.email+"</span>"
//       )
//     }
//   }
// }
// getTeachers(prompt("enter a number"))

// 23.	צרו פונקציה המייצרת על פי ארגומנט, מספר אובייקטים, של רהיט, לכל רהיט יש שם, מותג, מערך חנויות בהן ניתן לקנות את הרהיט, ומחיר. תנו להם ערכים מהמשתמש, הדפיסו למסך את שם הרהיט ומתחת את החנויות בהן ניתן לקנות הרהיט.

// function getRahit(num){
//   for(var i = 0 ; i < num ; i++){
//       var rahit = {
//     name : prompt("rahit name"),
//     model : prompt("what model do u want?"),
//     stores : [" lod , ashkelon , tel-aviv "],
//     price : prompt("name the price")
//   }
//   document.write(rahit.name+"</br>"+rahit.stores)
//   }
// }
// getRahit(prompt("enter number of rehitim"))

// 24.	צרו פונקציה המייצרת על פי ארגומנט, מספר אובייקטים, של דירה, לכל דירה יש כתובת, מחיר השכרה, מחיר קניה, מערך מתעניינים בדירה, והאם יש תיווך. תנו להם ערכים מהמשתמש, הדפיסו למסך רק את האובייקטים שאין להם תיווך, לכל דירה הדפיסו את הכתובת ומתחת את המועמדים.

// function getAppart (num){
//   for(var i = 0 ; i < num ; i++){
//       var appartment = {
//     adress : prompt("adress"),
//     rentPerMonth : prompt("rent per month"),
//     price : prompt("price of appart"),
//     otherVisitors : ["eldad,abayneh,solomon"],
//     viaAgent : confirm("via agent?")
//   }
//   }
//   if(appartment.viaAgent == false){
//     document.write(appartment.adress+"<br>"+appartment.otherVisitors)
//   }
// }
// getAppart(prompt("heloo mother fucer,pls enter a num'"))

// 25.	צרו פונקציה המייצרת על פי קלט מהמשתמש, מספר אובייקטים, של מדינה, לכל מדינה יש שם, מספר תושבים, מערך ערים והאם יש בה בית חב"ד. תנו להם ערכים מהמשתמש, הדפיסו למסך רק את מדינות בהן יש בית חב"ד, הדפיסו את שם המדינה ומתחת את הערים.

// function getContrey (num){
//   var cities = []
//   for(var i = 0 ; i < num ; i++){
//     var contery = {
//       name : prompt("contrey name"),
//       population : prompt("num of pop"),
//       citys : prompt("wich citys do u have?"),
//       beitHabad :confirm("does have beit habad?"),
      
//     }
//   }
//   cities.push(contery.citys)
  
//   if(contery.beitHabad == true){
//     document.write(contery.name +"<br>"+contery.citys)

//   }
// }
// getContrey(prompt("enter num of contries"))