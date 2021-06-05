const controller  = require('../controllers/controller');

function route(app) {
    app.get('/' , controller().home);

    app.post('/short' , controller().short);

    app.get('/:id' , controller().redirect);
}

module.exports = route;