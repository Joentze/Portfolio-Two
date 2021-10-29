import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import MainHeader from './components/header'
import FillContainer from './components/container'
import {useState} from 'react'
import PortfolioPage from './components/PortfolioPage'
import ReactMarkdown from 'react-markdown'

export default function Home() {
  const [test, setTest] = useState()
  return (
    <div>
      <Head>
        <title>Joen's Portfolio</title>
        <meta name="description" content="Portfolio website of Joen Tan" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Source+Code+Pro&display=swap" rel="stylesheet"></link>
      </Head>
    <MainHeader/>
      <div id='home-dashboard-flex'>
          <div id="home-title-text">
            <PortfolioPage/>
          </div>

          <div id="home-side-container">
            <FillContainer idName="project-card-container"/>
            <div id="title-project-container">
              <div id="project-title-text-container">
                <h1><ReactMarkdown>🛠 **My Projects.**</ReactMarkdown></h1>
                <p style={{fontSize:"14pt", marginTop:"-50px", fontWeight:"300", marginLeft:"5px", lineHeight:"30px"}}>
                  <hr></hr>
                  Design & Technology are two sides of the same coin. On my projects, I strive to create something <mark style={{background:"#ffe3a6"}}>practical, but also beautiful.</mark>
                </p>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
