'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Mongoose schema for todo task object.
 */
let todoSchema = new Schema({
    /**
     * Title
     */
    title: {
        type: String
       
    },
    /**
     *Completed.
     */
    completed: {
        type: Boolean
    },
    /**
     *Description.
     */
    description: {
        type: String
    },

    /**
     *Date.
     */
    date: {
        type: String
        //default: Date.now
    },

    /**
     *Time.
     */
    time: {
        type: String
    },

    /**
     *View.
     */
    view: {
        type: Boolean
    },
    
//  /**
//      * Task Status
//      */
//     taskCompleted: {
//         type: String
//     }
}, {
    versionKey: false
});

// Duplicate the id field as mongoose returns _id field instead of id.
todoSchema.virtual('id').get(function(){
    return this._id.toHexString();
});

// Ensure virtual fields are serialised.
todoSchema.set('toJSON', {
    virtuals: true
});

module.exports = mongoose.model('todos', todoSchema);