import React, { useState, useEffect } from 'react';

import { Grid } from '@mui/material';

import { parseXml } from 'utils/xmlparsing';
import FileInput from 'components/input/FileInput';
import ImageUnitField from 'components/image/unit_field';
import DropDownInput from 'components/input/DropDown';

function BattleField() {
  // TODO: 유닛 정보 파싱해서 글자로 보여주기
  // TODO: 맵에 유닛 매치할 수 있게 그리드 그리기

  const [replay, setReplay] = useState<Replay | null>(null);
  const [maxRound, setMaxRound] = useState<number>(0);

  const [round, setRound] = useState<number>(0);
  const [name, setName] = useState<string>('');
  const [unitsList, setUnitsList] = useState<NewUnitData[]>([]);

  const field_width = 820;
  const field_height = 650;

  useEffect(() => {
    if (replay) {
      const newRoundMax =
        replay.BattleRecord.playerRecords.PlayerRecord[0].playerRoundRecords.PlayerRoundRecord.length - 1;
      setMaxRound(newRoundMax);
      if (round > newRoundMax || !round) {
        setRound(newRoundMax);
      }

      hadleReplay(replay, round);
    }
  }, [replay, round]);

  function hadleReplay(replay: Replay, round: number) {
    let newName = '';
    const newUnits: NewUnitData[] = [];
    replay.BattleRecord.playerRecords.PlayerRecord.forEach(playerRecord => {
      newName = newName + playerRecord.name + ' ';

      const recordList = playerRecord.playerRoundRecords.PlayerRoundRecord;
      const selectedRoundRecord = recordList[round];
      if (selectedRoundRecord.playerData.units) {
        console.log(selectedRoundRecord.playerData.units.NewUnitData);
        newUnits.push(selectedRoundRecord.playerData.units.NewUnitData);
      }
    });
    setName(newName);
    setUnitsList(newUnits);
  }

  return (
    <>
      <Grid className='labeling__row labeling__row--file' container alignItems='center' justifyContent='center'>
        <div
          className='field'
          style={{
            width: field_width,
            height: field_height,
            backgroundColor: 'grey',
            position: 'relative',
          }}
        >
          {unitsList.map((units, index) => {
            return units.map(unit => {
              return (
                <div
                  key={`${index}_${unit.Index}_${unit.id}`}
                  style={{ position: 'absolute', left: unit.Position.x + 410, top: unit.Position.y + 300 }}
                >
                  <ImageUnitField unitId={unit.id} trans={unit.IsRotate} />
                </div>
              );
            });
          })}
        </div>
      </Grid>
      <Grid className='labeling__row labeling__row--file' container alignItems='center' justifyContent='center'>
        <FileInput onInput={setReplay} />
      </Grid>
      <Grid className='labeling__row labeling__row--file' container alignItems='center' justifyContent='center'>
        <div>{name}</div>
        {replay ? (
          <DropDownInput
            dropCount={maxRound}
            onSelect={selectedRound => {
              setRound(Number(selectedRound));
            }}
          />
        ) : (
          <></>
        )}
      </Grid>
    </>
  );
}

export default BattleField;
