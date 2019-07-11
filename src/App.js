import React from 'react';
import {
	BrowserRouter,
	Route,
	Switch
} from 'react-router-dom';

// App Components
import Container from './components/Container';
import ErrorBoundary from './components/ErrorBoundary';
import FourZeroFour from './components/exceeds/FourZeroFour';

const App = () => (
	<BrowserRouter>
		{/* BrowserRouter renders the root router that listens to URL changes & provides other React router components information about the current URL & which components to render, that way your UI is always in sync w/ the URL. */}

		<div className="container">
		 <ErrorBoundary>
				<Switch>
					<Route exact path="/search" component={Container} />
					<Route path="/search/:searchText" component={Container} />
					<Route path="/Wave" render={ () => { return <Container searchText={'Wave'} /> } } />
					<Route path="/Black Lab" render={ () => { return <Container searchText={'Black Lab'} /> } } />
					<Route path="/Pizza" render={ () => { return <Container searchText={'Pizza'} /> } } />
					<Route path="/search" render={ () => { return <Container searchText={'Search'} /> } } />
					<Route component={FourZeroFour} />
					{/* The 404 Route is created by leaving the path out, so all other paths will catch it & render the 404 Error Message. */}

				</Switch>
			</ErrorBoundary>
		</div>
	</BrowserRouter>
);

export default App;
