import MainHeader from '../components/header'
import MediaCard from '../components/ProjectMediaCard'
import {useEffect, useState} from 'react'
import {db} from '../firebase/firebase'
import Divider from '@material-ui/core/Divider';
const Projects =()=>{
    const [allCards, setCardData] = useState([])
    useEffect(()=>{
        const getCardData = async()=>{
            const allDocs = await db.collection('all-projects').get()
            console.log(allDocs)
            const allCardData = await Promise.all(
                allDocs.docs.map((item)=>{
                    let key = item.data()
                    return {title:key.title,
                            tags:key.tags, 
                            bannerURI:key['bannerURI'],
                            fullDescription:key["full-description"], 
                            briefDescription:key['brief-description'], 
                            updateCards:key['update-cards'],
                            id:item.id
                        }
                }))
            setCardData(allCardData)
        }
        getCardData()
        
    }, [])
    return (
    <>  
        <title>Joen | Projects</title>
        <MainHeader/>
        <div class="project-title-class">
            <h1>All Projects 👷🏼‍♂️</h1>
            <Divider/>
        </div>
        <br></br>
        <br></br>
        <div class="project-main-container">
            {
                allCards.map((item)=>{
                    return (<MediaCard data={item}/>)
                })
            }
        </div>
    </>  
    )   
}

export default Projects