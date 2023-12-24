import * as React from 'react';

import { parseXml, arrayBufferToString } from 'utils/xmlparsing';

export interface ITextInputProps {
  onInput: (replay: Replay) => void;
}

export default function FileInput({ onInput }: ITextInputProps) {
  function handleChange(e: any) {
    const file = e.target.files[0];
    const fileReader = new FileReader();
    fileReader.onload = () => {
      if (fileReader.result) {
        const isString = typeof fileReader.result === 'string';
        if (isString) {
          const parsedJson: Replay = parseXml(fileReader.result);
          onInput(parsedJson);
        } else {
          const parsedJson: Replay = parseXml(arrayBufferToString(fileReader.result));
          onInput(parsedJson);
        }
      }
    };
    fileReader.readAsText(file);
  }

  return (
    <div>
      <input type='file' onChange={handleChange} />
    </div>
  );
}
