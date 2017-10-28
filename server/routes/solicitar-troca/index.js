'user strict';

const
    path = '/api/v1/solicitar-trocas';


function solicitarTrocaRouter(app) {
    app.route(path)
        .get(require('./get-solicitar-troca'))
        .post(require('./create-solicitar-troca'));

    app.route(path + '/:id')
        .get(require('./get-solicitar-troca-by-id'))
        .put(require('./update-solicitar-troca-by-id'))
        .delete(require('./delete-solicitar-troca-by-id'));

    app.route(path + '/:id/aprovar')
        .patch(require('./aprovar-solicitar-troca-by-id'))
}

module.exports = solicitarTrocaRouter;