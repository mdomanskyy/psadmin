"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var AuthorApi = require('../api/authorApi');
var ActionTypes = require('../constants/actionType');

var AuthorActions = {
    createAuthor: function(author) {
        var newAuthor = AuthorApi.saveAuthor(author);
        
        //Hey dispatcher go tell all the stores that an author was created
        Dispatcher.dispatch({
            actionType: ActionTypes.CREATE_AUHTOR,
            author: newAuthor
        });
    },
    
    updateAuthor: function(author) {
        var updatedAuthor = AuthorApi.saveAuthor(author);
        
        Dispatcher.dispatch({
            actionType: ActionTypes.UPDATE_AUHTOR,
            author: updatedAuthor
        });
    },
    
    deleteAuthor: function(id) {
        debugger;
        AuthorApi.deleteAuthor(id);
        
        Dispatcher.dispatch({
            actionType: ActionTypes.DELETE_AUTHOR,
            id: id
        });
    }
    
};

module.exports = AuthorActions;