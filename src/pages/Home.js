import { AppBar, Toolbar } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'



export default function Home() {
  return (
    <AppBar position='fixed' >
      <Toolbar>
        <Link to='/test'>
          News
        </Link>
      </Toolbar>
    </AppBar>
  )
}
