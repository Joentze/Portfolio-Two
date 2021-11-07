import MainCard from './cards'
import {useEffect, useState} from 'react'
import {db} from '../firebase/firebase'

const FillContainer=({idName})=>{
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
        <div class='fill-container-main' id={idName}>
            {
                allCards.map((item)=>{
                    return (<MainCard
                    cardData={item}
                    />)
                }
                )
            }       
        </div>
        </>
    )
}

export default FillContainer