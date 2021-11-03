import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'

const timelineDataList = [{
  date:"Jan 2014 - Dec 2017",
  title:"Temasek Secondary School",
  description:"testidwahoaw odhaiowhdoihawiohd ioahwiodhio awhdoihawiohd iawhodhaowhdioahw odhaowhdoha wiodhaowh dhawihdawoi dhawiohd"
} ,
{
  date:"Feb 2018 - Dec 2019",
  title:"Temasek Junior College",
  description:"test"
},
{
  date:"Apr 2020 - Apr 2022",
  title:"Singapore Armed Forces",
  description:"test"
}];

const MyTimeline = ()=> {
  return (
    <>
    <Timeline position="linear">{
      timelineDataList.map((item)=>{
        return(
          <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
                {item.date}
          </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="primary" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <TimelineCard
                title={item.title}
                description={item.description}
              />
            </TimelineContent>
          </TimelineItem>
          )
          })
}
    </Timeline>
    </>
  );
}

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)'}}
  >
    •
  </Box>
);

const TimelineCard = ({title, description})=> {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2">
  <ReactMarkdown  plugins={remarkGfm} rehypePlugins={rehypeRaw}>{description}</ReactMarkdown>
        </Typography>
      </CardContent>
    </Card>
  );
}


export default MyTimeline