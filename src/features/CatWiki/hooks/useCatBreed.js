import { useEffect, useState } from 'react';
import catApi from '../../../api/catApi';

export default function useCatBreed(params) {
	const [breed, setBreed] = useState({});
	const [loading, setLoading] = useState(false);
	useEffect(() => {
		(async () => {
			setLoading(true);
			const result = await catApi.getAllBreed(params);
			setBreed(result);
		})();
		setLoading(false);
	}, [params]);
	return { breed, loading };
}
