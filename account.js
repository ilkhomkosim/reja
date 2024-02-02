
const moment = require('moment')



class Account {
    name;
    #amount;
    #account_id;

    constructor(name, amount, account_id) {
        this.name = name;
        this.#amount = amount;
        this.#account_id = account_id;
    }

    tellMeBalance() {
        console.log(`Sizning hisobingizdagi qoldiq:`, this.#amount);
        return this.#amount;
    }

    withdrawMoney(amount) {
        if(this.#amount > amount){
            this.#amount-= amount;
            console.log(`Hisobingizdan ${amount}  yechildi va qoldiq ${this.#amount}$`);
        } else {
            console.log(` Sizning balansingizdagi pul yetarli emas: ${this.#amount}$`);
        }
    }

    makeDeposit(amount) {
        this.#amount+=amount;
        console.log(`Hisobingiz to'ldirildi , hisobingiz ${this.#amount}$ tashkil etadi`);
    }

    giveMeDetails(){
        console.log(`Salim hurmatli ${this.name} sizning hisobingiz ${this.#amount} $ teng `);
        console.log("Hisob raqamingiz:", this.#account_id);
    }

    static tellMeAboutClass(){
        console.log(` BU class accountlarni yasash uchun xizmat qiladi  `);
    }

    static tellMeTime(){
        console.log(` Hozirgi vaqt ${moment(). format("YYY MM DD HH:mm:ss")} `);
    }
}

module.exports = Account;