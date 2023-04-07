import { configureStore } from '@reduxjs/toolkit'
import themeSlice from './theme'
import questionSlice from './question'

const store = configureStore({
	reducer: {
		theme: themeSlice,
		question: questionSlice,
	},
})

export default store
