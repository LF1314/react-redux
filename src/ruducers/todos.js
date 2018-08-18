
export default function todos(state=0,action) {

    switch (action.type){

        case "CHANGETODO":
            return action.todo
        default:
            return state

    }


}