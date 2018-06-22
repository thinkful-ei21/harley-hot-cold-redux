import * as actions from '../actions/actions';

const initialState = {
    guesses: [],
    feedback: 'Make your guess!',
    auralStatus: '',
    correctAnswer: Math.round(Math.random() * 100) + 1
  };

export const gameReducer = (state=initialState, action) =>{

    // const updateFeedback = function (feedback) {}

    switch(action.type) {
        case actions.ADD_GUESS : {
            return {...state, guesses:[...state.guesses, action.guess]};
        }
        case actions.CLEAR_GUESS : {
            return {...state, guesses:[]};
        }
        case actions.TOGGLE_OVERLAY : {
            return state;
        }
        case actions.SET_FEEDBACK :{
            return {...state, feedback:action.feedback};
        }
        case actions.SET_AURAL :{
            return{...state, auralStatus: action.auralStatus}
        }
        case actions.RESET_GAME : {
            return initialState;
        }
        default : return state;
    }
}