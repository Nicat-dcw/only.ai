const config = {
    BASE:"https://gateway.nicat-dcw.xyz/api/v1/ai/addNewAnswer"
}
const axios = require("axios")
module.exports = async ({kelime, yazar}) => {
    if(!kelime) throw new TypeError("[API] Lütfen bir kelime giriniz!")
const data = await axios.post(config.BASE, `a=${kelime}`).then(x => {
    
    return kelime + ' Isimli Kelime Sisteme Eklendi!.'
if(x.error) return;
})
}
 
