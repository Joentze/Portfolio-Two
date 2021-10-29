import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import {allPalette} from './palette'
import ReactMarkdown from 'react-markdown'
import zIndex from '@material-ui/core/styles/zIndex';
import {useRouter} from 'next/router'


const useStyles = makeStyles({
  root: {
    width: 325,
    boxShadow: "0 3px 6px 0 rgba(0, 0, 0, 0.13), 0 5px 7px 0 rgba(0, 0, 0, 0.14);",
    border:"0.5px solid rgba(200,200,200,0.6)",
    borderRadius:"10px",
    marginTop:"20px",
    marginLeft:"auto",
    marginRight:"auto",
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const MainCard = ({cardData})=> {
  const router  = useRouter()
  const classes = useStyles();
  const ProjectId = cardData.id
  return (
    <Card className={classes.root} onClick={
      ()=>{
        router.push(`/p/${ProjectId}`)
      }
    }>
      <CardContent>
        <Typography variant="h5" component="h2">
            <b>{cardData.title}</b>
        </Typography>{
            cardData.tags.map((item)=>{
                return (<Chip style={{marginTop:"5px",marginRight:"5px", marginBottom:"5px", color:allPalette[item.toLowerCase()][1],background:allPalette[item.toLowerCase()][0]}} size="small" label={item} />)
            })
            
}
        <Typography className={classes.pos} color="textSecondary">
            <ReactMarkdown>{cardData.briefDescription}</ReactMarkdown>
        </Typography>
      </CardContent>
    </Card>
  );
}
export default MainCard
