import React, { useState, useEffect } from 'react';
import './Labeling.scoped.scss';

import { Grid } from '@mui/material';

function Labeling() {
  
  useEffect(() => {
  }, []);

  return (
    <>
      <Grid className='labeling__row labeling__row--file' container alignItems='center' justifyContent='center'>
        <Grid item md={8}>
        </Grid>
        <Grid container item md={4} justifyContent='end'>
        </Grid>
      </Grid>
    </>
  );
}

export default Labeling;
