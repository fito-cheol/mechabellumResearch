import React from 'react';

import unitFieldImage from 'assets/images/imagePreloaderUnitField';
import unitInfo from 'assets/data/unitDict';

interface Props {
  unitId: number;
  trans?: boolean;
}

export default function ImageUnitField({ unitId, trans }: Props) {
  const unit = unitInfo[unitId];

  let width = unit.width;
  let height = unit.height;

  let left = -Number(width) / 2;
  let top = -Number(height) / 2;

  let imageName = unit.unit_name;
  if (trans) {
    height = unit.width;
    width = unit.height;

    left = -Number(height) / 2;
    top = -Number(width) / 2;

    imageName = imageName + '_trans';
  }

  return (
    <img
      src={unitFieldImage[imageName]}
      style={{ left: left, top: top, maxWidth: '100%', height: 'auto' }}
      title={unit['unit_name'] + trans + width + height}
      loading='lazy'
      width={width}
      height={height}
    />
  );
}
