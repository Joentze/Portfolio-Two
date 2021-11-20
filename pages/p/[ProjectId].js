import MainHeader from '../../components/header'
import {useEffect, useState} from 'react'
import {db} from '../../firebase/firebase'
import Chip from '@material-ui/core/Chip';
import CheckIcon from '@material-ui/icons/Check';
import BuildIcon from '@material-ui/icons/Build';
import ClearIcon from '@material-ui/icons/Clear';
import Divider from '@material-ui/core/Divider';
import ReactMarkdown from 'react-markdown';
import {allPalette} from '../../palette/palette'
import router from 'next/router';
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
    const [desc, setDesc] = useState()
    const [links, setLinks] = useState({})
    const insertHtmlContent = (string)=>{
        console.log('yeet')
            if(string != undefined){
                document.getElementById("insert-html-content").innerHTML = string
            }

    }
    
    useEffect(()=>{
        const getData = async()=>{
            const getThisCard = await (await db.collection('all-projects').doc(id).get()).data()
            setCardData(getThisCard)
            setTags(getThisCard.tags)
            setDesc(getThisCard['full-description'])
            setLinks(getThisCard['links'])
            insertHtmlContent(desc)
            return getThisCard
        }
        
        getData()
        

    },[desc])

    return (
        <>
        <title>Joen | {cardData.title}</title>
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
                <p style={{color:"lightgray", lineHeight:"5px"}}>Links:</p>
                {Object.keys(links).map((item)=>{
                    return (<Chip style={{color:'rgb(60,60,60)', margin:"2px", borderColor:"rgb(60,60,60)"}} size="small" variant="outlined" label={item} onClick={()=>{router.push(links[item])}}/>)
                })}            
                <br></br>
                <br></br>
            <div id="insert-html-content"></div>
                </div>
        </div>
        </>
    )
}
export default ProjectPage