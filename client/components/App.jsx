import React from 'react'


import Nav from './Nav'
import TeamSearch from './TeamSearch'
import TeamSelect from './TeamSelect'
import TypeSelect from './TypeSelect'
import Footer from './Footer'


function App() {
  return (
    <div>
      <div>
        <Nav />
      </div>
      <div>
        <TeamSearch />
        <TypeSelect />
        <TeamSelect />
      </div>
      <Footer />

    </div>
  )
}

export default App
