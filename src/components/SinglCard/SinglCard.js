import { Container } from '@mui/material'
import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import './card.scss'
import { useParams } from 'react-router-dom'
import Episodes from './Episodes'

export default function SinglCard() {
    const [person, setPerson] = useState({
        species: '',
        image: '',
        name: '',
        status: '',
        gender: '',
        origin: ''
    })
    const {charId} = useParams()

    useEffect(() => {
      axios.get(`https://rickandmortyapi.com/api/character/${charId}`)
      .then(res=>setPerson({
          species: res.data.species,
          image: res.data.image,
          name: res.data.name,
          status: res.data.status,
          gender: res.data.gender,
          origin: res.data.origin.name,
          series: res.data.episode
      }))
    }, [charId])
    

  return (
    <Container>
        <div className="single-card">
            <div className="single-card_img"><img src={person.image} alt="img" /></div>
            <div className="single-card_text">
                <h1 className="single-card_text_tittle">
                    {person.name}
                </h1>
                <div className='single-card_text_descr'>
                    <ul>
                        <li>type: {person.species}</li>
                        <li>status: {person.status}</li>
                        <li>gender: {person.gender}</li>
                        <li>Location: {person.origin}</li>
                    </ul>
                    <Episodes epis={person.series}/>
                </div>
            </div>
        </div>
    </Container>
  )
}
