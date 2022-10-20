const ask = require('readline-sync')
let data = []
let {cr} = require('./create')
let {log} = require('./login') 

while (true) {
    console.log('press 1 for singup\n\npress 2 for login\n\npress 3  for exist\n');
    let command = ask.question('choice one____: ')
    if (command == 1) {
        let d = cr()
        data.push(d)
    } else if (command == 2) {
        let email = ask.question('Enter user Email___:')
        log(data,email)
    } else if (command == 3) {
        console.log(data);
        break
    }
}


