import React, { useEffect } from 'react';
import styled from 'styled-components';
import {
	BrowserRouter as Router, 
	Switch,
	Route,
	useParams
} from 'react-router-dom';
import './App.css';
import {routes, paths} from './utils/routes';
import Main from './components/common/Main';
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

const App = props => {
	return (
		<Router>
			<StyledApp>
				<Switch>
					{paths.map((path, index)=> (
						<Route path={path} key={index}>
							<Navbar routes={routes}></Navbar>
							<Main />
						</Route>
						)
					)}
				</Switch>
			</StyledApp>
		</Router>
	);	
}

export default App;
