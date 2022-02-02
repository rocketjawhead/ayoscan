import { RECEIVE_ACTIVITY
} from  '../constant'

export const dataUserActivity = ( state = [], action ) => {
    switch(action.type){
    case RECEIVE_ACTIVITY:
    return action.payload
    default:
    return state
    }
}
