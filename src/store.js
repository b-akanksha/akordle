import { configureStore } from '@reduxjs/toolkit'

import akordleReducer from './redux/akordle'
console.log('process.env.NODE_ENV ', process.env.NODE_ENV)
const store = configureStore({
    reducer: {
        akordle: akordleReducer,
    },
    devTools: false,
})

export default store
