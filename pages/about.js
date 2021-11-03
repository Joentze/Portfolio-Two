import MainHeader from './components/header'
import Divider from '@material-ui/core/Divider';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import MyTimeline from './components/timelineAbout'


const About =({obj})=>{

    return (
        <>
            <MainHeader/>   
            <div class="about-main-container">
                <div class="about-main-align">
                    <div class="about-partition face-icon-section">
                        <div id="about-page-image"></div>
                    </div>
                    <div class="about-partition brief-desc-section">
                        <h1>Hello there 👋🏼 </h1>
                        <Divider/>
                        <ReactMarkdown  plugins={remarkGfm} rehypePlugins={rehypeRaw}>This is my about page write-up</ReactMarkdown>
                    </div>
                    <div class="about-partition experience-section">

                    </div>
                    <div class="about-partition about-me-section">

                    </div>
                    <div class="about-partition timeline-section">
                        <MyTimeline/>                        
                    </div>
                </div>
            </div>
        </>
        )   
}

export default About