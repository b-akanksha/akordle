import { consfigureStore } from '@reduxjs/toolkit';

import akordleReducer from './redux/akordle';

const store = consfigureStore({
    reducer: {
        akordle: akordleReducer
    }
});

export default store;