'use client'
import Image from "next/image";
import { TeamMemberInterface } from "@/types/TeamMembers";

type Props = {
    teamMembers: TeamMemberInterface[];
}
const AboutTeam = ({ teamMembers }: Props) => {
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
                        {teamMembers.sort((a, b) => Number(a.acf["sort-position"]) - Number(b.acf["sort-position"]) ).map((person: TeamMemberInterface) => (
                            <li key={person.id}>
                                <div className="space-y-4">
                                    <Image
                                        src={person.acf["member-avatar"].sizes.medium}
                                        alt={person.acf["member-avatar"].alt}
                                        className="mx-auto h-32 w-32 rounded-full"
                                        width={person.acf["member-avatar"].width}
                                        height={person.acf["member-avatar"].height}
                                    />
                                    <div className="space-y-2">
                                        <div className="text-xs font-medium lg:text-sm">
                                            <h3>{person.title.rendered}</h3>
                                            <p className="text-primary">{person.acf.position}</p>
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
