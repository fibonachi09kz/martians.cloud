'use client'
import {CubeIcon} from "@heroicons/react/24/outline";
import {Button} from "@nextui-org/react";
import Link from "next/link";
const AboutHistory = () => {
	return (
		<div className="bg-white dark:bg-black">
			<div className="mx-auto max-w-7xl py-10 px-4 sm:py-24 sm:px-6 lg:px-8">
				<div className="relative overflow-hidden rounded-lg">
					<div className="absolute inset-0 blur-sm sm:blur-xl">
						<svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg" width="2000" height="2000"
							 viewBox="0 0 2000 2000" fill="none">
							<mask id="mask0_1_2" maskUnits="userSpaceOnUse" x="257" y="129" width="1486"
								  height="1742">
								<path d="M257.37 129.714H1742.49V1870.68H257.37V129.714Z" fill="white"></path>
							</mask>
							<g mask="url(#mask0_1_2)">
								<path
									d="M1446.86 1374.72C1363.57 1487.33 1255.01 1599.92 1124.2 1709.4C1052.19 1769.65 947.677 1769.65 875.667 1709.4C744.859 1599.92 636.297 1487.33 553.005 1374.72C382.146 1143.74 330.146 885.464 410.344 666.073C499.484 422.214 741.896 249.432 999.927 245.792C1257.97 249.432 1500.37 422.214 1589.51 666.073C1669.72 885.464 1617.72 1143.74 1446.86 1374.72ZM1001.17 129.75C1000.77 129.724 1000.34 129.714 999.938 129.74C999.526 129.75 999.109 129.74 998.698 129.75C693.474 133.885 406.724 338.031 301.391 626.224C207.552 882.875 265.271 1180.86 459.745 1443.73C548.484 1563.72 663.38 1683.05 801.219 1798.4C858.797 1846.59 929.359 1870.69 999.938 1870.68C1070.51 1870.68 1141.1 1846.59 1198.66 1798.4C1336.5 1683.05 1451.38 1563.72 1540.14 1443.73C1734.6 1180.85 1792.32 882.875 1698.49 626.224C1593.14 338.031 1306.41 133.885 1001.17 129.75Z"
									fill="#0077FF"></path>
							</g>
							<path className="leftEye"
								  d="M827.018 869.681C757.676 808.713 668.694 778.522 576.638 784.819L536.548 787.535C512.178 789.178 493.583 810.338 495.085 834.731L498.054 883.195C503.335 969.272 541.9 1048.03 606.67 1104.95C665.848 1156.97 740.284 1184.97 818.316 1184.97C825.674 1184.97 833.079 1184.71 840.491 1184.2L903.436 1179.93C927.806 1178.28 946.402 1157.12 944.917 1132.75L943.344 1107.14C937.67 1014.97 896.377 930.643 827.018 869.681Z"
								  fill="#0077FF"></path>
							<path className="rightEye"
								  d="M1464.82 787.538L1424.69 784.819C1332.43 778.517 1243.48 808.747 1174.08 869.76C1104.67 930.767 1063.33 1015.18 1057.66 1107.43L1056.08 1133.07C1054.59 1157.47 1073.21 1178.65 1097.59 1180.29L1160.61 1184.58C1168.03 1185.07 1175.42 1185.33 1182.79 1185.33C1260.89 1185.33 1335.41 1157.32 1394.63 1105.25C1459.47 1048.28 1498.08 969.444 1503.36 883.304L1506.34 834.761C1507.84 810.363 1489.21 789.183 1464.82 787.538Z"
								  fill="#0077FF"></path>
						</svg>
					</div>
					<div className="relative bg-white/50 dark:bg-black/50 py-24 sm:py-32 sm:px-12 lg:px-16">
						<div className="relative mx-auto flex max-w-5xl flex-col items-center text-center">
							<h2 className="text-3xl font-bold tracking-tight text-black dark:text-white sm:text-5xl">
								<span className="block sm:inline">Наша история </span>
								<span className="block sm:inline">только начинается...</span>
							</h2>
							<p className="p-5 rounded-md bg-white/60 dark:bg-black/60 shadow mt-10 text-base sm:text-xl text-black dark:text-gray-200 font-normal">
								Мы - молодая студия, только начавшая свой путь в мире веб-разработки. Но наша краткая история наполнена страстью, энтузиазмом и неограниченными амбициями.
								<br/><br/>
								Мы не останавливаемся перед невозможными задачами и готовы выложиться на все 100 процентов, чтобы создать уникальный продукт для каждого нашего клиента. Наша команда не довольствуется стандартами, она их устанавливает.
							</p>
							<Button
								href="/contacts"
								as={Link}
								color="primary"
								size="md"
								className="text-base font-medium mt-12"
							>Заказать сайт
								<CubeIcon className="w-6 h-6" />
							</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default AboutHistory;
