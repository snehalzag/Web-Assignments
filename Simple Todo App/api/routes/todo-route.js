/**
 * Endpoint route definitions.
 */

'use strict';
module.exports = function (app) {
    const todoController = require('../controllers/todo-controller');
    // Routes for search and create.
    app.route('/todos')
        .get(todoController.list)
        .post(todoController.post);

    // Routes for get, update and delete.
    app.route('/todos/:todoId')
        .get(todoController.get)
        .put(todoController.put)
        .delete(todoController.delete);
};