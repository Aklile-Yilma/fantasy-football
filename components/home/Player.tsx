'use client'

import { DfsSlatePlayer } from "@/types/types";
import Image from "next/image";

interface PlayerProps {
    player?: DfsSlatePlayer
}

const Player = ({player}: PlayerProps) => {

    return (
        <div className="w-full my-8 mx-4 bg-secondary min-h-max flex flex-col items-center justify-start gap-y-3">
            <Image src={"/tom_brady 1.png"} 
                className="w-full mx-auto bg-primary"
                alt="player image" 
                width={500} 
                height={500}
            />
            <h1 className="text-xl mb-7">{player?.operatorPlayerName}</h1>
            <p className="text-7xl">{player?.fantasyPoints}</p>
            <span className="w-full text-center">Points</span>

        </div>
    )
}

export default Player;