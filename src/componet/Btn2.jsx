import { Button } from '@mui/material'
import React from 'react'

const Btn1 = (props) => {
  return (
    <div>
      <Button className='btn1' variant='outline'
       sx={{boxShadow:'-4px 4px 0px rgb(235 235 235)',
       margin:'0 5px 0 5px',
       padding:'7.5px 20px',
       border:'0.5px solid #dcdcdc', 
       backgroundColor:'transparent' ,
        color:'#021c40' , 
        textTransform:'capitalize' ,
        fontWeight:'500',
        '&:hover':{
            transition : 'all 0.4s',
            boxShadow:'none'
        }}}>
            {props.text}
      </Button>
    </div>
  )
}

export default Btn1
