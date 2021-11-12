import { useEffect, useState } from 'react';
import catApi from '../../../api/catApi';

export default function useCatImage(imageId) {
	const [imageCat, setImageCat] = useState({});
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		(async () => {
			setLoading(true);
			const result = await catApi.getImage(imageId);
			setImageCat(result);
		})();
		setLoading(false);
	}, [imageId]);

	return {
		imageCat,
		loading,
	};
}
