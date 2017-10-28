'use strict';

const
    model = require('../../model/solicitarTrocaModel').solicitarTrocaModel;

module.exports = (req, res) => {
    let
        id = req.params.id,
        solicitacao = req.body;
        
    if(solicitacao.id_solicitante!==req.session.user.id){
        model.update(id,solicitacao).then(data => res.send(data));
    }
    
}