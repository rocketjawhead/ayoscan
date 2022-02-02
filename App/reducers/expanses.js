import { RECEIVE_GRAFIK_DEFISIT } from '../constant'

export const dataGrafik = ( state = [], action ) =>{
  switch(action.type){
    case RECEIVE_GRAFIK_DEFISIT:
      return action.payload
    default:
      return state
  }
}