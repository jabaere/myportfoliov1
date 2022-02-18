import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import DOMPurify from 'dompurify';

export default function ProjectCard({title,image,description,source,link}) {
    
  return (
    <Card sx={{ maxWidth: 700 }}>
      <CardMedia
        component="img"
        height="440"
        image={image}
        alt={title}
        style={{objectFit: 'fill'}}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography 
        variant="body2" 
        color="text.secondary" 
        align='left' 
        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(description) }}>
        
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small"><Link href={source} underline="none" target="_blank" rel="noopener">Source</Link></Button>
        <Button size="small"><Link href={link} underline="none" target="_blank" rel="noopener">Demo</Link></Button>
      </CardActions>
    </Card>
  );
}