import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Register from './component/Register';
import Getdata from './component/Getdata';
import Update from './component/Update';

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route exact path="/" element={<Register />} />
					<Route path="/GetData" element={<Getdata />} />
					<Route path="/updateData/:id" element={<Update />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
