const ask = require('readline-sync')
let {cheEmail} = require('./checkEmail.js')
let {chePhone} = require('./chephone.js')
let {Pas} = require('./chepass')

let cr = ()=>{
    const d = {name:ask.question('enter the name: '),email:cheEmail(ask.question('Your Email____:')),phone_no:chePhone(ask.question('enter the phone-no: ')),pin:Pas(ask.question('enter the pin: '))};
    console.log('singup successfull...........\n');
    return d;
}
module.exports = {cr};