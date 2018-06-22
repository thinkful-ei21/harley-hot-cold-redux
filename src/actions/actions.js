
export const ADD_GUESS = 'ADD_GUESS';
export const addGuess = (guess) =>{
    return {
        type: ADD_GUESS,
        guess
    }
}

export const CLEAR_GUESS = 'CLEAR_GUESS';
export const clearGuesses = ()=>{
    return {
        type: CLEAR_GUESS
    }
}

export const TOGGLE_OVERLAY = 'TOGGLE_OVERLAY';
export const toggleOverlay =() =>{
    return {
        type: TOGGLE_OVERLAY
    }
}

export const RESET_GAME = 'RESET_GAME';
export const resetGame = () =>{
    return {
        type: RESET_GAME
    }
}