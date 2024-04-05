
const MobileDevList = () => {
	return (
		<div className="mb-12 p-4 relative overflow-hidden">
			<h2 className="mb-8 text-3xl text-center font-bold">Виды разработки</h2>
			<div className="w-full grid grid-cols-3 gap-5">
				<div className="bg-gray-100 dark:bg-zinc-900 rounded-xl p-4">
					<h3 className="text-center text-xl font-medium">Full-Stack разработка</h3>
				</div>
				<div className="bg-gray-100 dark:bg-zinc-900 rounded-xl p-4">
					<h3 className="text-center text-xl font-medium">UI/UX App Design</h3>
				</div>
				<div className="bg-gray-100 dark:bg-zinc-900 rounded-xl p-4">
					<h3 className="text-center text-xl font-medium">Обновления</h3>
				</div>
			</div>
		</div>
	)
}
export default MobileDevList;
