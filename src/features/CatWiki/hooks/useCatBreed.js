import { useEffect, useState } from 'react';
import catApi from '../../../api/catApi';

export default function useCatBreed() {
	const [breed, setBreed] = useState({});
	const [loading, setLoading] = useState(false);
	useEffect(() => {
		(async () => {
			setLoading(true);
			const result = await catApi.getAllBreed();
			setBreed(result);
			setLoading(false);
		})();
	}, []);
	return { breed, loading };
}
