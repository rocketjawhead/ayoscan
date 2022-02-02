import { RECEIVE_MESSAGE } from '../constant'
import { setFailed, setLoading, setSuccess } from './processor'
import { URL_API } from '../env'

export const _getMessage = (id)  => {
	return async dispatch => {
		await dispatch(setLoading(true, 'LOADING_PROCESS_GET_MESSAGE'))
		try {
			const response = await fetch(`${URL_API}Message/listmessage`, {
				method: 'POST',
				headers:{
					Accept: 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
                ewalletcode:id,
				secretkey:'NOEL'
        })
      })
			const responseStatus = await response
			  const dataRes = await response.json()
			//   await console.log('result message', dataRes)
			if (responseStatus.status == 200 ) {
				await dispatch(receiveMessage(dataRes))
				await dispatch(setSuccess(true, 'SUCCESS_PROCESS_GET_MESSAGE'))
				await dispatch(setLoading(false, 'LOADING_PROCESS_GET_MESSAGE'))
			} else {
				await dispatch(setFailed(true, 'FAILED_PROCESS_GET_MESSAGE', data.message))
				await dispatch(setLoading(false, 'LOADING_PROCESS_GET_MESSAGE'))
				await dispatch(setFailed(false, 'FAILED_PROCESS_GET_MESSAGE'))
			}
		} catch (e){
			dispatch(setLoading(false, 'LOADING_PROCESS_GET-MESSAGE'))
			dispatch(setFailed(true, 'FAILED_PROCESS_GET-MESSAGE', e))
		}
	}
}

const receiveMessage = data => {
  return{
    type:RECEIVE_MESSAGE,
    payload:data
  }
}