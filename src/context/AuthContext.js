import createDateContainer from "./createDateContainer";
import Action from "./action";
import trackAPi from '../api/tracker'

const authReducer = (state, action) => {
    switch (action.Type) {
        case Action.SIGNIN:
            console.log("Do Signin")
        case Action.SIGNUP:
            console.log("Do SignUp")
        case Action.SIGNOUT:
            console.log("Do SignOut")
        default:
            return state
    }
}


const signup = (dispatch) =>{
    return ({ email, password}) => {
        trackAPi.post("/signup", {email, password}).then((response) => {
            console.log("response: ", response)
        }).catch((error) => {
            console.log("Eroor: ", error)
        })
    }
}


const signin = (dispatch) =>{
    return ({ email, password}) => {

    }
}

const signout = (dispatch) =>{
    return () => {

    }
}

export const { Context, Provider} = createDateContainer(authReducer, {}, {isSigned:false})