const rq = require('readline-sync')
let s_count= 0 ,d_count= 0,Cl_count= 0,sl_count = 0
let Pas =(pin)=>{
    if(pin.length <= 16 && pin.length >=8){
        for (const chr of pin) {
            (chr.charCodeAt() >= 36 && chr.charCodeAt() <= 48 || chr.charCodeAt() >= 58 && chr.charCodeAt() <= 64 || chr.charCodeAt() >= 91 && chr.charCodeAt() <= 96  ) ? s_count+=1 : (chr.charCodeAt() >= 65 && chr.charCodeAt() <= 90 )? Cl_count+=1 : (chr.charCodeAt() >= 97 && chr.charCodeAt() <= 122 ) ? sl_count+=1: (chr.charCodeAt() >= 48 && chr.charCodeAt() <= 57) ? d_count+=1:null
                
        }
        return (s_count >= 1 && d_count >=1 && Cl_count >= 1 && sl_count >=1 )? pin : Pas(rq.question('Weak Password\nRe-Enter password___:'))

    }else{
        Pas(rq.question('your p s_count ,d_count,Cl_count,slassword length is not perfect\nRe-Enter password___:'))
    }
}

module.exports = {Pas}