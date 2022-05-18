import { Container } from '@mui/material'
import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import './card.scss'
import { useParams } from 'react-router-dom'
import Episodes from './Episodes'
import img from '../img/lock.jpg'

export default function SinglCardLockal() {
    const [location, setLocation] = useState({
        name: '',
        type: '',
        dimension: '',
        created: '',
        residents: []
    })
    const { locatId } = useParams()

    useEffect(() => {
      axios.get(`https://rickandmortyapi.com/api/location/${locatId}`)
      .then(res=>setLocation({
        name: res.data.name,
        type: res.data.type,
        dimension: res.data.dimension,
        created: res.data.created,
        residents: res.data.residents
      }))
    }, [locatId])
    

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
                    {location.name}
                </h1>
                <div className='single-card_text_descr'>
                    <ul>
                        <li>Type: {location.type}</li>
                        <li>Dimension: {location.dimension}</li>
                        <li>Created: {location.created}</li>
                    </ul>
                    <br />
                    <h2>Residents:</h2>
                    <ul>
                        {location.residents.map((i,index)=>{
                            return <Episodes key={index} epis={i}/>
                        })}
                    </ul>
                </div>
            </div>
        </div>
    </Container>
  )
}
