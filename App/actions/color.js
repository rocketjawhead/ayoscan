import { RECEIVE_COLOR } from '../constant'
import { setFailed, setLoading, setSuccess } from './processor'
import { URL_API } from '../env'

export const _getColor = (id)  => {
	return async dispatch => {
		await dispatch(setLoading(true, 'LOADING_PROCESS_GET_COLOR'))
		try {
			const response = await fetch(`${URL_API}Wallet/color`, {
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
			//   await console.log('result color', dataRes)
			if (responseStatus.status == 200 ) {
				await dispatch(receiveColor(dataRes))
				await dispatch(setSuccess(true, 'SUCCESS_PROCESS_GET_COLOR'))
				await dispatch(setLoading(false, 'LOADING_PROCESS_GET_COLOR'))
			} else {
				await dispatch(setFailed(true, 'FAILED_PROCESS_GET_COLOR', data.message))
				await dispatch(setLoading(false, 'LOADING_PROCESS_GET_COLOR'))
				await dispatch(setFailed(false, 'FAILED_PROCESS_GET_COLOR'))
			}
		} catch (e){
			dispatch(setLoading(false, 'LOADING_PROCESS_GET-COLOR'))
			dispatch(setFailed(true, 'FAILED_PROCESS_GET-COLOR', e))
		}
	}
}

const receiveColor = data => {
  return{
    type:RECEIVE_COLOR,
    payload:data
  }
}