import React, { useEffect } from 'react';
import styled from 'styled-components';
import {
	BrowserRouter as Router, 
	Switch,
	Route
} from 'react-router-dom'
import './App.css';
import routes from './utils/routes';
import Navbar from './components/common/Navbar';
import ColorGrading from './pages/ColorGrading.js';
import Contact from './pages/Contact.js';

const StyledApp = styled.section`
	background: #000;
	width: 100vw;
	height: 100vh;
	padding: 20px 5%;
	overflow: hidden;
	main {
		margin-top: 20px;
		h1 {
			font-size: 3rem;
			color: #FFFDF2;
		}
	}
`;

function App() {
	return (
		<Router>
			<StyledApp>
				<Navbar routes={routes}/>
				<main>
					<Switch>
						{routes.map(route => (
							<Route path={route.url}>
								<route.renderedComponent />
							</Route>
						))}
					</Switch>
				</main>
			</StyledApp>
		</Router>
	);	
}

export default App;
