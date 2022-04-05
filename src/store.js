import { configureStore } from '@reduxjs/toolkit'

import akordleReducer from './redux/akordle'

const store = configureStore({
    reducer: {
        akordle: akordleReducer,
    },
})

export default store
