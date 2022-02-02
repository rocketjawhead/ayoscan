import { RECEIVE_ADD_CATEGORIES, RECEIVE_GET_CATEGORIES_DEFISIT } from '../constant'
import { setFailed, setLoading, setSuccess } from './processor'
import { URL_API } from '../env'

export const _addCategoriesDefisit = (data)  => {
	return async dispatch => {
		await dispatch(setLoading(true, 'LOADING_PROCESS_ADD_CATEGORIES'))
		try {
			const response = await fetch(`${URL_API}Kategori/tambahKategori`, {
				method: 'POST',
				headers:{
					Accept: 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
          judul_kategori:data.title, 
          deskripsi_kategori:data.desc, 
          tipe_kategori:data.type,
          user_id:data.id
        })
      })
			const responseStatus = await response
      const dataRes = await response.json()
			if (responseStatus.status == 200 ) {
				await dispatch(receiveRes(dataRes))
				await dispatch(setSuccess(true, 'SUCCESS_PROCESS_ADD_CATEGORIES'))
				await dispatch(setLoading(false, 'LOADING_PROCESS_ADD_CATEGORIES'))
			} else {
				await dispatch(setFailed(true, 'FAILED_PROCESS_ADD_CATEGORIES', data.message))
				await dispatch(setLoading(false, 'LOADING_PROCESS_ADD_CATEGORIES'))
				await dispatch(setFailed(false, 'FAILED_PROCESS_ADD_CATEGORIES'))
			}
		} catch (e){
			dispatch(setLoading(false, 'LOADING_PROCESS_ADD_CATEGORIES'))
			dispatch(setFailed(true, 'FAILED_PROCESS_ADD_CATEGORIES', e))
		}
	}
}

const receiveRes = data => {
  return{
    type:RECEIVE_ADD_CATEGORIES,
    payload:data
  }
}

export const _getCategoriesDefisit = (id)  => {
	return async dispatch => {
		await dispatch(setLoading(true, 'LOADING_PROCESS_GET_CATEGORIES'))
		try {
			const response = await fetch(`${URL_API}Kategori/getKategori`, {
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
				await dispatch(receiveDataCetegories(dataRes))
				await dispatch(setSuccess(true, 'SUCCESS_PROCESS_GET_CATEGORIES'))
				await dispatch(setLoading(false, 'LOADING_PROCESS_GET_CATEGORIES'))
			} else {
				await dispatch(setFailed(true, 'FAILED_PROCESS_GET_CATEGORIES', data.message))
				await dispatch(setLoading(false, 'LOADING_PROCESS_GET_CATEGORIES'))
				await dispatch(setFailed(false, 'FAILED_PROCESS_GET_CATEGORIES'))
			}
		} catch (e){
			dispatch(setLoading(false, 'LOADING_PROCESS_GET_CATEGORIES'))
			dispatch(setFailed(true, 'FAILED_PROCESS_GET_CATEGORIES', e))
		}
	}
}

const receiveDataCetegories = data => {
  return{
    type:RECEIVE_GET_CATEGORIES_DEFISIT,
    payload:data
  }
}