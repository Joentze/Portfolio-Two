import MainHeader from '../components/header'
import {useEffect, useState} from 'react'
import {db} from '../firebase/firebase'
import Chip from '@material-ui/core/Chip';
import CheckIcon from '@material-ui/icons/Check';
import BuildIcon from '@material-ui/icons/Build';
import ClearIcon from '@material-ui/icons/Clear';
import Divider from '@material-ui/core/Divider';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import {allPalette} from '../components/palette'
const projectStatusComponents ={
    1:<Chip icon={<CheckIcon style={{color:"#335c32"}}/>} label="Completed" variant="outlined" style={{background:"#8cff8a",color:"#335c32"}}/>,
    2:<Chip icon={<BuildIcon style={{color:"#705d3b"}}/>} label="On-going"  variant="outlined" style={{background:"#ffd48a",color:"#705d3b"}}/>,
    3:<Chip icon={<ClearIcon style={{color:"#703b3b"}}/>} label="Cancelled" variant="outlined" style={{background:"#ff8a8a",color:"#703b3b"}}/>
}

export const getServerSideProps = async ({ params }) => {
    const id = params.ProjectId
    return {props:{id:id}}
}
const ProjectPage = ({ id })=>{
    const [cardData, setCardData] = useState({})
    const [tags, setTags] = useState([])
    useEffect(()=>{
        const getData = async()=>{
            const getThisCard = await (await db.collection('all-projects').doc(id).get()).data()
            setCardData(getThisCard)
            setTags(getThisCard.tags)
            console.log(cardData.bannerURI)
            return getThisCard
        }

        getData()

    },[])

    return (
        <>
        <MainHeader/>
        <div class="project-banner-photo">
            <div class="project-fade-filter"></div>
            <img src={cardData.bannerURI} type="image"></img>
            </div> 
        <div class="all-project-container">
            <div class="title-part-project">
                <h1>{cardData.title}</h1>
                <div>{projectStatusComponents[cardData['project-status']]}</div>
                <br></br>
                <br></br>
            </div>
            <Divider/>
            <div class="projects-project-content">
                <p style={{color:"lightgray", lineHeight:"5px"}}>Skills:</p>

                {tags.map((item)=>{
                    return (<Chip style={{marginTop:"5px",marginRight:"5px", marginBottom:"5px", color:allPalette[item.toLowerCase()][1],background:allPalette[item.toLowerCase()][0]}} size="small" label={item} />)
                })}            
                <br></br>
                <br></br>
                <ReactMarkdown  plugins={remarkGfm} rehypePlugins={rehypeRaw}>{cardData['full-description']}</ReactMarkdown>
                </div>
        </div>
        </>
    )
}
export default ProjectPage