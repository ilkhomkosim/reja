// D-TASK: 

/*Shunday class tuzing tuzing nomi Shop, va uni constructoriga 3 hil mahsulot
pass bolsin, hamda classning 3ta methodi bolsin, biri qoldiq, biri sotish va 
biri qabul. Har bir method ishga tushgan vaqt ham log qilinsin.
MASALAN: const shop = new Shop(4, 5, 2); shop.qoldiq() return hozir 20:40da 
4ta non, 5ta lagmon va 2ta cola mavjud! shop.sotish('non', 3) & shop.qabul('cola', 4)
& shop.qoldiq() return hozir 20:50da 1ta non, 5ta lagmon va 6ta cola mavjud!

*/

// const moment = require('moment');

// const now = moment();

// console.log("Current Date and Time:", now.format("YYYY-MM-DD HH:mm:ss"));
// class Shop {
//     //state


//     constructor(non, cola, lagmon) {
//         this.non = non;
//         this.cola = cola;
//         this.lagmon = lagmon;
//     }

//     // methods
//     qoldiq() {
//         console.log(now.format(" HH:mm"), "da");
//         console.log( ` ${this.non} ta non , ${this.lagmon} ta lag'mon va ${this.cola} ta cola mavjud!`);
//     }
//     sotish() {
//         console.log(`${this.non} ta , ${this.lagmon} ta , ${this.cola} ta sotildi`);
//     }

//     qabul() {
//         console.log(`${this.non} ta , ${this.lagmon} ta , ${this.cola} ta qabul qilindi`);
//     }
// }


// const shop = new Shop(5, 4, 8);
// shop.qoldiq();

function checkContent(string1, string2) {
    const sortedString1 = string1.split('').sort().join('');
    const sortedString2 = string2.split('').sort().join('');

    return sortedString1 === sortedString2;
  }

  console.log(checkContent("dulemo", "module"));
