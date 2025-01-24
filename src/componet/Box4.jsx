import React from 'react'
import { Box, Button, Grid2, Icon, Typography } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import OfflinePinIcon from '@mui/icons-material/OfflinePin';

const Box2 = (props) => {
  return (
    <div>
      <Box sx={{Width:'100%',height:'100%',padding:'40px' , border:'1.5px solid #e8e8e8',borderRadius:'10px',boxShadow:'-4px 4px 0px #d8ecff' , backgroundColor:'#fff'}} >
        <Box width="60px"> 
            <img src={props.img} width="100%" alt="" style={{borderRadius:'10px',boxShadow:'-4px 4px 0px rgb(235 235 235)'}}  />
        </Box> <br />
        <Typography sx={{fontWeight:'bold' , fontSize:'18px'}}>
          {props.title}
        </Typography> <br />
        <Typography variant='body1' color='#021c40' sx={{fontWeight:'', lineHeight:'25px', color:'#495460'}}>
          {props.detail}
        </Typography><br />
      </Box>
    </div>
  )
}

export default Box2
