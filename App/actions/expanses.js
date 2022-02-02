import { RECEIVE_GRAFIK_DEFISIT } from '../constant'
import { setFailed, setLoading, setSuccess } from './processor'
import { URL_API } from '../env'

export const _getGrafik = (id)  => {
	return async dispatch => {
		await dispatch(setLoading(true, 'LOADING_PROCESS_GET_GRAFIK_DEFISIT'))
		try {
			const response = await fetch(`${URL_API}Transaksi/getGrafik`, {
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
			if (responseStatus.status == 200 ) {
				await dispatch(receiveGrafik(dataRes))
				await dispatch(setSuccess(true, 'SUCCESS_PROCESS_GET_GRAFIK_DEFISIT'))
				await dispatch(setLoading(false, 'LOADING_PROCESS_GET_GRAFIK_DEFISIT'))
			} else {
				await dispatch(setFailed(true, 'FAILED_PROCESS_GET_GRAFIK_DEFISIT', data.message))
				await dispatch(setLoading(false, 'LOADING_PROCESS_GET_GRAFIK_DEFISIT'))
				await dispatch(setFailed(false, 'FAILED_PROCESS_GET_GRAFIK_DEFISIT'))
			}
		} catch (e){
			dispatch(setLoading(false, 'LOADING_PROCESS_GET_GRAFIK_DEFISIT'))
			dispatch(setFailed(true, 'FAILED_PROCESS_GET_GRAFIK_DEFISIT', e))
		}
	}
}

const receiveGrafik = data => {
  return{
    type:RECEIVE_GRAFIK_DEFISIT,
    payload:data
  }
}