import bg from './img/bg.png';
import Image from 'next/image';
const AboutPromo = () => {
	return (
		<div className="bg-white">
			<div className="relative bg-sky-800 py-24 sm:py-32">
				<div className="absolute inset-0">
					<Image src={bg} alt="About us" style={{objectFit: "cover", width: "100%", height: "100%"}} />
					<div
						className="absolute inset-0 backdrop-blur-sm bg-gray-900/70"
						aria-hidden="true"
					/>
				</div>
				<div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
					<h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">О нас</h1>
					<p className="mt-6 max-w-4xl text-xl text-blue-100">
						Мы - команда экспертов, готовых превратить ваши идеи в мощные веб-продукты!
					</p>
				</div>
			</div>
		</div>
	)
}
export default AboutPromo;
