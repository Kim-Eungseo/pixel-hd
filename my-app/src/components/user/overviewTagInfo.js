import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

export default function OverviewTagInfo() {
  return (
    <div>
     <Typography variant="h5" gutterBottom component="div" sx={{ml: 1, mt: 3, fontSize: 20}}>
        최근 한달 간 가장 많이 사용한 태그는 '테크', '예술', '생각' 입니다.
      </Typography> 
      <Paper variant="outlined" sx={{ p: 20}}>
      (그래프 들어갈 자리)

      </Paper>
    </div>
  );
}