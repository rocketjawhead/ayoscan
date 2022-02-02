import { RECEIVE_OUTCOME, } from '../constant'
import { setFailed, setLoading, setSuccess } from './processor'
import { URL_API } from '../env'

export const _addOutcome = (data)  => {
	return async dispatch => {
		await dispatch(setLoading(true, 'LOADING_PROCESS_GET_OUTCOME'))
		try {
			const response = await fetch(`${URL_API}Transaksi/editpengeluaran`, {
				method: 'POST',
				headers:{
					Accept: 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
                id:data.trxId,
                judul_transaksi:data.title,
                judul_kategori:data.category,
                tgl_transaksi:data.date,
                jumlah:data.amount,
                user_id:data.id,
				secretkey:'NOEL'
        })
      })
			const responseStatus = await response
			  const dataRes = await response.json()
			//   await console.log('result edit pengeluaran', dataRes)
			if (responseStatus.status == 200 ) {
				await dispatch(receiveOutcome(dataRes))
				await dispatch(setSuccess(true, 'SUCCESS_PROCESS_GET_OUTCOME'))
				await dispatch(setLoading(false, 'LOADING_PROCESS_GET_OUTCOME'))
			} else {
				await dispatch(setFailed(true, 'FAILED_PROCESS_GET_OUTCOME', data.message))
				await dispatch(setLoading(false, 'LOADING_PROCESS_GET_OUTCOME'))
				await dispatch(setFailed(false, 'FAILED_PROCESS_GET_OUTCOME'))
			}
		} catch (e){
			dispatch(setLoading(false, 'LOADING_PROCESS_GET-OUTCOME'))
			dispatch(setFailed(true, 'FAILED_PROCESS_GET-OUTCOME', e))
		}
	}
}

const receiveOutcome = data => {
  return{
    type:RECEIVE_OUTCOME,
    payload:data
  }
}