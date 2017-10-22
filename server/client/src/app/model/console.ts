import { Jogo } from "./jogo";

export class Console {

    constructor(
        public id?:number,
        public titulo?:string,
        public desc?:string,
        public habilitar?:boolean,
        public dt_inc?:Date,
        public dt_exc?:boolean,
        public jogos?:Jogo[]
    ){ }

}