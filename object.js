// const teacher = {
//     Name : "Mokbul",
//     Subject : "Accounting",
//     Old : 30,
//     Address : ['Rajshahi', 'Katakhali', 'Ruposidanga village'],
// };
// console.log(teacher);

// const tree = {
//     Name : 'Mango tree',
//     Height : '8 ft',
//     Old : 30,
//     NameOfFruite : 'Mango'
// };
// console.log(tree);


// const human = {
//     Name : 'Unknown',
//     old : 'Unknown',
//     Address : "Rajshahi", 
//     Work : 'Unknown'
// }; console.log(human);

// const father = {
//     Name : 'Sumon Reza',
//     Work : 'Agriculture Officer',
//     Old : 34,
//     Child : 2
// };
// console.log(father);

// const motorbike = {
//     Brand : 'Honda',
//     Trayer : 2,
//     Color : 'Black & Red', 
//     MaximumSpeed : '120',
//     Price : 150000
// };
// console.log(motorbike);

// const bird = {
//     Name : 'Egele',
//     Color : 'Black & Gray',
//     Food : 'His wish',
// };
// console.log(bird);

// const laptop = {
//     Brand : 'HP',
//     Proccessor : 'intel core i5',
//     Ram : '8GB',
//     Display : '15.5 inch',
//     Price : 70000
// };
// console.log(laptop);


// const person = {
//     Name : 'Nabil Reza',
//     Age : '18',
//     Address : 'Rajshahi',
//     'Fav Game' : 'Football',
//     'Life Status' : 'Student'
// };
// // console.log(person['Fav Game']);
// // console.log(person["Life Status"]);
// const papa = 'Fav Game';
// console.log(person[papa]);



// const person = {
//     Name : 'Nabil Reza',
//     Age : '18',
//     Address : 'Rajshahi',
//     'Fav Game' : 'Football',
//     'Life Status' : 'Student'
// };

// // console.log(person.Name);
// // console.log(person['Life Status']);

// person["Life Status"] = 'Yes Student';
// person.Name = 'Shearia Reza';

// // console.log(person);
// console.log(person['Name']);
// console.log(person["Life Status"]);


// const player = {
//     Name : 'Nabil',
//     Old : 18,
//     Sports : 'Footbal Academy',
//     Team : 'Black-Fire',
// };
// console.log(player.Team);

// const laptop = {
//     Brand : 'hp',
//     price : 70000,
//     hardDisc : '556GB',
//     Ram : '4GB',
//     screenSize : '15.5 inch',
// };
// console.log(laptop.screenSize);


// const favPlace = {
//     name : 'Coxx Bazar',
//     Distance : '400km',
//     Popularaty : 'High'
// };
// console.log(favPlace['Popularaty']);

// const phone = {
//     brand : 'Nokia',
//     color : 'Black',
//     price : 5000,
// };
// console.log(phone['price']);

// const library = {
//     name : 'Public Library',
//     Location : 'Dhaka',
//     books : 5000,
// };
// console.log(library.books);

// const Movie = {
//     title : 'inception',
//     direction : 'Nolan',
//     rating : 9
// };
// console.log(Movie['rating']);

// const collage = {
//     name : 'ndc',
//     Established : 1949,
//     groups : ['Science', 'Arts', 'Commerce']
// };
// console.log(collage.groups[1]);

// console.log(family.mother['age']);
// console.log(family.father.age);

// const fatherAge = family.father.age;
// const motherAge = family.mother.age;
// const totalAge = fatherAge + motherAge;

// console.log(totalAge);




// const library = {
//     name : 'Public Library',
//     Location : 'Dhaka',
//     books : 5000,
// };
// co
// cnsole.log(Object.values(library));
// if (library.books == 5000) {
//     console.log('Ke bepar!!');
// } else {
//     console.log('AHA re sona amar>>');
// };

// console.log(Object.entries(library));


 
//  const profile = {
//     name : 'Nabil',
//     age : '18',
//     city : 'Rajshahi'
// //  };
//  for (const a in profile) {
//     const value = profile[a]
//     console.log(a, value);
//  }



//  const profile = {
//     name : 'Nabil',
//     age : '18',
//     city : 'Rajshahi'
//  };
//  const keys = Object.keys(profile);
//  for (const key of keys ) {
//     console.log(key, profile[key]);
//  }


//   const profile = { name: "Rahim", age: 28, city: "Dhaka" };
//   const keys = Object.keys(profile);

//   for (const key of keys) {
//    console.log(key, profile[key]);
//   }

// Output: 
// name Rahim
// age 28
// city Dhaka




















































