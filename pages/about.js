import MainHeader from '../components/header'
import Divider from '@material-ui/core/Divider';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import MyTimeline from '../components/timelineAbout'
import {db} from '../firebase/firebase'
import {useState, useEffect} from 'react'
import SkillBar from '../components/SkillBar'
import Chip from '@material-ui/core/Chip';
import {allPalette} from '../palette/palette'


const softSkills = ['Creativity', 'Communication', 'Learning', 'Teamwork']
const hardSkills = ['Coding', 'Writing', 'Designing', 'Googling']
const mySkills = ['Python', 'Javascript', 'Web Design', 'Writing', 'React', 'Firebase', 'SQL', '3D', 'CAD', 'HTML', 'CSS']
const About =()=>{
    const [desc, setDesc] = useState()
    const [skills, setSkills] = useState({Proficient:[], Intermediate:[], Basic:[]})
    const [volunteer, setVolunteer] = useState()
    useEffect(()=>{
      const getDescElem = async ()=>{
        let getAboutTimeline = (await db.collection("about-page").doc("iJdRHiSi4xGb9bd2SaOp").get()).data()
        setDesc(getAboutTimeline['brief-description'])
        setSkills(getAboutTimeline['hard-skill-rate'])
        setVolunteer(getAboutTimeline['volunteer-xp'])
        console.log(getAboutTimeline)
      }
      getDescElem()
      
    },[])
    return (
        <>
            <title>Joen | About</title>
            <MainHeader/>  
            <div class="about-main-container">
                <div class="about-main-align">
                    <div class="about-partition face-icon-section">
                        <div id="about-page-image"></div>
                    </div>
                    <div class="about-partition brief-desc-section">
                        <h1>Hello there 👋🏼 </h1>
                        <Divider/>
                        <ReactMarkdown  plugins={remarkGfm} rehypePlugins={rehypeRaw}>{desc}</ReactMarkdown>
                    </div>
                    <br></br>
                    <div class="about-partition experience-section">
                    <div class="about-xp-sub-box">
                            <h2>Hard Skills 🔨</h2>
                            <Divider/>
                           <br></br>
                            <div class="about-xp-sub-div">
                                Proficient:&nbsp; 
                                {
                                    skills['Proficient'].map((item)=>{return (<Chip style={{marginTop:"5px",marginRight:"5px", marginBottom:"5px", color:allPalette[item.toLowerCase()][1],background:allPalette[item.toLowerCase()][0]}} size="medium" label={item} />)})
                                }
                            </div>
                            <br></br>
                            <div class="about-xp-sub-div">
                                Intermediate:&nbsp; 
                                {
                                    skills['Intermediate'].map((item)=>{return (<Chip style={{marginTop:"5px",marginRight:"5px", marginBottom:"5px", color:allPalette[item.toLowerCase()][1],background:allPalette[item.toLowerCase()][0]}} size="medium" label={item} />)})
                                }
                            </div>
                            <br></br>
                            <div class="about-xp-sub-div">
                                Proficient:&nbsp; 
                                {
                                    skills['Basic'].map((item)=>{return (<Chip style={{marginTop:"5px",marginRight:"5px", marginBottom:"5px", color:allPalette[item.toLowerCase()][1],background:allPalette[item.toLowerCase()][0]}} size="medium" label={item} />)})
                                }
                            </div>
                            <br></br>

                            <p style={{color:"grey"}}><i>See write-up for projects <a href="/projects"><u>here</u></a></i></p>
                            </div>
                        <div class="about-xp-sub-box">
                            <h2>Soft Skills ☁️</h2>
                            <Divider/>
                            <div class="about-xp-sub-div">{softSkills.map((item)=>{return (<SkillBar name={item} val={skills[item]}/>)})}
                            </div>
                            </div>
                        
                    </div>
                    <br></br>
                    <br></br>
                    <div class="about-partition timeline-section">
                        <MyTimeline/>                        
                    </div>
                    <br></br>
                    <br></br>
                    <div class="about-partition about-volunteer-section">
                        <h1>Volunteer Work</h1>
                        <Divider/>
                        <ReactMarkdown  plugins={remarkGfm} rehypePlugins={rehypeRaw}>{volunteer}</ReactMarkdown>
                    </div>
                </div>
            </div>
            
        </>
        )   
}

export default About