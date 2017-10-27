import { Console } from './console';

export class Jogo {

    constructor(
        public id?:number,
        public nome?:number,
        public descricao?: string,
        public slug?:string,
        public url?:string,
        public created_at?:string,
        public updated_at?:boolean,
        public popularity?:Date,
        public weighted_rating?:boolean,
        public screenshots?: string[],
        public alternative_names?: any[],
        public title_brazil?: string,
        public id_genero?: number,
        public id_console?: number,
        public id_dono?: number,
        public disponivel?:boolean,
        public console?: Console
    ){ }

}