


const axios = require("axios") 
    const chalk = require("chalk")
const config = {
    BASE: "https://gateway.nicat-dcw.xyz/api/v1/ai?q=",
    soruError:"Bir Soru Belirtiniz.",
    hata: "Hata Oluştu! Tekrar Deneyiniz!"
}
module.exports = async (soru, ayarlar,postData = {}) => {
    try{
    console.log(chalk.green("> Only.ai <") + chalk.yellow(" | Başlatıldı!"))
console.log(chalk.blue("Yapımcı:") + chalk.red("Only Cheeini (https://www.nicat-dcw.xyz)"))
    if(!soru) throw new TypeError(config.soruError)
    //const data = await axios.get(`https://gateway.nicat-dcw.xyz/api/v1/ai?q=${soru}`)
    const data = axios.get(`https://gateway.nicat-dcw.xyz/api/v1/ai?q=${soru}`).then(resp => {

//console.log(resp.data.answer.content)
    return resp.data.answer.content
});
  
    } catch(error) {
        console.log(error)
        return `${config.hata}`
    }
}
