'user strict';

const
    path = '/api/v1/jogos';


function jogoRouter(app) {
    app.route(path)
        .get(require('./get-jogo'))
        .post(require('./create-jogo'));

    app.route(path + '/disponiveis')
        .get(require('./get-jogos-disponiveis'))

    app.route(path + '/upload/:jogo_id')
        .post(require('./upload-foto'))

    app.route(path + '/:id')
        .get(require('./get-jogo-by-id'))
        .put(require('./update-jogo-by-id'))
        .delete(require('./delete-jogo-by-id'));
}

module.exports = jogoRouter;
