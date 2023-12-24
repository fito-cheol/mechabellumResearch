import React, { useState, useEffect } from 'react';

import { Grid } from '@mui/material';

import { parseXml } from 'utils/xmlparsing';
import FileInput from 'components/input/FileInput';
import ImageUnitField from 'components/image/unit_field';
import DropDownInput from 'components/input/DropDown';
import ReplayObject from 'utils/ReplayObject';

function BattleField() {
  // TODO: 유닛 정보 파싱해서 글자로 보여주기
  // TODO: 맵에 유닛 매치할 수 있게 그리드 그리기

  const [replayObject, setReplayObject] = useState<ReplayObject | null>(null);
  const [replay, setReplay] = useState<Replay | null>(null);
  const [maxRound, setMaxRound] = useState<number>(0);

  const [selectedRound, setSelectedRound] = useState<number>(0);
  const [roundList, setRoundList] = useState<number[]>([]);
  const [nameList, setNameList] = useState<string[]>([]);

  const [unitsList, setUnitsList] = useState<NewUnitData[]>([]);

  const field_width = 820;
  const field_height = 650;

  useEffect(() => {
    if (replayObject) {
      const maxRound = replayObject.getMaxRound();
      setMaxRound(maxRound);
      if (selectedRound > maxRound || !selectedRound) {
        setSelectedRound(maxRound);
      }
      setNameList(replayObject.getPlayerNameList());
      setRoundList(replayObject.getRoundList());
      setUnitsList(replayObject.getUnitList(selectedRound));
    }
  }, [replayObject, selectedRound]);

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
        <FileInput onInput={setReplayObject} />
      </Grid>
      <Grid className='labeling__row labeling__row--file' container alignItems='center' justifyContent='center'>
        <div>{nameList}</div>
        {replayObject ? (
          <DropDownInput
            selectList={roundList}
            onSelect={selectedRound => {
              setSelectedRound(Number(selectedRound));
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
