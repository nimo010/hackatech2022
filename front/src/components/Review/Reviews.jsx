import React from 'react'
import Review from './Review'

export default function Reviews() {
  return (
    <div style={{'display': 'flex','flexDirection' :'column','alignItems': 'center'}}>
        <h1 style={{'fontSize': '2.5rem', 'color':'var(--colorUno)', 'margin': '30px 0'}}>Facultad</h1>
        <h2 style={{'fontSize': '2rem', 'color':'var(--colorUno)'}}>Carrera</h2>
        <Review />
    </div>
  )
}
