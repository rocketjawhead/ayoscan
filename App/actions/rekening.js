import { RECEIVE_REKENING } from '../constant'
import { setFailed, setLoading, setSuccess } from './processor'
import { URL_API } from '../env'

export const _getRekening = (id)  => {
	return async dispatch => {
		await dispatch(setLoading(true, 'LOADING_PROCESS_GET_REKENING'))
		try {
			const response = await fetch(`${URL_API}Rekening/getRekening`, {
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
			//   await console.log('result rekening', dataRes)
			if (responseStatus.status == 200 ) {
				await dispatch(receiveRekening(dataRes))
				await dispatch(setSuccess(true, 'SUCCESS_PROCESS_GET_REKENING'))
				await dispatch(setLoading(false, 'LOADING_PROCESS_GET_REKENING'))
			} else {
				await dispatch(setFailed(true, 'FAILED_PROCESS_GET_REKENING', data.message))
				await dispatch(setLoading(false, 'LOADING_PROCESS_GET_REKENING'))
				await dispatch(setFailed(false, 'FAILED_PROCESS_GET_REKENING'))
			}
		} catch (e){
			dispatch(setLoading(false, 'LOADING_PROCESS_GET-REKENING'))
			dispatch(setFailed(true, 'FAILED_PROCESS_GET-REKENING', e))
		}
	}
}

const receiveRekening = data => {
  return{
    type:RECEIVE_REKENING,
    payload:data
  }
}