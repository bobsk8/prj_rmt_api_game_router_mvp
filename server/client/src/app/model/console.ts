import { Jogo } from "./jogo";

export class Console {

    constructor(
        public id?: number,
        public nome?: string,
        public descricao?: string,
        public habilitar?: boolean,        
        public jogos?: Jogo[]
    ){ }

}