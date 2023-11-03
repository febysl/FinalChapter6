import { configureStore } from "@reduxjs/toolkit"
import rootReducer from "../reducers"
import thunk from 'redux-thunk'

// Membuat dan Mengonfigurasi Store Redux
export default configureStore({
    reducer: rootReducer , // reducer utama yaitu rootReducer yang isinya elemen redux untuk mengelola seluruh state.
    middleware:(getMiddleware)=> getMiddleware().concat(thunk) //menggunakan middleware thunk sebagai jembatan / penghubung ke redux

})

