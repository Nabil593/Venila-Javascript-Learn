// const fruites = ['Mango', 'Apple','Banana', 'Orange', 'Jackfruite', 'Watermelon'];
// for (const fru of fruites) {
//     console.log(fru);
// };

// const favSubject = ['Marketing', 'Managment', 'ICT', 'Chemistry','Bangla'];
// for (const subject of favSubject) {
//     console.log(subject);
// };

// const favFood = ['Nuts', 'Ots', 'Avocado', 'Banana', 'Honey nuts'];
// for (const food of favFood) {
//     console.log(food);
// };

// const familyBirdthYear = [1996, 1999, 2010, 2006];
// for (const year of familyBirdthYear) {
//     console.log(year);
// };

// const footbalPlayer = ['Ronaldo', 'Messi', 'Neimar', 'M-Bappy', 'Maradona'];
// for (const player of footbalPlayer) {
//     console.log(player);
// };


// const examDate = [20, 22, 24, 26, 28 ,30, 32];
// for (const date of examDate) {
//     console.log(date);
// };










// let nume = 1;
// while (nume < 5) {
//     console.log(nume);
//     num++;
// };

// let num = 0;
// while (num < 5) {
//     console.log('Bamboo Eating High School');
//     num++;
// };

// let time = 0;
// while (time < 10) {
//     console.log("I will preactice pograming for a minimum 3 hourse every day");
//     time++;
// };

// let number = 1;
// while (number <= 20) {
//     console.log(number);
//     number++;
// }

// let sencureNumber = 50;
// while (sencureNumber <= 100) {
//     console.log(sencureNumber);
//     sencureNumber++;
// };

// let numbers = 1;
// while (numbers <= 10) {
//     console.log(numbers * 3);
//     numbers++;
// };

// let bigNumber = 111;
// while (bigNumber >= 110) {
//     console.log(bigNumber / 2);
//     bigNumber--;
// };





//   let numbera = 1;
//   while (numbera <= 10) {
//     console.log(numbera);
//     numbera++;
//   };


// let num = 1;
// let sum = 0;
// while (num <= 10) {
//     sum = sum + num;
//     num++;
//     console.log(sum);
// };

// let songkha = 50;
// while (songkha <= 100) {
//     console.log(songkha);
//     songkha++;
// };


// let a = 5;
// let sum = 0;
// while (a <= 15) {
//     sum = sum + a;
//     a++;
// };
// console.log(sum);


// let roll = 1;
// let totalRoll = 0;
// while (roll <= 50) {
//     console.log(roll);
//     totalRoll = totalRoll + roll;
//     roll++;
// };
// console.log(totalRoll);

// let X = 21;
// let plus = 0;
// while (X <= 50) {
//     plus = plus + X;
//     X++;
//     console.log(plus);
// };


// let D = 20;
// let S = 0;
// while (D <= 40) {
//     S = S + D;
//     D++;
// };
// console.log(S);

// for (i = 0; i <= 5; i++) {
//     console.log(i);
// }

// for (a = 1; a <= 10; a++) {
//     console.log(a);
// };

// for (b = 50; b <= 100; b++) {
//     console.log(b);
// };




// let sum = 0;
// for (num = 11; num <= 20; num++) {
//     sum = sum + num;
//     console.log(sum);
// };

// // প্রথমবার:
// num = 11 → শুরুর মান

// num <= 20 → ✅ সত্য

// কাজ চলে → sum = sum + 11

// তারপর → num++ → এখন num = 12

// দ্বিতীয়বার:
// num = 12

// num <= 20 → ✅ সত্য

// কাজ চলে → sum = sum + 12

// তারপর → num++ → এখন num = 13



// for (n = 150; n <= 170; n++) {
//     console.log(n);
// };

// let sum = 0;
// for (let roll = 31; roll <= 58; roll++) {
//     sum = sum + roll;
//     console.log(sum);
// };


