'user strict';

const
    path    = '/api/v1/generos';


function generoRouter(app){
    app.route(path)
    .get(require('./get-generos'))
    .post(require('./create-genero'));

   app.route(path + '/:id')
    .get(require('./get-genero-by-id'))
    .put(require('./update-genero-by-id'))
    .delete(require('./delete-genero-by-id'));
}

module.exports = generoRouter;