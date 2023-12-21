import { XMLParser } from 'fast-xml-parser';
import fs from 'fs';
import path from 'path';

function parseXml(XMLdata: string) {
  const parser = new XMLParser();

  const jObj = parser.parse(XMLdata);

  return jObj;
}

function readReplayText(filename: string) {
  // position_[배부른곰이]VS[Bot]
  return fs.readFileSync(path.resolve(__dirname, `src/assets/replay/${filename}.grbr`));
}
