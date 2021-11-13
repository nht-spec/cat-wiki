import { useEffect, useState } from 'react';
import catApi from '../../../api/catApi';

export default function useOtherImageCat(params) {
	const [listImage, setListImage] = useState({});
	const [loadingOtherImg, setLoadingOtherImg] = useState(false);
	useEffect(() => {
		(async () => {
			setLoadingOtherImg(true);
			const result = await catApi.getAllImage(params);
			setListImage(result);
			setLoadingOtherImg(false);
		})();
	}, []);

	return {
		listImage,
		loadingOtherImg,
	};
}
