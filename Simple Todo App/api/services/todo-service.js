/**
 * Service for todo task operations.
 */

'use strict';
const mongoose = require('mongoose'),
    Task = mongoose.model('todos');

/**
 * Returns an array of todo task object matching the search parameters.
 *
 * @param {Object} params {Search parameters}
 */
exports.search = function (params) {
    const promise = Task.find(params).exec();
    return promise;
};

/**
 * Saves and returns the new todo task object.
 *
 * @param {Object} todo task {TODO object}
 */
exports.save = function (todo) {
    const newTask = new Task(todo);
    const promise = newTask.save();
    return promise;
};

/**
 * Returns the todo task object matching the id.
 *
 * @param {string} todoId {Id of the todo object}
 */
exports.get = function (todoId) {
    const promise = Task.findById(todoId).exec();
    return promise
};

/**
 * Updates and returns the todo task object.
 *
 * @param {Object} todo task {TODO object}
 */
exports.update = function (todo) {
    todo.modified_date = new Date();
    const promise = Task.findOneAndUpdate({_id: todo._id}, todo).exec();
    return promise;
};

/**
 * Deletes the todo task object matching the id.
 *
 * @param {string} todoId {Id of the todo object}
 */
exports.delete = function (todoId) {
    const promise = Task.remove({_id: todoId});
    return promise;
};