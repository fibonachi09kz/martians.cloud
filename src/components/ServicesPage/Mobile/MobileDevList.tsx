import Image from "next/image";
import dev1Img from './img/dev-1.svg';
import dev2Img from './img/dev-2.svg';
import dev3Img from './img/dev-3.svg';

const MobileDevList = () => {
	return (
		<div className="mb-12 md:p-4 relative overflow-hidden">
			<h2 className="mb-8 text-3xl text-center font-bold">Виды работ</h2>
			<div className="w-full grid md:grid-cols-3 gap-5">
				<div className="bg-gray-100 dark:bg-zinc-900 rounded-xl px-4 py-6 flex flex-col">
					<h3 className="text-center text-base md:text-xl font-bold uppercase mb-3">Full-Stack разработка</h3>
					<p className="text-base text-center">Полный цикл разработки приложения, включая frontend, backend и тестирование, обеспечивая клиентам высококачественные и инновационные решения для iOS и Android</p>
					<Image src={dev1Img} className="w-full -mb-5 dark:invert mt-auto" alt="Full-Stack разработка" />
				</div>
				<div className="bg-gray-100 dark:bg-zinc-900 rounded-xl px-4 py-6 flex flex-col">
					<h3 className="text-center text-base md:text-xl font-bold uppercase mb-3">UI/UX App Design</h3>
					<p className="text-base text-center">Создадим уникальный и привлекательный пользовательский интерфейс, библиотеку компонентов, а также подберём идеальную стилистику под нишу вашего бизнеса</p>
					<Image src={dev2Img} className="w-full -mb-5 dark:invert mt-auto" alt="UI/UX App Design" />
				</div>
				<div className="bg-gray-100 dark:bg-zinc-900 rounded-xl px-4 py-6 flex flex-col">
					<h3 className="text-center text-base md:text-xl font-bold uppercase mb-3">Обновления</h3>
					<p className="text-base text-center">Полный цикл разработки приложения, включая frontend, backend, обеспечивая клиентам высококачественные и инновационные решения для iOS и Android.</p>
					<Image src={dev3Img} className="w-full -mb-[33px] dark:invert mt-auto" alt="Обновления" />
				</div>
			</div>
		</div>
	)
}
export default MobileDevList;
