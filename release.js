
const axios = require("axios") 
    const config = {

    BASE:"https://gateway.nicat-dcw.xyz/api/v1/ai/@me/releases"
}
//async function rrerelease   
module.exports = async () => {
const get_release = await axios.get(config.BASE).then(x=>{
   const cikti = x.data
      // cikti.replace("Version:", "Versiyon:")
   console.log(cikti && x.data.message)
    return cikti && x.data.message || "Güncel Bir Güncelleme Bulunamadı!"
})
}
