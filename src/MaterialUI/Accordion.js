import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Accordion = withStyles({
  root: {
    borderTop: '1px solid rgba(0, 0, 0, .125)',
    width: '438px',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin:'auto',
      
    },
  },
  expanded: {},
  
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: '#F0F0F0',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    backgroundColor:'#F0F0F0'
  },
  
}))(MuiAccordionDetails);

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
const myfontsize = 12;
  return (
    <div >
      <Accordion square expanded={expanded === 'panel'} onChange={handleChange('panel')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" expandIcon={<ExpandMoreIcon />}>
          <Typography style = {{fontSize:myfontsize}}>TGE</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style = {{fontSize:myfontsize}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion square expanded={expanded === 'panel'} onChange={handleChange('panel')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header" expandIcon={<ExpandMoreIcon />}>
          <Typography style ={{fontSize:myfontsize}}>VESTING</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style ={{fontSize:myfontsize}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion square expanded={expanded === 'panel'} onChange={handleChange('panel')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header" expandIcon={<ExpandMoreIcon />}>
          <Typography style ={{fontSize:myfontsize}}>DEX</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style ={{fontSize:myfontsize}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion square expanded={expanded === 'panel'} onChange={handleChange('panel')}>
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header" expandIcon={<ExpandMoreIcon />}>
          <Typography style = {{fontSize:myfontsize}}>CEX</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style = {{fontSize:myfontsize}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion square expanded={expanded === 'panel'} onChange={handleChange('panel')}>
        <AccordionSummary aria-controls="panel5d-content" id="panel5d-header" expandIcon={<ExpandMoreIcon />}>
          <Typography style = {{fontSize:myfontsize}}>DEX</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style = {{fontSize:myfontsize}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion square expanded={expanded === 'panel'} onChange={handleChange('panel')}>
        <AccordionSummary aria-controls="panel6d-content" id="panel6d-header" expandIcon={<ExpandMoreIcon />}>
          <Typography style = {{fontSize:myfontsize}}>CEX</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style = {{fontSize:myfontsize}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}