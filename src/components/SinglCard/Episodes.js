import axios from 'axios'
import React from 'react'
import { useEffect, useState } from 'react'

export default function Episodes(props) {
    
    const [loadig, setLoadig] = useState(true)
    const [name, setName] = useState([])

    useEffect(() => {
      if(props.epis){
          props.epis.map((i)=>{
              axios.get(i).then(res=>setName(name.concat(res.data.name)))
          })
          setLoadig(false)
      }
    }, [props.epis])
    
    

    if(loadig){
        return <div>loadig...</div>
    }
    return (
        <div className="episodes">
            <div>
                <h2>
                    {props.type} 
                </h2>
            </div>
            <div>
                <ul>
                    {Array.from(name).map((i, index)=>{
                        return <li key={index}>{i}</li>
                    })}
                </ul>
            </div>
        </div>
    )
}
