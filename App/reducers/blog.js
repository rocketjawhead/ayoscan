import { RECEIVE_BLOG,RECEIVE_BLOG_SLIDER,
    RECEIVE_BLOG_DASHBOARD,RECEIVE_BOOKMARK,
    RECEIVE_ADD_BOOKMARK,RECEIVE_DELETE_BOOKMARK,
    RECEIVE_SAVE_BOOKMARK
} from  '../constant'

export const dataBlog = ( state = [], action ) => {
    switch(action.type){
    case RECEIVE_BLOG:
    return action.payload
    default:
    return state
    }
}


export const dataBlogSlider = ( state = [], action ) => {
    switch(action.type){
    case RECEIVE_BLOG_SLIDER:
    return action.payload
    default:
    return state
    }
}

export const dataBlogDashboard = ( state = [], action ) => {
    switch(action.type){
    case RECEIVE_BLOG_DASHBOARD:
    return action.payload
    default:
    return state
    }
}


export const dataBookmark = ( state = [], action ) => {
    switch(action.type){
    case RECEIVE_BOOKMARK:
    return action.payload
    default:
    return state
    }
}

export const dataAddBookmark = ( state = [], action ) => {
    switch(action.type){
    case RECEIVE_ADD_BOOKMARK:
    return action.payload
    default:
    return state
    }
}


export const dataDeleteBookmark = ( state = [], action ) => {
    switch(action.type){
    case RECEIVE_DELETE_BOOKMARK:
    return action.payload
    default:
    return state
    }
}

export const dataSaveBookmark = ( state = [], action ) => {
    switch(action.type){
    case RECEIVE_SAVE_BOOKMARK:
    return action.payload
    default:
    return state
    }
}


