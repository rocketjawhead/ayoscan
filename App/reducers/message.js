import { RECEIVE_MESSAGE,
} from  '../constant'

export const dataMessage = ( state = [], action ) => {
switch(action.type){
case RECEIVE_MESSAGE:
return action.payload
default:
return state
}
}
