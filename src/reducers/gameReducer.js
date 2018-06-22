import * as actions from '../actions/actions';

const initialState = {};

export const gameReducer = (state=initialState, action) =>{

    const updateFeedback = function (feedback) {

    }

    switch(action.type) {
        case actions.ADD_GUESS : {
            return state;
        }
        case actions.CLEAR_GUESS : {
            return state;
        }
        case actions.TOGGLE_OVERLAY : {
            return state;
        }
        case actions.RESET_GAME : {
            return state;
        }
        default : return state;
    }
}