// const book = {
//     name : 'Ak nojore Koran',
//     Author : 'Md. Mijanur Rahman Ajhari',
//     Price : 1499,
// };
// console.log(Object.keys(book));
// console.log(Object.values(book));


// const article = {
//     title : "Learning JS",
//     catagory : "Pograming"
// }
// const key = Object.keys(article)
// console.log(key);
// const checkAuthor = key.includes("Author");
// console.log(checkAuthor);

// if ( "title" in article) {
//     console.log(" Ohh baby");
// } else {
//     console.log("No babu");
// };


// if (article.hasOwnProperty("title")) {
//     console.log(" Ohh baby");
// } else {
//     console.log("No babu");
// };


// const laptop = {
//     brand : "Dell",
//     model : "Inspiron",
//     Price : 45000
// };
// for (const a in laptop) {
//     const value = laptop[a];
//     console.log(a, value);
// }



// const phone = {
//     brand : "Samsang",
//     model : "Gtalaxy S21",
//     Price : 85000
// };
// const property = Object.keys(phone);
// for (const b of property) {
//     console.log(b, phone[b]);
// };



// const bike = {
//     brand : 'Hero Potter',
//     Price : 120000,
//     model : "Splendor"
// };
// const value = Object.values(bike);
// console.log(value);

// const books = {
//     book1 : "Harry Potter",
//     book2 : "The Hobbit",
//     book3 : "Game of Thrones"
// };
// for (const i in books) {
//     console.log(books[i]);
// };



// const numbers = {
//     a : 10,
//     b : 20,
//     c : 30,
//     d : 40
// };
// let sum = 0;
// for (let man in numbers) {
//     sum = sum + numbers[man];
// };
// console.log(sum);

// const player = {
//     name : "Messi",
//     team : "Argentina",
//     goals : 91
// };
// const valu = Object.values(player);
// console.log(valu);

// const building = {
//     floors : 10,
//     address : {
//         street : "Main Road",
//         city : "Dhaka"
//     },
//     type : "Commercial"
// };
// for (const propert in building) {
//     const val = building[propert]; 
//     console.log(propert, val);
// }
// console.log(building.address);



// const building = {
//   floors: 10,
//   address: {
//     street: "Main Road",
//     city: "Dhaka"
//   },
//   type: "Commercial"
// };

// for (let key in building) {
//   const value = building[key];

//   if (typeof value === "object") {
//     // যদি ভেতরে object থাকে (যেমন address)
//     for (let innerKey in value) {
//       console.log(innerKey + ": " + value[innerKey]);
//     }
//   } else {
//     console.log(key + ": " + value);
//   }
// };







// const web = {
//   name : "Golden Web",
//   Create : "MERN stake",
//   Page : 5,
//   Details : {
//     About : "Web develop",
//     Srvece : "Create web develop"
//   },
//   Build : 'WEB server'
// };

// for (let key in web) {
//   const values = web[key];
  
//   if (typeof values == "object" ) {
//     for (let innerKey in values) {
//       console.log(innerKey, values[innerKey]);
//     }
//   } else {
//     console.log(key, values);
//   }
// };





// const nabil = {
//   name : "nabil Reza",
//   age : 18,
//   adress : "Home alone",
// };
// const del = delete nabil.age;
// console.log(nabil);
 

// const adminUser = {
//   name : "Bulbul",
//   role : "CEO",
//   Email : "ronaldo@gmail.com",
//   password : "Old Password"
// };
// Object.seal(adminUser);

// adminUser.name = 'HAAAAAAAA';
// adminUser.password = "New Password";
// delete adminUser.Email;
// console.log(adminUser);













// const headPhone = {
//   brand : "Sony",
//   price : 3000,
//   color : "red"
// };
// Object.freeze(headPhone);

// headPhone.brand = "LALALA Company";
// console.log(headPhone);


// const player = {
//   name : "Messi",
//   goals : 800,
//   club : "Inter Miami"
// };
// Object.freeze(player);

// player.goals = 1000;

// console.log(player);

// const book = {
//   title : "Harry Potter",
//   author : "JK Rowling",
//   pages : 500
// };
// Object.seal(book);
// book.author = "I don't know";
// console.log(book);

// const gadget = {
//   name : "i phone",
//   price : 120000,
//   color : "Black"
// };
// delete gadget.price;
// console.log(gadget);


// const anial = {
//   name : "Tiger",
//   location : "Sundarban"
// };
// Object.freeze(anial);

// anial.location = "Africa";
// console.log(anial);


// const food = {
//   name : "pizza",
//   price : 500,
//   size : "large"
// };
// Object.seal(food);

// food.price = 700;
// food.Test = "Good";
// console.log(food);

