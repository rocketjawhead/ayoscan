import { RECEIVE_BLOG,RECEIVE_BLOG_SLIDER,RECEIVE_BLOG_DASHBOARD,RECEIVE_BOOKMARK,RECEIVE_ADD_BOOKMARK,RECEIVE_DELETE_BOOKMARK } from '../constant'
import { setFailed, setLoading, setSuccess } from './processor'
import { URL_API } from '../env'

export const _getBlog = ()  => {
	return async dispatch => {
		await dispatch(setLoading(true, 'LOADING_PROCESS_GET_BLOG'))
		try {
			const response = await fetch(`${URL_API}Blog/getBlog`, {
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
			//   await console.log('result', dataRes)
			if (responseStatus.status == 200 ) {
				await dispatch(receiveBlog(dataRes))
				await dispatch(setSuccess(true, 'SUCCESS_PROCESS_GET_BLOG'))
				await dispatch(setLoading(false, 'LOADING_PROCESS_GET_BLOG'))
			} else {
				await dispatch(setFailed(true, 'FAILED_PROCESS_GET_BLOG', data.message))
				await dispatch(setLoading(false, 'LOADING_PROCESS_GET_BLOG'))
				await dispatch(setFailed(false, 'FAILED_PROCESS_GET_BLOG'))
			}
		} catch (e){
			dispatch(setLoading(false, 'LOADING_PROCESS_GET-BLOG'))
			dispatch(setFailed(true, 'FAILED_PROCESS_GET-BLOG', e))
		}
	}
}

const receiveBlog = data => {
  return{
    type:RECEIVE_BLOG,
    payload:data
  }
}

//slider

export const _getBlogSlider = ()  => {
	return async dispatch => {
		await dispatch(setLoading(true, 'LOADING_PROCESS_GET_BLOG_SLIDER'))
		try {
			const response = await fetch(`${URL_API}Blog/getBlogSlider`, {
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
			  await console.log('result blog slider', dataRes)
			if (responseStatus.status == 200 ) {
				await dispatch(receiveBlogSlider(dataRes))
				await dispatch(setSuccess(true, 'SUCCESS_PROCESS_GET_BLOG_SLIDER'))
				await dispatch(setLoading(false, 'LOADING_PROCESS_GET_BLOG_SLIDER'))
			} else {
				await dispatch(setFailed(true, 'FAILED_PROCESS_GET_BLOG_SLIDER', data.message))
				await dispatch(setLoading(false, 'LOADING_PROCESS_GET_BLOG_SLIDER'))
				await dispatch(setFailed(false, 'FAILED_PROCESS_GET_BLOG_SLIDER'))
			}
		} catch (e){
			dispatch(setLoading(false, 'LOADING_PROCESS_GET-BLOG-SLIDER'))
			dispatch(setFailed(true, 'FAILED_PROCESS_GET-BLOG-SLIDER', e))
		}
	}
}

const receiveBlogSlider = data => {
  return{
    type:RECEIVE_BLOG_SLIDER,
    payload:data
  }
}


//Dashboard
export const _getBlogDashboard = ()  => {
	return async dispatch => {
		await dispatch(setLoading(true, 'LOADING_PROCESS_GET_BLOG_DASHBOARD'))
		try {
			const response = await fetch(`${URL_API}Blog/getBlogDashboard`, {
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
			//   await console.log('result blog dashboard', dataRes)
			if (responseStatus.status == 200 ) {
				await dispatch(receiveBlogDashboard(dataRes))
				await dispatch(setSuccess(true, 'SUCCESS_PROCESS_GET_BLOG_DASHBOARD'))
				await dispatch(setLoading(false, 'LOADING_PROCESS_GET_BLOG_DASHBOARD'))
			} else {
				await dispatch(setFailed(true, 'FAILED_PROCESS_GET_BLOG_DASHBOARD', data.message))
				await dispatch(setLoading(false, 'LOADING_PROCESS_GET_BLOG_DASHBOARD'))
				await dispatch(setFailed(false, 'FAILED_PROCESS_GET_BLOG_DASHBOARD'))
			}
		} catch (e){
			dispatch(setLoading(false, 'LOADING_PROCESS_GET-BLOG-DASHBOARD'))
			dispatch(setFailed(true, 'FAILED_PROCESS_GET-BLOG_DASHBOARD', e))
		}
	}
}

const receiveBlogDashboard = data => {
  return{
    type:RECEIVE_BLOG_DASHBOARD,
    payload:data
  }
}

//bookmark
export const _getBookmark = (data)  => {
	return async dispatch => {
		await dispatch(setLoading(true, 'LOADING_PROCESS_GET_BOOKMARK'))
		try {
			const response = await fetch(`${URL_API}Blog/getBookmark`, {
				method: 'POST',
				headers:{
					Accept: 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
                secretkey:'NOEL',
                id_blog:data.id_blog,
                user_id:data.user_id
        })
      })
			const responseStatus = await response
			  const dataRes = await response.json()
			//   await console.log('result bookmark', dataRes)
			if (responseStatus.status == 200 ) {
				await dispatch(receiveBookmark(dataRes))
				await dispatch(setSuccess(true, 'SUCCESS_PROCESS_GET_BOOKMARK'))
				await dispatch(setLoading(false, 'LOADING_PROCESS_GET_BOOKMARK'))
			} else {
				await dispatch(setFailed(true, 'FAILED_PROCESS_GET_BOOKMARK', data.message))
				await dispatch(setLoading(false, 'LOADING_PROCESS_GET_BOOKMARK'))
				await dispatch(setFailed(false, 'FAILED_PROCESS_GET_BOOKMARK'))
			}
		} catch (e){
			dispatch(setLoading(false, 'LOADING_PROCESS_GET-BOOKMARK'))
			dispatch(setFailed(true, 'FAILED_PROCESS_GET-BOOKMARK', e))
		}
	}
}

const receiveBookmark = data => {
  return{
    type:RECEIVE_BOOKMARK,
    payload:data
  }
}

//addBookmark
export const _addBookmark = (data)  => {
	return async dispatch => {
		await dispatch(setLoading(true, 'LOADING_PROCESS_ADD_BOOKMARK'))
		try {
			const response = await fetch(`${URL_API}Blog/addBookmark`, {
				method: 'POST',
				headers:{
					Accept: 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
                secretkey:'NOEL',
                id_blog:data.id_blog,
                user_id:data.user_id
        })
      })
			const responseStatus = await response
			  const dataRes = await response.json()
			  await console.log('result add bookmark', dataRes)
			if (responseStatus.status == 200 ) {
				await dispatch(receiveAddBookmark(dataRes))
				await dispatch(setSuccess(true, 'SUCCESS_PROCESS_ADD_BOOKMARK'))
				await dispatch(setLoading(false, 'LOADING_PROCESS_ADD_BOOKMARK'))
			} else {
				await dispatch(setFailed(true, 'FAILED_PROCESS_ADD_BOOKMARK', data.message))
				await dispatch(setLoading(false, 'LOADING_PROCESS_ADD_BOOKMARK'))
				await dispatch(setFailed(false, 'FAILED_PROCESS_ADD_BOOKMARK'))
			}
		} catch (e){
			dispatch(setLoading(false, 'LOADING_PROCESS_ADD-BOOKMARK'))
			dispatch(setFailed(true, 'FAILED_PROCESS_ADD-BOOKMARK', e))
		}
	}
}

const receiveAddBookmark = data => {
  return{
    type:RECEIVE_ADD_BOOKMARK,
    payload:data
  }
}

//delete bookmark
export const _deleteBookmark = (data)  => {
	return async dispatch => {
		await dispatch(setLoading(true, 'LOADING_PROCESS_DELETE_BOOKMARK'))
		try {
			const response = await fetch(`${URL_API}Blog/deleteBookmark`, {
				method: 'POST',
				headers:{
					Accept: 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
                secretkey:'NOEL',
                id_blog:data.id_blog,
                user_id:data.user_id
        })
      })
			const responseStatus = await response
			  const dataRes = await response.json()
			  await console.log('result delete bookmark', dataRes)
			if (responseStatus.status == 200 ) {
				await dispatch(receiveDeleteBookmark(dataRes))
				await dispatch(setSuccess(true, 'SUCCESS_PROCESS_DELETE_BOOKMARK'))
				await dispatch(setLoading(false, 'LOADING_PROCESS_DELETE_BOOKMARK'))
			} else {
				await dispatch(setFailed(true, 'FAILED_PROCESS_DELETE_BOOKMARK', data.message))
				await dispatch(setLoading(false, 'LOADING_PROCESS_DELETE_BOOKMARK'))
				await dispatch(setFailed(false, 'FAILED_PROCESS_DELETE_BOOKMARK'))
			}
		} catch (e){
			dispatch(setLoading(false, 'LOADING_PROCESS_DELETE-BOOKMARK'))
			dispatch(setFailed(true, 'FAILED_PROCESS_DELETE-BOOKMARK', e))
		}
	}
}

const receiveDeleteBookmark = data => {
  return{
    type:RECEIVE_DELETE_BOOKMARK,
    payload:data
  }
}