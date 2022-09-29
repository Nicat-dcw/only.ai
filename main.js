const axios = require("axios") 
const chalk = require("chalk")
const EventEmitter = require("node:events")
const rexarTools = require("rexar-tools").default
const config = {
    BASE: "https://gateway.nicat-dcw.xyz/api/v1/ai?q=",
    soruError:"Bir Soru Belirtiniz.",
    hata: "Hata Oluştu! Tekrar Deneyiniz!",
    releaseServer:"https://gateway.nicat-dcw.xyz/api/v1/ai/@me/releases"

}
const getConfigData = require("./set.js")
const getReleaseData = require("./release.js")
/*
module.exports = async function ({ayarlar: async function(key){ return;} }) => {*/
module.exports = class Sor extends EventEmitter{
async sor(soru, ayarlar, configs = {}){
    const thisModule = await rexarTools.npm("only.ai")
    if(require(`./package.json`).version !== thisModule.version){
        console.log(chalk.red("=> ") + chalk.blue("Görünüşe göre eski bir Only.ai versiyonu kullanıyorsunuz. Yenisini npm i only.ai@latest komutuyla indire bilirsiniz."))
    } else return;
    if(!getConfigData) throw new TypeError("[HATA] Lütfen bir accessToken anahtarı kullanınız!")
    try{
        
    console.log(chalk.green("> Only.ai <") + chalk.yellow(" | Başlatıldı!"))
    console.log(chalk.blue("Yapımcı:") + chalk.red("Only Cheeini (https://www.nicat-dcw.xyz)"))
    if(!soru) throw new TypeError(config.soruError)
    //const data = await axios.get(`https://gateway.nicat-dcw.xyz/api/v1/ai?q=${soru}`)
    const data = axios.get(`https://gateway.nicat-dcw.xyz/api/v1/ai?q=${soru}`).then(resp => {
       console.log(data && resp.data.answer.content)
        return data && resp.data.answer.content || config.hata;
    })
        
    } catch(error) {
        this.emit("hata", error)
        console.error(error)
        const hata = new Error(error)
        hata()
        return `${config.hata}`
    }
  }
}

async function releases(){
      
const get_release = await axios.get(config.releaseServer).then(x=>{
   const cikti = x.data
      // cikti.replace("Version:", "Versiyon:")
    return x.data || "Güncel Bir Güncelleme Bulunamadı!"
})
  //  getReleaseData.releases()
}
    

