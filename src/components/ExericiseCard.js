import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { List, ListItem, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';


export default function ExericiseCard({exericise}) {
  return (
  <Link to={`/exericise/${exericise.id}`} style={{textDecoration:'none'}}>
    <Card className='exercise-card' sx={{width:'360px',height:'100%',textTransform:"capitalize"}} >
      <CardMedia
        component="img"
        alt={exericise.name}
        height="360"
        image={exericise.gifUrl}
        width='100%'
        loading='lazy'
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {exericise.name}
        </Typography>
        
        <List sx={{}}>
                <ListItem sx={{padding:'2px'}}>
                  <ListItemText
                    primary={`Body part: ${exericise.bodyPart}`}
                  />
                </ListItem>
                <ListItem sx={{padding:'2px'}}>
                  <ListItemText
                  
                    primary={`Equipment: ${exericise.equipment}`}
                  />
                </ListItem >
                <ListItem sx={{padding:'2px'}}>
                  <ListItemText
                    primary={`Target: ${exericise.target}`}
                  />
                </ListItem>
            </List>
        
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </Link>
   
    
  );
}
