import { XMLParser } from 'fast-xml-parser';

export function parseXml(XMLdata: string) {
  const parser = new XMLParser();

  const jObj = parser.parse(XMLdata);

  return jObj;
}
export function arrayBufferToString(arrayBuffer: ArrayBuffer) {
  const uint8array = new Uint8Array(arrayBuffer);

  return new TextDecoder('utf-8').decode(uint8array);
}
