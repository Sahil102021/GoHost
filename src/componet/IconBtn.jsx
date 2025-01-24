import { Button } from '@mui/material'
import React from 'react'
import { SendIcon } from '@mui/icons-material/Send';

const Btn1 = (props) => {

  return (
    <div>
      <Button className='btn1' variant='outline' startIcon={props.icon}
      sx={{boxShadow:'-4px 4px 0px rgb(235 235 235)',
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
            {props.text}
      </Button>
    </div>
  )
}

export default Btn1