// let result = 0;
// for (let F = 25; F <= 75; F++) {
//     result = result + F;
//     console.log(result);
// };



// let sum = 0;
// for (let i = 150; i <= 170; i++) {
//     sum = sum + i;
// };
// console.log(sum);

// for (let i = 0; i <= 20; i++) {
//     if (i % 2 == 0) {
//         console.log(i);
//     };
// };

// for (let a = 0; a <= 20; a++) {
//     if (a % 2 == 1) {
//         console.log(a);
//     };
// };

// for (let b = 0; b <= 20; b++) {
//     if (b % 2 != 1) {
//         console.log(b);
//     };
// };

// let a = 57;
// let b = 2;
// console.log(a % b);

// খুব ভালো প্রশ্ন করেছো — “কেন != 1 মানে একমাত্র অন্য সম্ভাব্য মান 0?”

// চলো এটা পুরোপুরি পরিষ্কারভাবে বুঝে নিই:

// 🎯 বিষয়টা বোঝার জন্য ২টি মূল পয়েন্ট আছে:
// 1. % 2 অপারেশন কেবল দুটি রেজাল্ট দিতে পারে:
// যেকোনো সংখ্যা % 2 করলে, শুধু দুটি সম্ভাব্য মান হয়:
// 👉 0 অথবা 1

// কারণ 2 দিয়ে কোনো পূর্ণসংখ্যা ভাগ করলে বাকি (remainder) হতে পারে কেবল:

// 0 → যদি সংখ্যা জোড় হয় (divisible by 2)

// 1 → যদি সংখ্যা বিজোড় হয় (not divisible by 2)

// উদাহরণ:

// 6 % 2 = 0 ✅

// 7 % 2 = 1 ✅

// অন্য কিছু হয় না ❌

// 2. != 1 মানে “1 না এমন যেকোনো মান”
// এখন b % 2 != 1 মানে হলো —
// b % 2 এর মান যদি 1 না হয়, তবে শর্তটি সত্য হবে।

// এখন যেহেতু b % 2 কেবল 0 অথবা 1 হতে পারে,
// এবং তুমি 1 বাদ দিচ্ছো,
// তাই একমাত্র সম্ভাব্য মান 0-ই থাকে।

// ✅ তাই:
// javascript
// Copy
// Edit
// if (b % 2 != 1)
// এই শর্ত তখন কেবল তখনই সত্য হবে,
// যখন b % 2 == 0, অর্থাৎ b জোড় সংখ্যা।

// 🔁 যদি % 3 হতো?
// ধরো তুমি লিখলে b % 3 != 1

// তখন b % 3 হতে পারে: 0, 1, 2
// আর != 1 মানে তখন 0 এবং 2 — কারণ এখানে সম্ভাব্য মান তিনটি।

// উপসংহার:
// b % 2 != 1 মানে একমাত্র 0, কারণ:

// % 2 কেবল 0 বা 1 হয়

// != 1 মানে “1 না এমন যেকোনো কিছু”

// আর 1 ছাড়া একমাত্র সম্ভব 0

// তুমি চাইলে আমি একে একটা টেবিল বা ছোট ভিজ্যুয়াল দিয়েও বোঝাতে পারি — চাও?







// You said:
// tahole 
// let a = 57;
// let b = 44;
// console.log(a % b); 

// ata to 1 ba 0 hoilo na? 


// ChatGPT said:
// দারুণ! তুমি আসলেই ভালোভাবে চিন্তা করছো। এখন চলো তুমি যে প্রশ্ন করেছো, সেটা পরিষ্কারভাবে দেখি:

// 🔍 তোমার কোড:
// javascript
// Copy
// Edit
// let a = 57;
// let b = 44;
// console.log(a % b);
// এখানে a % b মানে — 57 কে 44 দিয়ে ভাগ করলে যেটুকু বাকি থাকে সেটা।

// ✏️ হিসাব করে দেখা যাক:
// 44 × 1 = 44

