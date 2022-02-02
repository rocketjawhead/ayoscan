import { RECEIVE_SAVE_BOOKMARK } from  '../constant'

export const dataSaveBookmark = ( state = [], action ) => {
    switch(action.type){
    case RECEIVE_SAVE_BOOKMARK:
    return action.payload
    default:
    return state
    }
}


