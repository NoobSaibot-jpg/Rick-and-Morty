
import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import './error.scss'

export default function Error404() {
  return (
    <div className='error'>
        <h1>404 not found</h1>
        <Link to="/"><Button>Go home</Button></Link>
    </div>

  )
}
