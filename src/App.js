import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link,
	useNavigate
} from 'react-router-dom'

import { Provider } from 'react-redux';

import Home from './components/Home'
import store from './redux/store'

function App() {
	return (
		<>
			<Provider store={store}>
				<Router>
					<Routes>
					<Route exact path="/" element={<Home/>} ></Route>
					<Route exact path="*" element={<h1>Error 404</h1>}></Route>
					</Routes>
				</Router>
			</Provider>
		</>
	);
}

export default App;
