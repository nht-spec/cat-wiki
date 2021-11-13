import React from 'react';
import { useRouteMatch } from 'react-router';
import CatSkeletonDetail from '../../components/CatSkeletonDetail/CatSkeletonDetail';
import CatSkeletonInfoDetail from '../../components/CatSkeletonInfoDetail/CatSkeletonInfoDetail';
import CatSkeletonOtherImg from '../../components/CatSkeletonOtherImg/CatSkeletonOtherImg';
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

	const { imageCat, loading } = useCatImage(imageId);
	const { valueInfo, loadingInfo } = useCatDetailInfo(breedId);
	const { listImage, loadingOtherImg } = useOtherImageCat({
		limit: 8,
		breed_ids: breedId,
	});

	return (
		<div>
			<div className='detail-cat'>
				{loading && <CatSkeletonDetail />}
				{!loading && <ThumbnailImage imageCat={imageCat.data?.url} />}
				{loadingInfo && <CatSkeletonInfoDetail />}
				{!loadingInfo && (
					<DetailBreed
						valueInfo={valueInfo.data !== undefined && valueInfo.data}
					/>
				)}
			</div>
			{loadingOtherImg && <CatSkeletonOtherImg />}
			{!loadingOtherImg && (
				<OtherImage listImage={listImage !== undefined && listImage} />
			)}
		</div>
	);
}

export default DetailPage;
