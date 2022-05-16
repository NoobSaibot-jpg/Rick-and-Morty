import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import CardChar from './CardChar/CardChar'
import { Container, Button, LinearProgress } from '@mui/material'
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
        
        setLoading(false)
    }, [page])
    

    if(loading){
        return <LinearProgress color="success" style={{marginTop:'20%'}}/>
    }
    return (
      <Container>
        <div className='character' >
            {char.map((i)=>{
                return(
                    <CardChar key={i.id}
                    name={i.name}
                    img={i.image}
                    descr={i.status}
                    id = {i.id}
                    charId={i.id}
                    />
                )
            })}
        </div>
        <div className="btns">
          <Button variant='outlined' onClick={minusPage}>
            Prev Page {page-1}
          </Button>
          <span>{page}</span>
          <Button variant='outlined' onClick={plusPage}>
            Next Page {page+1}
          </Button>
        </div>
      </Container>
        
      )
}
