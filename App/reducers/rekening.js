import { RECEIVE_REKENING,
} from  '../constant'

export const dataRekening = ( state = [], action ) => {
switch(action.type){
case RECEIVE_REKENING:
return action.payload
default:
return state
}
}
