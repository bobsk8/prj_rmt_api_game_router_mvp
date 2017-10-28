'user strict';

const
    path = '/api/v1/dado-cadastrais';


function dadoCadastralRouter(app) {
    app.route(path)
        .get(require('./get-dado-cadastral'))
        .post(require('./create-dado-cadastral'));

    app.route(path + '/login')
        .post(require('./login'));


    app.route(path + '/user-session')
        .get(require('./user-session'))

    app.route(path + '/user-logout')
        .get(require('./user-logout'))

    app.route(path + '/:id/upload')
        .post(require('./upload-foto'));

    app.route(path + '/:id/solicitacoes')
        .get(require('./user-solicitacao'));

    app.route(path + '/:id/solicitacoes-aprovadas')
        .get(require('./user-solicitacao-aprovadas'));

    app.route(path + '/:id')
        .get(require('./get-dado-cadastral-by-id'))
        .put(require('./update-dado-cadastral-by-id'))
        .delete(require('./delete-dado-cadastral-by-id'));

    app.route(path + '/:user_id/jogos')
        .get(require('./get-jogo-by-user-id'))
}

module.exports = dadoCadastralRouter;