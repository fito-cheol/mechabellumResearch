export default class ReplayObject {
  replay: Replay;

  constructor(replay: Replay) {
    this.replay = replay;
  }

  get() {
    return this.replay;
  }
  getPlayerRecordList(): PlayerRecord[] {
    return this.replay.BattleRecord.playerRecords.PlayerRecord;
  }
  getRoundList(): number[] {
    const rounds: number[] = [];
    this.getPlayerRecordList()[0].playerRoundRecords.PlayerRoundRecord.forEach(roundRecord => {
      if (roundRecord.round) {
        rounds.push(roundRecord.round);
      }
    });
    return rounds;
  }
  getMaxRound(): number {
    const roundList = this.getRoundList();
    return roundList[roundList.length - 1];
  }
  getPlayerNameList() {
    const names: string[] = [];
    this.getPlayerRecordList().forEach(playerRecord => {
      names.push(playerRecord.name);
    });
    return names;
  }
  getUnitList(round: number): NewUnitData[] {
    const unitList: NewUnitData[] = [];
    this.getPlayerRecordList().forEach(playerRecord => {
      playerRecord.playerRoundRecords.PlayerRoundRecord.forEach(record => {
        if (record.round == round && record.playerData.units) {
          unitList.push(record.playerData.units.NewUnitData);
        }
      });
    });
    return unitList;
  }
}
