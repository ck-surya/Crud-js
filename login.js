const { cheEmail } = require("./checkEmail")
let log = (data,email)=>{
    let conform;
    let Email = cheEmail(email)
    console.log(Email);
    for (const info of data) {
        info.email=== Email ? conform = true :conform =false
        if (conform === true ){
            console.log('login successful.......\n');
            break
        }
        
    }
}
module.exports = {log}