

const ai = require("./index")  
const axios = require("axios")
const aiSoruManager = new ai.Sor()    
    // console.log(data)
//console.log(ai.sor("naberrrr"))
/*ai.set({
    accessToken:"1AY",
    newUser: "true"
})*/
console.log(ai.ekle({kelime:"Naber, lan"}))
console.log(aiSoruManager.sor("annen babanmi??"))
//ai.releases()
//ai("annen babanmi?")
//ai.releases || "Bulunamadı!"
