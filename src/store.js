import { configureStore } from '@reduxjs/toolkit'

import akordleReducer from './redux/akordle'

const store = configureStore({
    reducer: {
        akordle: akordleReducer,
    },
    devTools: process.env.NODE_ENV === 'development',
})

export default store
