import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import CardChar from './CardChar/CardChar'
import { Container, Button } from '@mui/material'
import './character.scss'

export default function Character() {
    const [char, setChar] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    


    const plusPage=()=>{
      if(page===42){
        return setPage(42)
      }
      return setPage(()=>page+1)
    }
    const minusPage=()=>{
      if(page===1){
        return setPage(1)
      }
      return setPage(()=>page-1)
    }
    useEffect(() => {
      axios.get(`https://rickandmortyapi.com/api/character?page=${page}`)
        .then(res=>setChar(res.data.results))
      return () => {
        
        setLoading(false)
      }
    }, [page])
    

    if(loading){
        return <div>Loading...</div>
    }
    return (
      <Container>
        <div className='character'  >
            {char.map((i)=>{
                return(
                    <CardChar key={i.id}
                    name={i.name}
                    img={i.image}
                    descr={i.status}/>
                )
            })}
        </div>
        <div className="btns">
          <Button variant='outlined' onClick={minusPage}>
            Perv Page
          </Button>
          <Button variant='outlined' onClick={plusPage}>Next Page</Button>
        </div>

      </Container>
        
      )
}
