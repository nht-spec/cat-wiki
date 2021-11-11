import { Route, Switch } from 'react-router';
import './App.css';
import CatFeature from './features/CatWiki';

function App() {
	return (
		<div className='App'>
			<Switch>
				<Route path='/' component={CatFeature} />
			</Switch>
		</div>
	);
}

export default App;
