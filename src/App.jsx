import "./App.css";
import './lib/font-awesome/css/all.min.css';

import {BrowserRouter as Router, Routes , Route} from "react-router-dom";
import {Header} from './components/Header';
import {Watchlist} from './components/Watchlist';
import {Add} from './components/Add';
import {Watched} from './components/Watched';

function App() {
	return (
		<Router>
			<Header />

			<Routes>
				<Route exact path='/' element={<Watchlist />} />
				<Route exact path='/Watched' element={<Watched />} />
				<Route exact path='/Add' element={<Add />} />
			</Routes>
		</Router>
	);
}

export default App;
