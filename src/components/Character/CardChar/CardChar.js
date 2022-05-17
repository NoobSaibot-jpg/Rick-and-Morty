import Card from '@mui/material/Card';
import { CardMedia, Typography, CardContent, CardActions, Button,} from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';

export default function CardChar(props) {
  

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="300"
        image={props.img}
        alt={props.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.descr}
        </Typography>
      </CardContent>
    <CardActions>
      <Link to={props.url}><Button size="small" onClick={props.click}>Learn More</Button></Link>
    </CardActions>
  </Card>
  )
}
