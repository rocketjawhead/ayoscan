import { RECEIVE_CATEGORY,
} from  '../constant'

export const dataCategory = ( state = [], action ) => {
switch(action.type){
case RECEIVE_CATEGORY:
return action.payload
default:
return state
}
}
