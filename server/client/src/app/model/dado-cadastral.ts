import { SolicitarTroca } from "./solicitar-troca";
import { Jogo } from "./jogo";
import { Interesse } from "./interesse";

export class DadoCadastral {

    constructor(
        public id?: number,
        public nome?: string,
        public dt_nasc?: string,
        public sexo?: string,
        public estado?: string,
        public cidade?: string,
        public apelido?: string,
        public foto?: string,
        public habilitar?: boolean,
        public email?: string,
        public telefone?: string,
        public username?: string,
        public pass?: string,
        public role_id?: number,
        public login?: boolean,
        public meusJogos?: Jogo[],
        public interesses?: Interesse[],
        public solicitarTrocas?: SolicitarTroca[]
    ){ }

}