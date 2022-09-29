import EventEmitter from "node:events"
import ai from "only ai"
declare module "only.ai"{
    export class onlyai {
        public ai(soru: string) : void;
    }
}