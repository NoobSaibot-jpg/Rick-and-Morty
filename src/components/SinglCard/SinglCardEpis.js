import { Container } from '@mui/material'
import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import './card.scss'
import { useParams } from 'react-router-dom'
import Episodes from './Episodes'
import img from '../img/ep.jpg'

export default function SinglCardEpis() {
    const [episode, setEpisode] = useState({
        name: '',
        air_date: '',
        episode: '',
        characters: []
    })
    const { episId } = useParams()

    useEffect(() => {
      axios.get(`https://rickandmortyapi.com/api/episode/${episId}`)
      .then(res=>setEpisode({
        name: res.data.name,
        air_date: res.data.air_date,
        episode: res.data.episode,
        characters: res.data.characters
      }))
    }, [episId])
    

  return (
    <Container>
        <div className="single-card">
            <div className="single-card_img">
                <img 
                src={img} 
                alt="img" />
            </div>
            <div className="single-card_text">
                <h1 className="single-card_text_tittle">
                    {episode.name}
                </h1>
                <div className='single-card_text_descr'>
                    <ul>
                        <li>Date: {episode.air_date}</li>
                        <li>Episode: {episode.episode}</li>
                    </ul>
                    <br />
                    <h2>Characters:</h2>
                    <ul>
                        {episode.characters.map((i, index)=>{
                            return <Episodes epis={i} key={index}/>
                        })}
                    </ul>
                </div>
            </div>
        </div>
    </Container>
  )
}
