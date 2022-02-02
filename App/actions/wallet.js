import { RECEIVE_WALLET } from '../constant'
import { setFailed, setLoading, setSuccess } from './processor'
import { URL_API } from '../env'

export const _getWallet = (id)  => {
	return async dispatch => {
		await dispatch(setLoading(true, 'LOADING_PROCESS_GET_WALLET'))
		try {
			const response = await fetch(`${URL_API}Wallet/listwallet`, {
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
			//   await console.log('result wallet', dataRes)
			if (responseStatus.status == 200 ) {
				await dispatch(receiveWallet(dataRes))
				await dispatch(setSuccess(true, 'SUCCESS_PROCESS_GET_WALLET'))
				await dispatch(setLoading(false, 'LOADING_PROCESS_GET_WALLET'))
			} else {
				await dispatch(setFailed(true, 'FAILED_PROCESS_GET_WALLET', data.message))
				await dispatch(setLoading(false, 'LOADING_PROCESS_GET_WALLET'))
				await dispatch(setFailed(false, 'FAILED_PROCESS_GET_WALLET'))
			}
		} catch (e){
			dispatch(setLoading(false, 'LOADING_PROCESS_GET-WALLET'))
			dispatch(setFailed(true, 'FAILED_PROCESS_GET-WALLET', e))
		}
	}
}

const receiveWallet = data => {
  return{
    type:RECEIVE_WALLET,
    payload:data
  }
}