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
					<span className='material-icons-round'>arrow_right_alt</span>
				</Link>
			</div>

			<div className='benefit-image-list'>
				<div className='image-cat-one'>
					<img
						className='img'
						src='https://s3-alpha-sig.figma.com/img/aab6/9287/2c4d929be0dbd9efe5e7dabd4bb08ac7?Expires=1639353600&Signature=GoANQ2B10bv0JOby9nSYN3z4777wno6fPEz-FXkHScIPfLbuwKf7nF-FQJcIoADBK81W2woreV5EP2IneTRZ2NOPcRcSWwBYQoiu1E-HXE5Rmim--cszRMyCsTUZHGGivTK9D0NwC7RpFv34vnNOqkYwf1PjPfzpPNGxVEA067jZHQVA8M3oF688Ffm0M0AlNB8Zwrme~fhhZDSeOhACv4n4BRf4MR5-Fr94MTKelkRYAtdBFdGuL8UPQTzEyp-yh5AYTBmAvY1XHunLxm8MxZj9~dAZhP4D6fK2C6CSTP3kFyWKP2N6RLh1LLWaEWwOZVzw-2TLRC9IPsDlxh1trg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
						alt=''
					/>
					<div className='image-cat-three'>
						<img
							className='img'
							src='https://s3-alpha-sig.figma.com/img/67f4/a6fd/8e772f937cf9ff7fca1e81286456f193?Expires=1639353600&Signature=KkkMf9KY-pjrEk5Nq9mAiHQ1LaBBg-WXcGnPoqozwb5Qgb949E-ivzk9ZXOSrxaFYwX4HN4JmQSNvNEQuZdPUcM2~OjMblwrM621jAw-MmqU0P8lc5sUM6syQQ1v2HIi6JLEW2ae97zSsHbZU~jKwV-dPEsDYmfa6ifLFtYiX5Lo0hKimZNcgKv2G3u0HkQqh0hznLW9suZHcDPCkLJx-1zuk9DCvzbDE64ECb8sQuxfFv4Jtc42sQimpXB7GwLQ2e6SKJjlR~IzLfAFAxwAsd0UYz9QrXbxgaaSjKfhml-muQfMl5GP-17K~wldJeH4ZQ1IFntfy4oJWe0M8TZKzw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
							alt=''
						/>
					</div>
				</div>
				<div className='image-cat-two'>
					<img
						className='img'
						src='https://s3-alpha-sig.figma.com/img/dad1/068a/80c9cd0e261de43071ed2be676b7b1cd?Expires=1639353600&Signature=aN1m4iou-UiQIKz2XJ5JE0UZR438LDjrD8cVLA5fABbGTfIklr6yMmZq7nYgriX9J3AfC0bG4O-bR-hlDucZtHMtq~VFxDvfblTTilEgVFKg89T3bqgZY4qWM8IK5yxsaVg0vtkSz4OLnZ04wCnm~QRjLSUp5EvLmfOho~7ACupgpnuIf1yKJ0kizxDVCbkvu0eCwf~ysK009QsYYNxqOQXHyGEKbsPShTb3E9TMWyMNtCkRnpE049l24U~2zrWNhoK5yGC2v8vu1AjSMLxiKen5gXPwIUOOkTrI99xQVqVALmJlnK0uDkrxmWWPRQrj3-yozjtli2LHOboFwfFtpg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'
						alt=''
					/>
				</div>
			</div>
		</div>
	);
}

export default Benefits;
