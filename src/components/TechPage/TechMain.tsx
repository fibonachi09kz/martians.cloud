'use client';

import {useEffect} from "react";

const TechMain = () => {

	useEffect(() => {

		// (async () => {
		// 	const rawResponse = await fetch('https://docs.siter.com.kz/rest/1/2cai43fhy9monf09/ib.elem.add', {
		// 		method: 'POST',
		// 		headers: {
		// 			'Accept': 'application/json',
		// 			'Content-Type': 'application/json'
		// 		},
		// 		body: JSON.stringify({
		// 			iblockId: 35,
		// 			fields: {
		// 				NAME: 'Новое устройство',
		// 				ACTIVE: 'Y'
		// 			},
		// 			props: {
		// 				DEVICE_TOKEN: 'токен токен'
		// 			}
		// 		})
		// 	});
		// 	const content = await rawResponse.json();
		//
		// 	console.log(content);
		// })();
	}, [])
	console.log('used effect')
	return (
		<></>
	)
}
export default TechMain;
