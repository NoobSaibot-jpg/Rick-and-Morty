import { Container } from '@mui/material'
import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import './card.scss'

export default function SinglCard(props) {
    const [person, setPerson] = useState({})

    useEffect(() => {
      axios.get(`https://rickandmortyapi.com/api/character/${props.id}`)
      .then(res=>setPerson(res.data))
    }, [props.id])
    

  return (
    <Container>
        <div className="single-card">
            <div className="single-card_img"><img src={person.image} alt="img" /></div>
            <div className="single-card_text">
                <h1 className="single-card_text_tittle">
                    {person.name}
                </h1>
                <p className='single-card_text_descr'>
                    <ul>
                        <li>type: {person.type}</li>
                        <li>status: {person.status}</li>
                        <li>gender: {person.gender}</li>
                    </ul>
                </p>
            </div>
        </div>
    </Container>
  )
}
