import MainHeader from './components/header'
import Divider from '@material-ui/core/Divider';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import {useRouter} from 'next/router'
import Chip from '@material-ui/core/Chip';
import ContactForm from './components/Form'

const Contact =({obj})=>{
    const router = useRouter()
    return (
    <>
        <MainHeader></MainHeader>
        <div class="contact-me-container">
            
            <div class="contact-partition contact-header-text">
                <h1 style={{fontSize:"40px"}}>
                    Contact Me
                </h1>
                <Divider/>
            </div>
            <div class="contact-partition">
            <p style={{marginLeft:"10px",color:"grey"}}>Socials:</p>
                <Chip
                label="Joentze01@gmail.com"
                
                icon={<MailOutlineIcon
                style={{color:"rgba(0,0,0,0.5)"}}
                />}
                onClick={()=>{
                    window.open("https://mail.google.com/mail/?view=cm&fs=1&to=joentze01@gmail.com&su=hello&body=BODY")
                }}
                style={{margin:"10px", background:"#ffa29c", color:"rgba(0,0,0,0.5)"}}
                variant="outlined"
                />
                <Chip
                label="Joen Tan"
                
                icon={<LinkedInIcon
                    style={{
                        color:"rgba(0,0,0,0.5)"
                    }}/>}
                onClick={()=>{
                    window.open("https://www.linkedin.com/in/joen-tan-6b57611b9/")
                }}
                style={{margin:"10px",background:"#a8bbff",color:"rgba(0,0,0,0.5)"}}
                variant="outlined"
                />
                <Chip
                label="Joentze"
                variant="outlined"
                icon={<GitHubIcon
                    style={{
                        color:"rgba(0,0,0,0.5)"
                    }}/>}
                onClick={()=>{
                    window.open("https://github.com/Joentze")
                }}
                style={{margin:"10px", background:"#fffa9e", color:"rgba(0,0,0,0.5)"}}
                />
                <Chip
                label="@_joen___"
                variant="outlined"
                icon={<InstagramIcon
                    style={{
                        color:"rgba(0,0,0,0.5)"
                    }}
                />}
                onClick={()=>{
                    window.open("https://instagram.com/_joen___")
                }}
                style={{margin:"10px", background:"#b39eff",color:"rgba(0,0,0,0.5)"}}
                />
            </div>
            <br></br>
            <br></br>
            <div class="contact-partition">
                <h1>Hit me up 🤙🏼</h1>
                <Divider/>
                <ContactForm/>
            </div>
        </div>
    </>
    )   
}

export default Contact