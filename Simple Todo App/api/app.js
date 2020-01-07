'use strict';
module.exports = function (app) {
    //Initialize models
    let todoModel = require('./models/m_todo');

    //Initialize routes
    let todoRoutes = require('./routes/todo-route');
    todoRoutes(app);
};