export const initialState = null;

export const reducer = (state,action) => {
    if(action.type === "USER") {
        return action.user;
    }

    if(action.type === "CART") {
        return action.length;
    }

    if(action.type === "ANIMATION") {
        return action.showAnimation;
    }

    return state;
}