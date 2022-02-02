import { RECEIVE_OUTCOME,
} from  '../constant'

export const dataOutcome = ( state = [], action ) => {
switch(action.type){
case RECEIVE_OUTCOME:
return action.payload
default:
return state
}
}
