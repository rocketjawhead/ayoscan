import { RECEIVE_PROMO, } from '../constant'
import { setFailed, setLoading, setSuccess } from './processor'
import { URL_API } from '../env'
import { URL_API_HEYDISKON } from '../env'

export const _getPromo = ()  => {
	return async dispatch => {
		await dispatch(setLoading(true, 'LOADING_PROCESS_GET_PROMO'))
		try {
			const response = await fetch(`${URL_API_HEYDISKON}Promo/getPromoForFlow`, {
				method: 'POST',
				headers:{
					Accept: 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
				secretkey:'NOEL'
        })
      })
			const responseStatus = await response
			  const dataRes = await response.json()
			//   await console.log('result promo', dataRes)
			if (responseStatus.status == 200 ) {
				await dispatch(receivePromo(dataRes))
				await dispatch(setSuccess(true, 'SUCCESS_PROCESS_GET_PROMO'))
				await dispatch(setLoading(false, 'LOADING_PROCESS_GET_PROMO'))
			} else {
				await dispatch(setFailed(true, 'FAILED_PROCESS_GET_PROMO', data.message))
				await dispatch(setLoading(false, 'LOADING_PROCESS_GET_PROMO'))
				await dispatch(setFailed(false, 'FAILED_PROCESS_GET_PROMO'))
			}
		} catch (e){
			dispatch(setLoading(false, 'LOADING_PROCESS_GET-PROMO'))
			dispatch(setFailed(true, 'FAILED_PROCESS_GET-PROMO', e))
		}
	}
}

const receivePromo = data => {
  return{
    type:RECEIVE_PROMO,
    payload:data
  }
}