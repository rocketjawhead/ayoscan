import { RECEIVE_GIFT } from '../constant'
import { setFailed, setLoading, setSuccess } from './processor'
import { URL_API } from '../env'

export const _getGift = (id)  => {
	return async dispatch => {
		await dispatch(setLoading(true, 'LOADING_PROCESS_GET_GIFT'))
		try {
			const response = await fetch(`${URL_API}Poin/getgift`, {
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
			//   await console.log('result gift', dataRes)
			if (responseStatus.status == 200 ) {
				await dispatch(receiveGift(dataRes))
				await dispatch(setSuccess(true, 'SUCCESS_PROCESS_GET_GIFT'))
				await dispatch(setLoading(false, 'LOADING_PROCESS_GET_GIFT'))
			} else {
				await dispatch(setFailed(true, 'FAILED_PROCESS_GET_GIFT', data.message))
				await dispatch(setLoading(false, 'LOADING_PROCESS_GET_GIFT'))
				await dispatch(setFailed(false, 'FAILED_PROCESS_GET_GIFT'))
			}
		} catch (e){
			dispatch(setLoading(false, 'LOADING_PROCESS_GET-GIFT'))
			dispatch(setFailed(true, 'FAILED_PROCESS_GET-GIFT', e))
		}
	}
}

const receiveGift = data => {
  return{
    type:RECEIVE_GIFT,
    payload:data
  }
}