import { useEffect, useState } from 'react';
import catApi from '../../../api/catApi';

export default function useCatDetailInfo(breedId) {
	const [valueInfo, setValueInfo] = useState({});

	useEffect(() => {
		(async () => {
			const result = await catApi.getBreed(breedId);
			setValueInfo(result);
		})();
	}, [breedId]);

	return {
		valueInfo,
	};
}
