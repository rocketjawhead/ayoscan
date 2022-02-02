import { RECEIVE_CICILAN,RECEIVE_CICILAN_PROFIL
} from  '../constant'

export const dataCicilan = ( state = [], action ) => {
    switch(action.type){
    case RECEIVE_CICILAN:
    return action.payload
    default:
    return state
    }
}

export const dataCicilanProfil = ( state = [], action ) => {
    switch(action.type){
    case RECEIVE_CICILAN_PROFIL:
    return action.payload
    default:
    return state
    }
}
