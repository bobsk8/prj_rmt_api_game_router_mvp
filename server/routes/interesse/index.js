'user strict';

const
    path = '/api/v1/interesses';


function interesseRouter(app) {
    app.route(path)
        .get(require('./get-interesse'))
        .post(require('./create-interesse'));

    app.route(path + '/:id')
        .get(require('./get-interesse-by-id'))
        .put(require('./update-interesse-by-id'))
        .delete(require('./delete-interesse-by-id'));
}

module.exports = interesseRouter;