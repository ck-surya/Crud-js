const rq = require('readline-sync')
let cheEmail = (email)=>{
    
    if (email.includes('@gmail.com')){
        return email
    }else{
        console.log('You Entered wrong Email\nExample like - cksurya@gmail.com\n');
        cheEmail(rq.question('Your Email____:'))
    }
}
module.exports = {cheEmail};