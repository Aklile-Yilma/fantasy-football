export interface DfsSlateGame {
    gameId: number;
    homeTeam: string;
    awayTeam: string;
    startTime: string;
}
  
export interface DfsSlatePlayer {
    fantasyDefenseProjectionStatId: number | null;
    fantasyPoints: number;
    fantasyPointsPerDollar: number;
    operatorPlayerId: string;
    operatorPlayerName: string;
    operatorPosition: string;
    operatorRosterSlots: string[];
    operatorSalary: number;
    operatorSlatePlayerId: string;
    playerGameProjectionStatId: number;
    playerId: number;
    removedByOperator: boolean;
    slateGameId: number;
    slateId: number;
    slatePlayerId: number;
    team: string;
    teamId: number;
}
  
export interface SlateData {
    dfsSlateGames: DfsSlateGame[];
    dfsSlatePlayers: DfsSlatePlayer[];
    id: string;
    isMultiDaySlate: boolean;
    numberOfGames: number;
    operator: string;
    operatorDay: string;
    operatorGameType: string;
    operatorName: string;
    operatorSlateId: number;
    operatorStartTime: string;
    removedByOperator: boolean;
    salaryCap: number;
    season: number;
    seasonType: number;
    slateId: number;
    slateRosterSlots: string[];
    week: number;
    _id: string;
    _lastUpdatedDate: string;
}