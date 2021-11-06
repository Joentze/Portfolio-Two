
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import {useEffect, useState} from 'react'
import Typography from '@mui/material/Typography';
//value is always out of five
const SkillBar = ({name, val, ifSecondary}) =>{
    return(
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
          <p>{name}</p>
        <LinearProgress variant="determinate" color={ifSecondary} value={val*100/5} />
      </Box>
      <Box sx={{ minWidth: 50 }} style={{marginTop:"46px"}}>
        <Typography variant="body2" color="text.secondary">{`${val} / 5`}</Typography>
      </Box>
    </Box>
    )
}

export default SkillBar