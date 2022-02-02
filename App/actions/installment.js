import { RECEIVE_ALL_INSTALLMENT, RECEIVE_ADD_INSTALL_MENT } from '../constant'
import { setFailed, setLoading, setSuccess } from './processor'
import { URL_API } from '../env'

export const _getInstallment = (id)  => {
	return async dispatch => {
		await dispatch(setLoading(true, 'LOADING_PROCESS_GET_INSTALLMENT'))
		try {
			const response = await fetch(`${URL_API}Kategori/getKategoriCicilan`, {
				method: 'POST',
				headers:{
					Accept: 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
          user_id:id
        })
      })
			const responseStatus = await response
      const dataRes = await response.json()
			if (responseStatus.status == 200 ) {
				await dispatch(receiveData(dataRes))
				await dispatch(setSuccess(true, 'SUCCESS_PROCESS_GET_INSTALLMENT'))
				await dispatch(setLoading(false, 'LOADING_PROCESS_GET_INSTALLMENT'))
			} else {
				await dispatch(setFailed(true, 'FAILED_PROCESS_GET_INSTALLMENT', data.message))
				await dispatch(setLoading(false, 'LOADING_PROCESS_GET_INSTALLMENT'))
				await dispatch(setFailed(false, 'FAILED_PROCESS_GET_INSTALLMENT'))
			}
		} catch (e){
			dispatch(setLoading(false, 'LOADING_PROCESS_GET_INSTALLMENT'))
			dispatch(setFailed(true, 'FAILED_PROCESS_GET_INSTALLMENT', e))
		}
	}
}

const receiveData = data => {
  return{
    type:RECEIVE_ALL_INSTALLMENT,
    payload:data
  }
}

export const _addListInstallment = (data) => {
  return async dispatch => {
		await dispatch(setLoading(true, 'LOADING_PROCESS_ADD_INSTALLMENT'))
		try {
			const response = await fetch(`${URL_API}Kategori/tambahcicilan`, {
				method: 'POST',
				headers:{
					Accept: 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
          judul_cicilan:data.title,
          tenor:data.tenor,
          jumlah_bayar:data.amount, 
          tgl_bayar_bulan:data.paymentDate,
          catatan:data.note, 
					user_id:data.id,
					tipe_cicilan: data.category
        })
      })
			const responseStatus = await response
      const dataRes = await response.json()
			if (responseStatus.status == 200 ) {
				await dispatch(receiveAdd(dataRes))
				await dispatch(setSuccess(true, 'SUCCESS_PROCESS_ADD_INSTALLMENT'))
				await dispatch(setLoading(false, 'LOADING_PROCESS_ADD_INSTALLMENT'))
			} else {
				await dispatch(setFailed(true, 'FAILED_PROCESS_ADD_INSTALLMENT', data.message))
				await dispatch(setLoading(false, 'LOADING_PROCESS_ADD_INSTALLMENT'))
				await dispatch(setFailed(false, 'FAILED_PROCESS_ADD_INSTALLMENT'))
			}
		} catch (e){
			dispatch(setLoading(false, 'LOADING_PROCESS_ADD_INSTALLMENT'))
			dispatch(setFailed(true, 'FAILED_PROCESS_ADD_INSTALLMENT', e))
		}
	}
}

const receiveAdd = data => {
  return{
    type: RECEIVE_ADD_INSTALL_MENT,
    payload: data
  }
}