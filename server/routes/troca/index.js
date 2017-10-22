'user strict';

const
    path = '/api/v1/trocas';


function trocaRouter(app) {
    app.route(path)
        .get(require('./get-troca'))
        .post(require('./create-troca'));

    app.route(path + '/:id')
        .get(require('./get-troca-by-id'))
        .put(require('./update-troca-by-id'))
        .delete(require('./delete-troca-by-id'));
}

module.exports = trocaRouter;