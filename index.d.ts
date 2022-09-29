import EventEmitter from "node:events"
import TypedEventEmitter from "typed-emitter"
declare module "only.ai"{
    export type OnlyAISoruEvents = {
    hata: (hata: Error) => void | Promise<void>
    }
    export type OnlyAIEvents = {
    apiVersiyonEski: () => void | Promise<void>
    }
    export default class ai extends (EventEmitter as new() => TypedEventEmitter<OnlyAIEvents>){
    public constructor({ accessToken: string, newUser: string }) 
        Sor: class Sor extends (EventEmitter as new() => TypedEventEmitter<OnlyAISoruEvents>){
           async sor(soru: string, ayarlar: {}, configs: {})
};
    releases(): string
    ekle({ kelime: string, yazar: string })
    set({ accessKey: string, newUser: string })
    }
}
