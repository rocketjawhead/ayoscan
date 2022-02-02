import { RECEIVE_BUDGET,
} from  '../constant'

export const dataBudget = ( state = [], action ) => {
switch(action.type){
case RECEIVE_BUDGET:
return action.payload
default:
return state
}
}
