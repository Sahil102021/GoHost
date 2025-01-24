import React from 'react'
import { Box, Button, Grid2, Typography } from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';


const Box1 = (props) => {
  return (
    <div>
    <Box sx={{Width:'100%',height:'100%',padding:'30px' , border:'1.5px solid #e8e8e8',borderRadius:'10px',boxShadow:'-4px 4px 0px #d8ecff' ,backgroundColor:'#fff'}} >
        
        <Box sx={{position:'relative'}}><p>
        <FiberManualRecordIcon  sx={{color:'#4e4feb' , float:'left', fontSize:'16px',position:'absolute', bottom:'20%',left:'0'}} />
        <Typography variant='h4' sx={{fontWeight:'bolder',color:'#021c40',padding:'0 20px 0 20px'}}>
            {props.title}</Typography></p>
        </Box> 
        <Typography variant='subtitle2' color='#021c40' sx={{fontWeight:''}}>
        {props.detail}
        </Typography><br />

        <Box sx={{display:'flex',alignItems:'center'}} >
        <Typography  sx={{fontWeight:'bold',color:'#4e4feb', fontSize:'24px', padding:'3px'}}>
             $ {props.prise} </Typography><h4 style={{fontWeight:'500'}}> / Year</h4>
        </Box>

        <Button className='btn1' variant='outline' hover
      sx={{ width:'100%',
        boxShadow:'-4px 4px 0px rgb(235 235 235)',
            margin:'0 5px 0 5px',
            padding:'7.5px 20px', 
            backgroundColor:'#4e4feb',
              color:'#fff' , 
              textTransform:'capitalize' , 
              fontWeight:'500',
              '&:hover': {
                backgroundColor:'#021c40'
              }
            }} >
            Register Domain
      </Button>
        
    </Box>
      
    </div>
  )
}

export default Box1
