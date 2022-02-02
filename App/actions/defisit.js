import { RECEIVE_ADD_DEFISIT } from '../constant'
import { setFailed, setLoading, setSuccess } from './processor'
import { URL_API } from '../env'

export const _addOutcome = (data)  => {
	return async dispatch => {
		await dispatch(setLoading(true, 'LOADING_PROCESS_ADD_OUTCOME'))
		try {
			const response = await fetch(`${URL_API}Transaksi/tambahpengeluaran`, {
				method: 'POST',
				headers:{
					Accept: 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
          judul_transaksi:data.title,
          judul_kategori:data.category,
          catatan:data.note,
          jumlah:data.amount,
          user_id:data.id,
          tgl_transaksi:data.date
        })
      })
			const responseStatus = await response
      const dataRes = await response.json()
			if (responseStatus.status == 200 ) {
				await dispatch(receiveRes(dataRes))
				await dispatch(setSuccess(true, 'SUCCESS_PROCESS_ADD_OUTCOME'))
				await dispatch(setLoading(false, 'LOADING_PROCESS_ADD_OUTCOME'))
			} else {
				await dispatch(setFailed(true, 'FAILED_PROCESS_ADD_OUTCOME', data.message))
				await dispatch(setLoading(false, 'LOADING_PROCESS_ADD_OUTCOME'))
				await dispatch(setFailed(false, 'FAILED_PROCESS_ADD_OUTCOME'))
			}
		} catch (e){
			dispatch(setLoading(false, 'LOADING_PROCESS_ADD_OUTCOME'))
			dispatch(setFailed(true, 'FAILED_PROCESS_ADD_OUTCOME', e))
		}
	}
}

export const _addIncome = (data)  => {
	return async dispatch => {
		await dispatch(setLoading(true, 'LOADING_PROCESS_ADD_INCOME'))
		try {
			const response = await fetch(`${URL_API}Transaksi/tambahpemasukan`, {
				method: 'POST',
				headers:{
					Accept: 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
				judul_transaksi:data.title,
				id_kategori:data.id_kategori,
				tgl_transaksi:data.date,
				catatan:data.catatan,
				jumlah:data.amount,
				ewalletcode:data.ewalletcode,
				id_wallet:data.id_wallet,
				secretkey:'NOEL',
          
        })
      })
			const responseStatus = await response
      const dataRes = await response.json()
			if (responseStatus.status == 200 ) {
				await dispatch(receiveRes(dataRes))
				await dispatch(setSuccess(true, 'SUCCESS_PROCESS_ADD_INCOME'))
				await dispatch(setLoading(false, 'LOADING_PROCESS_ADD_INCOME'))
			} else {
				await dispatch(setFailed(true, 'FAILED_PROCESS_ADD_INCOME', data.message))
				await dispatch(setLoading(false, 'LOADING_PROCESS_ADD_INCOME'))
				await dispatch(setFailed(false, 'FAILED_PROCESS_ADD_INCOME'))
			}
		} catch (e){
			dispatch(setLoading(false, 'LOADING_PROCESS_ADD_INCOME'))
			dispatch(setFailed(true, 'FAILED_PROCESS_ADD_INCOME', e))
		}
	}
}

const receiveRes = data => {
  return{
    type:RECEIVE_ADD_DEFISIT,
    payload:data
  }
}