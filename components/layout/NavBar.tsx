'use client'

import Image from "next/image";

const NavBar = () => {

    return (
        <div className="flex p-6 ml-6 items-center bg-primary justify-start w-full">
            
            <Image src={"/Football_Icon 1.png"} 
                className="w-16 bg-primary"
                alt="player image" 
                width={500} 
                height={500}
            />
            <h1 className="text-white text-xl">Fantasy Football</h1>

        </div>
    )
}

export default NavBar;