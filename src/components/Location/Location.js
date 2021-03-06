import React from 'react'
import axios from 'axios'
import { Button, Container } from '@mui/material';
import img from '../img/lock.jpg'
import CardChar from '../Character/CardChar/CardChar';
import Loading from '../Loading';
import {useState, useEffect} from 'react'

export default function Location() {
    const [episodes,setEpisodes] = useState([])
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(true)
    // localStorage.setItem('page', page)

    const plusPage=()=>{
        if(page==7){
          return setPage(7)
        }
        return setPage(()=>page+1)
      }
      const minusPage=()=>{
        if(page==1){
          return setPage(1)
        }
        return setPage(()=>page-1)
      }

    useEffect(() => {
      axios.get(`https://rickandmortyapi.com/api/location?page=${page}`)
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
                descr={i.type}
                img ={img}
                url = {`/locat/${i.id}`}
                />
            })}
        </div>
        <div className="btns">
                <Button variant='outlined' onClick={minusPage}>
                    Prev Page {+page-1}
                </Button>
                <span>{page}</span>
                <Button variant='outlined' onClick={plusPage}>
                    Next Page {+page+1}
                </Button>
            </div>
      </Container>
    
  )
}
