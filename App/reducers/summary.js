import { RECEIVE_SUMMARY,
} from  '../constant'

export const dataSummary = ( state = [], action ) => {
switch(action.type){
case RECEIVE_SUMMARY:
return action.payload
default:
return state
}
}
