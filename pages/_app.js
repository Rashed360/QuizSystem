import '../styles/bootstrap.scss'
import '../styles/index.scss'
import { configureStore } from '@reduxjs/toolkit'
import globalReducer from '../redux'
import { Provider } from 'react-redux'

const store = configureStore({
	reducer: {
		global: globalReducer,
	},
})

const MyApp = ({ Component, pageProps }) => {
	return (
		<Provider store={store}>
			<Component {...pageProps} />
		</Provider>
	)
}

export default MyApp
