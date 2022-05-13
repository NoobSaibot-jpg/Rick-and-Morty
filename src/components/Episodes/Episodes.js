import React from 'react'
import axios from 'axios'
import { Button, Container } from '@mui/material';
import img from '../img/ep.jpg'
import CardChar from '../Character/CardChar/CardChar';
import {useState, useEffect} from 'react'

export default function Episodes() {
    const [episodes,setEpisodes] = useState([])
    const [page, setPage] = useState(1)
    const plusPage=()=>{
        if(page===3){
          return setPage(3)
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
      axios.get(`https://rickandmortyapi.com/api/episode?page=${page}`)
      .then(res=>setEpisodes(res.data.results))
    }, [page])
    
  return (
      <Container>
          <div className='episodes'>
            {episodes.map((i)=>{
                return <CardChar key={i.id}
                name={i.name}
                descr={i.air_date}
                img ={img}
                />
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
