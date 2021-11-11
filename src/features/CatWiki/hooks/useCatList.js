import { useEffect, useState } from 'react';
import catApi from '../../../api/catApi';

export default function useCatList(params) {
	const [list, setList] = useState({});
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		(async () => {
			setLoading(true);
			const result = await catApi.getAllBreed(params);
			setList(result);
		})();
		setLoading(false);
	}, []);
	return {
		list,
		loading,
	};
}
