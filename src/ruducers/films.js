export default function films(films=[],action) {



    switch (action.type){
        case "SETFILMS":
            return action.films
        default:
            return films
    }
}