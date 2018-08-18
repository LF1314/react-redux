export default function flag(state = false,action) {

    switch (action.type){
        case "LOADING":
            return action.flag
        default:
            return state;
    }

}


















