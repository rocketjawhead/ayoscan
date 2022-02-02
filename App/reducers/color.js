import { RECEIVE_COLOR,
} from  '../constant'

export const dataColor = ( state = [], action ) => {
switch(action.type){
case RECEIVE_COLOR:
return action.payload
default:
return state
}
}
