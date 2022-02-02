import { RECEIVE_HISTORY, } from '../constant'
import { setFailed, setLoading, setSuccess } from './processor'
import { URL_API } from '../env'

export const _getHistory = (id)  => {
	return async dispatch => {
		await dispatch(setLoading(true, 'LOADING_PROCESS_GET_HISTORY'))
		try {
			const response = await fetch(`${URL_API}Transaksi/getHistory`, {
				method: 'POST',
				headers:{
					Accept: 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
                user_id:id,
				secretkey:'NOEL'
        })
      })
			const responseStatus = await response
			  const dataRes = await response.json()
			//   await console.log('result history', dataRes)
			if (responseStatus.status == 200 ) {
				await dispatch(receiveHistory(dataRes))
				await dispatch(setSuccess(true, 'SUCCESS_PROCESS_GET_HISTORY'))
				await dispatch(setLoading(false, 'LOADING_PROCESS_GET_HISTORY'))
			} else {
				await dispatch(setFailed(true, 'FAILED_PROCESS_GET_HISTORY', data.message))
				await dispatch(setLoading(false, 'LOADING_PROCESS_GET_HISTORY'))
				await dispatch(setFailed(false, 'FAILED_PROCESS_GET_HISTORY'))
			}
		} catch (e){
			dispatch(setLoading(false, 'LOADING_PROCESS_GET-HISTORY'))
			dispatch(setFailed(true, 'FAILED_PROCESS_GET-HISTORY', e))
		}
	}
}

const receiveHistory = data => {
  return{
    type:RECEIVE_HISTORY,
    payload:data
  }
}