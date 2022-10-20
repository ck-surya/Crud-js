const rq = require('readline-sync')
let chePhone = (phone_no)=>{
    return phone_no.length == 10 ?phone_no: chePhone(rq.question('you phone number lenght is no correcr\nEnter phone number carefully___:')) 
}
module.exports = {chePhone};