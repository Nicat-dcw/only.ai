### [Only.ai] - Türkçe AI Modülü

## UPDATES: [12:09:2022]
`+` API ve Modül Bugları Düzeltildi

`+` Eventler Eklendi

`+` Bir Kaç Kelime Eklendi.

`-` Hız 
### 📝 Bilgilendirme: Tüm cevaplar türkçedir ve daha fazla cevaplar yakın güncellemelerde eklenicektir.

#### 👨‍🔧 Kurulum:
```bash
npm i only.ai@latest --save
```


#### 🌟 Sohbete Başlamak için:
```js
const ai = require("only.ai")
const SoruManageri = new ai.Sor()
SoruManager.sor("merhaba!")

//Eventlerde mevcuttur
SoruManager.on("hata", (hata) => {
console.log("galiba bir hata oluştu")
})
```

[•] Daha fazla bilgi için: https://nicat-dcw.xyz
