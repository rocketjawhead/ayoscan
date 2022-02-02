import { RECEIVE_INCOME,RECEIVE_DELETE,
} from  '../constant'

export const dataIncome = ( state = [], action ) => {
switch(action.type){
case RECEIVE_INCOME:
return action.payload
default:
return state
}
}


export const dataDelete = ( state = [], action ) =>{
    switch(action.type){
      case RECEIVE_DELETE:
        return action.payload
      default:
        return state
    }
  }
