const btn = document.getElementById("btn1");

// btn.onclick = (e) => {
//     console.log(e);    
//     // console.log("Hello Moco");
//     // let a = 10;
//     // a++;
//     // console.log(a);
// };


// btn.addEventListener("click", () => {
//     console.log("Hello Mococ Bothers");
// });


// btn.addEventListener("click", (e) => {
//     console.log(e.type);
//     console.log(e.target);
//     console.log(e.target);
// });

btn.addEventListener("click", () => {
    console.log("Hello Mococ Bothers01");
});

btn.addEventListener("click", () => {
    console.log("Hello Mococ Bothers02");
});

const even03 = () => {
    console.log("Hello Mococ Bothers03");
};

btn.removeEventListener("click", even03);