import * as React from 'react';
import ReplayObject from 'utils/ReplayObject';

import { parseXml, arrayBufferToString } from 'utils/xmlparsing';

export interface ITextInputProps {
  onInput: (replay: ReplayObject) => void;
}

export default function FileInput({ onInput }: ITextInputProps) {
  function handleChange(e: any) {
    const file = e.target.files[0];
    const fileReader = new FileReader();
    fileReader.onload = () => {
      if (fileReader.result) {
        const isString = typeof fileReader.result === 'string';
        if (isString) {
          const replay: Replay = parseXml(fileReader.result);

          onInput(new ReplayObject(replay));
        } else {
          const replay: Replay = parseXml(arrayBufferToString(fileReader.result));
          onInput(new ReplayObject(replay));
        }
      }
    };
    if (file) {
      fileReader.readAsText(file);
    }
  }

  return (
    <div>
      <input type='file' onChange={handleChange} />
    </div>
  );
}
