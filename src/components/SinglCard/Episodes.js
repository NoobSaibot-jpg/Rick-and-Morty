import React from 'react'
import { useEffect, useState } from 'react'

export default function Episodes(props) {
    
    const [loadig, setLoadig] = useState(true)

    useEffect(() => {
      if(props.epis){
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
                    Episodes: 
                </h2>
            </div>
            <div>
                <ul>
                    {props.epis.map((i, index)=>{
                        return <li key={index}>{i}</li>
                    })}
                </ul>
            </div>
        </div>
    )
}
