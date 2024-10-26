"use client"
import { customTheme } from "@/config/select-config";
import { DfsSlatePlayer, SlateData } from "@/types/types";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Select from "react-select";
import PlayersTable from "./PlayersTable";
import Player from "./Player";
import UISelect from "../common/UISelect";

type SelectedOptions = {
    operator?: string | null;
    gameType?: string | null;
    slateName?: string | null;
};

const FantacyHome = () => {
    const [data, setData] = useState<SlateData[]>();
    const [loading, setLoading] = useState(false);
    const [operators, setOperators] = useState<Set<string>>(new Set());
    const [gameTypes, setGameTypes] = useState<Map<string, Set<string>>>(new Map());
    const [slateNames, setSlateNames] = useState<Map<string, Set<string>>>(new Map());
    const [players, setPlayers] = useState<Map<string, DfsSlatePlayer[]>>(new Map());
    const [currentPlayer, setCurrentPlayer] = useState<DfsSlatePlayer>();
    const [currentPlayersKey, setPlayersKey] = useState('');
    const [selectedOptions, setSelectedoptions] = useState<SelectedOptions>({
        operator: null,
        gameType: null,
        slateName: null
    })

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch('/data.json');
                const responseData = await response.json();
                setData(responseData);
            } catch (err: any) {
                toast.error("Error Fetching Data")
            } finally {
                setLoading(false);
            }

        }
        fetchData();
    }, [])

    useEffect(() => {
        const updatedOperators = new Set<string>();
        const updatedGameTypes = new Map<string, Set<string>>();
        const updatedSlateNames = new Map<string, Set<string>>();
        const updatedPlayers = new Map<string, DfsSlatePlayer[]>();

        data?.map((current_slate) => {
            const currentOperator = current_slate?.operator;
            const currentGameType = current_slate?.operatorGameType;
            const currentSlateName = current_slate?.operatorName;
            const currentPlayers = current_slate?.dfsSlatePlayers;

            updatedOperators?.add(currentOperator);

            // set game types
            if(!updatedGameTypes?.has(currentOperator)) {
                updatedGameTypes.set(currentOperator, new Set())
            }
            updatedGameTypes.get(currentOperator)?.add(currentGameType);

            // set slate names
            if(!updatedSlateNames?.has(currentGameType)) {
                updatedSlateNames.set(currentGameType, new Set())
            }
            updatedSlateNames.get(currentGameType)?.add(currentSlateName);

            // set players
            const playersKey = `${currentGameType}_${currentSlateName}`;
            updatedPlayers.set(playersKey, currentPlayers);
            
        })

        setOperators(updatedOperators);
        setGameTypes(updatedGameTypes);
        setSlateNames(updatedSlateNames);
        setPlayers(updatedPlayers);

        // auto select
        const firstOperator = Array.from(updatedOperators)[0];
        const firstGameType = firstOperator ? Array.from(updatedGameTypes.get(firstOperator) || [])[0] : '';
        const firstSlateName = firstGameType ? Array.from(updatedSlateNames.get(firstGameType) || [])[0] : '';
    
        setSelectedoptions({
            operator: firstOperator,
            gameType: firstGameType,
            slateName: firstSlateName
        });

        const playersKey = `${firstGameType}_${firstSlateName}`;
        setPlayersKey(playersKey)
        setCurrentPlayer(updatedPlayers?.get(playersKey)?.[0])

    }, [data])


    const handleSelectedOption = (type: string, value: string) => {
        if(value) {
            let operator
            let gameType;
            let slateName;
            if(type == 'operator') {
                operator = value as string;
                gameType = Array.from(gameTypes.get(operator) || [])?.[0];
                slateName =  Array.from(slateNames.get(gameType) || [])?.[0];
            } else if(type == 'gameType') {
                operator = selectedOptions?.operator
                gameType = value;
                slateName = Array.from(slateNames.get(gameType) || [])?.[0];
   
            } else if (type == 'slateName') {
                operator = selectedOptions?.operator 
                gameType = selectedOptions?.gameType
                slateName = value;
            }

            const playersKey = `${gameType}_${slateName}`;
            setPlayersKey(playersKey);
            setSelectedoptions({
                operator,
                gameType,
                slateName
            })
            setCurrentPlayer(players?.get(playersKey)?.[0])
        }
    }

    const handlePlayerChange = (player: DfsSlatePlayer) => {
        setCurrentPlayer(player);
    }

    return (
        <div className="w-full">
           <div className="p-6 bg-secondary flex flex-row items-center justify-center gap-10">
                <UISelect 
                    width="w-56"
                    options={Array.from(operators?.keys())}
                    handleSelectedOption={handleSelectedOption}
                    placeholder="Select operator"
                    type="operator"
                    value={selectedOptions?.operator}
                    key={"operator"}
                />
                <UISelect 
                    width="w-56"
                    options={Array.from(gameTypes?.get(selectedOptions?.operator || '') || [])}
                    handleSelectedOption={handleSelectedOption}
                    placeholder="Select Game Type"
                    type="gameType"
                    value={selectedOptions?.gameType}
                    key={"game-type"}
                />
                <UISelect 
                    width="w-56"
                    options={Array.from(slateNames?.get(selectedOptions.gameType || '') || [])}
                    handleSelectedOption={handleSelectedOption}
                    placeholder="Select Slate Name"
                    type="slateName"
                    value={selectedOptions?.slateName}
                    key={"slate-names"}
                />
           </div>

            <div className="grid grid-cols-4">
                <PlayersTable current_player={currentPlayer!} players={players.get(currentPlayersKey) || []} handlePlayerChange={handlePlayerChange}/>
                <Player player={currentPlayer}/>
            </div>

        </div>
    )
}

export default FantacyHome;