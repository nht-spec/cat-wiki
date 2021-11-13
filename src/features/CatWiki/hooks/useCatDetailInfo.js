import { useEffect, useState } from 'react';
import catApi from '../../../api/catApi';

export default function useCatDetailInfo(breedId) {
	const [valueInfo, setValueInfo] = useState({});
	const [loadingInfo, setLoadingInfo] = useState(false);
	useEffect(() => {
		(async () => {
			setLoadingInfo(true);
			const result = await catApi.getBreed(breedId);
			setValueInfo(result);
			setLoadingInfo(false);
		})();
	}, [breedId]);

	return {
		valueInfo,
		loadingInfo,
	};
}
