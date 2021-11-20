import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {useRouter} from 'next/router'
import Chip from '@material-ui/core/Chip';
import {allPalette} from '../palette/palette'
import CardActionArea from '@mui/material/CardActionArea';
const MediaCard=({data})=> {
const router = useRouter()
  return (
    <Card sx={{ maxWidth: 345, margin:1}}
    style={{background:"#f7f7f7", paddingBottom:"10px"}}
    onClick={()=>{
        router.push(`p/${data['id']}`)
    }}>
      <CardActionArea>
      <CardMedia
        component="img"
        height="140"
        image={data["bannerURI"]}
        alt="photo"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {data.title}
        </Typography>
        {
            data.tags.map((item)=>{
                return (<Chip style={{marginTop:"5px",marginRight:"5px", marginBottom:"5px", color:allPalette[item.toLowerCase()][1],background:allPalette[item.toLowerCase()][0]}} size="small" label={item} />)
            })
            
}
        <Typography variant="body2" color="text.secondary">
        {data["briefDescription"]}
        </Typography>
      </CardContent>
      </CardActionArea>
    </Card>
  );
}
export default MediaCard