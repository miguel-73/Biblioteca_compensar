import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#ff7700',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Titulo() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid style={{ marginBottom: '20px', marginTop: '-9px' }} container spacing={3}>
        <Grid item xs={12} sm={12} >
          <Item>Notas academicas </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
