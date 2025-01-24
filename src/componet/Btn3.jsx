import { Button } from '@mui/material'
import React from 'react'

const Btn1 = (props) => {
  return (
    <div>
      <Button className='btn1' variant='outline'
       sx={{boxShadow:'-4px 4px 0px #27E1C1',
       margin:'0 5px 0 5px',
       padding:'7.5px 20px',
       border:'0.5px solid #dcdcdc', 
       backgroundColor:'#fff' ,
        color:'#021c40' , 
        textTransform:'capitalize' ,
        fontWeight:'600',
        '&:hover':{
            transition : 'all 0.4s',
            boxShadow:'none',
            backgroundColor:'#0e2954' ,
            color:'#fff'
        }}}>
            {props.text}
      </Button>
    </div>
  )
}

export default Btn1
