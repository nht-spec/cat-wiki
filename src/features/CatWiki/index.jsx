import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import Footer from '../../components/Footer/Footer';
import LogoHeader from '../../components/LogoHeader/LogoHeader';
import BenefitPage from './pages/BenefitPage/BenefitPage';
import DetailPage from './pages/DetailPage/DetailPage';
import HomePage from './pages/HomePage/HomePage';
import ListPage from './pages/ListPage/ListPage';

function CatFeature() {
	return (
		<div>
			<LogoHeader />
			<Switch>
				<Redirect from='/' to='/home' exact />
				<Route path='/catList' exact component={ListPage} />
				<Route path='/home' exact component={HomePage} />
				<Route path='/cat/:breedId/:imageId' exact component={DetailPage} />
				<Route path='/benefit' exact component={BenefitPage} />
			</Switch>
			<Footer />
		</div>
	);
}

export default CatFeature;
