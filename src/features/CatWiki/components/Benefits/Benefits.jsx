import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

function Benefits(props) {
	return (
		<div className='benefits-control'>
			<div className='benefit-info'>
				<div className='cross-bar'></div>
				<h2 className='text-title'>Why should you have a cat?</h2>
				<p className='text-desc'>
					Having a cat around you can actually trigger the release of calming
					chemicals in your body which lower your stress and anxiety leves
				</p>
				<Link className='link-to-benefit' to='/benefit'>
					Benefits
					<span class='material-icons-round'>arrow_right_alt</span>
				</Link>
			</div>

			<div className='benefit-image-list'>
				<div className='image-cat-one'>
					<img
						className='img'
						src='https://s3-alpha-sig.figma.com/img/aab6/9287/2c4d929be0dbd9efe5e7dabd4bb08ac7?Expires=1637539200&Signature=a8k-3NRs8h9nchElQ8kMSsefu00BqiKDRzOHdyvaTeuGdPJ-8~4LkU~N-hmp3UwTtoyFsMLnRqr9VlUyDaVWAl8QxeM8N5DlQslFj3touj9KvCfJYYhay0lb6iPhg14GnMdc09cPE03G2BHSRoyUCtMwIdXDC-wPH-14pmT4xdCZlN4lxoY63nKmNGcc0exoszazVUAaNqRQNUcAnA8tTOSFTVexRwYeZz6Na07voscTfpJOxehLr725fRP2e~oU6nLFqoDuH1noVsu8dGQJBgdOjU~m9P0-Z-QPX5lVY-TwzCf-v6sAeoggErggALN9PUZ7RvT4A5PkZvEYg4X07w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
						alt=''
					/>
				</div>
				<div className='image-cat-two'>
					<img
						className='img'
						src='https://s3-alpha-sig.figma.com/img/dad1/068a/80c9cd0e261de43071ed2be676b7b1cd?Expires=1637539200&Signature=RsOj3T5pxm9-iBlEFk4nU7w9fSCErmZk4kQdP6iWbGYop3l31R1ocklas8soH~g~MyJ3b-kryUZAjnyQzzxGChjauf3ic1CuJyYXj5lIhi0ANXtmr34IJ-hmaDNcyeJPFu-qevYdvXsa2BIVDFXZDDJhr1uGHd-zcE7filJ3hMbqvIdUxplAOmCRQHYO-~QArOFExGIjp1mh88oaaRAi7nyNq-vb5sZEDbSdM9SfKappp7B51UYQHYcWMsHs17h6-FaeDj89wKeOD0xa5U7Ec81dB74uDWFpaf47TcmeE-51pHmTxxK7Tqd5m~owgzFZgqRQzwMNflhWjAyjGOMAPA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
						alt=''
					/>
				</div>
				<div className='image-cat-three'>
					<img
						className='img'
						src='https://s3-alpha-sig.figma.com/img/67f4/a6fd/8e772f937cf9ff7fca1e81286456f193?Expires=1637539200&Signature=fDGEftjFcO-sFTpzi1wKIdBu40K78TcdRgzEbyuj7RMCBC~BVSFp2KKsuMAZc9TVvXMaiVPo4aPURzL4sObAhDbKd-m1gpkN21Y50s7Vq1FBXV6ulCvRSJi~RiWLf8KFbIY~VoDPyyyZa6VzPydwCQhtT9KtWuvyeXI7rkFy44lf-Pg~6GmIlhYUGqdwapvgZduyQgzUyIaBhani4ExoeghojR3B5eMrXC-drbJfZgZTU5-xQAPoBTaSOPWcZ6brjma6dsm4ShwwP0iNee8s~sktNwHJOK5XflkAN~oVsVEn~pOwn~ChHf7N9ZYSiJjBlp5k0lTh49R6I30cpOhY-A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
						alt=''
					/>
				</div>
			</div>
		</div>
	);
}

export default Benefits;
