import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import Footer from '../../components/Footer/Footer';
import LogoHeader from '../../components/LogoHeader/LogoHeader';
import HomePage from './pages/HomePage/HomePage';
import ListPage from './pages/ListPage/ListPage';

CatFeature.propTypes = {};

function CatFeature() {
	return (
		<div>
			<LogoHeader />
			<Switch>
				<Redirect from='/' to='/home' exact />
				<Route path='/catList' exact component={ListPage} />
				<Route path='/home' exact component={HomePage} />
			</Switch>
			<Footer />
		</div>
	);
}

export default CatFeature;
