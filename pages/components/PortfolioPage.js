import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import {allPalette} from './palette'
import Chip from '@material-ui/core/Chip';
import ContactMenu from './contactMenu';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
const mySkills = ['Python', 'Javascript', 'Web Design', 'Writing', 'React', 'Firebase', 'SQL', '3D', 'CAD', 'HTML', 'CSS']
const descWriteUp = "Hi there! I am a creative & curious individual. I enjoy designing, coding, daydreaming & coffee."


const PortfolioPage = ({obj}) =>{
    return(
        <>
        <h1 id='title-head-text'>My Portfolio</h1>
        <div class = "pf-main-container" id="portfolio-container-shell">
        <div class = "pf-main-header">
        <div class='button-header-decoration' style={{background:"#ff675c"}}></div>
        <div class='button-header-decoration'style={{background:"#ffb85c"}}></div>
        <div class='button-header-decoration'style={{background:"#5cff9a"}}></div>
        </div>
        <div id="description-photo-text-flex">
        <div id="description-box-photo">
            <div id="face-icon"></div>
            <div id="contact-box">
                <div id="contact-icons-flex">
                    <a href="https://github.com/Joentze/portfolio-site-two"><GitHubIcon style={{margin:"30px"}}/></a>
                    <a href="https://www.linkedin.com/in/joen-tan-6b57611b9/"><LinkedInIcon style={{margin:"30px"}}/></a>
                    <a href="https://www.instagram.com/_joen___/"><InstagramIcon style={{margin:"30px"}}/></a>
                </div>
            </div>
        </div>
     
        <div id="description-box-desc">
            <div id="desc-text-wrapper">
                <div id="desc-main-text"><ReactMarkdown children = {"## Hello, I'm Joen"} plugins={remarkGfm} rehypePlugins={rehypeRaw}/></div>
                <hr></hr>
                <>
                
                {mySkills.map((item)=>
                    {
                        return (<Chip style={{marginTop:"5px",marginRight:"5px", marginBottom:"5px", color:allPalette[item.toLowerCase()][1],background:allPalette[item.toLowerCase()][0]}} size="medium" label={item} />)
                    })
                }
                
                <div id="desc-desc-title">
                <br></br>
                {descWriteUp}
                </div>
                </>
                <ContactMenu/>
            </div>
        </div>
        </div>
        </div>
        </>
    )
}   
export default PortfolioPage