import unitJson from './unit.json';

type UNIT_DICT = {
  [index: string]: Unit;
};

const unitDict: UNIT_DICT = {};

unitJson.map(unit => {
  unitDict[unit['unit_id']] = unit;
});

export default unitDict;
