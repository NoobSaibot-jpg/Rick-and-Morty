import React from 'react'
import axios from 'axios'
import { Button, Container } from '@mui/material';
import img from '../img/ep.jpg'
import CardChar from '../Character/CardChar/CardChar';
import {useState, useEffect} from 'react'
import Loading from '../Loading';

export default function Episodes() {
    const [episodes,setEpisodes] = useState([])
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(true)


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

      setLoading(false)
    }, [page])
    

  if(loading){
    return <Loading/>
  }
  return (
      <Container>
          <div className='episodes'>
            {episodes.map((i)=>{
                return <CardChar key={i.id}
                name={i.name}
                descr={i.air_date}
                img ={img}
                url = {`/epis/${i.id}`}
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
