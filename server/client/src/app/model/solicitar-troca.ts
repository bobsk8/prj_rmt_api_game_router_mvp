export class SolicitarTroca {

    constructor(
        public id?:number,
        public id_solicitante?:number,
        public id_dono?:number,        
        public trocado?:boolean,
        public id_jogo?: number 
    ){ }

}