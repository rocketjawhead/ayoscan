import { RECEIVE_INCOME,RECEIVE_DELETE } from '../constant'
import { setFailed, setLoading, setSuccess } from './processor'
import { URL_API } from '../env'

export const _addIncome = (data)  => {
	return async dispatch => {
		await dispatch(setLoading(true, 'LOADING_PROCESS_GET_INCOME'))
		try {
			const response = await fetch(`${URL_API}Transaksi/editpemasukan`, {
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
			//   await console.log('result edit pemasukan', dataRes)
			if (responseStatus.status == 200 ) {
				await dispatch(receiveIncome(dataRes))
				await dispatch(setSuccess(true, 'SUCCESS_PROCESS_GET_INCOME'))
				await dispatch(setLoading(false, 'LOADING_PROCESS_GET_INCOME'))
			} else {
				await dispatch(setFailed(true, 'FAILED_PROCESS_GET_INCOME', data.message))
				await dispatch(setLoading(false, 'LOADING_PROCESS_GET_INCOME'))
				await dispatch(setFailed(false, 'FAILED_PROCESS_GET_INCOME'))
			}
		} catch (e){
			dispatch(setLoading(false, 'LOADING_PROCESS_GET-INCOME'))
			dispatch(setFailed(true, 'FAILED_PROCESS_GET-INCOME', e))
		}
	}
}

const receiveIncome = data => {
  return{
    type:RECEIVE_INCOME,
    payload:data
  }
}

//delete
export const _DeleteTrx = (data)  => {
	return async dispatch => {
		await dispatch(setLoading(true, 'LOADING_PROCESS_GET_DELETE'))
		try {
			const response = await fetch(`${URL_API}Transaksi/deleteData`, {
				method: 'POST',
				headers:{
					Accept: 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
				id:data.trxId,
				user_id:data.user_id,
				secretkey:'NOEL'
        })
      })
			const responseStatus = await response
			  const dataRes = await response.json()
			  await console.log('result delete', dataRes)
			if (responseStatus.status == 200 ) {
				await dispatch(receiveDelete(dataRes))
				await dispatch(setSuccess(true, 'SUCCESS_PROCESS_GET_DELETE'))
				await dispatch(setLoading(false, 'LOADING_PROCESS_GET_DELETE'))
			} else {
				await dispatch(setFailed(true, 'FAILED_PROCESS_GET_DELETE', data.message))
				await dispatch(setLoading(false, 'LOADING_PROCESS_GET_DELETE'))
				await dispatch(setFailed(false, 'FAILED_PROCESS_GET_DELETE'))
			}
		} catch (e){
			dispatch(setLoading(false, 'LOADING_PROCESS_GET-DELETE'))
			dispatch(setFailed(true, 'FAILED_PROCESS_GET-DELETE', e))
		}
	}
}

const receiveDelete = data => {
  return{
    type:RECEIVE_DELETE,
    payload:data
  }
}