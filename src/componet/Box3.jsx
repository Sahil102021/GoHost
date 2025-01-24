import React from 'react'
import { Box, Button, Grid2, Typography } from '@mui/material';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';

const Box3 = (props) => {
  return (
    <div>
        <Box sx={{Width:'100%',height:'100%',padding:'20px',margin:'20px 0 20px 0' , border:'1.5px solid #e8e8e8',borderRadius:'10px',boxShadow:'-4px 4px 0px #d8ecff' ,backgroundColor:'#fff'}} >
            <Box sx={{color:'#71e9b6' }} ><CheckBoxOutlineBlankIcon sx={{fontSize:'15px'}}/><CheckBoxOutlineBlankIcon sx={{fontSize:'15px'}} /><CheckBoxOutlineBlankIcon sx={{fontSize:'15px'}}/><CheckBoxOutlineBlankIcon sx={{fontSize:'15px'}}/><CheckBoxOutlineBlankIcon sx={{fontSize:'15px'}}/>
            </Box> <br />
            <Typography sx={{fontSize:'18px', fontWeight:'bold', color:'#021c40'}}>{props.detail}</Typography>
             <br />
             <br />
            <Box sx={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                <Box width="30px" sx={{padding:'20px 20px 20px 0' }}>
                    <img src={props.img} width="100%" style={{borderRadius:'50%'}} alt="" />
                </Box>
                <Box>
                    <Typography sx={{fontSize:'16px', fontWeight:'bold',color:'#021c40'}}>{props.name}</Typography>
                    <Typography variant='body2' sx={{color:'#495460' }}>Web designer</Typography>

                </Box>
            </Box>
    
    
        </Box>
  </div>
  )
}

export default Box3