// 57 − 44 = 13
// অর্থাৎ,
// 57 % 44 = 13

// ✅ তাই কনসোলে 13 প্রিন্ট হবে।

// ❗ তাহলে আগের % 2 আর এটা আলাদা কেন?
// খুব ভালো প্রশ্ন! বিষয়টা হচ্ছে:

// % (modulus) অপারেটরের মান বিভাজকের উপরে নির্ভর করে
// b % x করতে গেলে, রেজাল্ট সবসময় 0 থেকে x-1 এর মধ্যে হয়।

// x	সম্ভাব্য b % x এর রেজাল্ট
// 2	0, 1
// 3	0, 1, 2
// 5	0, 1, 2, 3, 4
// 44	0, 1, 2, ..., 43

// ✅ উপসংহার:
// % 2 করলে রেজাল্ট কেবল 0 অথবা 1 — তাই != 1 মানেই শুধুই 0।

// কিন্তু % 44 করলে রেজাল্ট হতে পারে 0 থেকে 43 এর যেকোনো সংখ্যা —
// তাই != 1 মানে তখন 0, 2, 3, ..., 43 সব কিছুই হতে পারে — কেবল 1 বাদে।




// for (let s = 0; s <= 20; s += 2) {
//     console.log(s);
// };

// for (let p = 1; p <= 30; p++) {
//     if (p % 3 == 0 && p % 5 == 0) {
//         console.log(p);
//     };
// };













// for (let r = 20; r <= 50; r++) {
//     if (r % 7 == 0) {
//         console.log(r);
//     };
// };

// for (let t = 40; t <= 80; t++) {
//     if (t % 5 == 0 && t % 7 == 0) {
//         console.log(t);
//     };
// };

// let total = 0;
// for (let w = 1; w <= 40; w++) {
//     if (w % 13 == 0) {
//         total = total + w;
//     };
// };
// console.log(total);

// let total = 0;
// for (let w = 13; w <= 40; w += 13) {
//     total += w;
// }
// console.log(total);


// for (let k = 1; k <= 50; k += 4) {
//     console.log(k);
// };

// for (let j = 0; j <= 100; j++) {
//     if (j % 9 == 0 && j % 6 == 0){
//         console.log(j);
//     }
// }

// let totalResult = 0;
// for (let u = 1; u <= 50; u++) {
//     if (u % 3 == 0 && u % 4 == 0) {
//         totalResult = totalResult + u;
//     };
// };
// console.log(totalResult);

// let sum = 0;
// for (let u = 12; u <= 50; u += 12) {
//     sum += u;
// }
// console.log(sum);

// if (0) {
//     function getData() {
//         console.log("data");
//     }
// }
// console.log(getData);

// for (let i = 0; i <= 15; i++) {
//     if (i >= 7 ) {
//         break;
//     }
//     console.log(i);
// };

// for (q = 0; q <= 10; q++) {
//     if (q == 6) {
//         continue;
//     };
//     console.log(q);
// };


// for (q = 0; q <= 10; q++) {
//     console.log(q);
//     if (q == 6) {
//         break;
//     };
// };





























// for (i = 1; i <= 30; i++) {
//     console.log(i);
//     if (i >= 15) {
//         break;
//     }
// }

// for (a = 1; a <= 40; a++) {
//     if (a % 7 == 1) {
//         console.log(a);
//     };
// };

// for ( r = 1; r <= 15; r++) {
//     if ( r== 9) {
//         continue;
//     }
//     console.log(r);
// }

// for (k = 1; k <= 20; k++) {
//     if (k == 12) {
//         continue
//     }
//     console.log(k);
// }

// for (l = 1; l <= 25; l++) {
//     if (l % 3 == 0) {
//         continue
//     }
//     console.log(l);
// }

// for (h = 91; h <= 120; h++) {
//     if (h % 10 == 0) {
//         break;
//     }
//     console.log(h);
// }