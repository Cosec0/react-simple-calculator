import actionTypes from "./actionTypes";

const calcActions = {
    addDigitAction: function(newDigit) {
        return ({
            type: actionTypes.ADD_DIGIT,
            payload: newDigit
        })
    },
    clearAction: function(payload) {
        return ({
            type: actionTypes.CLEAR,
            payload
        })
    },
    arithmeticAction: function(payload) {
        return ({
            type: actionTypes.ARITHMETIC,
            payload
        }) 
    },
    equalAction: function(payload = '=') {
        return ({
            type: actionTypes.EQUAL
        }) 
    },
    deleteAction: function(payload) {
        return ({
            type: actionTypes.DELETE
        })
    }
}

export default calcActions;