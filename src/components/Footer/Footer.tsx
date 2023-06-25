import Logo from "@/components/Logo/Logo";

const Footer = () => {
	return (
		<footer className="py-8 mt-auto">
			<div className="max-w-7xl mx-auto p-10 bg-gray-100 rounded-xl">
				<Logo withTitle={true} />
				<nav className="grid grid-cols-3 mt-8">
					<div>
						<a href="" className="text-xl font-semibold block mb-3">Проекты</a>
						<ul className="space-y-2">
							<li>
								<a href="">Landing pages</a>
							</li>
							<li>
								<a href="">Сайты-визитки</a>
							</li>
							<li>
								<a href="">Интернет-магазины</a>
							</li>
							<li>
								<a href="">Одностраничные каталоги</a>
							</li>
						</ul>
					</div>
					<div>
						<a href="" className="text-xl font-semibold block mb-3">Технологии</a>
						<ul className="space-y-2">
							<li>
								<a href="">Landing pages</a>
							</li>
							<li>
								<a href="">Сайты-визитки</a>
							</li>
							<li>
								<a href="">Интернет-магазины</a>
							</li>
							<li>
								<a href="">Одностраничные каталоги</a>
							</li>
						</ul>
					</div>
					<div>
						<a href="" className="text-xl font-semibold block mb-3">О нас</a>
						<ul className="space-y-2">
							<li>
								<a href="">Landing pages</a>
							</li>
							<li>
								<a href="">Сайты-визитки</a>
							</li>
							<li>
								<a href="">Интернет-магазины</a>
							</li>
							<li>
								<a href="">Одностраничные каталоги</a>
							</li>
						</ul>
					</div>
				</nav>
			</div>
			<div className="flex items-center justify-between mx-auto max-w-7xl pt-8">
				<p>ИП Martians, БИН 001014551125, {new Date().getFullYear()}. © Все права защищены.</p>
				<a href="">Политика конфиденциальности</a>
			</div>
		</footer>
	)
}

export default Footer;
