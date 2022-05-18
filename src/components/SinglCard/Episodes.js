import axios from 'axios'
import React from 'react'
import { useEffect, useState } from 'react'
import { Avatar } from '@mui/material'

export default function Episodes(props) {
    
    const [loadig, setLoadig] = useState(true)
    const [obj, setObj] = useState({
        name: '',
        avatar:''
    })

    useEffect(() => {
      axios.get(props.epis)
      .then(res=>setObj({
          name: res.data.name,
          avatar: res.data.image  
      }))
      setLoadig(false)
    }, [])
    
    

    if(loadig){
        return <div>loadig...</div>
    }
    return (
        obj.avatar?<li style={{alignItems:'center', display:'flex', justifyContent:'flex-start', gap:'1em'}}> <Avatar alt={obj.name} src={obj.avatar} /> {obj.name}</li>:<li> {obj.name}</li>
    )
}
