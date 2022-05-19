import axios from 'axios'
import React from 'react'
import { useEffect, useState } from 'react'
import { Avatar } from '@mui/material'
import { Link } from 'react-router-dom'

export default function Episodes(props) {
    
    const [loadig, setLoadig] = useState(true)
    const [obj, setObj] = useState({
        name: '',
        id: '',
        avatar:''
    })

    useEffect(() => {
      axios.get(props.epis)
      .then(res=>setObj({
          name: res.data.name,
          id: res.data.id,
          avatar: res.data.image  
      }))
      setLoadig(false)
    }, [])
    
    

    if(loadig){
        return <div>loadig...</div>
    }
    return (
        obj.avatar?<li style={{alignItems:'center', display:'flex', justifyContent:'flex-start', gap:'1em'}}> 
                        <Avatar alt={obj.name} src={obj.avatar} />
                        <Link to={`/${props.path}/${obj.id}`}>{obj.name}</Link>
                    </li>:
                    <li><Link to={`/${props.path}/${obj.id}`}> {obj.name}</Link></li>
    )
}
