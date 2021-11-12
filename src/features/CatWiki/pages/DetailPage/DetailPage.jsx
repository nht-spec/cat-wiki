import React from 'react';
import { useRouteMatch } from 'react-router';
import DetailBreed from '../../components/DetailBreed/DetailBreed';
import OtherImage from '../../components/OtherImage/OtherImage';
import ThumbnailImage from '../../components/ThumbnailImage/ThumbnailImage';
import useCatDetailInfo from '../../hooks/useCatDetailInfo';
import useCatImage from '../../hooks/useCatImage';
import useOtherImageCat from '../../hooks/useOtherImageCat';
import './style.scss';

function DetailPage() {
	const {
		params: { breedId, imageId },
	} = useRouteMatch();

	const { imageCat } = useCatImage(imageId);
	const { valueInfo } = useCatDetailInfo(breedId);
	const { listImage } = useOtherImageCat({ limit: 8, breed_ids: breedId });
	return (
		<div>
			<div className='detail-cat'>
				<ThumbnailImage imageCat={imageCat.data?.url} />
				<DetailBreed
					valueInfo={valueInfo.data !== undefined && valueInfo.data}
				/>
			</div>
			<OtherImage listImage={listImage !== undefined && listImage} />
		</div>
	);
}

export default DetailPage;
