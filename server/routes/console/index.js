'user strict';

const
    path    = '/api/v1/consoles';


function consoleRouter(app){
    app.route(path)
    .get(require('./get-console'))
    .post(require('./create-console'));

   app.route(path + '/:id')
    .get(require('./get-console-by-id'))
    .put(require('./update-console-by-id'))
    .delete(require('./delete-console-by-id'));
}

module.exports = consoleRouter;