import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';



const Accordion1 = (props) => {
  return (
    <div>
        <Accordion className='borderRadius1' sx={{boxShadow:'-4px 4px 0px rgb(235 235 235)',
        border:'0.5px solid #dcdcdc',
        padding:'7.5px',
        borderRadius:'20px',
        }}>
        <AccordionSummary
          expandIcon={<AddIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography sx={{color:'#021c40' , fontSize:'18px', fontWeight:'bold', color:'#021c40'}}>
            {props.question}
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{fontWeight:'', lineHeight:'25px', color:'#495460'}}>
            {props.ans}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default Accordion1