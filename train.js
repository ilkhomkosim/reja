//TASK_A

// function countLetter(letter, word) {
//     const lowercasedWord = word.toLowerCase();
//     const letterCount = (lowercasedWord.match(new RegExp(letter, 'g')) || []).length;

//     return letterCount;
// }

// const result = countLetter("a", "matematika");
// console.log(result); 



// Tasks MIT_task
console.log("Jack Ma maslahatlari");
const list =[
    "yaxshi talaba bo'ling", //0-20
    "To'gri boshliq tanlang va ko'proq xato qiling", //20-30
    "O'zingiz uchun ishlashni boshlang", //30-40
    "Siz kuchli bo'lgan narslarni qiling", //40-50
    "Yoshlarga investitsiya qiling", //50-60
    "Oilangizga ko'proq vaqt ajrating", //60
];
// CALLBACK
// a = age
function maslahatBering(a, callback) {
    if(typeof a !== "number") callback("insert number", null);
    else if( a <= 20) callback(null, list[0]);
    else if( a > 20 && a <= 30) callback(null, list[1]);
    else if( a > 30 && a <= 40) callback(null, list[2]);
    else if( a > 40 && a <= 50) callback(null, list[3]);
    else if( a > 50 && a <= 60) callback(null, list[4]);
    else{
        setTimeout(function(){
            callback(null, list[5]);
        },5000)
    }
}
console.log("passed here");
maslahatBering(30, (err, data) => {
    if(err) console.log("ERROR:", err);
    console.log("Javob:", data);
});
console.log("passed her 1");


//ASYN FUNCTION
// async function maslahatBering(a) {
//     if(typeof a !== "number") throw new Error("insert number");
//     else if( a <= 20) return list[0];
//     else if( a > 20 && a <= 30) return list[1];
//     else if( a > 30 && a <= 40) return list[2];
//     else if( a > 40 && a <= 50) return list[3];
//     else if( a > 50 && a <= 60) return list[4];
//     else{
//         return new Promise((resolve, reject) => {
//             setTimeout(function(){
//             resolve(list[5]);
//             },5000)
//         })
//         // return list[5];
//         // setTimeout(function(){
//         //     callback(null, list[5]);
//         // },5000)
//     }
// }

//then/catch
// console.log("passed here");
// maslahatBering(10).
//     then(data =>{
//     console.log("Javob:", data);
// }).
//     catch(err => {
//     console.log("ERROR:", err);
// })
// console.log("passed her 1");

//asyn/await

// async function run() {
//     let javob = await maslahatBering(65);
//     console.log(javob);
//     javob = await maslahatBering(34);
//     console.log(javob);
//     javob = await maslahatBering(47);
//     console.log(javob);
// }

// run();
// const a = 0
// const b = ["matematika"]
// function find(a, b){
//     for(let i=a; i <= [b].length; i++);
//         console.log(i, a);
//     return a
// }

// find();


