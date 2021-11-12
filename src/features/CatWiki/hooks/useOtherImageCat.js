import { useEffect, useState } from 'react';
import catApi from '../../../api/catApi';

export default function useOtherImageCat(params) {
	const [listImage, setListImage] = useState({});

	useEffect(() => {
		(async () => {
			const result = await catApi.getAllImage(params);
			setListImage(result);
		})();
	}, []);

	return {
		listImage,
	};
}
