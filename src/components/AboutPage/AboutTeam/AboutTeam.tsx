import danila from '@/components/AboutPage/AboutTeam/media/team/danila.webp';
import mariya from '@/components/AboutPage/AboutTeam/media/team/mariya.webp';
import vadim from '@/components/AboutPage/AboutTeam/media/team/vadim.webp';
import Image from "next/image";

const people = [
    {
        id: 1,
        name: 'Alexin Danila',
        role: 'Founder of "Martians"',
        imageUrl: danila
    },
    {
        id: 2,
        name: 'Nikulshina Mariya',
        role: 'Commercial Director',
        imageUrl: mariya
    },
    {
        id: 3,
        name: 'Popchenya Vadim',
        role: 'Frontend Developer',
        imageUrl: vadim
    },
]

const AboutTeam = () => {
    return (
        <div className="bg-white dark:bg-black">
            <div className="mx-auto max-w-7xl py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24">
                <div className="space-y-8 sm:space-y-12">
                    <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Команда</h2>
                        <p className="text-xl text-gray-600 dark:text-gray-400">
                            Каждый участник нашей команды - профессионал своего дела
                        </p>
                    </div>
                    <ul
                        role="list"
                        className="mx-auto grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4 md:gap-x-6 lg:max-w-5xl lg:gap-x-8 lg:gap-y-12 xl:grid-cols-4"
                    >
                        {people.map((person) => (
                            <li key={person.id}>
                                <div className="space-y-4">
                                    <Image src={person.imageUrl} alt="Person image" className="mx-auto h-32 w-32 rounded-full" />
                                    <div className="space-y-2">
                                        <div className="text-xs font-medium lg:text-sm">
                                            <h3>{person.name}</h3>
                                            <p className="text-mainBlue">{person.role}</p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default AboutTeam;
