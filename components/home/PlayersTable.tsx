"use client"
import { DfsSlatePlayer } from "@/types/types";
import { useEffect, useState } from "react";
import Select from "react-select";
import UISelect from "../common/UISelect";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface PlayersTableProps {
    players: DfsSlatePlayer[]
    handlePlayerChange: (player: DfsSlatePlayer) => void
    current_player: DfsSlatePlayer
}

const PlayersTable = ({current_player, players, handlePlayerChange}: PlayersTableProps) => {
    const rowsPerPageOptions = [8, 15, 30];
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(8);

    const numberOfPlayers = players?.length; 
    const indexOfLastItem = currentPage * rowsPerPage;
    const indexofFirstItem = indexOfLastItem - rowsPerPage;

    const handleSelectedOption = (type: string, value: any) => {
        if(type == 'page') {
            setCurrentPage(value)
        } else if(type == 'rowsPerPage') {
            setCurrentPage(1)
            setRowsPerPage(value)
        }
    }

    const handleNextPage = () => {
        if(currentPage < Math.ceil(numberOfPlayers / rowsPerPage)) {
            setCurrentPage(currentPage + 1);
        }
    }

    const handlePrevPage = () => {
        if(currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    }


    return (
        <div className="col-span-3 w-full">
            <table className="w-full text-sm text-left text-white ">
                <thead>
                    <tr className="bg-primary">
                        <td scope="col" className="px-6 py-3">Name</td>
                        <td scope="col" className="px-6 py-3">Team</td>
                        <td scope="col" className="px-6 py-3">Position</td>
                        <td scope="col" className="px-6 py-3">Salary</td>
                        <td scope="col" className="px-6 py-3">Points</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        players?.slice(indexofFirstItem, indexOfLastItem)?.map((player, index) => (
                            <tr onClick={() => handlePlayerChange(player)} key={index} className={`border-b ${player.playerId == current_player.playerId ? 'bg-[#807B1B]': 'bg-secondary'} border-gray-700 cursor-pointer hover:bg-primary`}>
                                <td className="px-6 py-4">
                                    {player?.operatorPlayerName}
                                </td>
                                <td className="px-6 py-4">
                                    {player?.team}
                                </td>
                                <td className="px-6 py-4">
                                    {player?.operatorPosition}
                                </td>
                                <td className="px-6 py-4">
                                    {player?.operatorSalary}
                                </td>
                                <td className="px-6 py-4">
                                    {player?.fantasyPoints}
                                </td>
                            </tr>   
                        ))   
                    }
            </tbody>
        </table>
        <div className="flex items-center justify-between w-full">
                    <UISelect 
                        options={Array.from({length: numberOfPlayers / rowsPerPage}, (_, index) => index + 1)}
                        label="Page"
                        handleSelectedOption={handleSelectedOption}
                        width="w-20"
                        type="page"
                        value={currentPage}
                    />

                    <UISelect 
                        options={rowsPerPageOptions}
                        label="Rows per page"
                        handleSelectedOption={handleSelectedOption}
                        width="w-20"
                        type="rowsPerPage"
                        value={rowsPerPage}
                    />

                    <span>{indexofFirstItem}-{indexOfLastItem} of {numberOfPlayers}</span>

                    <div className="flex items-center gap-2">
                        <button type="button" onClick={() => handlePrevPage()}>
                            <FaChevronLeft className={`cursor-pointer ${currentPage == 1 ? 'text-gray-500': 'text-white'}`}/>
                        </button>
                        <button type="button" onClick={() => handleNextPage()}>
                            <FaChevronRight  className={`cursor-pointer ${currentPage > Math.ceil(numberOfPlayers / rowsPerPage) ? 'text-gray-500': 'text-white'}`}/>
                        </button>
                    </div>

        </div>    
    </div>
    )
}

export default PlayersTable;