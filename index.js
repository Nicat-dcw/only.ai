module.exports = {
   // class configs {
    constructor({ accessToken, newUser }) {
        const config = {
    usersAPIError:"[API] Hata Oluştu!",
    newUserConfigError:"[HATA] newUser: true olarak ayarlıyınız!"
        }
  //  }
 if(!accessToken) throw new TypeError("Lütfen Bir Kullanım Anahtarı Ekleyiniz!")
this.access = accessToken;
    if(accessToken === "test"){
        return `${chalk.green(`• [1 testlik Ucretsiz Kullanım Hesabı] Ismi Ile giriş yapıldı.`)}`
    }
    
    const get_user_data = axios.get(`https://gateway.nicat-dcw.xyz/api/v2/users/ai?accessToken=${accessToken}`).then(x => {
/*if(!x.status === "200"){
    throw new TypeError(config.usersAPIError)encodeURI
}else{*/
        const data = x.data;
        console.log(chalk.green(`• ${x.data.startDate || "Bulunamadı"} Ismiyle Giriş yapıldı.`))


        
})
    
                                 if(newUser !== "true") throw new TypeError(config.newUserConfigError)    
  
    },
    sor: require("./main.js").sor,
    releases: require("./release.js"),
    ekle: require("./kelimeEkle.js"),
    set: require("./set.js")
}
