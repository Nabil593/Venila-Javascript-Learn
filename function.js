function jussKhaw () {
    console.log("Ei naw lebur juss");
}
jussKhaw()

function myRoutin() {
    console.log("Traying Wake up early");
    console.log('Take breakfast');
    console.log("Go work");
}
myRoutin()

function familyMember() {
    console.log('Mother');
    console.log("Father");
    console.log("Sister");
    console.log("Me");
}
familyMember()

function taskDone() {
    console.log("Academic study");
    console.log("Skill develop");
    console.log("Englisg learn");
    console.log("Listing podcast");
}
taskDone()

function greetme() {
    console.log("Good morning! Have a Great Day!!");
}
greetme()

function getFavFriend() {
    console.log("Sourove");
    console.log("Pulok");
    console.log("Ovi");
}
getFavFriend()

function introduceMyself() {
    const mySelf = {
        name : "Nabil Reza",
        Age : 18,
        Address : "Rajshahi",
        Phone : '01781269971',
        height : "5.7 inc",
        'Favroute Food' : "Pinuts butter"
    };
    console.log(mySelf);
};
introduceMyself()

function math(number) {
    let multiple = number * 2;
    console.log(multiple); 
};
math(6);
math(55);
math(9999999);


function squar(numbers) {
    let borgo = numbers * numbers;
    console.log('Square of', numbers, 'is :', borgo );
};
squar(6);
squar(9);
squar(778);


function add(num1, num2) {
    let sum = num1 + num2;
    console.log(sum);
};
add(5, 5);


function addAll(a ,b, c, d, e, f) {
    let sum = a + b + c + d + e + f;
    console.log(sum);
};
addAll(1, 4, 5, 6, 2, 4);


function difference(nim1, nim2 ) {
    const diff = nim1 - nim2;
    console.log(diff);
};
const fatherAge = 32;
const sonAge = 18;
difference(fatherAge, sonAge);


function addNumber(a, b) {
    console.log(arguments);
    return a + b;
};

addNumber(5, 8, 9, 6);

function hello() {
    let sum = 0;
    for (num of arguments) {
        sum = sum + num;
    }
    console.log(sum);
};
hello(2, 3, 4, 5, 6, 7, 8, 9, 0, 1);




function hello() {
    let sum = 0;
    for (num in arguments) {
        sum = sum + num;
    }
    console.log(sum);
};
hello(2, 3, 4, 5, 6, 7, 8, 9, 0, 1);


function hello() {
    let sum = 0;
    for (num of arguments) {
        sum = sum + num;
    }
    console.log(sum);
};
hello(2, 3, 4, 5, 6, 7, 8, 9, 0, 1);

function age(age1, age2) {
    let totalAge = age1 + age2;
    console.log(totalAge);  
};

let fathereAge = 40;
let soneAge = 25;
age(fathereAge, soneAge);

function nume(n1, n2) {
    let multiple = n1 * n2;
    console.log(multiple);
};
nume(20, 15);

function mark(math, english, bangla) {
    let totalmarks = math + english + bangla;
    console.log(totalmarks);
};
const  mathMark = 90;
const englishMark = 85;
const banglaMark = 80;
mark(mathMark, englishMark, banglaMark);


function age(birdYear) {
    let presentAge = 2025 - birdYear;
    console.log(presentAge);
 };
 age(1980);

function Laow(money) {
    const perLowaPrice = 35;
    const totallawa = money / perLowaPrice;
    console.log("I get total :", Math.floor(totallawa), "lowa");
};
Laow(50);

function input(a, b, c, d) {
    let  totalnumer = a + b + c +d;
    let numer = 4
    const gor = totalnumer / 4;
    console.log(gor);
}
input(6, 56, 89, 1008);


function buyPrice(price) {
    const sellprice = price + 250;
    console.log(sellprice);
};
buyPrice(500);

function birdthYear(year) {
    const willYear = year + 100;
    console.log(willYear);
}
birdthYear(1990);

function spendTime(mobile) {
    const totalSpend = mobile * 30;
    console.log(totalSpend);
};
spendTime(2)





function added(number) {
    const result = number * 5;
    return result
};
const bn = added(4);
console.log(bn);



function add(price1, price2) {
    const total = price1 + price2;
    return total;
};

const l = add(90, 133);
console.log(l);




function add(price1, price2) {
    return price1 + price2;
};

const N = add(90, 133);
console.log(N);



const potato = 35;
const onion = 62;
const shirt = 500;
const pant = 1250;
function ad(price1, price2) {
    return price1 + price2;
};
const bill1 = ad(potato, onion);
const bill2 = ad(shirt, pant);
const totalCost = ad(bill1, bill2);
console.log(totalCost);

function domath(num1, num2) {
    const sum = num1 + num2;
    const diff = num1 - num2;
    const multiple = sum * diff;
    const result = multiple / 2;
    return result;
};
const final = domath(10, 5);
console.log(final);

