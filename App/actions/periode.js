import { RECEIVE_PERIODE } from '../constant'
import { setFailed, setLoading, setSuccess } from './processor'
import { URL_API } from '../env'

export const _getPeriode = (id)  => {
	return async dispatch => {
		await dispatch(setLoading(true, 'LOADING_PROCESS_GET_PERIODE'))
		try {
			const response = await fetch(`${URL_API}Periode/getperiode`, {
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
			//   await console.log('result Periode', dataRes)
			if (responseStatus.status == 200 ) {
				await dispatch(receivePeriode(dataRes))
				await dispatch(setSuccess(true, 'SUCCESS_PROCESS_GET_PERIODE'))
				await dispatch(setLoading(false, 'LOADING_PROCESS_GET_PERIODE'))
			} else {
				await dispatch(setFailed(true, 'FAILED_PROCESS_GET_PERIODE', data.message))
				await dispatch(setLoading(false, 'LOADING_PROCESS_GET_PERIODE'))
				await dispatch(setFailed(false, 'FAILED_PROCESS_GET_PERIODE'))
			}
		} catch (e){
			dispatch(setLoading(false, 'LOADING_PROCESS_GET-PERIODE'))
			dispatch(setFailed(true, 'FAILED_PROCESS_GET-PERIODE', e))
		}
	}
}

const receivePeriode = data => {
  return{
    type:RECEIVE_PERIODE,
    payload:data
  }
}