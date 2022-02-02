import { RECEIVE_GENDER,RECEIVE_JOB
} from  '../constant'

export const dataGender = ( state = [], action ) => {
    switch(action.type){
    case RECEIVE_GENDER:
    return action.payload
    default:
    return state
    }
}


export const dataJob = ( state = [], action ) => {
    switch(action.type){
    case RECEIVE_JOB:
    return action.payload
    default:
    return state
    }
}