function isEven(num) {
    if(num % 2 === 1) {
        return true;
    } else {
        return false;
    };
};
console.log(isEven(10));


function isRight(numberrr) {
    if (numberrr > 10) {
        return true;
    } else {
        return false;
    };
};
console.log(isRight(11));

function isYes(nume) {
    if (nume % 13 === 0) {
        return true;
    } else {
        return false;
    };
};
console.log(isYes(26));


function price(rice, curry, drinks) {
    return rice + curry + drinks;
};
console.log(price(13, 45, 60));

function age(ageCalculate) {
    if (ageCalculate > 18) {
        return "Eligible for voting";
    } else {
        return "Not eligible";
    };
};
console.log(age(21));


function input(word) {
    return word.length;
};
console.log(input("Hello World"));


function num(math1, math2, math3) {
    const sum = math1 + math2 + math3;
    const gor = sum / 3
    return gor;
};
console.log(num(3, 4, 5));


function nummm(one) {
    if (one < 0) {
        const result = one * -1;
        return result 
    };
};
console.log(nummm(-90));

function mathNum(string) {
    const leng = string.length;
    if (leng % 2 === 0) {
        return "Even Math";
    } else {
         return "Odd Math";
    };
};
console.log(mathNum("Nabil"));


function double(num, develop) {
    if (develop === true) {
        return num * 2;
    } else {
        return num * 3;
    };
};
console.log(double(7, true));
console.log(double(7, false));



function numberOfElement(nums) {
    const len = nums.length;
    return len
};
const lene = numberOfElement([12, 45, 78, 45, 121254, 4, 5]);
console.log(lene);


function numberOfElement(nums) {
const len = nums.length;
return len;
}
const len = numberOfElement([12, 45, 78, 45, 121254, 4, 5]);
console.log(len);











function allArry(array) {
    const len = array.length;
    if (len % 2 === 0) {
        return "This is Even"; 
    } else {
        return "This is Odd";
    };
};

const arr = ["nabil", 90, "Sumon", 899, "Tanha" ];
console.log(allArry(arr));


function nameOf(word) {
    const firstAlfa = word[0];
    return firstAlfa;
};

console.log(nameOf("Raju"))

function num(number) {
    if (number > 10) {
        return number / 10;
    } else {
        return number * 10;
    };
};
console.log(num(50));

function arr(array) {
    return array[0] + array[1];
};
console.log(arr([5, "Nabil"]));


function num(n) {
    if (n > 0) {
        return n * 2;
    } else {
        return n * 3;
    };
};
console.log(num(-98));


function isName(firstName, secondname) {
    const len1 = firstName.length;
    const len2 = secondname.length;
    if (len1 > len2) {
        return true;
    } else {
        return false;
    };
};
console.log(isName("Nabil", "Reza"));

function numbers(nums1, nums2) {
    const multiple = nums1 * nums2;
    if (multiple > 100) {
        return multiple / 2;
    } else {
        return multiple;
    };
};
console.log(numbers(10, 4));


function isarray(array) {
    let sum = 0;
    for (const numer of array) {
        sum = sum + numer;
    };
    return sum;
};
console.log(isarray([454, 2, 3, 4, 5]));

function isItArray(array) {
    let sum = 0;
    for (const num of array) {
        if ( num % 2 === 0) {
            sum = sum + num;
        }
    };
    return sum
} ;
console.log(isItArray([2, 4, 5, 10, 78, 9]));





























function sumOfOdd(arrays) {
    let sum = 0;
    for (const number of arrays) {
        if (number % 2 === 1) {
            sum = sum +number;
        };
    };
    return sum;
};
console.log(sumOfOdd([5, 15, 8, 7]));





function smallTwo(arr) {
    const one = arr[0];
    const two = arr[1];
    if (one < two) {
        return one;
    } else {
        return two;
    };
};
console.log(smallTwo([10000, 100008, 44, 5, 7, 8]));


function isAge(age) {
    if (age < 18) {
        return 18;
    } else if (age > 45) {
       return 45; 
    } else {
        return age;
    };
};
console.log(isAge(50));



function friendArray(array) {
    let sum = 0;
    for (const numbers of array) {
        if (numbers % 4 === 0) {
            sum += numbers;
        };
    };
    return sum;
};
console.log(friendArray([2, 4, 5, 7, 8, 32, 45]));


function isNumber(num) {
    if (num < 20) {
        return num * 2;
    } else {
        return num / 20;
    };
};
console.log(isNumber(10));


function isnegeiveNum(numbers) {
    let sum = 0;
    for (const num of numbers) {
        if (num < 0) {
            sum += num;
        };
    };
    return sum;
};
console.log(isnegeiveNum([-2, 90, -7, 8, -4, -3, -5, 7, 6, 5]));



function isarrayes(array) {
    let multiple = 1;
    for (const num of array) {
        if (num % 3 === 0) {
            multiple *= num;
        };
    };
    return multiple;
};
console.log(isarrayes([4, 5, 21, 7, 30, 10, 48]));